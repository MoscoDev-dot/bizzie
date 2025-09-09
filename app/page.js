import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import NuraCore from "@/components/NuraCore";
import NuraWorks from "@/components/NuraWorks";
import { Pointer } from "@/components/magicui/pointer";

export default function Home() {
  return (
    <div className="cursor-none  ">
      <NavBar />
      <Hero />
      <NuraWorks />
      <NuraCore />
      <Faq />
      <Footer />
      <Pointer />
      <Pointer />
    </div>
  );
}
