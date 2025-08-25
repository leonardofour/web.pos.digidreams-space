import { NextResponse } from "next/server";
import { BASE_URL } from "@/global/variable";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, pin } = body;

    if (!id || !pin) {
      return NextResponse.json(
        { message: "Employee ID and PIN are required" },
        { status: 400 }
      );
    }

    if (!/^\d{6}$/.test(pin)) {
      return NextResponse.json(
        { message: "PIN must be 6 digits" },
        { status: 400 }
      );
    }


    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          id,
          pinNumber: pin,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.error("Backend error:", responseData);
        return NextResponse.json(
          {
            message: responseData.message || "Login failed",
          },
          { status: response.status }
        );
      }

      const { token, user, message } = responseData;

      if (!token || !user) {
        return NextResponse.json(
          { message: "Invalid response from authentication server" },
          { status: 502 }
        );
      }

      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 30);

      const res = NextResponse.json(
        { 
          message: message || "Login successful", 
          user, 
          token 
        },
        { status: 200 }
      );

      res.cookies.set("token", token, {
        expires: expirationDate,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
      });

      return res;

    } catch (fetchError) {
      console.error("Network error:", fetchError);
      return NextResponse.json(
        { message: "Unable to connect to authentication server" },
        { status: 503 }
      );
    }

  } catch (error) {
    console.error("Login API Error:", error);
    
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { message: "Invalid request format" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}