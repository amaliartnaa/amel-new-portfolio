'use client';

import { GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

import { Button } from '@/components/ui/button';

export default function Home() {
  const router = useRouter();

  return (
    <section className='w-full h-screen bg-black text-white flex flex-row justify-between items-center p-32'>
      <div className='flex flex-col gap-9'>
        <div className='justify-between gap-4'>
          <h1 className='text-7xl font-bold'>I'm Amel</h1>
          <p className='mt-4 text-lg'>
            A curious learner, aspiring Software Engineer from Indonesia
          </p>
        </div>
        <Button
          variant='outline'
          size='lg'
          className='bg-black hover:bg-neutral-950 hover:text-white border-neutral-700 w-36'
          onClick={() => router.push('/about')}
        >
          <p>More about me</p>
        </Button>
        <div className='flex flex-row gap-7'>
          <Link
            href='https://github.com/amaliartnaa'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GithubIcon size={25} className='text-white cursor-pointer' />
          </Link>
          <Link
            href='https://instagram.com/amaliartnaa'
            target='_blank'
            rel='noopener noreferrer'
          >
            <InstagramIcon size={25} className='text-white cursor-pointer' />
          </Link>
          <Link
            href='https://linkedin.com/in/amaliartnaa'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedinIcon size={25} className='text-white cursor-pointer' />
          </Link>
        </div>
      </div>
    </section>
  );
}
