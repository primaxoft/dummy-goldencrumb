import { RiArrowRightLine } from '@remixicon/react';

export default function Section2() {
  return (
    <div className="bg-primary-100">
      <section className="max-container flex flex-col gap-8 py-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl leading-[3.25rem] font-bold">Baked Fresh, Loved Always</h2>
          <p className="text-justify text-lg leading-[1.5rem] font-bold text-neutral-800">
            From crusty sourdough to buttery croissants and locally inspired treats, every item on our menu is
            handcrafted with care and passion. Take a peek at our signature bakes — made fresh every day, just for you.
          </p>
        </div>
        <ul className="bg-foreground grid grid-cols-1 gap-px p-px">
          <li className="bg-primary-100 flex flex-col">
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
          </li>
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
        </ul>
      </section>
    </div>
  );
}
