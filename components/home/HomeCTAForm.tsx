"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ChevronDownIcon, Search } from "lucide-react";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import PhoneNumberInput from "../PhoneNumberInput";

export default function HomeCTAForm() {
  return (
    <section className='w-full py-10 bg-zinc-300 flex items-center justify-center'>
      <div className='w-7xl flex flex-col md:flex-row items-center justify-between p-4 space-y-3 md:space-y-0 md:space-x-4'>
        <p className='text-zinc-900 font-bold uppercase'>Contact with us</p>
        <Input
          type='text'
          placeholder='Enter your name'
          className='bg-white rounded-md h-12 text-zinc-900 shadow-md'
        />
        <div className='bg-white py-1.5 px-3  h-12 flex items-center rounded-md w-full md:w-auto text-zinc-900 shadow-md'>
          <PhoneNumberInput />
        </div>

        <Input
          type='email'
          placeholder='Enter your email'
          className='bg-white h-12 text-zinc-900 shadow-md'
        />

        <Button
          size='lg'
          className='bg-red-600 hover:bg-red-700 text-white h-12 cursor-pointer'>
          Contact
        </Button>
      </div>
    </section>
  );
}
