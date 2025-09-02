"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";


const NuraCoreCard2 = ({text1, text2}) => {
  return (
    <motion.div transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}  className="pb-10">
      <div className="mx-5">
        <p className="font-bold text-[#25D363] pt-10 md:text-[24px] text-[15px] leading-[120%] ">
           {text1}
        </p>
        <p className="text-[#000000] py-4 md:text-[16px] text-[12px] font-medium leading-[150%] ">
           {text2}
        </p>
      </div>

      <div className="text-[#0A0A0A] mx-auto mb-5 font-semibold text-[12px] mt-15 w-fit px-5 py-1 rounded-lg text-center bg-[#FFFFFF] leading-[100%] ">
        Today
      </div>
      <div className="bg-[#FEEECD] rounded-[20px] mx-auto   md:w-60 w-50  mb-15 p-3">
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
    </motion.div>
  );
};

export default NuraCoreCard2;
