"use client";

import {
  ArrowRightIcon,
  Award,
  BadgePercent,
  Building2,
  UserStar,
} from "lucide-react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import Link from "next/link";

const featureCards = [
  {
    icon: <BadgePercent size={32} />,
    title: "Best prices",
    description:
      "Lorem ipsum dolor sit amet dolor sit dolor siet consectetur dolorsel adipiscing eli mattis sit.",
  },
  {
    icon: <Award size={32} />,
    title: "Client satisfaction",
    description:
      "Lorem ipsum dolor sit amet dolor sit dolor siet consectetur dolorsel adipiscing eli mattis sit.",
  },
  {
    icon: <Building2 />,
    title: "Huge portfolio",
    description:
      "Lorem ipsum dolor sit amet dolor sit dolor siet consectetur dolorsel adipiscing eli mattis sit.",
  },
  {
    icon: <UserStar size={32} />,
    title: "Experienced team",
    description:
      "Lorem ipsum dolor sit amet dolor sit dolor siet consectetur dolorsel adipiscing eli mattis sit.",
  },
];

export default function AboutPQTSection() {
  return (
    <section className='flex flex-col items-center gap-12 px-4 md:px-8 lg:px-[167px] py-20 md:py-32 lg:py-40 w-full bg-white'>
      <div className='flex flex-col items-center gap-8 max-w-[1106px] w-full'>
        <div className='flex flex-col items-center gap-6'>
          <div className='flex flex-col items-center gap-3.5'>
            <h1 className="max-w-[430px] font-extrabold text-dark-red text-4xl text-center tracking-[-1.08px] leading-9 [font-family:'Inter',Helvetica]">
              Property Quest Turkey
            </h1>

            <h2 className="max-w-[430px] [font-family:'Playfair_Display'] font-normal text-center leading-9 text-dark-red text-4xl tracking-[-1.08px]">
              for Lifestyle &amp; Investment
            </h2>
          </div>

          <p className="max-w-[618px] text-neutral-700 text-base text-center leading-6 [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            Turkish Citizenship is an advantageous option for those looking to
            invest $400K or more in Turkey. Rather investing or buying your
            dream home along Turkey&apos;s Turquoise Coast, the Citizenship by
            Investment program allows you the flexibility to build your life as
            a Turkish Citizen. Additionally, you can take advantage of the
            countries medical and education services all for free as a Turkish
            Citizen. Contact us today to find out how you can be apart of
            Turkey&apos;s future.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[22px] w-full'>
          {featureCards.map((card, index) => (
            <Card
              key={index}
              className='flex flex-col border-0 shadow-none bg-transparent'>
              <CardContent className='flex flex-col items-start gap-3 p-0'>
                <div className='w-full h-[174px] bg-zinc-100 rounded-lg overflow-hidden flex items-center justify-center'>
                  {card.icon}
                </div>

                <h3 className=' text-dark-red font-extrabold'>{card.title}</h3>

                <CardDescription>{card.description}</CardDescription>

                <Link
                  href='#'
                  className='inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-0 p-0'>
                  <span className='font-extrabold text-secondary'>
                    Learn more
                  </span>
                  <ArrowRightIcon className='w-[15px] h-[15px] text-secondary' />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
