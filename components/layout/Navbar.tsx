import { RiMenuLine, RiAsterisk } from '@remixicon/react';

export default function Navbar() {
  return (
    <div className="px-4 pt-4">
      <div className="flex items-center justify-between rounded-3xl border-2 p-4">
        <div className="text-primary-500 flex items-center gap-1 text-2xl font-bold">
          <RiAsterisk className="text-secondary-500" />
          goldencrumb.
        </div>
        <button className="p-1.5">
          <RiMenuLine size={24} />
        </button>
      </div>
    </div>
  );
}
