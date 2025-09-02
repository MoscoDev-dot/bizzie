"use client";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Container } from "@mui/material";
import Contact from "./Contact";
import { motion } from "motion/react"

const faqs = [
  {
    question: "How do i start using Bizzie?",
    answer: " Just click “Start Chatting” on our website or message us directly on WhatsApp. No downloads, no setup you can get your first answer or document within minutes."
        },
  {
    question: "What is Bizzie?",
    answer:" Bizzie is your AI-powered business assistant available on WhatsApp and Web. It helps you get business documents, expert services, funding opportunities, and market connections instantly. Think of it as a virtual business partner in your pocket."  
    },
  {
    question: "Is Bizzie available only in Nigeria?",
    answer: "Currently, we are focused on Nigerian businesses to ensure accurate opportunities, pricing, and compliance with local regulations. Expansion to other regions is in progress.",
  },
  {
    question: "How does Bizzie's expert hiring work?",
    answer: "When you request help (branding, legal, IT, HR, etc.), Bizzie connects you with pre-vetted, reliable service providers. You get quotes, review ratings, and hire right from WhatsApp or the dashboard.",
  },
  {
    question: "What are Bizzie's Opportunities?",
    answer:" A curated feed of grants, funding, competitions, and events relevant to Nigerian entrepreneurs updated daily so you never miss out.",
  },
  {
    question: "How do i contact support?",
    answer: "You can chat with Bizzie Support directly on WhatsApp or use the “Help & Support” section in your web dashboard.",
  },
  {
    question: "What if i needed a custom document or service not listed?",
    answer: "just ask Bizzie on whatsapp, we will either create it for you or link you to someone who can",
  },
    
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="bg-[#EDEDED] lg:px-10 pb-15 pt-20">
      <Container maxWidth={false}>
        <motion.div  transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} >
          <div className="capitalize font-bold pb-8 lg:text-[48px] md:text-[30px] text-[15px] text-[#25D363] text-center leading-[120%] ">
            frequently asked question
          </div>
        </motion.div>
        

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" rounded-xl  px-4  cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <motion.div  transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} className="flex justify-between items-center">
                <h3 className="font-bold text-[14px] md:text-[24px]">{faq.question}</h3>
                {openIndex === index ? (
                  <ExpandLessIcon className="w-5 h-5 bg-[#000000] rounded-full  p-1 text-[#FFFFFF]" />
                ) : (
                  <ExpandMoreIcon className="w-5 h-5 bg-[#000000] rounded-full p-1 text-[#FFFFFF]" />
                )}
              </motion.div>
              {openIndex === index && (
                <p className="mt-2 text-gray-500 md:text-[15px] text-[12px] ">{faq.answer}</p>
              )}
               <hr className="text-[#000000] mt-5" />
            </div>
          ))}
        </div>
       
         <Contact />
       
      </Container>
    </div>
  );
};

export default Faq;
