"use client";

import Banner, { BannerData } from "./Banner";
import { ChangeEvent, FormEvent, useState } from "react";

export type EmailForm = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  from: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<EmailForm>(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await sendContactEmail(form);
    if (res.state === "success") {
      setBanner({ message: "메시지 전송 성공", state: "success" });
      setTimeout(() => setBanner(null), 3000);
      setForm(DEFAULT_DATA);
    }
  };

  const sendContactEmail = async (emailForm: EmailForm) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(emailForm),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "서버 요청에 실패함");
    }

    return data;
  };

  return (
    <section className="w-full">
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col gap-2 my-4 p-4 rounded-md text-white"
      >
        <label htmlFor="from" className="font-semibold text-black">
          Your Email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
          className="text-black w-full border-2 border-gray-200 rounded-lg py-2 px-4 mb-4 focus:outline-none"
        />
        <label htmlFor="subject" className="font-semibold text-black">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
          className="text-black w-full border-2 border-gray-200 rounded-lg py-2 px-4 mb-4 focus:outline-none"
        />
        <label htmlFor="message" className="font-semibold text-black">
          Message
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          value={form.message}
          onChange={onChange}
          className="text-black w-full border-2 border-gray-200 rounded-lg py-2 px-4 mb-4 focus:outline-none"
        />
        <button className="bg-slate-300 text-black font-bold hover:bg-slate-400 p-3 rounded-md">
          Submit
        </button>
      </form>
    </section>
  );
}
