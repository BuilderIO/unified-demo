import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const cat = req.nextUrl.searchParams.get("cat") ?? "";
  const params = new URLSearchParams({
    abbreviatedCategoryHistogram: "true",
    limit: "20",
    cat,
    view: "web",
    useElasticsearch: "true",
    sorts: "Popular",
    pid: "shopstyle",
  });

  try {
    const res = await fetch(
      `https://api.shopstyle.com/api/v2/products?${params}`,
      { next: { revalidate: 300 } }
    );
    if (!res.ok) return NextResponse.json({ products: [] });
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ products: [] });
  }
}
