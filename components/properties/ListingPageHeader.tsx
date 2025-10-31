import { Suspense } from "react";
import UniversalSearchForm from "../UniversalSearchForm";
import { fetchProperties } from "@/lib/wpapi";

export default async function ListingPageHeader() {
  const properties = await fetchProperties();
  return (
    <header
      style={{
        backgroundImage: `url('/images/slide1.jpg')`,
      }}
      className='w-full h-[30vh] bg-cover bg-center items-end flex justify-center relative overflow-hidden'>
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/80'></div>
      <div className='w-full z-10'>
        <Suspense fallback={<div>Loading search form...</div>}>
          <UniversalSearchForm initialProperties={properties} />
        </Suspense>
      </div>
    </header>
  );
}
