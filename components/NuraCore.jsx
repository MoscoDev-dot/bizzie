"use client"
import { Container } from "@mui/material";
import React from "react";
import NuraCoreCard1 from "./NuraCoreCard1";
import NuraCoreCard2 from "./NuraCoreCard2";
import { motion } from "motion/react"

const NuraCore = () => {
  return (
    <div className="bg-[#EDEDED] lg:px-5 pb-15 pt-20">
      <Container maxWidth={false}>
        <div>
          <motion.div  transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} className="text-center capitalize text-[#25D363] pb-10 font-bold lg:text-[48px] md:text-[30px] text-[24px] leading-[120%] ">
            Bizzie Core Features
          </motion.div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <motion.div  transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} className="lg:col-span-2 rounded-[20px]  bg-[#130C3E1C]">
              <NuraCoreCard1
                text1={" Ready Made Business Docs, Done for You"}
                text2={
                  "Skip the stress of starting from scratch. Access 1,000+ professional  templates from business plans and contracts to HR policies, ready to customize and use instantly."
                }
              />
            </motion.div>
            <motion.div  transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} className="rounded-[20px]  bg-[#130C3E1C]">
              <NuraCoreCard2
                text1={"Instant Business Answers, 24/7"}
                text2={
                  "Got a question? Ask Nura’s AI-powered assistant and get accurate, actionable answers in seconds right on WhatsApp."
                }
              />
            </motion.div>
            <motion.div  transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} className="rounded-[20px]  bg-[#130C3E1C]">
              <NuraCoreCard1
                text1={" Expert Help, On Demand"}
                text2={
                  "Need a website? Legal advice? HR setup? Hire vetted experts for branding, legal, HR, IT, and more all in one place."
                }
              />
            </motion.div>
            <motion.div  transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} className="lg:col-span-2 rounded-[20px]  bg-[#130C3E1C]">
              <NuraCoreCard2
                text1={"Opportunities That Find You"}
                text2={
                  "Never miss your next big break. Get curated grants, events, and funding alerts tailored for Nigerian businesses delivered where you work."
                }
              />
            </motion.div>
            <motion.div  transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} className="lg:col-span-2 rounded-[20px]  bg-[#130C3E1C]">
              <NuraCoreCard1
                text1={" Businesses at Your Fingertips"}
                text2={
                  "Find and connect with nearby, verified businesses using our Google My Business integration. Disclaimer: Nura lists only. Verify before engaging."
                }
              />
            </motion.div>
            <motion.div  transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} className="rounded-[20px]  bg-[#130C3E1C]">
              <NuraCoreCard2
                text1={"Careers That Fit Your Ambition"}
                text2={
                  "Discover jobs, gigs, and growth opportunities matched to your skills whether you’re starting out or scaling up."
                }
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NuraCore;
