import React from "react";
import Image from "next/image";
import MainLogo from "../../../public/images/logos/david-logo.png";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <Image src={MainLogo} alt="Logo" width={180} height={50} />
        </span>
        <p className="text-slate-600">2024 - Made with Next.js</p>
      </div>
    </footer>
  );
};

export default Footer;
