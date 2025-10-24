import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type Data = {
  success: boolean;
  message: string;
};

export async function POST(req: Request) {
  const { firstName, lastName, email, subject, message } = await req.json();

  // Basic validation
  if (!firstName || !lastName || !email || !subject || !message) {
    return NextResponse.json(
      { success: false, message: "Missing required fields" },
      { status: 400 }
    );
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json(
      { success: false, message: "Invalid email address" },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "mail.smtp2go.com", // e.g. "mail.snayo.net"
    port: 587,
    secure: false, // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER, // e.g. "noreply@snayo.net"
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `<${process.env.SMTP_USER}>`,
    to: "maurice@snayo.net",
    subject: `Contact Form: ${subject}`,
    text: `
      You have a new contact form submission:
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Subject: ${subject}
      Message:
      ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { success: false, message: "Error sending email" },
        { status: 500 }
      );
    }
    console.log("Email sent successfully");
  });

  return NextResponse.json(
    { success: true, message: "Message received" },
    { status: 200 }
  );
}
