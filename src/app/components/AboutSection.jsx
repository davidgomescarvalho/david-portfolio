/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useTransition, useState } from 'react'
import Image from "next/image";
import TabButton from "./TabButton";

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  }
  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/about-me.png" alt="About me" width={500} height={500} />
        <div>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
          Je suis un développeur web engagé avec de bases solides en technologies front-end et back-end,
          acquises grâce à des expériences intensives de bootcamp au "Le Wagon" et au "Le Reacteur".
          Ayant désormais envie de valoriser mes compétences et de rejoindre une équipe professionnelle,
          je travaille actuellement sur des projets personnels pour mettre en pratique mes connaissances.
          Mon ambition est maintenant de faire partie d'une entreprise à laquelle je peux apporter des idées
          innovantes et fraîches et également acquérir une compréhension plus profonde pour naviguer dans ce
          domaine dynamique en évolution rapide.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
             selectTab={() => handleTabChange("skills")}
              active={tab === 'skills'}
            >
              {" "}
              Skills
              {" "}
            </TabButton>
            <span className='mr-3 font-semibold hover:text-white text-[#D8E9A8] border-b border-green-500'>Skills</span>
            <span>Education</span>
            <span>Experience</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
