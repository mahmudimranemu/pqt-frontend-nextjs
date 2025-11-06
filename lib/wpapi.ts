import he from "he";

const WP_API_BASE = "https://propertyquestturkey.com/wp-json/wp/v2";

// Type definitions (omitted for brevity in analysis, but kept in code)
interface WpPost {
  id: number;
  title: { rendered: string };
  slug: string;
  date: string;
  featured_media: number;
  property_city: string | number[];
  property_meta: {
    fave_property_price?: string;
    fave_property_bedrooms?: string;
    fave_property_bathrooms?: string;
    fave_property_size?: string;
    overview?: string;
    fave_property_type?: string;
    fave_property_images?: string[] | null;
    why_buy_this_property?: string;
    location_facilities_details?: string;
    project_facilities_details?: string;
    [key: string]: any;
  };
  _embedded?: {
    "wp:featuredmedia"?: {
      source_url: string;
    }[];
  };
  featured_image_url?: string;
}

interface WpMedia {
  id: number;
  source_url: string;
}

interface WpCity {
  id: number;
  name: string;
}

// === 1. Fetch ALL properties (for listing) ===
export async function fetchProperties() {
  // Caching applied to main list
  const res = await fetch(`${WP_API_BASE}/properties?per_page=100`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch properties list");
  const posts: WpPost[] = await res.json();

  const mediaIds = posts.map((p) => p.featured_media).filter(Boolean);
  const cityIds = posts
    .flatMap((p) => (Array.isArray(p.property_city) ? p.property_city : []))
    .filter((id) => typeof id === "number" && !isNaN(id));

  const mediaMap = new Map<number, string>();
  if (mediaIds.length) {
    const ids = [...new Set(mediaIds)].join(",");
    const mediaRes = await fetch(
      `${WP_API_BASE}/media?include=${ids}&per_page=100`,
      // FIX: Apply caching to media fetch
      { next: { revalidate: 3600 } }
    );
    if (mediaRes.ok) {
      const media: WpMedia[] = await mediaRes.json();
      media.forEach((m) => mediaMap.set(m.id, m.source_url));
    }
  }

  const cityMap = new Map<number, string>();
  if (cityIds.length) {
    const uniqueIds = [...new Set(cityIds)];
    const ids = uniqueIds.join(",");
    const cityRes = await fetch(
      `${WP_API_BASE}/property_city?include=${ids}&per_page=100`,
      // FIX: Apply caching to city taxonomy fetch
      { next: { revalidate: 3600 } }
    );
    if (cityRes.ok) {
      const cities: WpCity[] = await cityRes.json();
      cities.forEach((c) => cityMap.set(c.id, c.name));
    }
  }

  return posts.map((p) => {
    p.title.rendered = he.decode(p.title.rendered);
    if (p.property_meta) {
      const meta = p.property_meta;
      (Object.keys(meta) as (keyof typeof meta)[]).forEach((k) => {
        if (typeof meta[k] === "string") {
          meta[k] = he.decode(meta[k] as string);
        }
      });
    }
    p.featured_image_url = mediaMap.get(p.featured_media);
    const cityId = Array.isArray(p.property_city) ? p.property_city[0] : null;
    p.property_city =
      cityId && cityMap.has(cityId) ? cityMap.get(cityId)! : "Unknown City";
    return p;
  });
}

// === 2. Fetch SINGLE property by slug ===
export async function fetchPropertyBySlug(slug: string) {
  // Best practice: Apply caching to single-property lookups too
  const res = await fetch(`${WP_API_BASE}/properties?slug=${slug}&_embed`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Property not found");
  const posts: WpPost[] = await res.json();
  if (posts.length === 0) throw new Error("Property not found");

  const p = posts[0];

  // Decode title + meta
  p.title.rendered = he.decode(p.title.rendered);
  if (p.property_meta) {
    const meta = p.property_meta;
    (Object.keys(meta) as (keyof typeof meta)[]).forEach((k) => {
      if (typeof meta[k] === "string") {
        meta[k] = he.decode(meta[k] as string);
      }
    });
  }

  // Featured image from _embed
  p.featured_image_url = p._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  // City from property_city array
  const cityId = Array.isArray(p.property_city) ? p.property_city[0] : null;
  if (cityId) {
    // Best practice: Apply caching to city detail fetch
    const cityRes = await fetch(`${WP_API_BASE}/property_city/${cityId}`, {
      next: { revalidate: 3600 },
    });
    if (cityRes.ok) {
      const city = await cityRes.json();
      p.property_city = city.name;
    } else {
      p.property_city = "Unknown City";
    }
  } else {
    p.property_city = "Unknown City";
  }

  return p;
}
