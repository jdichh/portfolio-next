import React from "react";
import RouteHeader from "@/pages/RouteHeader";
import Tools from "@/components/Tools";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function index() {
  return (
    <>
      <RouteHeader title="Virtual Car Showroom" />
      <main className={`flex flex-col items-center w-full max-w-[1920px] mx-auto p-4 h-[7000px] ${spaceGrotesk.className}`}>
        <div className="pt-32 lg:pt-40"/>
        <figure className="bg-[#1F1E26] p-3 rounded-sm">
        <Image
            src="/project/showroom.png"
            alt=""
            width={900}
            height={900}
            quality={95}
            className="rounded-sm"
          />
          <figcaption className="mt-2 text-center">
            Screenshot of the virtual car showroom project.
          </figcaption>
        </figure>
      </main>
    </>
  );
}