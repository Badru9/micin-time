// src/components/Navbar.tsx
import React from 'react';
import { Link } from '@heroui/react';

interface NavbarProps {
  isMainPage?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isMainPage = false }) => {
  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg shadow-sm py-4 px-8 flex justify-between items-center'>
      {/* Logo */}
      <Link href='/'>
        {/* <span className='font-sans font-bold text-primary text-xl md:text-2xl'>
          MicinTime
        </span> */}

        <img src='/logo.png' alt='logo-micintime' className='h-10' />
      </Link>

      {/* Navigasi Kanan */}
      <div className='flex items-center space-x-6 md:space-x-8'>
        <Link
          href={isMainPage ? '#' : '/'}
          className='font-semibold text-lg text-accent hover:text-primary transition-colors duration-200'
        >
          Home
        </Link>
        <Link
          href={isMainPage ? '#recipes' : '/menu-list'}
          className='font-semibold text-lg text-gray-400 hover:text-primary transition-colors duration-200'
        >
          Recipes
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
