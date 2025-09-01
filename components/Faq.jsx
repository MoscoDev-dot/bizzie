"use client";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Container } from "@mui/material";
import Contact from "./Contact";

const faqs = [
  {
    question: "How do i start using Bizzie?",
    answer: "Ask Bizzie"
        },
  {
    question: "What is Bizzie?",
    answer:"Ask  Bizzie"  
    },
  {
    question: "Is Bizzie available only in Nigeria?",
    answer: "Ask Bizzie",
  },
  {
    question: "How does Bizzie expert hiring work?",
    answer: "Ask Bizzie",
  },
  {
    question: "What are Bizzie Opportunities?",
    answer:"Ask Bizzie",
  },
  {
    question: "How do i contact support?",
    answer: "Ask Bizzie",
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
    <div className="bg-[#EDEDED] lg:px-10 pb-15 pt-20">
      <Container maxWidth={false}>
        <div>
          <div className="capitalize font-bold pb-8 lg:text-[48px] md:text-[30px] text-[15px] text-[#25D363] text-center leading-[120%] ">
            frequently asked question
          </div>
        </div>
        <hr className="text-[#000000] mx-5 py-2" />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" rounded-xl  px-4  cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-[12px] md:text-[24px]">{faq.question}</h3>
                {openIndex === index ? (
                  <ExpandLessIcon className="w-5 h-5 bg-[#000000] rounded-full  p-1 text-[#FFFFFF]" />
                ) : (
                  <ExpandMoreIcon className="w-5 h-5 bg-[#000000] rounded-full p-1 text-[#FFFFFF]" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-500 text-sm">{faq.answer}</p>
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
