import { RiArrowRightLine } from '@remixicon/react';
import Marquee from 'react-fast-marquee';

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-12 px-4 py-6">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <div className="rounded-full border border-b-2 px-4 py-0.5">🌾 Local Ingredients</div>
              <div className="border-foreground rounded-full border border-b-2 px-4 py-0.5">🥖 Fresh Daily</div>
            </div>
            <h1 className="max-w-xs text-5xl leading-[3.25rem] font-bold">
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
          <div className="flex items-center gap-4">
            <div className="flex">
              <img src="/images/person1.webp" alt="Person 1" className="h-11 w-11 rounded-full" />
              <img src="/images/person2.webp" alt="Person 2" className="-ml-2.5 h-11 w-11 rounded-full" />
              <img src="/images/person3.webp" alt="Person 3" className="-ml-2.5 h-11 w-11 rounded-full" />
            </div>
            Baked by the best
          </div>
        </div>
        <img src="/images/curry-puff.webp" alt="Curry puff" className="aspect-square rounded-3xl object-cover" />
      </section>
      <Marquee className="flex gap-10 border-y bg-white py-2 text-2xl font-bold">
        🎉 Get 10% off your first order — sign up for our newsletter today!
      </Marquee>
      <section className="bg-primary-100 flex flex-col gap-8 px-4 py-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl leading-[3.25rem] font-bold">Baked Fresh, Loved Always</h2>
          <p className="text-justify text-lg leading-[1.5rem] font-bold text-neutral-800">
            From crusty sourdough to buttery croissants and locally inspired treats, every item on our menu is
            handcrafted with care and passion. Take a peek at our signature bakes — made fresh every day, just for you.
          </p>
        </div>
        <div className="bg-foreground grid grid-cols-1 gap-px p-px">
          <div className="bg-primary-100 flex flex-col">
            <div className="flex items-center justify-center">
              <img src="/images/product1.webp" alt="Product 1" className="h-72 w-72 rounded-3xl" />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <div>
                <h3 className="font-bold">🥖 Signature Sourdough</h3>
                <strong>RM 10.99</strong>
                <p className="text-sm text-neutral-800">Naturally leavened with a crisp crust and soft, tangy crumb.</p>
              </div>
              <button className="bg-secondary-500 border-foreground flex items-center justify-center gap-2 rounded-full border border-b-4 px-4 py-3 font-bold text-white">
                Add to Cart
                <RiArrowRightLine size={20} />
              </button>
            </div>
          </div>
          <div className="bg-primary-100 flex flex-col">
            <div className="flex items-center justify-center">
              <img src="/images/product2.webp" alt="Product 2" className="h-72 w-72 rounded-3xl" />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <div>
                <h3 className="font-bold">🥖 Signature Sourdough</h3>
                <strong>RM 10.99</strong>
                <p className="text-sm text-neutral-800">Naturally leavened with a crisp crust and soft, tangy crumb.</p>
              </div>
              <button className="bg-secondary-500 border-foreground flex items-center justify-center gap-2 rounded-full border border-b-4 px-4 py-3 font-bold text-white">
                Add to Cart
                <RiArrowRightLine size={20} />
              </button>
            </div>
          </div>
          <div className="bg-primary-100 flex flex-col">
            <div className="flex items-center justify-center">
              <img src="/images/product3.webp" alt="Product 3" className="h-72 w-72 rounded-3xl" />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <div>
                <h3 className="font-bold">🥖 Signature Sourdough</h3>
                <strong>RM 10.99</strong>
                <p className="text-sm text-neutral-800">Naturally leavened with a crisp crust and soft, tangy crumb.</p>
              </div>
              <button className="bg-secondary-500 border-foreground flex items-center justify-center gap-2 rounded-full border border-b-4 px-4 py-3 font-bold text-white">
                Add to Cart
                <RiArrowRightLine size={20} />
              </button>
            </div>
          </div>
          <div className="bg-primary-100 flex flex-col">
            <div className="flex items-center justify-center">
              <img src="/images/product4.webp" alt="Product 4" className="h-72 w-72 rounded-3xl" />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <div>
                <h3 className="font-bold">🥖 Signature Sourdough</h3>
                <strong>RM 10.99</strong>
                <p className="text-sm text-neutral-800">Naturally leavened with a crisp crust and soft, tangy crumb.</p>
              </div>
              <button className="bg-secondary-500 border-foreground flex items-center justify-center gap-2 rounded-full border border-b-4 px-4 py-3 font-bold text-white">
                Add to Cart
                <RiArrowRightLine size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
