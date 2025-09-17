// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();
  const { name, email, services, status, message } = data;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
      },
    });

    const emailContent = `
Name: ${name}
Email: ${email}
Services interested in: ${services || 'Not specified'}
PA Journey Status: ${status || 'Not specified'}

Message:
${message}
    `.trim();

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "elysia@papreplab.com",
      subject: `New message from ${name}`,
      replyTo: email,
      text: emailContent,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
