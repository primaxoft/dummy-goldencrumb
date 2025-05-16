import { RiAsterisk, RiInstagramLine, RiYoutubeLine, RiTiktokLine, RiFacebookLine } from '@remixicon/react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-foreground">
      <footer className="max-container flex flex-col gap-6 px-4 py-6 text-white">
        <div className="flex flex-col items-center gap-8">
          <div className="text-primary-500 flex items-center gap-1 text-2xl font-bold">
            <RiAsterisk className="text-secondary-500" />
            goldencrumb.
          </div>
          <nav className="flex flex-col items-center gap-12">
            <div className="flex flex-col gap-2">
              <strong className="text-primary-500 p-2">Company</strong>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="#" className="block p-2">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block p-2">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <strong className="text-primary-500 p-2">Company</strong>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="#" className="block p-2">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block p-2">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="p-2.5">&copy; {new Date().getFullYear()} Goldencrumb.</div>
            <div className="flex gap-2.5 pr-2">
              <RiInstagramLine size={26} />
              <RiYoutubeLine size={26} />
              <RiTiktokLine size={26} />
              <RiFacebookLine size={26} />
            </div>
          </div>
          <div className="self-center text-sm">
            Design by{' '}
            <a href="https://primaxoft.com" className="hover:underline" target="_blank">
              Primaxoft
            </a>{' '}
            &hearts;
          </div>
        </div>
      </footer>
    </div>
  );
}
