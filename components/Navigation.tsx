"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navigation: React.FC = () => {
  const router = usePathname();

  const isActive = (pathname: string) => router === pathname;

  const navLinks = [
    { path: '/markets', label: 'Home' },
    { path: '/trending', label: 'Trending' },
    { path: '/saved', label: 'Saved' },
  ];

  return (
    <nav aria-label="Main navigation" className="w-fit sm:w-[45%] mt-20 flex align-middle border border-[#AA0099] rounded-lg">
      {navLinks.map(({ path, label }) => (
        <Link href={path} key={path} legacyBehavior passHref>
          <a className={`w-1/3 px-2 py-1 text-base text-center m-2.5 ${
            isActive(path)
              ? 'bg-[#AA0099]  text-[#282c34]'
              : 'dark:bg-[#282c34] bg-[#e6e7ea] text-gray-700 dark:text-gray-300 hover:text-[#AA0099] active:bg-[#AA0099] active:text-gray-300'
          } border-0 cursor-pointer rounded capitalize font-semibold`} aria-current={isActive(path) ? 'page' : undefined}>
            {label}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
