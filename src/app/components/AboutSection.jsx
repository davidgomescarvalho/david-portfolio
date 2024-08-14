/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useTransition, useState } from 'react'
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>Ruby on Rails</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>MongoDB</li>
        <li>SQlite</li>
        <li>Bootstrap</li>
        <li>Figma</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>Le Wagon - Paris -2024</li>
        <li>Le Reacteur - Paris -2023</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className='list-disc pl-2'>
        <li> Titre RNCP Concepteur développeur d’applications web</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white' id="about">
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/about-me.png" alt="About me" width={500} height={500} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4 mt-6'>About Me</h2>
          <p className='text-base lg:text-lg'>
            I was a chef for over 10 years. From now on I made a
            professional change to become a web developer.
            I'm keen to promote my skills and
            join a professional team, I am currently working on
            personal projects to put my knowledge into practice.
            My ambition now is to be part of a company
            which I can bring innovative and fresh ideas and
            also gain a deeper understanding to navigate
            in this dynamic and rapidly evolving field.
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
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === 'education'}
            >
              {" "}
              Education
              {" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === 'certifications'}
            >
              {" "}
              Certifications
              {" "}
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
