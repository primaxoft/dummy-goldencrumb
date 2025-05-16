import Marquee from 'react-fast-marquee';
import Section1 from '@/app/Section1';
import Section2 from '@/app/Section2';
import Section3 from '@/app/Section3';

export default function Home() {
  return (
    <>
      <Section1 />
      <Marquee className="flex gap-10 border-y bg-white py-2 text-2xl font-bold">
        🎉 Get 10% off your first order — sign up for our newsletter today!
      </Marquee>
      <Section2 />
      <Section3 />
    </>
  );
}
