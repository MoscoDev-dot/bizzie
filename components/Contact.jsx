"use client"
import React from "react";
import BlackButton from "./BlackButton";
import NavButton from "./NavButton";
import { motion } from "motion/react"

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col !overflow-y-hidden rounded-[20px] w-fit mx-auto bg-[#25D363] mt-30 justify-center  md:p-25 p-10 align-center  contact-bg ">
        <div>
          <motion.p
           transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          className="text-[#ffffff] text-center  font-bold md:text-[48px] text-[15px] leading-[120%]">
            Your next business move <br /> is one chat away.
          </motion.p>
          <motion.p 
          transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          className="font-medium md:text-[24px] pt-3 text-[12px] text-[#ffffff] leading-[120%] text-center ">
            Trusted by 5,000+ Nigerian entrepreneurs
          </motion.p>
        </div>
        <div className="flex justify-center flex-row gap-5 py-4">
          <motion.div  transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} >
            <NavButton link={'https://wa.me/12193552916'} target={"_blank"} text={"Start on Whatsapp"} />
          </motion.div>
          <motion.div  transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} >
            <BlackButton link={'#'} text={"Explore on web"} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
