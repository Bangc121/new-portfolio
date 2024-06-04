import { FaBlogger } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Introduction() {
  return (
    <div>
      <h1 className="text-5xl font-bold">{`Hi, I'm 김정환`}</h1>
      <h1 className="text-2xl font-semibold">{`Frontend Developer`}</h1>
      <ul className="mt-5">
        <li className="text-xl flex flex-row items-center">
          <IoMdMail />
          <p className="ml-2">wjdrlalf17@gmail.com</p>
        </li>
        <li className="text-xl flex flex-row items-center">
          <FaPhoneAlt />
          <p className="ml-2">010-4187-3914</p>
        </li>
        <li className="text-xl flex flex-row items-center">
          <FaGithub />
          <p className="ml-2">https://github.com/Bangc121</p>
        </li>
        <li className="text-xl flex flex-row items-center">
          <FaBlogger />
          <p className="ml-2">asdasd</p>
        </li>
        <li className="text-xl flex flex-row items-center">
          <FaLinkedin />
          <p className="ml-2">asdasd</p>
        </li>
      </ul>
    </div>
  );
}
