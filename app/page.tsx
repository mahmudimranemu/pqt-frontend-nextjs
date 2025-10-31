import HeroSlider from "@/components/HeroSlider";
import AboutPQTSection from "@/components/home/AboutPQTSection";
import CitizenshipCTASection from "@/components/home/CitizenshipCTASection";
import { CitySection } from "@/components/home/CitySection";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import DreamHomeCTASection from "@/components/home/DreamHomeCTASection";
import HomeCTAForm from "@/components/home/HomeCTAForm";
import InvestCTASection from "@/components/home/InvestCTASection";
import { LatestNewsSection } from "@/components/home/LatestNewsSection";
import LatestPropertySection from "@/components/home/LatestPropertySection";
import RecomandedPropertiesSection from "@/components/home/RecomandedProperties";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import UniversalSearchForm from "@/components/UniversalSearchForm";
import { fetchProperties } from "@/lib/wpapi";
import { Suspense } from "react";

export default async function Home() {
  const properties = await fetchProperties();
  return (
    <>
      <main>
        {/* Hero section */}
        <section className='relative h-screen w-full justify-center'>
          <HeroSlider />
          <div className='lg:max-w-7xl mx-auto'>
            <Suspense fallback={<div>Loading search form...</div>}>
              <UniversalSearchForm
                initialProperties={properties}
                compact
              />
            </Suspense>
          </div>
        </section>

        {/* Direct CTA form section */}
        <HomeCTAForm />

        {/* Recommended properties section */}
        <RecomandedPropertiesSection />

        <CitizenshipCTASection />

        <DreamHomeCTASection />
        <AboutPQTSection />
        <TestimonialsSection />
        <InvestCTASection />
        <CitySection />
        <LatestPropertySection />
        <LatestNewsSection />
        <ContactCTASection />
      </main>
    </>
  );
}
