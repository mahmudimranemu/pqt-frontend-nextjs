"use client";

import { useState } from "react";
import { CircleDollarSign, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Buy Real Estate", href: "/properties" },
  { label: "Turkish Citizenship", href: "/turkishcitizenship" },
  { label: "Buyer Guide", href: "/buyerguide" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className='fixed top-10 left-0 px-6 lg:p-0 z-50 w-full'>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-3 bg-white/68 backdrop-blur-md border-b border-gray-100/70 rounded-full shadow-2xl'>
        <Link href='/'>
          <Image
            src='/PQT_logo.svg'
            alt='Property Quest Logo'
            width={96}
            height={34}
          />
        </Link>
        <div className='hidden md:flex items-center space-x-6 text-zinc-900'>
          {menuItems.map((menu, index) => (
            <Link
              key={index}
              href={menu.href}
              className='hover:text-red-800'>
              {menu.label}
            </Link>
          ))}
        </div>
        <div className='hidden md:flex items-center space-x-4 text-zinc-900'>
          <Link href='/search'>
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
            {menuItems.map((menu, index) => (
              <Link
                key={index}
                href={menu.href}>
                {menu.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
