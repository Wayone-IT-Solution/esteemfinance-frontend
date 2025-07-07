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
  title: "Car Finance NZ – Fast, Easy Loans | Esteem Finance",
  description:
    "Secure your dream car with Esteem Finance. Fast approvals, flexible terms, and no deposit car finance options across New Zealand. Apply online today!",
  metadataBase: new URL("https://www.esteemfinance.co.nz"),
  alternates: {
    canonical: "https://www.esteemfinance.co.nz/",
  },
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
