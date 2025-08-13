"use client";
import { getFaqs } from "@/utils/server";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsDash } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

export default function FAQLanding() {
  const [openIndex, setOpenIndex] = useState<number>(0); // First FAQ open by default
  const [data, setData] = useState<any>();
  useEffect(() => {
    const getFaqsData = async () => {
      const { data } = await getFaqs();
      setData(data);
    };
    getFaqsData();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };
  const content = [
    {
      question: "How do I apply for finance in New Zealand?",
      answer:
        "Fill out our quick online application in under 2 minutes. We’ll review your details and present the most suitable options, including low interest vehicle finance and no deposit auto loans.",
    },
    {
      question: "Can I get finance with bad credit?",
      answer:
        "Yes. We work with lenders offering bad credit car loans tailored to your circumstances.",
    },
    {
      question: "What documentation is required?",
      answer:
        "A valid New Zealand driver’s licence, proof of income, and proof of address are generally all you need.",
    },
    {
      question: "How quickly will I know if I’m approved?",
      answer:
        "Most approvals happen within 24 hours, often the same day.",
    },
    {
      question: "Do I have to choose a specific car?",
      answer:
        "No. You can finance almost any pre-owned car from our trusted dealer network.",
    },
  ];

  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <Image
            alt="FAQ's for car loan"
            src={"/assets/faqlanding.svg"}
            width={100}
            height={100}
            className="w-full"
          />
        </div>
        <div className="lg:col-span-3">
          <h3 className="font-[alexandria] text-gray-800 text-3xl font-semibold mb-8">
            Freqently asked questions
          </h3>
          {content &&
            content.map((faq: any, index: any) => (
              <div
                key={index}
                className={`rounded-2xl border border-gray-300 mb-4 ${openIndex === index && "bg-[#F9F9FB]"
                  }`}
              >
                <button
                  className={`w-full text-left p-4 rounded flex justify-between items-center  ${" text-gray-700"}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-[fustat] text-gray-900 font-thin text-lg ">
                    {faq?.question ||
                      "Do you have financing plans for purchasing cars?"}
                  </span>
                  <span className="text-base font-semibold rounded-full flex items-center justify-center p-2 border border-gray-300">
                    {openIndex === index ? (
                      <SlArrowUp width={16} height={16} />
                    ) : (
                      <SlArrowDown width={20} height={20} />
                    )}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden text-[#252525] text-xs ${openIndex === index ? "max-h-40 p-6 pt-0  " : "max-h-0 p-0"
                    }`}
                >
                  {openIndex === index && (
                    <p className="text-base font-[fustat] text-gray-800  ">
                      {faq?.answer ||
                        "Yes, we have flexible and competitive finance arrangements. Our easy application process ensures a quick response, so you can drive away in your new car without delay. View our finance page for details or apply for finance online."}
                    </p>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
