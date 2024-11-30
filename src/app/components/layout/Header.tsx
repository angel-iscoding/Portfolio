'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm ">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
            <div className="flex space-x-4 items-center">
                <Link href="/" className="text-sm">
                    angeliscoding@gmail.com
                </Link>
                <button className="bg-white text-black px-4 py-2 rounded-full">copy</button>
                <button className="bg-white text-black px-4 py-2 rounded-full">cv</button>
            </div>
          <div className="space-x-3">
            <a href="">Linkedln /</a>
            <a href="">Instagram /</a>
            <a href="">Github</a>
          </div>
        </nav>
      </div>
    </header>
  );
} 