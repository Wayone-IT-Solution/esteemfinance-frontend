// app/solutions/page.tsx (if it's under /solutions route)

import ContactSection from "@/components/home/ContactSection";
import Faq from "@/components/support/Faq";
import { lexendDeca } from "@/data/font";
import React from "react";
import LoanSolution from "@/components/whyUs/LoanSolution";
import LoanApproval from "@/components/whyUs/LoanApproval";
import WhyChoose from "@/components/home/WhyChoose";
import SolutionHeroSection from "./components/SolutionHeroSection";
import LoanBanner from "@/components/home/LoanBanner";
import Testimonials2 from "@/components/home/Testimonials2";
import LatestBlogs from "@/components/home/LatestBlogs";

// ✅ App Router SEO setup

export const metadata = {
  title: "Car Finance Solutions NZ | Esteem Finance",
  description:
    "Explore Esteem Finance’s car loan solutions in NZ. Flexible terms, fast approvals, and tailored options to get you behind the wheel faster.",
  metadataBase: new URL("https://www.esteemfinance.co.nz/solution"),
  alternates: {
    canonical: "https://www.esteemfinance.co.nz/solution",
  },
};

const Page = () => {
  return (
    <div className={lexendDeca.className}>
      <SolutionHeroSection />
      <LoanApproval />
      <LoanSolution />
      <LoanBanner />
      <WhyChoose />
      <Testimonials2 />
      <LatestBlogs />
      <Faq />
      <ContactSection />
    </div>
  );
};

export default Page;

export const revalidate = 60;
