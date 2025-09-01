import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import NuraCore from "@/components/NuraCore";
import NuraWorks from "@/components/NuraWorks";
import Image from "next/image";

export default function Home() {
  return (
    <div className="  ">
      <NavBar/>
      <Hero />
      <NuraWorks/>
      <NuraCore/>
      <Faq />
      <Footer/>
    </div>
  );
}
