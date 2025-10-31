import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Validate or process here (e.g., send email with nodemailer)
    console.log("Contact form submission:", body); // Replace with actual sending logic
    // Example: await sendEmail(body); // Implement sendEmail function
    return NextResponse.json({ message: "Message sent successfully" });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
