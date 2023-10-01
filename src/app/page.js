import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F4F6F8] flex flex-col  ">
      <Hero />
      <Features />
      <HowItWorks />
    </main>
  );
}
