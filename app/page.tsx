import Marquee from 'react-fast-marquee';
import Section1 from '@/app/Section1';
import Section2 from '@/app/Section2';
import Section3 from '@/app/Section3';
import Section4 from '@/app/Section4';
import Section5 from '@/app/Section5';
import { RiAsterisk } from '@remixicon/react';

export default function Home() {
  return (
    <>
      <Section1 />
      <Marquee className="flex gap-10 border-y bg-white py-2 text-2xl font-bold">
        <div className="flex items-center gap-4">
          🎉 Get 10% off your first order — sign up for our newsletter today!{' '}
          <RiAsterisk className="text-secondary-500" />
        </div>
      </Marquee>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  );
}
