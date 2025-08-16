// app/blog/page.tsx

import HeroSection from "@/components/home/HeroSection";
import LatestBlogsLanding from "@/components/home/LatestBlogsLanding";
import React from "react";

// ✅ SEO Metadata
export const metadata = {
  title: "Car Finance Blogs & Tips | Esteem Finance NZ",
  description:
    "Explore expert blogs from Esteem Finance. Get insights on car loans, calculating repayments, preowned car finance, and smart vehicle financing tips in NZ.",
  metadataBase: new URL("https://www.esteemfinance.co.nz"),
  alternates: {
    canonical: "https://www.esteemfinance.co.nz/blogs",
  },
  keywords: [
    "car finance blogs",
    "car loan tips NZ",
    "calculate car loan guide",
    "preowned car loan advice",
    "vehicle finance articles",
    "Esteem Finance blog",
  ],
};


export default function Page() {
  const data = {
    title: "Our Latest Blogs",
    description:
      "At Esteem Finace Car Loans, we understand that buying a car is more than just a purchase—it’s a milestone. That’s why we are committed to providing the most hassle-free, transparent, and affordable car loan solutions tailored to your credit profile.",
    image: "/images/heroCar.png",
    link: "/",
  };

  return (
    <div>
      <HeroSection
        title={data.title}
        description={data.description}
        link={data.link}
        image={data.image}
        textShow={true}
        slug="blog"
      />
      {/* <LatestNews /> */}
      <LatestBlogsLanding />
    </div>
  );
}

export const revalidate = 60;
