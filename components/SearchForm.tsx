// components/SearchForm.tsx
"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Property } from "@/types/property";

interface Props {
  initialProperties: Property[];
}

export default function SearchForm({ initialProperties }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [properties] = useState(initialProperties);
  const [isLoading, setIsLoading] = useState(false);

  // LOCAL STATE FOR INPUTS
  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [type, setType] = useState(searchParams.get("type") || "");
  const [bedrooms, setBedrooms] = useState(searchParams.get("bedrooms") || "");
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");

  // Update local state when URL changes
  useEffect(() => {
    setLocation(searchParams.get("location") || "");
    setType(searchParams.get("type") || "");
    setBedrooms(searchParams.get("bedrooms") || "");
    setMinPrice(searchParams.get("minPrice") || "");
    setMaxPrice(searchParams.get("maxPrice") || "");
  }, [searchParams]);

  const locations = Array.from(
    new Set(
      properties
        .map((p) => p.property_city)
        .filter((city): city is string => typeof city === "string")
    )
  ).sort();
  const types = Array.from(
    new Set(
      properties.map((p) => p.property_meta?.fave_property_type || "Apartment")
    )
  ).sort();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (type) params.set("type", type);
    if (bedrooms) params.set("bedrooms", bedrooms);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);

    router.push(`/search?${params.toString()}`);
    setIsLoading(false);
  };

  const clearSearch = () => {
    setLocation("");
    setType("");
    setBedrooms("");
    setMinPrice("");
    setMaxPrice("");
    router.push("/search");
  };

  return (
    <form
      onSubmit={handleSearch}
      className='bg-white p-8 rounded-2xl shadow-xl mb-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
        <div>
          <label className='block text-sm font-medium mb-2'>Location</label>
          <Select
            value={location}
            onValueChange={setLocation}>
            <SelectTrigger>
              <SelectValue placeholder='Any location' />
            </SelectTrigger>
            <SelectContent>
              {locations.map((city) => (
                <SelectItem
                  key={city}
                  value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className='block text-sm font-medium mb-2'>Type</label>
          <Select
            value={type}
            onValueChange={setType}>
            <SelectTrigger>
              <SelectValue placeholder='Any type' />
            </SelectTrigger>
            <SelectContent>
              {types.map((t) => (
                <SelectItem
                  key={t}
                  value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className='block text-sm font-medium mb-2'>Bedrooms</label>
          <Select
            value={bedrooms}
            onValueChange={setBedrooms}>
            <SelectTrigger>
              <SelectValue placeholder='Any' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='1'>1</SelectItem>
              <SelectItem value='2'>2</SelectItem>
              <SelectItem value='3'>3</SelectItem>
              <SelectItem value='4+'>4+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className='block text-sm font-medium mb-2'>Min Price</label>
          <Input
            type='number'
            placeholder='0'
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className='h-10'
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-2'>Max Price</label>
          <Input
            type='number'
            placeholder='No limit'
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className='h-10'
          />
        </div>
      </div>

      <div className='flex flex-col sm:flex-row gap-4 mt-8'>
        <Button
          type='submit'
          className='flex-1'
          disabled={isLoading}>
          {isLoading ? "Searching..." : "Search Properties"}
        </Button>
        <Button
          type='button'
          variant='outline'
          onClick={clearSearch}>
          Clear All
        </Button>
      </div>
    </form>
  );
}
