import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
  AiFillYoutube,
} from "react-icons/ai";

import ContactForm from "@/components/ContactForm";
import ContactInfoCard from "@/components/ContactInfoCard";
import { Metadata } from "next";

const CONTACT_INFO = [
  {
    icon: <AiFillMail className="w-8 h-8" />,
    url: "https://github.com/Bangc121",
    title: "Email",
    content: "wjdrlalf17@gmail.com",
  },
  {
    icon: <AiFillLinkedin className="w-8 h-8" />,
    url: "",
    title: "Linkedin",
    content: "https://www.linkedin.com/",
  },
  {
    icon: <AiFillPhone className="w-8 h-8" />,
    url: "",
    title: "Phone",
    content: "010-4187-3914",
  },
  {
    icon: <AiFillPhone className="w-8 h-8" />,
    url: "",
    title: "Phone",
    content: "010-4187-3914",
  },
];

export const metadata: Metadata = {
  title: {
    default: "Contact",
    template: "Contact - %s",
  },
  description: "Contact me",
};

export default function ContactPage() {
  return (
    <section className="w-full max-w-4xl flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2 mt-10">Contact Me</h2>
      <div className="w-full flex flex-row mt-5">
        <div className="w-full basis-1/3 flex items-center mr-5">
          <ul className="w-full flex my-2 flex-col">
            {CONTACT_INFO.map((link, index) => (
              <li key={index}>
                <ContactInfoCard contactInfo={link} />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full basis-2/3">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
