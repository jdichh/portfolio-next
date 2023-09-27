import React from "react";

type SectionHeadingProps = {
    children: React.ReactNode;
}

export default function SectionHeading({children}: SectionHeadingProps) {
  return (
    <h3 className="text-lg md:text-xl text-center xl:mt-0 font-medium mb-3">
      {children}
    </h3>
  );
}
