// lib/wpapi.ts
import he from "he";

const WP_API_BASE = "https://propertyquestturkey.com/wp-json/wp/v2";

// === 1. Fetch ALL properties (for listing) ===
export async function fetchProperties() {
  const res = await fetch(`${WP_API_BASE}/properties?per_page=100`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed");
  const posts: any[] = await res.json();

  const mediaIds = posts.map((p) => p.featured_media).filter(Boolean);
  const cityIds = posts
    .flatMap((p) => p.property_city || [])
    .filter((id) => !isNaN(id));

  const mediaMap = new Map<number, string>();
  if (mediaIds.length) {
    const ids = [...new Set(mediaIds)].join(",");
    const mediaRes = await fetch(
      `${WP_API_BASE}/media?include=${ids}&per_page=100`
    );
    if (mediaRes.ok) {
      const media: any[] = await mediaRes.json();
      media.forEach((m) => mediaMap.set(m.id, m.source_url));
    }
  }

  const cityMap = new Map<number, string>();
  if (cityIds.length) {
    const uniqueIds = [...new Set(cityIds)];
    const ids = uniqueIds.join(",");
    const cityRes = await fetch(
      `${WP_API_BASE}/property_city?include=${ids}&per_page=100`
    );
    if (cityRes.ok) {
      const cities: any[] = await cityRes.json();
      cities.forEach((c) => cityMap.set(c.id, c.name));
    }
  }

  return posts.map((p) => {
    p.title.rendered = he.decode(p.title.rendered);
    if (p.property_meta) {
      Object.keys(p.property_meta).forEach((k) => {
        if (typeof p.property_meta[k] === "string")
          p.property_meta[k] = he.decode(p.property_meta[k]);
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
  const res = await fetch(`${WP_API_BASE}/properties?slug=${slug}&_embed`);
  if (!res.ok) throw new Error("Property not found");
  const posts: any[] = await res.json();
  if (posts.length === 0) throw new Error("Property not found");

  const p = posts[0];

  // Decode title + meta
  p.title.rendered = he.decode(p.title.rendered);
  if (p.property_meta) {
    Object.keys(p.property_meta).forEach((k) => {
      if (typeof p.property_meta[k] === "string")
        p.property_meta[k] = he.decode(p.property_meta[k]);
    });
  }

  // Featured image from _embed
  p.featured_image_url = p._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  // City from property_city array
  const cityId = Array.isArray(p.property_city) ? p.property_city[0] : null;
  if (cityId) {
    const cityRes = await fetch(`${WP_API_BASE}/property_city/${cityId}`);
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
