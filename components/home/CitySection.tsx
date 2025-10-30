"use client";

import { ArrowRightIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const cities = [
  {
    name: "Istanbul",
    description:
      "Where culture meets business, offering luxury living and endless opportunities.",
    image: "/images/istanbul.jpg",
    link: "Explore Istanbul",
    size: "large",
  },
  {
    name: "Antalya",
    description:
      "Sunny beaches, resorts, and a relaxed lifestyle with high rental returns.",
    image: "/images/antalya.jpg",
    link: "Explore Antalya",
    size: "small",
  },
  {
    name: "Ankara",
    description:
      "The capital city with affordable housing and modern living for families.",
    image: "/images/ankara.jpg",
    link: "Explore Ankara",
    size: "small",
  },
  {
    name: "Izmir",
    description:
      "A coastal city with a laid-back vibe, modern life, and rising investments.",
    image: "/images/izmir.jpg",
    link: "Explore Izmir",
    size: "small",
  },
];

export function CitySection() {
  const largeCityCard = cities[0];
  const smallCityCards = cities.slice(1);

  return (
    <section className='flex flex-col w-full max-w-[1080px] mx-auto items-center justify-center gap-[30px] px-0 py-20'>
      <div className='flex items-center justify-between w-full gap-[22px]'>
        <Card
          className='w-[540px] h-[440px] p-0 rounded-lg overflow-hidden border-0 shadow-none cursor-pointer hover:opacity-90 transition-opacity'
          style={{
            backgroundImage: `url(${largeCityCard.image})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
          }}>
          <CardContent className='flex gap-2.5 w-full h-full rounded-lg overflow-hidden bg-[linear-gradient(180deg,rgba(7,11,27,0)_0%,rgba(7,11,27,1)_100%)] flex-col justify-end p-0'>
            <div className='flex flex-col items-start w-full px-10 pb-14 pt-0'>
              <h3 className='font-extrabold text-2xl tracking-tighter text-white'>
                {largeCityCard.name}
              </h3>

              <p className='text-white text-sm'>{largeCityCard.description}</p>

              <Link
                href='#'
                className='inline-flex items-center gap-1.5 mt-4 text-white'>
                <span className='font-medium'>{largeCityCard.link}</span>
                <ArrowRightIcon className='w-[15px] h-[15px] text-white' />
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className='inline-flex flex-col items-center gap-6'>
          <h2 className="w-fit font-normal text-4xl text-center leading-9 mt-[-1.00px] [font-family:'Inter',Helvetica]">
            <span className='font-extrabold text-[#8c0008] tracking-tighter leading-10'>
              Discover the Best Cities
              <br />
            </span>
            <span className="[font-family:'Playfair_Display',Helvetica] font-extrabold text-[#8c0008] tracking-[-0.39px] leading-10">
              to Live &amp; Invest in Turkey
            </span>
          </h2>

          <p className='w-[500px] text-neutral-700 text-[length:var(--paragraph-medium-regular-font-size)] text-center leading-[var(--paragraph-medium-regular-line-height)] font-paragraph-medium-regular font-[number:var(--paragraph-medium-regular-font-weight)] tracking-[var(--paragraph-medium-regular-letter-spacing)] [font-style:var(--paragraph-medium-regular-font-style)]'>
            Each city offers a unique blend of culture, lifestyle, and
            opportunities. Explore and choose the one that feels like home.
          </p>
        </div>
      </div>

      <div className='flex items-center justify-between w-full gap-[30px]'>
        {smallCityCards.map((city, index) => (
          <Card
            key={index}
            className='w-[340px] h-[440px] p-0 rounded-lg overflow-hidden border-0 shadow-none cursor-pointer hover:opacity-90 transition-opacity'
            style={{
              backgroundImage: `url(${city.image})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
            }}>
            <CardContent className='flex gap-2.5 h-full w-full rounded-lg overflow-hidden bg-[linear-gradient(180deg,rgba(7,11,27,0)_0%,rgba(7,11,27,1)_100%)] flex-col justify-end p-0'>
              <div className='flex flex-col items-start w-full px-10 pb-14 pt-0'>
                <h3 className='font-extrabold text-2xl tracking-tighter text-white'>
                  {city.name}
                </h3>

                <p className='text-white text-sm'>{city.description}</p>

                <div className='inline-flex items-center gap-1.5 mt-4'>
                  <Link
                    href='#'
                    className='inline-flex items-center gap-1.5 mt-4 text-white'>
                    <span className='font-medium'>{city.link}</span>
                    <ArrowRightIcon className='w-[15px] h-[15px] text-white' />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
