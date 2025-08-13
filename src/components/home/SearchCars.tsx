import { data } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function SearchCars() {
  const content = [
    {
      description:
        "Leveraging technology, intellectual resources and partnerships, Esteem can bring most cost-effective car finance solutions to customers.",
    },
    {
      description:
        "Esteem's subject matter experts analyze and recommend unbiased finance solution pertinent to the needs and wants of customers by providing bottom line statistics.",
    },
    {
      description: "Esteem can provide wider vendor options to choose from.",
    },
    {
      description: "Fastest turn around time for finance process.",
    },
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-20 bg-gradient-to-r from-[#FFC37D30]/20 via-[#76E4D58A]/50 to-[#83C2F480]/50">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <h2 className="text-gray-900 text-4xl lg:text-5xl leading-10 capitalize font-[alexandria] font-semibold mb-8">
            <span className="mb-3 inline-block">Apply Online for the</span> <br />
            <span className="inline-block">Best Vehicle Finance</span>
          </h2>
          <p className="text-gray-700 font-[cabin] font-medium w-full lg:w-5/6 mb-8">
            Finding the Right Vehicle with Our Experts From compact cars to SUVs, we help you compare and choose the right fit. Whether you're applying for pre-owned auto finance or seeking a low interest car loan, <Link target="blank" href={'https://www.instagram.com/esteemfinance/'}>Esteem Finance</Link> gets you on the road quickly.

          </p>

          <div className="flex justify-start items-center gap-1 lg:gap-4 ">
            <Link
              href={"/apply-loan"}
              className="bg-[#1262A1] hover:bg-gray-400 transition-colors ease-in-out flex items-center font-[poppins] px-2 py-2.5 lg:px-6 lg:py-4 h-12 lg:h-auto  p-0 text-[10px] lg:text-sm font-medium rounded-md"
            >
              Get Your Vehicle Finance Today
            </Link>
            <button className="rounded-md py-2.5 h-12 lg:h-auto px-2.5 text-gray-900 text-3xl bg-transparent border-[1.5px] border-[#ff8e42]">
              <IoIosArrowForward width={16} height={16} />
            </button>
            <button className="hidden text-gray-900 h-14 text-xs lg:text-base font-semibold font-[alexandria] ">
              {"Learn More"}
            </button>
          </div>
        </div>
        <div className="col-span-2">
          <Image
            alt="Apply online for car loan"
            src={"/assets/searchcar.svg"}
            width={100}
            height={100}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
