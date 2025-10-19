import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";

export default function CitizenshipCTASection() {
  return (
    <section className='py-20 flex justify-center items-center'>
      <div className='w-7xl flex '>
        <div className='relative w-4/5 h-[420] p-6 bg-[url("/images/turkey-flag.jpg")] bg-cover bg-center rounded-lg'>
          <Card className='w-xl p-8 py-8 absolute -right-1/4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg'>
            <CardHeader className='gap-0'>
              <h2 className='font-extrabold text-[40px] tracking-tight leading-tight text-red-800'>
                Turkish Citizenship
              </h2>
              <h3 className='font-medium text-4xl tracking-tight font-[playfair-display] text-red-800'>
                by Investment Programme
              </h3>
            </CardHeader>
            <CardContent>
              <p>
                A minimum investment of $400,000 in residential or commercial
                property is required to apply for Turkish citizenship by
                investment. In this programme, your spouse and your children
                under the age of 18 are also eligible for Turkish citizenship.
                Let us help you find your future in Turkey.
              </p>
            </CardContent>
            <CardFooter>
              <Button className='bg-red-600 text-white'>
                Learn more <ArrowRight />
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className='w-1/5'></div>
      </div>
    </section>
  );
}
