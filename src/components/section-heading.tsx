import React from "react";

type SectionHeadingProps = {
    children: React.ReactNode;
}

export default function SectionHeading({children}: SectionHeadingProps) {
  return (
    <h3 className="text-lg md:text-xl text-center mb-3 mt-12 xl:mt-0 font-medium">
      {children}
    </h3>
  );
}
