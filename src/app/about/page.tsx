import React from 'react';

import About from '@/components/About';
import Experience from '@/components/Experience';
import Navbar from '@/components/Navbar';

export default function Page() {
  return (
    <>
      <Navbar />
      <div className='bg-black text-white flex flex-col justify-center items-start px-24 pb-16'>
        <About />
        <Experience />
      </div>
    </>
  );
}
