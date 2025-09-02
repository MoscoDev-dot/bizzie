"use client"
import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import BlackButton from "./BlackButton";
import NavButton from "./NavButton";
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div className="bg-[#FFFFFF] hero-bg lg:pt-30 md:pt-20 lg:px-5 pt-15">
      <Container maxWidth={false}>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4 lg:gap-0">
            {/* first col */}
            <motion.div transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} className="">
              <div className="flex gap-2 mx-3 md:mx-0 my-2">
                <div   className="mt-2">
                  <Image
                    src="/List.png"
                    alt="hero png"
                    width={100}
                    height={100}
                    className="w-auto h-auto"
                  />
                </div>
                <div>
                  <p   className="font-medium md:text-[14px]  text-[12px] leading-[150%] text-[#000000]  ">
                    Trusted by 1,000+ entrepreneurs, freelancers, <br />  and
                    SMEs in  Nigeria.
                  </p>
                </div>
              </div>
              <div>
                <p   className="font-bold lg:text-[64px] md:text-[40px] text-[24px] leading-[120%] text-[#000000] ">
                  Entrepreneurship Made Easy; <span className="text-[#25D363]">One Chat,</span> All the Help You Need
                </p>
                <p   className="font-medium lg:text-[24px] md:text-[18px] py-3 text-[13px] leading-[120%] ">
                  Get instant access to business documents, expert support,
                  opportunities, and more all from your favorite chat app.
                </p>
              </div>
              <div className="flex my-3 lg:gap-5 md:gap-2 gap-5">
                <div  >
                  <BlackButton link={'#'} text={"Start on Whatsapp"} />
                </div>
                <div   >
                  {" "}
                  <NavButton link={'#'} text={"Explore on Web"} />
                </div>
              </div>
            </motion.div>

            {/* 2nd col */}
            <motion.div  transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} className="mt-0 md:mt-22 lg:mt-0 ">
              <Image
                src="/Component 1.png"
                alt="her0.2.img"
                width={600}
                height={200}
                className="w-auto h-auto"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
