"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const options = [
  { v: "default", l: "Default" },
  { v: "price_asc", l: "Price: Low to High" },
  { v: "price_desc", l: "Price: High to Low" },
  { v: "bedrooms_asc", l: "Bedrooms: Low to High" },
  { v: "bedrooms_desc", l: "Bedrooms: High to Low" },
  { v: "date_desc", l: "Newest First" },
] as const;

export default function SortSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <Select
      value={value}
      onValueChange={onChange}>
      <SelectTrigger className='w-[200px]'>
        <SelectValue placeholder='Sort by...' />
      </SelectTrigger>
      <SelectContent>
        {options.map((o) => (
          <SelectItem
            key={o.v}
            value={o.v}>
            {o.l}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
