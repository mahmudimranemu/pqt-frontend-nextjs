// components/SearchResults.tsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import PropertyCard from "@/components/properties/PropertyCard";
import { Property } from "@/types/property";
import { SkeletonGrid } from "@/components/SkeletonGrid";

interface Props {
  initialProperties: Property[];
}

export default function SearchResults({ initialProperties }: Props) {
  const searchParams = useSearchParams();
  const [properties] = useState(initialProperties);
  const [filtered, setFiltered] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  // SAFE PRICE PARSING
  const getPrice = (meta: Property["property_meta"]): number => {
    const val = meta?.fave_property_price;
    if (typeof val !== "string") return 0;
    return parseFloat(val.replace(/[^0-9.]/g, "")) || 0;
  };

  useEffect(() => {
    setLoading(true);

    const location = searchParams.get("location") || "";
    const type = searchParams.get("type") || "";
    const bedrooms = searchParams.get("bedrooms") || "";
    const minPrice = parseFloat(searchParams.get("minPrice") || "0") || 0;
    const maxPrice =
      parseFloat(searchParams.get("maxPrice") || "999999999") || 999999999;

    const results = properties.filter((p) => {
      // Location
      if (location && p.property_city !== location) return false;

      // Type
      if (type && p.property_meta?.fave_property_type !== type) return false;

      // Bedrooms
      if (bedrooms) {
        const beds =
          parseInt(p.property_meta?.fave_property_bedrooms || "0") || 0;
        if (bedrooms !== "4+" && beds.toString() !== bedrooms) return false;
        if (bedrooms === "4+" && beds < 4) return false;
      }

      // Price — SAFE
      const price = getPrice(p.property_meta);
      if (price < minPrice || price > maxPrice) return false;

      return true;
    });

    setFiltered(results);
    setLoading(false);
  }, [searchParams, properties]);

  const total = filtered.length;
  const showing =
    total === 0 ? "No properties found" : `${total} properties found`;

  return (
    <>
      <div className='flex justify-between items-center mb-8'>
        <h2 className='text-2xl font-bold'>{showing}</h2>
      </div>

      {loading ? (
        <SkeletonGrid />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {filtered.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      )}
    </>
  );
}
