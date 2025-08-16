// app/contact/page.tsx
import React from "react";
import ContactHeroSection from "./components/ContactHeroSection";
import Map from "./components/Map";
import ContactSection2 from "./components/ContactSection2";
import WeAreHere from "./components/WeAreHere";

// ✅ Metadata function
export const metadata = {
  title: "Contact Esteem Finance | Car Loan Help & Support",
  description:
    "Get in touch with Esteem Finance for car loans, preowned car finance, or repayment queries. Our friendly NZ team is here to help with fast support.",
  metadataBase: new URL("https://www.esteemfinance.co.nz"),
  alternates: {
    canonical: "https://www.esteemfinance.co.nz/contact-us",
  },
  keywords: [
    "contact Esteem Finance",
    "car loan support NZ",
    "apply car loan help",
    "preowned car finance contact",
    "vehicle finance enquiries",
    "Esteem Finance contact",
  ],
};

export const revalidate = 60; // ISR if needed

export default function Page() {
  return (
    <div>
      <ContactHeroSection />
      <WeAreHere />
      <ContactSection2 />
      <Map />
    </div>
  );
}
