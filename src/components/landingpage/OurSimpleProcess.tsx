import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OurSimpleProcess() {
  const content = [
    {
      title: "Check Your Eligibility",
      description:
        "In just 2 minutes, check if you qualify for a vehicle loan and get instant results to move one step closer to approval.",
      image: "/assets/pro4.svg",
      alt: "Check Eligiblity for car loan"
    },
    {
      title: "Choose Your Pre-Owned Car",
      description:
        "Select from a wide network of trusted vendors offering pre-owned vehicles that suit your style, budget, and needs. Apply with ease and confidence.",
      image: "/assets/pro1.svg",
      alt: "Get pre-owned car"
    },
    {
      title: "Complete Your Paperwork",
      description:
        "Submit your New Zealand driver's licence, proof of income, and proof of address — we’ll handle the rest for a smooth process.",
      image: "/assets/pro2.svg",
      alt: "Paperwork for car loan"
    },
    {
      title: "Receive Approval and Drive Your Car",
      description:
        "Get quick approval and drive away in your pre-owned vehicle. Whether it’s a compact hatchback or a spacious SUV, Esteem Finance ensures a smooth delivery experience.",
      image: "/assets/pro3.svg",
      alt: "Get approval"
    },
  ];

  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 lg:pb-4 lg:pt-4">
      <div className="w-full lg:w-3/5 m-auto  text-center mb-8">
        <h2 className="text-gray-900  text-2xl font-[alexandria] font-semibold mb-2">
          Simple and Secure Car Loan Application Process        </h2>
        <p className="text-gray-700 font-[cabin]">
          Our vehicle finance process in New Zealand is so quick and easy that you can get behind the wheel fast, with complete clarity and expert support every step of the way.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {content?.map((data, index) => (
          <div
            key={index}
            className="bg-[#E5E5E5]/70 rounded-xl shadow-md p-4 py-12"
          >
            <div className="flex justify-center mb-4">
              <Image
                alt={data?.alt}
                src={data?.image || "/assets/pro1.svg"}
                width={100}
                height={100}
                className="w-full h-44"
              />
            </div>
            <p className="text-gray-900 text-center text-xl font-[alexandria] font-medium relative mb-4">
              {data?.title}
              {/* <span className="w-8 h-8 rounded-full p-2 bg-blue-300/50 absolute left-5 top-1/2 -translate-y-1/2"></span> */}
            </p>
            <p className=" font-[cabin] text-base/7 font-thin text-center m-auto text-gray-500">
              {data?.description}
            </p>
          </div>
        ))}
      </div>
      <Link
        href={"/apply-loan"}
        className="bg-[#1262A1] w-1/2 lg:w-1/6 hover:bg-gray-400 transition-colors ease-in-out px-6 lg:px-10 py-3 flex justify-center items-center font-[poppins] h-11 text-base lg:text-sm m-auto rounded-lg"
      >
        Apply Now
      </Link>
    </div>
  );
}
