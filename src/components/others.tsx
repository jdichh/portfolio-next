import React from "react";

export default function Others() {
  return (
    <div className="flex justify-center md:justify-end opacity-90">
      <p className="text-base text-center">
        You can view my other projects in my{" "}
        <a
          href="https://jdichh.netlify.app"
          target="_blank"
          aria-label="Button for my old portfolio website."
          className="font-bold text-[#236660]"
        >
          old portfolio website
        </a>
        .
      </p>
    </div>
  );
}
