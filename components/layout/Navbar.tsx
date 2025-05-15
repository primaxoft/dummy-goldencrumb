import Link from 'next/link';
import { RiMenuLine, RiAsterisk, RiArrowRightLine } from '@remixicon/react';

export default function Navbar() {
  return (
    <div className="px-4 pt-4">
      <div className="flex flex-col gap-2 rounded-3xl border-2 p-4">
        <div className="text-primary-500 flex items-center justify-center gap-1 text-2xl font-bold">
          <RiAsterisk className="text-secondary-500" />
          goldencrumb.
        </div>
        <div className="flex items-center justify-between">
          <button className="p-1.5">
            <RiMenuLine size={24} />
          </button>
          <Link
            href="#"
            className="bg-secondary-500 border-foreground flex items-center gap-1 rounded-full border border-b-4 px-4 py-1.5 font-bold text-white"
          >
            Order Now
            <RiArrowRightLine size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
