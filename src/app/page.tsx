// app/page.tsx
import CarSearchBanner from "@/components/home/CarSearchBanner";
import Challenges from "@/components/home/Challenges";
import ContactSectionLanding from "@/components/home/ContactSectionLanding";
import EmiCalculator from "@/components/home/EmiCalculator";
import FAQLanding from "@/components/home/FAQsLanding";
import LatestBlogsLanding from "@/components/home/LatestBlogsLanding";
import LoanBanner from "@/components/home/LoanBanner";
import OurPartners from "@/components/home/OurPartners";
import SearchCars from "@/components/home/SearchCars";
import Testimonials2 from "@/components/home/Testimonials2";
import LandingHeroSection from "@/components/landingpage/LandingHeroSection";
import OurSimpleProcess from "@/components/landingpage/OurSimpleProcess";
import OverComesLanding from "@/components/landingpage/OverComesLanding";
import WhyEsteeemLanding from "@/components/landingpage/WhyEsteeemLanding";

export const metadata = {
  title: "Car Finance NZ: Calculate your Car Loan | Esteem Finance",
  description:
    "Calculate your car loan in NZ with Esteem Finance. Apply online for preowned car loans at low rates and get quick approval for your next vehicle.",
  metadataBase: new URL("https://www.esteemfinance.co.nz"),
  alternates: {
    canonical: "https://www.esteemfinance.co.nz/why-us",
  },
  keywords: [
    "car loan",
    "car finance",
    "calculate car loan",
    "apply preowned car loan",
  ],
};

const HomePage = () => {
  return (
    <div>
      <LandingHeroSection />
      <OurPartners />
      <OurSimpleProcess />
      <OverComesLanding />
      <EmiCalculator />
      <WhyEsteeemLanding />
      <SearchCars />
      <FAQLanding />
      <Testimonials2 />
      <LatestBlogsLanding />
      <ContactSectionLanding />
    </div>
  );
};

export default HomePage;
