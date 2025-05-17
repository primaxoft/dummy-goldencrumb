import { RiAsterisk, RiArrowRightLine } from '@remixicon/react';

export default function Section5() {
  return (
    <section className="max-container flex flex-col gap-8 py-6 sm:py-16 md:flex-row">
      <img src="/images/cookies.webp" alt="Cookies" className="rounded-3xl md:max-w-sm md:self-center lg:max-w-lg" />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-secondary-500 flex gap-2 text-6xl font-bold">
            Keep Updated <RiAsterisk className="text-primary-500 sm:h-14 sm:w-14" size={120} />
          </h2>
          <p>
            Sign up to our newsletter for promotion and discount. Launch of new products bunch of fun stuff like that!
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <input className="rounded-md border border-neutral-500 px-4 py-2 font-sans" type="text" placeholder="Name*" />
          <input
            className="rounded-md border border-neutral-500 px-4 py-2 font-sans"
            type="text"
            placeholder="Phone*"
          />
          <input
            className="rounded-md border border-neutral-500 px-4 py-2 font-sans"
            type="text"
            placeholder="Email*"
          />
          <textarea
            className="resize-none rounded-md border border-neutral-500 px-4 py-2 font-sans"
            placeholder="Enter your message here*"
            rows={5}
          />
        </div>
        <button className="border-foreground bg-secondary-500 flex items-center justify-center gap-2 rounded-full border border-b-4 p-4 font-bold text-white">
          Sign Up
          <RiArrowRightLine size={20} />
        </button>
      </div>
    </section>
  );
}
