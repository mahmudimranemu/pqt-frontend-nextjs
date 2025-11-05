import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { simpleContactSchema, fullContactSchema } from "@/lib/contactSchema";

export async function POST(req: NextRequest) {
  try {
    const input = await req.json();

    // Determine which schema to use based on presence of 'subject' and 'body'
    const schema =
      "subject" in input && "body" in input
        ? fullContactSchema
        : simpleContactSchema;
    const parsedData = schema.safeParse(input);

    if (!parsedData.success) {
      return NextResponse.json(
        { error: parsedData.error.format() },
        { status: 400 }
      );
    }

    const data = parsedData.data;
    const { name, email, phone } = data;
    const subject = "subject" in data ? data.subject : undefined;
    const body = "body" in data ? data.body : undefined;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false, // Use true for port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_FROM, // Send to yourself; change as needed
      subject: subject ? `Contact Form: ${subject}` : "Simple Contact Inquiry",
      html: `<p>Hello Property Quest Turkey Team,</p>
<p>You’ve received a new inquiry from the website contact form.
Below are the details:</p>
        <p>Name: <strong>${name}</strong><br>
        Email: <strong>${email}</strong><br>
        Phone: <strong>${phone}</strong></p>
        <p>${subject ? `Subject: ${subject}` : ""}</p>
        <p>${body ? `Message: ${body}` : ""}</p>
        <p>
      Reply to this email to contact the lead directly, or log in to the admin panel for more information.<br>
      Site: <a href="https://www.propertyquestturkey.com">propertyquestturkey.com</a>
    </p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Auto-reply email to user
    const userMailOptions = {
      from: process.env.EMAIL_FROM,
      to: email, // User's email from form
      subject: "Thank You for Contacting Property Quest Turkey",
      html: `<p>Dear ${name},</p><p>Thank you for getting in touch with Property Quest Turkey. We’ve received your message and one of our property consultants will contact you shortly to assist with your inquiry.</p><p>Whether you’re looking to buy your dream home, explore investment opportunities, or simply learn more about properties in Turkey, our team is here to guide you every step of the way.</p><p>We’ll get back to you within 24 hours. In the meantime, feel free to browse our latest property listings here:</p>
<p><a href="https://www.propertyquestturkey.com" target="_blank">👉 Visit Our Website</a></p>

    <p>
      Warm regards,<br>
      <strong>The Property Quest Turkey Team</strong><br>
      📞 +905063430709<br>
      ✉️ <a href="mailto:info@propertyquestturkey.com">info@propertyquestturkey.com</a><br>
      🌐 <a href="https://www.propertyquestturkey.com" target="_blank">www.propertyquestturkey.com</a>
    </p>`,
      // You can use HTML for better formatting if needed:
      // html: `<p>Dear ${name},</p><p>Thanks for your interest. We will contact you soon.</p><p>Best regards,<br>Your Team</p>`,
    };

    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
