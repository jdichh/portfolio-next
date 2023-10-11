import React from "react";
import ThemeSwitch from "./theme-switch";
import SectionDivider from "./section-divider";
import HeroButtons from "./hero-buttons";
import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-[100rem] flex flex-col items-center"
    >
      <div className="flex flex-col justify-end items-end my-16">
        <div className="text-right">
          <h1
            className={`${archivo.className} font-medium text-4xl sm:text-5xl`}
          >
            Jason Dichoso
          </h1>
          <h2 className="text-lg sm:text-xl">Web Developer</h2>
        </div>

        <div className="flex gap-2 my-2">
          <HeroButtons/>
          <ThemeSwitch />
        </div>
      </div>
      <SectionDivider />
    </section>
  );
}
