"use client";

import { useState } from "react";
import { CircleDollarSign, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className='fixed top-10 left-0 z-50 w-full'>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-3 bg-white/68 backdrop-blur-md border-b border-gray-100/70 rounded-full shadow-2xl'>
        <Image
          src='/PQT_logo.svg'
          alt='Property Quest Logo'
          width={96}
          height={34}
        />
        <div className='hidden md:flex items-center space-x-6 text-zinc-900'>
          <Link href='/'>Home</Link>
          <Link href='/buy-real-estate'>Buy Real Estate</Link>
          <Link href='/turkish-citizenship'>Turkish Citizenship</Link>
          <Link href='/buyer-guide'>Buyer Guide</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>
        </div>
        <div className='hidden md:flex items-center space-x-4 text-zinc-900'>
          <Link href='/'>
            <Search />
          </Link>
          <Link href='/'>Login</Link>
          <Link href='/'>Register</Link>
          <Link href='/'>
            <CircleDollarSign />
          </Link>
        </div>

        {/* Mobile menu */}
        <button
          className='md:hidden'
          onClick={() => setOpen(!open)}
          aria-label='Toggle Menu'>
          {open ? <X /> : <Menu />}
        </button>

        {open && (
          <div className='absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 space-y-3 md:hidden'>
            <Link href='/'>Home</Link>
            <Link href='/buy-real-estate'>Buy Real Estate</Link>
            <Link href='/turkish-citizenship'>Turkish Citizenship</Link>
            <Link href='/buyer-guide'>Buyer Guide</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
