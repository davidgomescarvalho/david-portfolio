/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-[#EEEEEE] mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span>Hello, I&apos;m </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "David",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#EEEEEE] text-base sm:text-lg mb-6 lg:text-xl">
            I am a commited web developer with a robust foundation in both
            front-end and back-end technologies, acquired through intensive
            bootcamp experiences at "Le Wagon" and "Le Reacteur". This past
            year, I have acquired a strong command over modern web development
            languages and frameworks.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#EEEEEE] hover:bg-[#4E9F3D] text-black">
              <Link
                href={"/visual-id.pdf"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visual Identity
              </Link>
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-[#1E5128] text-white border border-white mt-3">
              <Link
                href={"/CV-david-gomes.pdf"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Curriculum Vitae
              </Link>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          div
          className="col-span-5 place-self-center mt-4 lg:text-xl"
        >
          <div className="rounded-full bg-[white] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/david-profile.png"
              alt="Profile picture"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
