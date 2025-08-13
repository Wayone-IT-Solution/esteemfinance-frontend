"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const OurPartners = () => {
  const clients = [
    { id: 1, name: "anz", logo: "/assets/client/newclient/client1.png" },
    { id: 2, name: "kiwi", logo: "/assets/client/newclient/client2.png" },
    { id: 3, name: "tsb", logo: "/assets/client/newclient/client3.png" },
    { id: 4, name: "westpac", logo: "/assets/client/newclient/client4.png" },
    { id: 5, name: "client5", logo: "/assets/client/newclient/client5.png" },
  ];

  // Duplicate the list to create a seamless effect
  const repeatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="relative w-full overflow-hidden bg-white py-4">
      <div className="w-full lg:w-4/6 m-auto  text-center lg:p-14 relative">
        <h2 className="text-gray-900 text-2xl font-[alexandria] font-semibold mb-2">
          Flexible Car Loan Options across New Zealand
        </h2>
        <p className="text-gray-700 font-[cabin]">
          We offer transparent and flexible vehicle financing solutions that work for everyone. Whether you're a first-time buyer or require bad credit auto funding, our team helps Kiwis access the right car financing with competitive rates and expert guidance. From low interest car loans to no deposit vehicle finance, we customise each solution to your needs.
        </p>
        <Image
          priority
          src="/assets/leftspring.png"
          alt="Wave Decoration"
          width={1920} // Adjust width accordingly
          height={300} // Adjust height accordingly
          className="w-20 h-auto absolute hidden md:inline-block top-20 -left-5 z-10"
        />
        <Image
          priority
          src="/assets/rightspring.png"
          alt="Wave Decoration"
          width={1920} // Adjust width accordingly
          height={300} // Adjust height accordingly
          className="w-20 h-auto absolute hidden md:inline-block top-20 -right-5 z-10"
        />
      </div>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 35, // Adjust speed here
          }}
        >
          {/* Repeated content twice for seamless scroll */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex space-x-4">
              {repeatedClients.map((client, index) => (
                <div
                  key={`${i}-${index}`}
                  className="flex-shrink-0 rounded-lg overflow-hidden"
                >
                  <Image
                    src={client.logo}
                    width={300}
                    height={100}
                    alt={`${client.name}`}
                    unoptimized
                    className="object-contain h-20 w-fit p-2"
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurPartners;
