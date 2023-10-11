import React from "react";
import FooterButtons from "./footer-buttons";

export default function Footer() {
  return (
    <footer className="mt-3 border-t-2 w-full xl:w-[81.25%] theme-switch mx-auto">
      <div className="footer-layout">
        <span className="footer-text">Let's work together.</span>
        <div className="border-t-2 mx-3 theme-switch" />
        <div className="flex gap-2 justify-center">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}
