import { NextResponse } from "next/server";
import { fetchPropertyBySlug } from "@/lib/wpapi";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  try {
    const property = await fetchPropertyBySlug(slug);
    // Future: if (process.env.DATA_SOURCE === 'db') { const property = await db.properties.findUnique({ where: { slug } }); }
    return NextResponse.json(property);
  } catch (error) {
    const status =
      (error as Error).message === "Property not found" ? 404 : 500;
    return NextResponse.json({ error: (error as Error).message }, { status });
  }
}
