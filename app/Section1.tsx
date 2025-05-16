import { RiArrowRightLine } from '@remixicon/react';

export default function Section1() {
  return (
    <section className="max-container flex flex-col gap-12 py-6 sm:py-12 md:flex-row md:gap-16">
      <div className="flex flex-col gap-12 md:justify-between">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <div className="rounded-full border border-b-2 px-4 py-0.5">🌾 Local Ingredients</div>
              <div className="border-foreground rounded-full border border-b-2 px-4 py-0.5">🥖 Fresh Daily</div>
            </div>
            <h1 className="max-w-xs text-5xl leading-[3.25rem] font-bold sm:max-w-lg">
              Handcrafted with <span className="text-primary-500">Love</span> , Baked to{' '}
              <span className="text-secondary-500">Perfection</span> 🥖
            </h1>
            <p className="text-justify text-lg leading-[1.5rem] font-bold text-neutral-800">
              From sourdough loaves to delicate pastries, every bite tells a story of tradition, passion, and local
              goodness
            </p>
          </div>
          <div className="flex gap-2">
            <button className="bg-primary-50 flex items-center gap-2 rounded-full border border-b-4 px-4 py-3 font-bold">
              View Menu
              <RiArrowRightLine size={20} />
            </button>
            <button className="bg-secondary-500 border-foreground flex items-center gap-2 rounded-full border border-b-4 px-4 py-3 font-bold text-white">
              Order Now
              <RiArrowRightLine size={20} />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex">
            <img src="/images/person1.webp" alt="Person 1" className="h-11 w-11 rounded-full" />
            <img src="/images/person2.webp" alt="Person 2" className="-ml-2.5 h-11 w-11 rounded-full" />
            <img src="/images/person3.webp" alt="Person 3" className="-ml-2.5 h-11 w-11 rounded-full" />
          </div>
          Baked by the best
        </div>
      </div>
      <img src="/images/curry-puff.webp" alt="Curry puff" className="rounded-3xl md:max-w-[31.25rem]" />
    </section>
  );
}
