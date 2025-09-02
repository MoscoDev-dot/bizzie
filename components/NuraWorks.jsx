"use client"
import { Container } from "@mui/material";
import React from "react";
import NuraWorksCard from "./NuraWorksCard";
import { motion } from "motion/react"

const NuraWorks = () => {
  return (
    <div id="about" className="bg-[#EDEDED] lg:px-5 pt-30">
      <Container maxWidth={false}>
        <div>
          <motion.div  transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} className="text-center capitalize pb-10 font-bold lg:text-[48px] md:text-[30px] text-[#25D363] text-[24px] leading-[120%] ">
            How Bizzie Works
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 pb-20 gap-5 lg:gap-0 ">
            <motion.div  transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} className="bg-[#EDF5FE] px-5">
              <NuraWorksCard
              bg={'bg-[#386EAF]'}
              text_colo={'text-[#386EAF]'}
                image={"/icon 1.svg"}
                text1={"Chat with Bizie on WhatsApp"}
                text2={
                  " Simply send us a message and our smart business assistant will instantly respond."
                }
              />
            </motion.div>
            <motion.div  transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} className="bg-[#FAF3E6] px-5">
              {" "}
              <NuraWorksCard
                bg={'bg-[#CC8A00]'}
              text_colo={'text-[#CC8A00]'}
                image={"/icon 2.svg"}
                text1={"Get What You Need Super Fast"}
                text2={
                  " Bizzie instantly delivers templates, forms, expert advice, and trusted service connections."
                }
              />{" "}
            </motion.div>
            <motion.div  transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} className="bg-[#F9F7F7] px-5">
              {" "}
              <NuraWorksCard
                bg={'bg-[#636060]'}
              text_colo={'text-[#636060]'}
                image={"/icon 3.svg"}
                text1={"Grow Your Business"}
                text2={
                  " Bizzie helps you find opportunities, connect with trusted providers, and grow your business."
                }
              />
            </motion.div>
            <motion.div  transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} className="bg-[#E9FBEF] px-5">
              {" "}
              <NuraWorksCard
                bg={'bg-[#25D363]'}
              text_colo={'text-[#25D363]'}
                image={"/icon 4.svg"}
                text1={"Access Bizzie from Web or WhatsApp"}
                text2={
                  " Whether you prefer WhatsApp or our powerful web app, Bizzie gives you full control."
                }
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NuraWorks;
