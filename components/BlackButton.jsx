import React from "react";
import Link from "next/link";
const BlackButton = ({text, link, target}) => {
  return (
    <Link target={target} href={`${link}`}>
      <button  className="py-3 md:px-8  px-4 hover:bg-[#E9FBEF] hover:text-[#25D363] cursor-pointer rounded-full border bg-[#25D363] font-medium md:text-[18px] text-[12px] leading-[120%] text-[#FFFFFF] ">
        {text}
      </button>
    </Link>
  );
};

export default BlackButton;
