"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import PropertyCard from "@/components/properties/PropertyCard";
import SortSelect from "@/components/SortSelect";
import { Property } from "@/types/property";

const PER_PAGE = 12;

export default function PropertiesClient({
  initialProperties,
}: {
  initialProperties: Property[];
}) {
  const [properties] = useState(initialProperties);
  const [displayed, setDisplayed] = useState<Property[]>([]);
  const [sort, setSort] = useState("default");
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Safe parsers
  const getPrice = (e: Property["property_meta"]) => {
    const v = e?.fave_property_price;
    return typeof v === "string"
      ? parseFloat(v.replace(/[^0-9.]/g, "")) || 0
      : 0;
  };
  const getBedrooms = (e: Property["property_meta"]) => {
    const v = e?.fave_property_bedrooms;
    return typeof v === "string" ? parseInt(v, 10) || 0 : 0;
  };

  // Sort with useCallback to prevent re-creation
  const sorted = useCallback(() => {
    const copy = [...properties];
    if (sort === "default") return copy;
    copy.sort((a, b) => {
      switch (sort) {
        case "price_asc":
          return getPrice(a.property_meta) - getPrice(b.property_meta);
        case "price_desc":
          return getPrice(b.property_meta) - getPrice(a.property_meta);
        case "bedrooms_asc":
          return getBedrooms(a.property_meta) - getBedrooms(b.property_meta);
        case "bedrooms_desc":
          return getBedrooms(b.property_meta) - getBedrooms(a.property_meta);
        case "date_desc":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        default:
          return 0;
      }
    });
    return copy;
  }, [properties, sort]);

  // Load initial
  useEffect(() => {
    setDisplayed(sorted().slice(0, PER_PAGE));
  }, [sorted]);

  // Infinite scroll
  useEffect(() => {
    if (displayed.length >= sorted().length) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDisplayed((prev) => sorted().slice(0, prev.length + PER_PAGE));
        }
      },
      { rootMargin: "300px" }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
    return () => observer.disconnect();
  }, [displayed.length, sorted]);

  return (
    <>
      <div className='flex justify-between items-center mb-6'>
        <p className='text-sm text-muted-foreground mb-6'>
          Showing {displayed.length} of {sorted().length} properties
        </p>
        <SortSelect
          value={sort}
          onChange={setSort}
        />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {displayed.map((p) => (
          <PropertyCard
            key={p.id}
            property={p}
          />
        ))}
      </div>

      {displayed.length < sorted().length && (
        <div
          ref={loadMoreRef}
          className='py-12 text-center'>
          <div className='inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500' />
        </div>
      )}
    </>
  );
}
