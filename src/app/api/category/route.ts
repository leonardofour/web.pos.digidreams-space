// app/api/categories/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { BASE_URL } from "@/global/variable";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  
  try {
    const res = await fetch(`${BASE_URL}/category`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { success: false, message: "Failed to fetch categories from external API." },
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