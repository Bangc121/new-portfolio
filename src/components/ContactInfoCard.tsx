import { ReactNode } from "react";

type Props = {
  contactInfo: {
    icon: ReactNode;
    title: string;
    content: string;
  };
};

export default function ContactInfoCard({ contactInfo }: Props) {
  const { icon, title, content } = contactInfo;
  return (
    <div className="flex border border-gray-300 rounded-lg p-5 my-5 bg-slate-300">
      <div className="flex border border-white-300 rounded-full w-14 h-14 justify-center items-center mr-3">
        {icon}
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-md text-gray-500">{title}</p>
        <p className="text-md">{content}</p>
      </div>
    </div>
  );
}
