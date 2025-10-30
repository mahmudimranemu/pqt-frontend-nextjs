import PropertiesCarousel from "@/components/properties/PropertiesCarousel";
import PropertyImageSlider from "@/components/properties/property/PropertyImageSlider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  ArrowRight,
  Bath,
  Bed,
  Building,
  Calendar,
  File,
  Info,
  MapPin,
  Newspaper,
  RulerDimensionLine,
  Sliders,
} from "lucide-react";
import Link from "next/link";

const Property = {
  title: "Underpriced Luxury apartments inside a housing compound",
};

const propertyFeatures = [
  {
    icon: <Building />,
    title: "Type",
    description: "Apartment",
  },
  {
    icon: <Bed />,
    title: "Bedrooms",
    description: "3",
  },
  {
    icon: <Bath />,
    title: "Bathrooms",
    description: "2",
  },
  {
    icon: <RulerDimensionLine />,
    title: "Area",
    description: "150 sq.m",
  },
  {
    icon: <MapPin />,
    title: "Location",
    description: "Istanbul",
  },
  {
    icon: <Calendar />,
    title: "Year Built",
    description: "2022",
  },
  {
    icon: <File />,
    title: "Citizenship",
    description: "Eligible",
  },
];

export default function SingleProperty() {
  return (
    <>
      <PropertyImageSlider />;
      <div className='max-w-7xl flex flex-col mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex'>
          <main className='lg:w-4/5'>
            <div className='flex flex-col gap-6'>
              <h1 className='font-extrabold text-dark-blue text-4xl tracking-[-1.08px] leading-9'>
                {Property.title}
              </h1>
              <div className='flex justify-between'>
                <div className='flex gap-6'>
                  <p className='text-text text-2xl'>
                    Price:
                    <span className='text-primary font-bold'>$300,200</span>
                  </p>
                  <p className='text-text text-2xl'>
                    Ref:
                    <span className='text-secondary font-normal'>PQTR1085</span>
                  </p>
                </div>

                <div className='flex gap-2'>
                  <Button>Share</Button>
                  <Button>Love</Button>
                </div>
              </div>
              <div className='flex flex-col gap-7'>
                <Card className='w-full'>
                  <CardHeader className='flex items-center text-dark-blue'>
                    <Sliders />{" "}
                    <h2 className='text-2xl font-semibold uppercase tracking-tighter'>
                      Project Features
                    </h2>
                  </CardHeader>
                  <CardContent className='grid lg:grid-cols-5 gap-6'>
                    {propertyFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className='flex items-center gap-3'>
                        <div className='flex items-center justify-center w-[40px] h-[40px] rounded border text-dark-blue/70'>
                          {feature.icon}
                        </div>
                        <div className='flex flex-col gap-0'>
                          <small className='text-sm text-gray-500'>
                            {feature.title}
                          </small>
                          <p className='font-medium text-text'>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Card className='w-full'>
                  <CardHeader className='flex items-center text-dark-blue'>
                    <Info />
                    <h2 className='text-2xl font-semibold uppercase tracking-tighter'>
                      Why buy this Property
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Property Quest Turkey was founded on the principle of
                      providing the best Turkish investment opportunities to a
                      global audience. No matter why you came to Turkey, whether
                      it was to make a well-founded investment or to start a new
                      life for your family, we will help you as a cohesive
                      global team.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className='w-full'>
                  <CardHeader className='flex items-center text-dark-blue'>
                    <Newspaper />
                    <h2 className='text-2xl font-semibold uppercase tracking-tighter'>
                      Project details and facilities
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      This development redefines city living in Istanbul,
                      blending luxury with convenience. Nestled in a prime
                      neighborhood, it offers residents world-class facilities
                      within a secured compound. Whether you’re looking for a
                      profitable investment or a stylish home in one of
                      Istanbul’s most prestigious areas, this project delivers
                      unmatched value with high ROI and long-term growth
                      potential. This premium residence is designed with
                      comfort, luxury, and security in mind: 24/7 security with
                      gated compound Indoor swimming pool, gym, sauna, and spa
                      Dedicated underground parking Elegant modern design and
                      top-quality finishing Location Facilities Live at the
                      center of everything Istanbul has to offer: Walking
                      distance to metro, bus, and major public transport Just
                      steps from Taksim Square, Nisantasi, and iconic
                      attractions Surrounded by top restaurants, cafés, and
                      shopping malls Close to universities, international
                      schools, hospitals, and business districts Easy access to
                      government and corporate offices Facilities A+ Location:
                      Nestled close to Nisantasi, one of Turkey’s most elite
                      neighborhoods, this project offers unparalleled access to
                      luxury living. ▪️ Prime Connectivity: Enjoy swift access
                      to various public transportation options and highways,
                      ensuring seamless travel throughout the city. ▪️ Hotel
                      Apartment Concept: Embrace a unique loft lifestyle within
                      this exclusive luxury project, set in the heart of Taksim
                      & Sisli – the tourism and commercial hub of Turkey. ▪️
                      High Rental Income: Anticipate substantial rental income
                      ranging from approximately $2200 to $3000 per month,
                      making it a lucrative investment opportunity. ▪️ 5-Star
                      Hotel Lifestyle: Immerse yourself in luxury with
                      high-quality services, including meeting rooms,
                      consultation sections, and a range of recreational
                      amenities. ▪️ Premium Facilities: Indulge in indoor
                      parking, a swimming pool, children’s playgrounds, sauna,
                      fitness center, and top-notch security features. ▪️
                      High-End Materials: Experience unparalleled quality with
                      premium materials used throughout the property. ▪️
                      Surrounded by Amenities: Conveniently located near
                      schools, hospitals, hotels, malls, and world-class brands.
                      ▪️ Proximity to Taksim Istiklal Road: Enjoy the vibrant
                      atmosphere of one of the world’s busiest shopping streets,
                      frequented by millions of tourists each month. ▪️ High
                      Capital Appreciation Potential: Benefit from below-market
                      pricing and anticipate significant capital appreciation
                      over time. ▪️ Citizenship and PR Eligibility: This
                      property qualifies for citizenship and PR programs,
                      offering enhanced privileges and opportunities.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
          <aside className='lg:w-1/5'>Contact form</aside>
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
          <PropertiesCarousel />
        </div>
      </div>
    </>
  );
}
