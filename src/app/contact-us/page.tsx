// app/contact/page.tsx
import React from "react";
import ContactHeroSection from "./components/ContactHeroSection";
import Map from "./components/Map";
import ContactSection2 from "./components/ContactSection2";
import WeAreHere from "./components/WeAreHere";

// ✅ Metadata function
export const metadata = {
  title: "Contact Esteem Finance – Car Loan Experts NZ",
  description:
    "Contact Esteem Finance for all your car loan needs in NZ. Get expert advice, fast support & hassle-free car finance solutions.",
  metadataBase: new URL("https://www.esteemfinance.co.nz/contact-us"),
  alternates: {
    canonical: "https://www.esteemfinance.co.nz/contact-us",
  },
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
