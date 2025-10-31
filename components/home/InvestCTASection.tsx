import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Link from "next/link";

export default function InvestCTASection() {
  return (
    <section className='py-20 flex justify-center items-center'>
      <div className='w-7xl flex'>
        <div className='w-1/5'></div>
        <div className='relative w-4/5 h-[520] p-6 bg-[url("/images/img2.jpg")] bg-cover bg-center rounded-lg'>
          <Card className='w-xl p-8 py-8 absolute -left-1/4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg'>
            <CardHeader className='gap-0'>
              <h2 className='font-extrabold text-[40px] tracking-tight leading-tight text-red-800'>
                Invest in Türkiye,
                <br /> Secure Your Future
              </h2>
            </CardHeader>
            <CardContent>
              <p>
                From affordable apartments to high-value projects, we help you
                make smart property investments.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href='/invest'
                passHref>
                <Button
                  asChild
                  className='bg-red-600 text-white'>
                  <span>
                    Learn more <ArrowRight />
                  </span>
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
