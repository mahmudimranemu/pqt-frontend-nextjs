// app/property/[slug]/page.tsx
import { notFound } from "next/navigation";
import { fetchPropertyBySlug } from "@/lib/wpapi";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  ArrowRight,
  Bath,
  Bed,
  Building,
  Heart,
  Info,
  MapPin,
  Newspaper,
  RulerDimensionLine,
  Share,
  Sliders,
} from "lucide-react";
import Link from "next/link";
import PropertyImageSlider from "@/components/properties/property/PropertyImageSlider";
import FullContactForm from "../../contact/ContactForm";

interface Props {
  params: { slug: string };
}

export const revalidate = 3600;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const p = await fetchPropertyBySlug(params.slug);
    return {
      title: `${p.title.rendered} – ${p.property_city}`,
      description: `Property in ${p.property_city}. ${
        p.property_meta?.fave_property_bedrooms || ""
      } bedrooms.`,
    };
  } catch {
    return { title: "Not Found" };
  }
}

export default async function PropertyPage({ params }: Props) {
  let property;
  try {
    property = await fetchPropertyBySlug(params.slug);
  } catch {
    notFound();
  }

  // --- GET GALLERY FROM fave_property_images ---
  const galleryIds: string[] =
    property.property_meta?.fave_property_images || [];

  let galleryUrls: string[] = [];

  if (galleryIds.length > 0) {
    const ids = galleryIds.map((id) => id.trim()).join(",");
    const res = await fetch(
      `https://propertyquestturkey.com/wp-json/wp/v2/media?include=${ids}&per_page=100`
    );
    if (res.ok) {
      const media: { source_url: string }[] = await res.json();
      galleryUrls = media.map((m) => m.source_url).filter(Boolean);
    }
  }

  // --- FALLBACK ---
  if (galleryUrls.length === 0) {
    galleryUrls = ["/placeholder-gallery.jpg"]; // put in public/
  }

  const whyBuyProperty = property.property_meta?.why_buy_this_property || "";
  const overview = property.property_meta?.overview || "";
  const locationFacilities =
    property.property_meta?.location_facilities_details || "";
  const projectFacilities =
    property.property_meta?.project_facilities_details || "";

  return (
    <>
      {/* GALLERY GRID */}

      <div className='w-full'>
        <PropertyImageSlider images={galleryUrls} />
      </div>

      {/* PROPERTY INFO */}
      <div className='max-w-7xl flex flex-col mx-auto px-4 py-6 sm:px-6 lg:px-8'>
        <div className='flex gap-6'>
          <main className='lg:w-4/6'>
            <div className='flex flex-col gap-6'>
              <h1 className='font-extrabold text-dark-blue lg:text-4xl text-3xl tracking-[-1.08px] leading-8'>
                {property.title.rendered}
              </h1>
              <div className='flex justify-between'>
                <div className='flex flex-col lg:flex-row gap-1 lg:gap-6'>
                  <p className='text-text text-2xl'>
                    Price:
                    <span className='text-primary font-bold'>
                      $
                      {property.property_meta?.fave_property_price || "Contact"}
                    </span>
                  </p>
                  <p className='text-text lg:text-2xl'>
                    Ref:
                    <span className='text-secondary font-normal'>PQTR1085</span>
                  </p>
                </div>

                <div className='flex gap-2'>
                  <Button className='bg-white border hover:text-primary hover:bg-white hover:shadow cursor-pointer text-text'>
                    <Share />
                  </Button>
                  <Button className='bg-white border hover:text-primary hover:bg-white hover:shadow cursor-pointer text-text'>
                    <Heart />
                  </Button>
                </div>
              </div>
              <div className='flex flex-col gap-7'>
                <Card className='w-full'>
                  <CardHeader className='flex items-center text-dark-blue'>
                    <Sliders />{" "}
                    <h2 className='lg:text-2xl text-xl font-semibold uppercase tracking-tighter'>
                      Project Features
                    </h2>
                  </CardHeader>
                  <CardContent className='grid lg:grid-cols-5 gap-6'>
                    <div className='flex items-center gap-3'>
                      <div className='flex items-center justify-center w-[40px] h-[40px] rounded border text-dark-blue/70'>
                        <Building />
                      </div>
                      <div className='flex flex-col gap-0'>
                        <small className='text-sm text-gray-500'>Type</small>
                        <p className='font-medium text-text'>Apartment</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='flex items-center justify-center w-[40px] h-[40px] rounded border text-dark-blue/70'>
                        <Bed />
                      </div>
                      <div className='flex flex-col gap-0'>
                        <small className='text-sm text-gray-500'>Bedroom</small>
                        <p className='font-medium text-text'>
                          {property.property_meta?.fave_property_bedrooms ||
                            "N/A"}
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='flex items-center justify-center w-[40px] h-[40px] rounded border text-dark-blue/70'>
                        <Bath />
                      </div>
                      <div className='flex flex-col gap-0'>
                        <small className='text-sm text-gray-500'>
                          Bathroom
                        </small>
                        <p className='font-medium text-text'>
                          {property.property_meta?.fave_property_bathrooms ||
                            "N/A"}
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='flex items-center justify-center w-[40px] h-[40px] rounded border text-dark-blue/70'>
                        <RulerDimensionLine />
                      </div>
                      <div className='flex flex-col gap-0'>
                        <small className='text-sm text-gray-500'>Size</small>
                        <p className='font-medium text-text'>
                          {property.property_meta?.fave_property_size || "N/A"}{" "}
                          m²
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='flex items-center justify-center w-[40px] h-[40px] rounded border text-dark-blue/70'>
                        <MapPin />
                      </div>
                      <div className='flex flex-col gap-0'>
                        <small className='text-sm text-gray-500'>
                          Location
                        </small>
                        <p className='font-medium text-text'>
                          {property.property_city}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className='lg:hidden'>
                  <CardContent>
                    <FullContactForm />
                  </CardContent>
                </Card>
                <Card className='w-full'>
                  <CardHeader className='flex items-center text-dark-blue'>
                    <Info />
                    <h2 className='lg:text-2xl text-xl font-semibold uppercase tracking-tighter'>
                      Why buy this Property
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      <div
                        dangerouslySetInnerHTML={{ __html: whyBuyProperty }}
                      />
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className='w-full'>
                  <CardHeader className='flex items-center text-dark-blue'>
                    <Newspaper />
                    <h2 className='lg:text-2xl text-xl font-semibold uppercase tracking-tighter'>
                      Project details and facilities
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      <div dangerouslySetInnerHTML={{ __html: overview }} />
                      <div
                        className='py-4'
                        dangerouslySetInnerHTML={{ __html: projectFacilities }}
                      />
                      <div
                        dangerouslySetInnerHTML={{ __html: locationFacilities }}
                      />
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
          <aside className='lg:w-1/3 hidden lg:block sticky top-32 self-start'>
            <Card>
              <CardHeader>
                <h2 className='font-semibold text-xl text-center'>
                  Contact Property Quest Turkey
                </h2>
              </CardHeader>
              <CardContent>
                <FullContactForm />
              </CardContent>
            </Card>
          </aside>
        </div>
        <div className='py-20'>
          <div className='flex justify-between text-dark-blue pb-16'>
            <h3 className='font-extrabold text-4xl tracking-tight '>
              Similar properties
            </h3>
            <Link
              href='#'
              className='flex font-semibold text-secondary items-center gap-2'>
              Explore Properties
              <ArrowRight size={16} />
            </Link>
          </div>
          {/* <PropertiesCarousel /> */}
        </div>
      </div>
    </>
  );
}
