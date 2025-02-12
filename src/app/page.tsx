'use client';

import * as React from 'react';
import '@/lib/env';

import Home from '@/components/Home';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <section className='bg-black'>
        <Home />
      </section>
    </>
  );
}
