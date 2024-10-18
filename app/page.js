"use client"

import { useEffect } from "react";
import Navbar from "@/components/Home/Navbar";
import Hero from "@/components/Home/Hero";
import Service from "@/components/Home/Service";
import Footer from "@/components/Home/Footer";
import AboutSection from "@/components/Home/AboutSection";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  return (
    <main className="">
      <Navbar />
      <Hero />
      <AboutSection />
      <Service />
      <Footer />
    </main>
  );
}
