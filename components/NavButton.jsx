import Link from "next/link";
import React from "react";

const NavButton = ({text, link}) => {
  return (
    <div>
      <Link href={`${link}`}>
        <button className="py-3 md:px-8 px-4 cursor-pointer rounded-full bg-[#E9FBEF] hover:bg-[#25D363] hover:text-[#ffffff] shadow-md  md:text-[18px] text-[12px] leading-[120%] font-medium text-[#25D363] ">
           {text}
        </button>
      </Link>
    </div>
  );
};

export default NavButton;
