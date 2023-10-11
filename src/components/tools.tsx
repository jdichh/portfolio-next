import React from "react";
import SectionHeading from "./section-heading";
import { tools } from "@/lib/data";
import Image from "next/image";

export default function Tools() {
  const ICON_DIMENSIONS = 40;

  return (
    <section className="px-4 w-full xl:w-10/12 mb-16 scroll-mt-20" id="tools">
      <SectionHeading>Tools</SectionHeading>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {tools.map((tool, index) => (
          <li
            key={index}
            className="flex flex-col text-center text-my-standard tools-projects-theme-switch items-center m-1 p-3 rounded-sm"
          >
            <Image
              src={tool.imageUrl}
              alt={tool.alt}
              height={ICON_DIMENSIONS}
              width={ICON_DIMENSIONS}
              className="mb-2"
            />
            {tool.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
