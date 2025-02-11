import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className='fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[27%] bg-neutral-900 backdrop-blur-md shadow-lg rounded-2xl p-3 flex justify-center items-center z-50'>
      <nav className='flex space-x-10'>
        <Link href='/'>
          <p className='text-white hover:text-neutral-300 transition'>Home</p>
        </Link>
        <Link href='/about'>
          <p className='text-white hover:text-neutral-300 transition'>About</p>
        </Link>
        <Link href='/projects'>
          <p className='text-white hover:text-neutral-300 transition'>
            Projects
          </p>
        </Link>
        <Link href='/contact'>
          <p className='text-white hover:text-neutral-300 transition'>
            Contact
          </p>
        </Link>
      </nav>
    </nav>
  );
}
