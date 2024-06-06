"use client";

import { useEffect, useState } from "react";

import { FaBlogger } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";

const INTRODUCTION_DATA = [
  {
    icon: <IoMdMail className="w-5 h-5" />,
    info: "wjdrlalf17@gmail.com",
  },
  {
    icon: <FaPhoneAlt className="w-5 h-5" />,
    info: "010-4187-3914",
  },
  {
    icon: <FaGithub className="w-5 h-5" />,
    info: "https://github.com/Bangc121",
    url: "https://github.com/Bangc121",
  },
  {
    icon: <FaBlogger className="w-5 h-5" />,
    info: "https://bangc.tistory.com/",
    url: "https://bangc.tistory.com/",
  },
];

const DEVELOPER = ["Frontend", "React-Native", "React"];

export default function Introduction() {
  const [title, setTitle] = useState(DEVELOPER[0]);
  // useEffect(() => {
  //   let i = 0;
  //   while (true) {
  //     console.log("iiiiii", i);
  //     console.log("let i = 0let i = 0", i / 3);
  //     i = i + 1;
  //   }
  //   // setInterval(() => console.log(DEVELOPER[getRandomInt(3)]), 5000);
  // }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold">{`Hi, I'm 김정환`}</h1>
      <h1 className="text-2xl font-semibold mt-2">{`Frontend Developer`}</h1>
      <ul className="mt-5">
        {INTRODUCTION_DATA.map((data, index) => (
          <li key={index} className="flex flex-row items-center mt-2">
            {data.url ? (
              <Link
                href={data.url}
                className="flex flex-row items-center"
                target="_blank"
              >
                {data.icon}
                <p className="ml-2 text-l">{data.info}</p>
              </Link>
            ) : (
              <>
                {data.icon}
                <p className="ml-2 text-l">{data.info}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
