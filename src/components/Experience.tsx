import React from 'react';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Avalon AI',
    timeline: 'Nov 2024 - Present',
    location: 'Surabaya, Indonesia',
    logo: '/images/avalon.jpg',
    tasks: [
      'Contributor in a collaborative project with Matahari to develop an AI-based fashion and beauty application (on-going)',
      'Integrasi frontend dengan backend API.',
      'Optimasi performa dan aksesibilitas aplikasi.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'BetaU',
    timeline: 'Jun 2024 - Present',
    location: 'Surabaya, Indonesia',
    logo: '/images/betau.jpg',
    tasks: [
      '[Tugas pertama yang dilakukan]',
      '[Tugas kedua yang dilakukan]',
      '[Tugas ketiga yang dilakukan]',
    ],
  },
];

export default function Experience() {
  return (
    <section className='w-full mt-16'>
      <h2 className='text-4xl font-bold mb-8'>Experiences</h2>
      <div className='flex flex-col gap-6'>
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className='bg-neutral-900 text-white border border-neutral-800 p-4 flex'
          >
            <div className='flex flex-row gap-20'>
              <p className='text-lg text-neutral-400 flex justify-start items-start'>
                {exp.timeline}
              </p>
              <div className='flex gap-4'>
                <Avatar>
                  <AvatarImage src={exp.logo} />
                </Avatar>
                <div className='flex flex-col justify-start'>
                  <h3 className='text-xl font-semibold'>
                    {exp.role} @ {exp.company}
                  </h3>
                  <p className='text-neutral-400'>{exp.location}</p>
                  <CardContent className='p-0 mt-5'>
                    <ul className='list-disc list-inside space-y-2 text-neutral-300'>
                      {exp.tasks.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
