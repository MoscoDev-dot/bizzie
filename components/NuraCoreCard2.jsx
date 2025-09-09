"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";



const NuraCoreCard2 = ({text1, text2}) => {
  return (
    <motion.div   animate={{ y: ["0%", "-55%"] }} // scroll up then down
        transition={{
          duration: 8, // speed
          ease: "easeInOut",
          repeat: Infinity,      // loop forever
          repeatType: "reverse", // reverse direction each loop
        }}  className="md:pt-5">
      <div className="mx-5">
        <p className="font-bold text-[#25D363] pt-10 md:text-[24px] text-[15px] leading-[120%] ">
           {text1}
        </p>
        <p className="text-[#000000] py-4 md:text-[16px] text-[12px] font-medium leading-[150%] ">
           {text2}
        </p>
      </div>

      <div className="text-[#0A0A0A] mx-auto mb-5 font-semibold text-[12px] mt-5 w-fit px-5 py-1 rounded-lg text-center bg-[#FFFFFF] leading-[100%] ">
        Today
      </div>
      <div className="bg-[#FEEECD] rounded-[20px] mx-auto   md:w-60 w-50   p-3">
        <div className="flex ">
          <span>
            <Image src="/ico-12-lock.png" alt="" width={30} height={20} />
          </span>{" "}
          <span className="leading-[16px] text-[#0A0A0A] text-[12px] text-center ">
            Messages to yourself are end-to-end encrypted. No one outside of
            this chat, not even WhatsApp, can read or listen to them.
          </span>
        </div>
        <Link href="#">
          <p className="leading-[16px] mt-3 text-[#0A0A0A] mx-auto font-bold text-[12px] text-center">
            Learn more
          </p>
        </Link>
        
      </div>
      <div className="mb-5">
        <div className="flex justify-end me-5 mt-3">
          <Image
            src="/Bubble.png"
            alt="hello png"
            width={300}
            height={300}
            className="w-auto h-auto "
          />
        </div>
        <div className="flex justify-start ms-2 mt-3">
          <Image
            src="/Avatar + Bubble.png"
            alt="hello png"
            width={300}
            height={300}
            className="w-auto h-auto "
          />
        </div>
         <div className="flex justify-start ms-2 mt-1">
          <Image
            src="/Avatar + Bubble (1).png"
            alt="hello png"
            width={300}
            height={300}
            className="w-auto h-auto "
          />
        </div>
         <div className="flex justify-end me-5 mt-3">
          <Image
            src="/Bubble (1).png"
            alt="hello png"
            width={300}
            height={300}
            className="w-auto h-auto "
          />
        </div>
        <div className="flex justify-start ms-2 mt-1">
          <Image
            src="/Avatar + Bubble (2).png"
            alt="hello png"
            width={300}
            height={300}
            className="w-auto h-auto "
          />
        </div>
        

      </div>
    </motion.div>
  );
};

export default NuraCoreCard2;
