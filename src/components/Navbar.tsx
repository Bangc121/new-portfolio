"use client";

import Link from "next/link";

const menu = [{ href: "/" }, { href: "/search" }, { href: "/new" }];
export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-5">
      <Link className="px-3 text-black" href="/">
        <h1 className="text-2xl font-bold">{`JH's Portfolio`}</h1>
      </Link>
      <nav className=" flex gap-4">
        <Link className="text-black" href="/">
          Home
        </Link>
        <Link className="text-black" href="/about">
          About
        </Link>
        <Link className="text-black" href="/experiences">
          Experiences
        </Link>
        <Link className="text-black" href="/contact">
          Contact
        </Link>
      </nav>
    </div>
  );
}
