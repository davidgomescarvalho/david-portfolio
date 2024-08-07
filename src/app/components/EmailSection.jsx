/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from 'react'
import GithubIcon from '../../../public/github-logo.svg';
import LinkedInIcon from '../../../public/linkedin-logo.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    }
    const JSONdata = JSON.stringify(data);
    const endpoint = 'api/send';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSONdata,
    }
    const response = await fetch(endpoint, options);
    const resData = await response.json();
    if (response.status === 200) {
      console.log("Message sent successfully");
      setEmailSubmitted(true);
    }
  }
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
      <div
        className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-12 -translate-y-12'></div>
      <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>
          Let's Connect
        </h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          Hello!
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or contact me, I'll quickly get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/davidgomescarvalho">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/david-gomes-24548031a/">
            <Image src={LinkedInIcon} alt="LinkedIn Icon" />
          </Link>

        </div>
      </div>
      <div>
        <form className='dlex flex-col' onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label htmlFor="email"
              type="email"
              className='text-white block mb-2 text-sm font-medium'>
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className='bg-white border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='jondoe@email.com'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor="subject"
              type="subject"
              className='text-white block mb-2 text-sm font-medium'>
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className='bg-white border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='Type your subject here'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor="message"
              className='text-white block mb-2 text-sm font-medium'>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className='bg-white border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='Leave me a message here.'
            />
          </div>
          <button
            type='submit'
            className='bg-green-500 hover:bg-green-600 text-white font-meium py-2.5 px-5 rounded-lg w-full'>
            Send a Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default EmailSection
