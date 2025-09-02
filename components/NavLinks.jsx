import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <div className="flex lg:justify-center ">
      <ul className="flex flex-col lg:flex-row  text-[#333333] font-medium md:text-[18px] text-[12px] leading-[120%]   gap-5">
        <Link href="#about" className="hover:border-b">
          <li>About us</li>
        </Link>
        <Link href="#features" className="hover:border-b">
          <li>Features</li>
        </Link>
        <Link href="#faq" className="hover:border-b">
          <li>FAQs</li>
        </Link>
        
        
      </ul>
    </div>
  );
};

export default NavLinks;
