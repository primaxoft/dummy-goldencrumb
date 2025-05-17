import { RiAsterisk } from '@remixicon/react';

export default function Section3() {
  return (
    <section className="max-container flex flex-col gap-6 py-6 sm:gap-8 sm:py-16">
      <div className="flex flex-col gap-6">
        <h2 className="text-secondary-500 flex items-center gap-3 text-6xl font-bold">
          About Us <RiAsterisk size={54} className="text-primary-500" />
        </h2>
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-40">
          <strong className="text-lg text-nowrap">
            From The Community
            <br />
            to The Community
          </strong>
          <p className="text-justify text-lg font-bold text-neutral-800">
            Golden Crumb Bakery was born from a Malaysian baker’s dream and a love for French baking traditions. After
            training in France, our founder returned home to bring artisanal sourdough and pastries to the heart of
            Petaling Jaya. We believe in using locally sourced ingredients, time-honored techniques, and a whole lot of
            heart in everything we bake.
          </p>
        </div>
      </div>
      <img src="/images/cafe.webp" alt="People at a cafe" className="h-[25rem] rounded-3xl object-cover" />
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
        <h4 className="text-secondary-500 text-justify text-4xl font-bold sm:order-1">
          &ldquo;Rooted in tradition, crafted with heart — every loaf tells our story.&rdquo;
        </h4>
        <img src="/images/cookies-square.webp" alt="Cookies on a table" className="rounded-3xl sm:w-80" />
      </div>
      <div className="py-8: grid grid-cols-1 items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center gap-4">
          <div className="text-secondary-500 p-2.5 text-4xl font-bold">100+</div>
          <div className="text-primary-500 p-2.5 text-xl font-bold">Projects Completed</div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="text-secondary-500 p-2.5 text-4xl font-bold">30+</div>
          <div className="text-primary-500 p-2.5 text-xl font-bold">Satisfied Clients</div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="text-secondary-500 p-2.5 text-4xl font-bold">2</div>
          <div className="text-primary-500 p-2.5 text-xl font-bold">Offices</div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="text-secondary-500 p-2.5 text-4xl font-bold">100+</div>
          <div className="text-primary-500 p-2.5 text-xl font-bold">Projects Completed</div>
        </div>
      </div>
    </section>
  );
}
