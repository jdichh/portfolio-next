import React from "react";
import RouteHeader from "@/pages/RouteHeader";
import Tools from "@/components/Tools";
import Image from "next/image";

export default function index() {
  return (
    <>
      <RouteHeader title="Virtual Car Showroom" />
      <main className="flex flex-col items-center w-full max-w-[1920px] mx-auto p-4 h-[7000px]">
        <div className="pt-32 lg:pt-40"/>
        <Image
            src="/project/showroom.png"
            alt=""
            width={900}
            height={900}
            quality={100}
            className="rounded-sm border-[1px] border-[#6E99C4] p-1 "
          />
      </main>
    </>
  );
}