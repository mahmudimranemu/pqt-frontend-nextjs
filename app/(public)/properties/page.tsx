// app/properties/page.tsx
import { Suspense } from "react";
import PropertiesClient from "./PropertiesClient";
import Loading from "@/components/Loading";
import { fetchProperties } from "@/lib/wpapi";
import ListingPageHeader from "@/components/properties/ListingPageHeader";

export default async function PropertiesPage() {
  const properties = await fetchProperties(); // ISR cached

  return (
    <>
      <ListingPageHeader />
      <div className='w-full px-36 mx-auto'>
        <div className='py-10'>
          <h1 className='text-3xl font-bold mb-6'>Find Turkish Properties</h1>
          <p>
            Turkey, with its rich history, vibrant culture, and strategic
            location at the crossroads of Europe and Asia, has emerged as a
            lucrative destination for foreign investors seeking opportunities in
            the real estate sector. In recent years, the Turkish real estate
            market has witnessed a surge in interest from international
            investors, driven by various factors that make the country an
            attractive investment destination. Dive into our website to check
            all the properties for sale.
          </p>
        </div>
        <Suspense fallback={<Loading />}>
          <PropertiesClient initialProperties={properties} />
        </Suspense>
      </div>
    </>
  );
}
