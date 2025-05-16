import { RiMenuLine, RiAsterisk, RiArrowRightLine } from '@remixicon/react';

export default function Navbar() {
  return (
    <div className="max-container pt-4 sm:pt-8">
      <div className="flex items-center justify-between rounded-3xl border-2 border-b-4 p-4 sm:px-6">
        <div className="text-primary-500 flex items-center gap-1 text-2xl font-bold">
          <RiAsterisk className="text-secondary-500" />
          goldencrumb.
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-4 font-bold text-neutral-800">
            <li>
              <a href="#" className="hover:text-foreground block p-2.5 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground block p-2.5 transition-colors">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground block p-2.5 transition-colors">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground block p-2.5 transition-colors">
                About
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <button className="bg-secondary-500 border-foreground hidden items-center gap-2 rounded-full border border-b-4 px-4 py-3 font-bold text-white sm:flex">
            Order Now
            <RiArrowRightLine className="h-5 w-5" />
          </button>
          <button className="p-1.5 md:hidden">
            <RiMenuLine className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>
        </div>
      </div>
    </div>
  );
}
