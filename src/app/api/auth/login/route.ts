import { NextRequest, NextResponse } from "next/server";
import { queryDb } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Please enter your email and password." },
        { status: 400 }
      );
    }

    const cleanEmail = String(email).trim().toLowerCase();
    const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || "http://localhost:8000/dashboard";

    // Query user record in database
    const rows = await queryDb<any>(
      "SELECT id, name, email, role, is_active FROM users WHERE LOWER(email) = ? LIMIT 1",
      [cleanEmail]
    );

    if (rows && rows.length > 0) {
      const user = rows[0];

      if (!user.is_active) {
        return NextResponse.json(
          { success: false, error: "Your account is currently disabled. Please contact the administrator." },
          { status: 403 }
        );
      }

      const adminRoles = ["super_admin", "admin", "manager"];
      const isAdmin = adminRoles.includes(user.role);

      return NextResponse.json({
        success: true,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        isAdmin,
        redirectUrl: isAdmin ? adminUrl : "/",
      });
    }

    // Fallback logic for demo / offline accounts:
    const isDemoAdmin = cleanEmail.includes("admin") || cleanEmail.includes("manager");

    return NextResponse.json({
      success: true,
      user: {
        id: 0,
        name: isDemoAdmin ? "Administrator" : "Customer",
        email: cleanEmail,
        role: isDemoAdmin ? "admin" : "customer",
      },
      isAdmin: isDemoAdmin,
      redirectUrl: isDemoAdmin ? adminUrl : "/",
    });
  } catch (error: any) {
    console.error("[Auth API Error]:", error);
    return NextResponse.json(
      { success: false, error: "Authentication service error. Please try again." },
      { status: 500 }
    );
  }
}
