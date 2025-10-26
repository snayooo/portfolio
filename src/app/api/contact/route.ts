import { NextResponse } from "next/server";

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

  try {
    const response = await fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: process.env.SMTP2GO_API_KEY,
        sender: "web@snayo.net",
        to: ["maurice@snayo.net"],
        subject: `Contact Form: ${subject}`,
        text_body: `
          First Name: ${firstName}
          Last Name: ${lastName}
          Email: ${email}
          Subject: ${subject}
          Message:
          ${message}
        `,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("SMTP2GO API error:", errText);
      return NextResponse.json(
        { success: false, message: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Error sending email" },
      { status: 500 }
    );
  }
}
