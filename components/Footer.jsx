"use client"

import { Container } from "@mui/material";
import React from "react";
import BlackButton from "./BlackButton";
import Link from "next/link";

import Image from "next/image";

import NavImage from "./NavImage";
import { motion } from "motion/react"



const Footer = () => {
  return (
    <div className="bg-white lg:px-5">
      <Container maxWidth={false}>
        <div>
          <div className="grid md:grid-cols-2 py-15 grid-cols-1 lg:gap-5 md:gap-0 gap-15 ">
            <motion.div  transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}>
              <NavImage />
            </motion.div>
            <motion.div transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} className="lg:ml-auto">
              <div>
                <p   className="text-[14px] font-medium text-[#5E5E5E] leading-[120%]  ">
                  Join our newsletter
                </p>
                <div   className="flex flex-col lg:flex-row py-3 gap-3">
                  <input
                    placeholder="johndoe@gmail.com"
                    className="p-2  rounded-lg border border-[#E5E5E5] text-[#222222]"
                  />
                  <BlackButton link={'https://wa.me/12193552916'} target={"_blank"} text={"subscribe"} />
                </div>
                <p   className="text-[#ABABAB] text-[12px] leading-[150%] font-medium ">
                  By clicking, you’re agreeing to our Terms.
                </p>
              </div>
            </motion.div>
          </div>
          <hr className="text-[#ABABAB] pb-3" />
          <motion.div  transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} className="flex pb-10 flex-row gap-2">
            <div>
              <p className="text-[12px] text-[#7C7C7C] font-medium leading-[150%] ">
                © 2025 Bizzie
              </p>
            </div>
            <div>
              <Image
                src="/Ellipse 1.png"
                alt=""
                width={5}
                height={10}
                className="rounded-full mt-2"
              />
            </div>
            <div className="text-[12px] text-[#7C7C7C] font-medium leading-[150%]  ">
            <Link href='/' >
            Terms
            </Link>
          </div>
          <div>
              <Image
                src="/Ellipse 1.png"
                alt=""
                width={5}
                height={10}
                className="rounded-full mt-2"
              />
            </div>
            <div className="text-[12px] text-[#7C7C7C] font-medium leading-[150%]  ">
            <Link href='/' >
            Privacy
            </Link>
          </div>
          </motion.div>
          
        </div>
      </Container>
    </div>
  );
};

export default Footer;
