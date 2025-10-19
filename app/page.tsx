import HeroSlider from "@/components/HeroSlider";
import CitizenshipCTASection from "@/components/home/CitizenshipCTASection";
import HomeCTAForm from "@/components/home/HomeCTAForm";
import RecomandedPropertiesSection from "@/components/home/RecomandedProperties";
import Navbar from "@/components/navbar";

import SearchBox from "@/components/SearchBox";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero section */}
        <section className='relative h-screen w-full'>
          <HeroSlider />
          <SearchBox />
        </section>

        {/* Direct CTA form section */}
        <HomeCTAForm />

        {/* Recommended properties section */}
        <RecomandedPropertiesSection />

        <CitizenshipCTASection />
      </main>
    </>
  );
}
