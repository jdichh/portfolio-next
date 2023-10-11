import React from "react";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-[99] relative w-full font-medium">
      <div className="fixed left-1/2 -translate-x-[50%] border-b-2 top-0 h-16 w-full theme-switch" />
      <nav className="fixed left-1/2 -translate-x-[50%] top-0 flex items-center ">
        <ul className="flex flex-row justify-center gap-6 sm:gap-10">
          {links.map((link) => (
            <li key={link.hash} className="flex text-[#397EBF]">
              <Link
                href={link.hash}
                className="p-4 text-lg theme-switch hover:text-[#397EBF] dark:hover:text-[#397EBF] rounded-sm"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
