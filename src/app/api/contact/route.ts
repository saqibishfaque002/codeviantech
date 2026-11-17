import { NextRequest, NextResponse } from "next/server";
import { sendInquiryEmails } from "@/lib/resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, service, budget, message } = body;

    // Validation
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Email, Service, Message)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Trigger Resend email service
    const result = await sendInquiryEmails({
      name,
      email,
      company,
      service,
      budget,
      message,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your project inquiry has been delivered to our engineering team.",
      details: result,
    });
  } catch (err: any) {
    console.error("API /contact error:", err);
    return NextResponse.json(
      { error: "Internal server error occurred while processing your inquiry." },
      { status: 500 }
    );
  }
}
