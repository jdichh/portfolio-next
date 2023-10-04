import React from "react";

export default function Others() {
  return (
    <div className="flex justify-center opacity-90">
      <p className="text-base">
        View more of my projects in my old{" "}
        <a
          href="https://jdichh.netlify.app"
          target="_blank"
          aria-label="Button for my old portfolio website."
          className="font-semibold text-[#236660]"
        >
          portfolio website
        </a>{" "}
        or in my{" "}
        <a
          href="https://www.github.com/jdichh"
          target="_blank"
          aria-label="Button for the GitHub repo of the project."
          className="font-semibold text-[#236660]"
        >
          GitHub profile
        </a>
        .
      </p>
    </div>
  );
}
