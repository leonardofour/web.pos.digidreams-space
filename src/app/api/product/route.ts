// app/api/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { BASE_URL } from "@/global/variable";

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    // Buat URL dengan parameter category jika ada
    let apiUrl = `${BASE_URL}/product`;
    if (category && category !== "all") {
      apiUrl += `?category=${category}`;
    }

    const res = await fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to fetch products from external API.",
        },
        { status: res.status }
      );
    }

    const result = await res.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Proxy fetch error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
