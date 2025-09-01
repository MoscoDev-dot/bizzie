import { Container } from "@mui/material";
import React from "react";
import NuraWorksCard from "./NuraWorksCard";

const NuraWorks = () => {
  return (
    <div className="bg-[#EDEDED] lg:px-5 pt-30">
      <Container maxWidth={false}>
        <div>
          <div className="text-center capitalize pb-10 font-bold lg:text-[48px] md:text-[30px] text-[#25D363] text-[24px] leading-[120%] ">
            How Bizzie Works
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 pb-20 gap-5 lg:gap-0 ">
            <div className="bg-[#EDF5FE] px-5">
              <NuraWorksCard
              bg={'bg-[#386EAF]'}
              text_colo={'text-[#386EAF]'}
                image={"/Vector (5).png"}
                text1={"Chat with Bizie on WhatsApp"}
                text2={
                  " Simply send us a message and our smart business assistant will instantly respond."
                }
              />
            </div>
            <div className="bg-[#FAF3E6] px-5">
              {" "}
              <NuraWorksCard
                bg={'bg-[#CC8A00]'}
              text_colo={'text-[#CC8A00]'}
                image={"/Vector (8).png"}
                text1={"Get What You Need Super Fast"}
                text2={
                  " Bizzie instantly delivers templates, forms, expert advice, and trusted service connections."
                }
              />{" "}
            </div>
            <div className="bg-[#F9F7F7] px-5">
              {" "}
              <NuraWorksCard
                bg={'bg-[#636060]'}
              text_colo={'text-[#636060]'}
                image={"/Vector (9).png"}
                text1={"Grow Your Business"}
                text2={
                  " Bizzie helps you find opportunities, connect with trusted providers, and grow your business."
                }
              />
            </div>
            <div className="bg-[#E9FBEF] px-5">
              {" "}
              <NuraWorksCard
                bg={'bg-[#25D363]'}
              text_colo={'text-[#25D363]'}
                image={"/Vector (10).png"}
                text1={"Access Bizzie from Web or WhatsApp"}
                text2={
                  " Whether you prefer WhatsApp or our powerful web app, Bizzie gives you full control."
                }
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NuraWorks;
