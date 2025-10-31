// app/api/properties/route.ts
import { NextResponse } from "next/server";
import { fetchProperties } from "@/lib/wpapi";

type SortOption =
  | "price_asc"
  | "price_desc"
  | "bedrooms_asc"
  | "bedrooms_desc"
  | "date_desc";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page") ?? "1");
  const perPage = Number(searchParams.get("per_page") ?? "12");
  const sortParam = searchParams.get("sort"); // string | null

  try {
    const allProps = await fetchProperties();

    // --- SORTING: Only apply if sortParam is a valid SortOption ---
    const sorted = [...allProps];

    if (sortParam && sortParam !== "default") {
      const sort = sortParam as SortOption; // safe now

      switch (sort) {
        case "price_asc":
          sorted.sort((a, b) => {
            const pa = parseFloat(
              a.property_meta?.fave_property_price?.replace(/[^0-9.]/g, "") ||
                "0"
            );
            const pb = parseFloat(
              b.property_meta?.fave_property_price?.replace(/[^0-9.]/g, "") ||
                "0"
            );
            return pa - pb;
          });
          break;
        case "price_desc":
          sorted.sort((a, b) => {
            const pa = parseFloat(
              a.property_meta?.fave_property_price?.replace(/[^0-9.]/g, "") ||
                "0"
            );
            const pb = parseFloat(
              b.property_meta?.fave_property_price?.replace(/[^0-9.]/g, "") ||
                "0"
            );
            return pb - pa;
          });
          break;
        case "bedrooms_asc":
          sorted.sort((a, b) => {
            const ba = parseInt(a.property_meta?.fave_property_bedrooms || "0");
            const bb = parseInt(b.property_meta?.fave_property_bedrooms || "0");
            return ba - bb;
          });
          break;
        case "bedrooms_desc":
          sorted.sort((a, b) => {
            const ba = parseInt(a.property_meta?.fave_property_bedrooms || "0");
            const bb = parseInt(b.property_meta?.fave_property_bedrooms || "0");
            return bb - ba;
          });
          break;
        case "date_desc":
          sorted.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );
          break;
      }
    }

    const total = sorted.length;
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const items = sorted.slice(start, end);

    return NextResponse.json({
      items,
      pagination: {
        current: page,
        perPage,
        total,
        totalPages: Math.ceil(total / perPage),
        showing: {
          from: total === 0 ? 0 : start + 1,
          to: Math.min(end, total),
        },
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 }
    );
  }
}
