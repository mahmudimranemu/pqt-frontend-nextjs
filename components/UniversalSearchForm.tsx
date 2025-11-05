// components/UniversalSearchForm.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Property } from "@/types/property";

interface Props {
  initialProperties: Property[];
  compact?: boolean; // optional: smaller version
}

export default function UniversalSearchForm({
  initialProperties,
  compact = false,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [properties] = useState(initialProperties);
  const [isLoading, setIsLoading] = useState(false);

  // Local state
  const [location, setLocation] = useState(
    searchParams.get("location[]") || ""
  );
  const [type, setType] = useState(searchParams.get("type[]") || "");
  const [bedrooms, setBedrooms] = useState(searchParams.get("bedrooms") || "");
  const [minPrice, setMinPrice] = useState(searchParams.get("min-price") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("max-price") || "");

  // Sync URL → state
  useEffect(() => {
    setLocation(searchParams.get("location[]") || "");
    setType(searchParams.get("type[]") || "");
    setBedrooms(searchParams.get("bedrooms") || "");
    setMinPrice(searchParams.get("min-price") || "");
    setMaxPrice(searchParams.get("max-price") || "");
  }, [searchParams]);

  const locations: string[] = Array.from(
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
    if (location) params.append("location[]", location);
    if (type) params.append("type[]", type);
    if (bedrooms) params.set("bedrooms", bedrooms);
    if (minPrice) params.set("min-price", minPrice);
    if (maxPrice) params.set("max-price", maxPrice);

    // Always go to /search
    router.push(`/search/?${params.toString()}`);
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

  if (compact) {
    return (
      <div className='absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] max-w-2xl bg-white/90 backdrop-blur-md shadow-lg rounded-2xl flex flex-col md:flex-row items-center justify-between p-4 space-y-3 md:space-y-0 md:space-x-4'>
        <form
          onSubmit={handleSearch}
          className='flex flex-col lg:flex-row gap-2 mx-auto'>
          <div className='flex gap-2'>
            <div className='bg-white rounded-lg'>
              <Select
                value={location}
                onValueChange={setLocation}>
                <SelectTrigger className='lg:px-8 py-6 text-lg'>
                  <SelectValue placeholder='Location' />
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
            <div className='bg-white rounded-lg'>
              <Select
                value={bedrooms}
                onValueChange={setBedrooms}>
                <SelectTrigger className='lg:px-8 py-6 text-lg'>
                  <SelectValue placeholder='Beds' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='1'>1</SelectItem>
                  <SelectItem value='2'>2</SelectItem>
                  <SelectItem value='3'>3</SelectItem>
                  <SelectItem value='4'>4+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='bg-white rounded-lg'>
              <Select
                value={minPrice}
                onValueChange={setMinPrice}>
                <SelectTrigger className='lg:px-8 py-6 text-lg'>
                  <SelectValue placeholder='Min Price' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='0'>$0k</SelectItem>
                  <SelectItem value='50000'>$50k</SelectItem>
                  <SelectItem value='100000'>$100k</SelectItem>
                  <SelectItem value='150000'>$150k</SelectItem>
                  <SelectItem value='200000'>$200k</SelectItem>
                  <SelectItem value='250000'>$250k</SelectItem>
                  <SelectItem value='300000'>$300k</SelectItem>
                  <SelectItem value='400000'>$400k</SelectItem>
                  <SelectItem value='500000'>$500k</SelectItem>
                  <SelectItem value='600000'>$600k</SelectItem>
                  <SelectItem value='700000'>$700k</SelectItem>
                  <SelectItem value='1000000'>$1000k</SelectItem>
                  <SelectItem value='1500000'>$1500k</SelectItem>
                  <SelectItem value='2000000'>$2000k</SelectItem>
                  <SelectItem value='5000000'>$5000k</SelectItem>
                </SelectContent>
              </Select>
              {/* <Input
            type='number'
            placeholder='Min Price'
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          /> */}
            </div>
          </div>

          <div>
            <Button
              type='submit'
              size='sm'
              className='lg:flex-1 w-full py-6 px-8 text-lg cursor-pointer'
              disabled={isLoading}>
              Search
            </Button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSearch}
      className='bg-zinc-200 py-5 px-36 shadow-md flex w-full justify-center gap-4'>
      <div className='flex gap-4 justify-center items-center'>
        <div className='bg-white rounded-lg'>
          <Select
            value={location}
            onValueChange={setLocation}>
            <SelectTrigger className='px-8 py-6 text-lg'>
              <SelectValue placeholder='Location' />
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

        <div className='bg-white rounded-lg'>
          <Select
            value={type}
            onValueChange={setType}>
            <SelectTrigger className='px-8 py-6 text-lg'>
              <SelectValue placeholder='Type' />
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

        <div className='bg-white rounded-lg'>
          <Select
            value={bedrooms}
            onValueChange={setBedrooms}>
            <SelectTrigger className='px-8 py-6 text-lg'>
              <SelectValue placeholder='Beds' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='1'>1</SelectItem>
              <SelectItem value='2'>2</SelectItem>
              <SelectItem value='3'>3</SelectItem>
              <SelectItem value='4'>4+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='bg-white rounded-lg'>
          <Select
            value={minPrice}
            onValueChange={setMinPrice}>
            <SelectTrigger className='px-8 py-6 text-lg'>
              <SelectValue placeholder='Min Price' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='0'>$0k</SelectItem>
              <SelectItem value='50000'>$50k</SelectItem>
              <SelectItem value='100000'>$100k</SelectItem>
              <SelectItem value='150000'>$150k</SelectItem>
              <SelectItem value='200000'>$200k</SelectItem>
              <SelectItem value='250000'>$250k</SelectItem>
              <SelectItem value='300000'>$300k</SelectItem>
              <SelectItem value='400000'>$400k</SelectItem>
              <SelectItem value='500000'>$500k</SelectItem>
              <SelectItem value='600000'>$600k</SelectItem>
              <SelectItem value='700000'>$700k</SelectItem>
              <SelectItem value='1000000'>$1000k</SelectItem>
              <SelectItem value='1500000'>$1500k</SelectItem>
              <SelectItem value='2000000'>$2000k</SelectItem>
              <SelectItem value='5000000'>$5000k</SelectItem>
            </SelectContent>
          </Select>
          {/* <Input
            type='number'
            placeholder='Min Price'
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          /> */}
        </div>

        <div className='bg-white rounded-lg'>
          <Select
            value={maxPrice}
            onValueChange={setMaxPrice}>
            <SelectTrigger className='px-8 py-6 text-lg'>
              <SelectValue placeholder='Max Price' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='50000'>$50k</SelectItem>
              <SelectItem value='100000'>$100k</SelectItem>
              <SelectItem value='150000'>$150k</SelectItem>
              <SelectItem value='200000'>$200k</SelectItem>
              <SelectItem value='250000'>$250k</SelectItem>
              <SelectItem value='300000'>$300k</SelectItem>
              <SelectItem value='400000'>$400k</SelectItem>
              <SelectItem value='500000'>$500k</SelectItem>
              <SelectItem value='600000'>$600k</SelectItem>
              <SelectItem value='700000'>$700k</SelectItem>
              <SelectItem value='1000000'>$1000k</SelectItem>
              <SelectItem value='1500000'>$1500k</SelectItem>
              <SelectItem value='2000000'>$2000k</SelectItem>
              <SelectItem value='5000000'>$5000k</SelectItem>
            </SelectContent>
          </Select>
          {/* <Input
            type='number'
            placeholder='Max Price'
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          /> */}
        </div>
        <Button
          type='submit'
          className='flex-1 py-6 px-8 text-lg cursor-pointer'
          disabled={isLoading}>
          {isLoading ? "Searching..." : "Search"}
        </Button>

        <Button
          className='flex-1 py-6 px-8 text-lg cursor-pointer bg-transparent shadow-none p-0 hover:bg-transparent hover:shadow-none hover:underline text-zinc-400 hover:text-zinc-600'
          type='button'
          variant='outline'
          onClick={clearSearch}>
          Clear
        </Button>
      </div>
    </form>
  );
}
