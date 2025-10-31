"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Search } from "lucide-react";

export default function SearchBox() {
  return (
    <div className='absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl bg-white/90 backdrop-blur-md shadow-lg rounded-2xl flex flex-col md:flex-row items-center justify-between p-4 space-y-3 md:space-y-0 md:space-x-4'>
      <Select>
        <SelectTrigger className='w-full md:w-1/3 bg-white text-zinc-900'>
          <SelectValue placeholder='Location' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='istanbul'>Istanbul</SelectItem>
          <SelectItem value='ankara'>Ankara</SelectItem>
          <SelectItem value='izmir'>Izmir</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className='w-full md:w-1/3  bg-white text-zinc-900'>
          <SelectValue placeholder='Type' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='apartment'>Apartment</SelectItem>
          <SelectItem value='villa'>Villa</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className='w-full md:w-1/3  bg-white text-zinc-900'>
          <SelectValue placeholder='Price' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='100k-200k'>$100k - $200k</SelectItem>
          <SelectItem value='200k-500k'>$200k - $500k</SelectItem>
          <SelectItem value='500k+'>$500k+</SelectItem>
        </SelectContent>
      </Select>

      <Button
        size='lg'
        className='bg-red-600 hover:bg-red-700 text-white cursor-pointer'>
        <Search className='mr-2 h-5 w-5' /> Search
      </Button>
    </div>
  );
}
