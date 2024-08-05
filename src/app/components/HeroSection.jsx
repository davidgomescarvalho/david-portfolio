import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return <section>
    <div className="grid grid-cols-1 sm:grid-cols-12">
      <div className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className="text-[#EEEEEE] mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">Hello, I&apos;m David</h1>
        <p className='text-[#EEEEEE] text-base sm:text-lg mb-6 lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aliquid eius totam, eum velit a suscipit laborum minus assumenda.
        </p>
        <div>
          <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#EEEEEE] hover:bg-slate-500 text-black">Hire Me</button>
          <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-400 text-white border border-white mt-3">Download CV</button>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:text-xl">
        <div className="rounded-full bg-[white] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src="/images/david-profile.png"
            alt="Profile picture"
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            width={300}
            height={300}
          />
        </div>

      </div>
    </div>

  </section>
}

export default HeroSection;
