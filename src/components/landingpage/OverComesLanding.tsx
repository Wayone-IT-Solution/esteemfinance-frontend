import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OverComesLanding() {
  const content = [
    {
      title: "Check Eligibility",
      description:
        "Access New Zealand’s and the world’s largest lenders with competitive rates",
      image: "/assets/over1.svg",
      alt: "Apply for car loan"
    },
    {
      title: "Select Your Car",
      description:
        "Apply online securely with innovative technology",
      image: "/assets/over2.svg",
      alt: "Get approval"
    },
    {
      title: "Documentation",
      description:
        "Get expert support to find the best low interest vehicle financing",
      image: "/assets/over3.svg",
      alt: "Low intrest rate for our car loan"
    },
    {
      title: "Get Your Car",
      description:
        "Flexible options for no deposit financing and bad credit auto loans",
      image: "/assets/over4.svg",
      alt: "Flexible options for car loan"
    },
  ];

  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 lg:pb-0 lg:pt-6">
      <div className="w-full m-auto  text-center mb-8">
        <h2 className="text-gray-900 text-2xl font-[alexandria] font-semibold mb-2">
          Apply for Car Finance Today
        </h2>
        <p className="text-gray-700 font-[cabin]">
          Browse through a wide range of cars that suit both your budget and
          specific needs. Our easy-to-use platform allows you to easily and
          conveniently browse through different options, making it easy for you
          to find the ideal car that meets your lifestyle and needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 w-full lg:w-4/5 m-auto">
        {content?.map((data, index) => (
          <div key={index} className="lg:p-4">
            <div className="flex justify-center mb-4">
              <Image
                alt={data?.alt}
                src={data?.image || "/assets/over1.svg"}
                width={100}
                height={100}
                className="w-full"
              />
            </div>
            <div className="flex items-center gap-2">
              <Image
                alt={data?.alt}
                src={"/assets/check.svg"}
                width={100}
                height={100}
                className="w-8 h-8"
              />
              <p className=" font-[cabin] text-sm  font-medium text-left m-auto text-gray-800">
                {data?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
