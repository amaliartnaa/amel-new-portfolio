'use client';

import React from 'react';
import { BiLogoTypescript } from 'react-icons/bi';
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress } from 'react-icons/si';

export default function About() {
  return (
    <section className='w-full min-h-screen bg-black text-white flex flex-col justify-center items-start gap-8'>
      <div className='max-w-3xl space-y-4'>
        <h1 className='text-5xl font-bold'>Ratna Amalia Azzahra</h1>
      </div>
      <div className='max-w-3xl space-y-4 text-neutral-400'>
        <p>
          Hello! You can call me{' '}
          <span className='font-bold text-white'>Amel</span>. I'm currently
          studying Information Systems at the Institut Teknologi Sepuluh
          Nopember (ITS) in Surabaya, Indonesia.
        </p>
        <p>
          At first, I wasn’t sure which area of technology I wanted to focus on.
          But in 2023, I discovered my passion for web development, particularly
          frontend development. While pursuing my degree and sharpening my
          software development skills, I’ve also been actively involved in
          extracurricular activities, including student organizations and event
          committees. Through these experiences, I’ve had the opportunity to
          contribute by building websites needed for the committees I was part
          of.
        </p>
        <p>
          Over time, I’ve developed a strong preference for certain tech stacks,
          which have become my go-to tools:
        </p>
      </div>
      <div className='flex flex-row gap-6'>
        <RiNextjsFill
          size={35}
          className='text-white hover:text-gray-500 hover:scale-110 transition-all duration-200'
        />
        <BiLogoTypescript
          size={35}
          className='text-white hover:text-blue-500 hover:scale-110 transition-all duration-200'
        />
        <RiReactjsFill
          size={35}
          className='text-white hover:text-cyan-500 hover:scale-110 transition-all duration-200'
        />
        <RiTailwindCssFill
          size={35}
          className='text-white hover:text-cyan-300  hover:scale-110 transition-all duration-200'
        />
        <SiExpress
          size={35}
          className='text-white hover:text-gray-500  hover:scale-110 transition-all duration-200'
        />
      </div>
    </section>
  );
}
