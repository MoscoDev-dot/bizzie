"use client";

import React, { useState } from "react";
import NavImage from "./NavImage";
import NavLinks from "./NavLinks";
import NavButton from "./NavButton";
import Link from "next/link";
import BlackButton from "./BlackButton";
import { motion } from "motion/react"

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -25, opacity: 0 }} //ANNIMATIONS
         animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
      className="w-full  bg-white lg:px-5  ">
        <div
        
          className="flex items-center justify-between px-6 py-4"
        >
          <NavImage />
          {/* Hamburger Icon */}
          <button
            className="lg:hidden flex items-center px-3 py-2 border rounded text-[#25D363] border-[#25D363]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* Desktop Links */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <NavLinks />
          </div>
          <div className="hidden lg:flex gap-4 ml-auto">
             <BlackButton link={'#'} text={' Start on whatsapp'} />
            <NavButton link={'#'} text={'Login'} />
           
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden px-6 pb-4">
            <div className="flex lg:justify-center ">
              <ul className="flex flex-col lg:flex-row  text-[#333333] font-medium md:text-[18px] text-[12px] leading-[120%]  gap-5">
                <Link
                  href="#about"
                  className="hover:border-b"
                  onClick={() => setMenuOpen(false)}
                >
                  <li>About us</li>
                </Link>
                <Link
                  href="#features"
                  className="hover:border-b"
                  onClick={() => setMenuOpen(false)}
                >
                  <li>Features</li>
                </Link>
                <Link
                  href="#faq"
                  className="hover:border-b"
                  onClick={() => setMenuOpen(false)}
                >
                  <li>FAQs</li>
                </Link>
                
              </ul>
            </div>
            <div className="flex flex-row  gap-4 mt-4">
               <BlackButton text={' Start on whatsapp'} />
              <NavButton text={'Login'} />
             
            </div>
          </div>
        )}
      </motion.nav>
    </>
  );
};

export default NavBar;
