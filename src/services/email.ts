import { EmailForm } from "@/components/ContactForm";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function sendEmail({ from, subject, message }: EmailForm) {
  const mailData = {
    from,
    to: process.env.EMAIL_USER,
    subject: `[BLOG] ${subject}`,
    html: "<b>Hello world?</b>",
  };

  return transporter.sendMail(mailData);
}
