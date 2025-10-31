export interface Property {
  id: number;
  title: { rendered: string };
  slug: string;
  date: string;
  property_meta: {
    fave_property_price?: string;
    fave_property_bedrooms?: string;
    fave_property_bathrooms?: string;
    fave_property_size?: string;
    overview?: string;
    [key: string]: any;
  };
  featured_image_url?: string; // Ensure this is included
  gallery_urls?: string[];
  property_city: string | number[];
}
