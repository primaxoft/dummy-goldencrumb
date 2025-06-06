import { RiStarFill } from '@remixicon/react';

export default function Section4() {
  return (
    <div className="bg-secondary-500">
      <section className="max-container flex flex-col gap-8 py-6 sm:py-16">
        <h2 className="text-primary-500 text-center text-6xl font-bold">What our clients say</h2>
        <div className="flex flex-col flex-wrap gap-4 sm:flex-row sm:justify-center md:gap-8">
          <div className="text-primary-50 flex flex-col gap-4 rounded-3xl border p-4 sm:max-w-xs">
            <div className="flex items-start justify-between">
              <h4 className="text-lg font-bold">Albert Flores</h4>
              <img src="/images/person1.webp" alt="Person 1" className="h-11 w-11 rounded-full" />
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur. Ultrices sed maecenas ut consectetur. Eu imperdiet massa
              pellentesque netus.
            </div>
            <div className="flex gap-1 self-end">
              <RiStarFill size={12} />
              <RiStarFill size={12} />
              <RiStarFill size={12} />
              <RiStarFill size={12} />
              <RiStarFill size={12} />
            </div>
          </div>

          <div className="text-primary-50 flex flex-col gap-4 rounded-3xl border p-4 sm:max-w-xs">
            <div className="flex items-start justify-between">
              <h4 className="text-lg font-bold">Albert Flores</h4>
              <img src="/images/person2.webp" alt="Person 2" className="h-11 w-11 rounded-full" />
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur. Ultrices sed maecenas ut consectetur. Eu imperdiet massa
              pellentesque netus.
            </div>
            <div className="flex gap-1 self-end">
              <RiStarFill size={12} />
              <RiStarFill size={12} />
              <RiStarFill size={12} />
              <RiStarFill size={12} />
              <RiStarFill size={12} />
            </div>
          </div>

          <div className="text-primary-50 flex flex-col gap-4 rounded-3xl border p-4 sm:max-w-xs">
            <div className="flex items-start justify-between">
              <h4 className="text-lg font-bold">Albert Flores</h4>
              <img src="/images/person3.webp" alt="Person 3" className="h-11 w-11 rounded-full" />
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur. Ultrices sed maecenas ut consectetur. Eu imperdiet massa
              pellentesque netus.
            </div>
            <div className="flex gap-1 self-end">
              <RiStarFill size={12} />
              <RiStarFill size={12} />
              <RiStarFill size={12} />
              <RiStarFill size={12} />
              <RiStarFill size={12} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
