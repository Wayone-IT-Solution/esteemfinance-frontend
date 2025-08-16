// app/why-us/page.tsx (for example)

import CreditScore from "@/components/whyUs/CreditScore";
import HowWeWork from "@/components/whyUs/HowWeWork";
import WhyWeAreBest from "@/components/whyUs/WhyWeAreBest";
import ContactSection from "@/components/home/ContactSection";
import Faq from "@/components/support/Faq";
import WhyUsHeroSection from "@/components/whyUs/WhyUsHeroSection";
import OurPartners from "@/components/home/OurPartners";
import LoanBanner from "@/components/home/LoanBanner";
import Testimonials2 from "@/components/home/Testimonials2";

export const metadata = {
  title: "About Us / Esteem Finance",
  description:
    "Choose Esteem Finance for fast approvals, flexible terms, and transparent car loans. Trusted across New Zealand for simple, stress-free vehicle finance.",
  metadataBase: new URL("https://www.esteemfinance.co.nz"),
  alternates: {
    canonical: "https://www.esteemfinance.co.nz/why-us",
  },
  keywords: [],
};

const Page = () => {
  return (
    <div>
      <WhyUsHeroSection />
      <OurPartners />
      <CreditScore />
      <HowWeWork />
      <WhyWeAreBest />
      <LoanBanner />
      <Testimonials2 />
      <Faq />
      <ContactSection />
    </div>
  );
};

export default Page;

export const revalidate = 60;
