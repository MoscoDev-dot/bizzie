import Image from "next/image";
import React from "react";

const NuraWorksCard = ({image, text1, text2, bg, text_colo}) => {
  return (
    <div>
      <div>
        <Image
          src={image}
          alt="pix-1"
          width={40}
          height={20}
          className={`md:mt-30 mt-10 md:mb-10 mb-5 text-white  ${bg} p-2 rounded-full `}
        />
      </div>
      <p className={` font-bold md:text-[24px] ${text_colo} capitalize text-[12px] leading-[120%] `}>
         {text1}
      </p>
      <p className={` ${text_colo} py-4 font-medium md:text-[16px] text-[12px] leading-[150%] `}>
        {text2}
      </p>
    </div>
  );
};

export default NuraWorksCard;
