import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';

import './globals.css';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Golden Crumb Bakery | Artisanal Bread & Pastries in Petaling Jaya',
  description:
    'Discover handcrafted sourdough, pastries & custom cakes at Golden Crumb Bakery in PJ. Made fresh daily with local ingredients. Order online for pickup or delivery!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
