import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Jika kamu menggunakan cookie untuk auth, bisa dihapus di sini:
    const response = NextResponse.json({ message: "Logout successful" });

    // Contoh: hapus cookie auth
    response.cookies.set("token", "", { maxAge: 0 });

    return response;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json({ message: "Logout failed" }, { status: 500 });
  }
}
