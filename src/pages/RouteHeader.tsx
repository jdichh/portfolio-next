import React from "react";
import Link from "next/link";

type RouteHeaderProps = {
  title: string;
};

const RouteHeader: React.FC<RouteHeaderProps> = ({
  title,
}: RouteHeaderProps) => {
  return (
    <header className="z-[99] relative w-full font-semibold text-[#DADADA]">
      <div className="fixed border-b-2 border-[#6E99C4] bg-[#19181E] bg-opacity-95 top-0 h-16 w-full" />
      <nav className="fixed flex justify-between items-center w-full max-w-[1920px] mx-auto left-1/2 -translate-x-[50%] px-4 h-16">
        <ul>
          <li>
            <Link
              href="/"
              className="transition duration-100 ease-in-out text-lg hover:text-[#6E99C4] rounded-sm"
            >
              Back
            </Link>
          </li>
        </ul>
        <h1 className="uppercase font-semibold">{title}</h1>
      </nav>
    </header>
  );
};

export default RouteHeader;
