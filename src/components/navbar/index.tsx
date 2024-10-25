'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className='bg-white'>
      <div className='container mx-auto px-4 py-3'>
        <div className='hidden xl:grid items-center relative'>
          <div className='grid grid-cols-10 justify-center'>
            <div className='col-span-4 flex justify-end'>
              <Link href='#' className='hover:text-gray-700 mr-4 ml-4 flex items-center uppercase'>
                New in
              </Link>
              <Link href='#' className='hover:text-gray-700 mr-4 ml-4 flex items-center uppercase'>
                Inspo
              </Link>
              <Link href='#' className='hover:text-gray-700 mr-4 ml-4 flex items-center uppercase'>
                Shop
              </Link>
            </div>
            <div className='col-span-2 flex justify-center'>
              <Link href='#' className='mr-4 ml-4 flex items-center relative h-[60px] w-[170px]'>
                <Image
                  src={'/logo/ringz-thingz.png'}
                  alt='ringz thingz Logo'
                  fill={true}
                  sizes='100%'
                  className='object-contain'
                />
              </Link>
            </div>
            <div className='col-span-4 flex justify-start'>
              <Link href='#' className='hover:text-gray-700 mr-4 ml-4 flex items-center uppercase'>
                Outlet
              </Link>
              <Link href='#' className='hover:text-gray-700 mr-4 ml-4 flex items-center uppercase'>
                About
              </Link>
            </div>
          </div>

          <div className='flex space-x-8 items-center absolute right-0'>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className='hover:text-gray-700 items-center'
            >
              <Image src={'/icons/search.png'} width={22} height={22} alt='search icon' />
            </button>
            <button className='hover:text-gray-700 flex items-center'>
              <Image src={'/icons/heart.png'} width={22} height={22} alt='heart icon' />
            </button>
            <button className='hover:text-gray-700 flex items-center'>
              <Image
                src={'/icons/shopping-bag.png'}
                width={29}
                height={29}
                alt='shopping bag icon'
              />
            </button>
          </div>
        </div>

        <div className='xl:hidden flex justify-between items-center w-full'>
          <Link href='#' className='relative h-[60px] w-[170px]'>
            <Image
              src={'/logo/ringz-thingz.png'}
              alt='ringz thingz Logo'
              fill={true}
              className='object-contain'
              sizes='100%'
            />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='hover:text-gray-700 mr-4 ml-4 flex items-center'
          >
            <Image src={'/icons/menu.png'} width={29} height={29} alt='menu icon' />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className='xl:hidden bg-white'>
          <div className='flex flex-col space-y-4 p-4'>
            <Link href='#' className='hover:text-gray-700 mr-4 ml-4 uppercase'>
              New in
            </Link>
            <Link href='#' className='hover:text-gray-700 mr-4 ml-4 uppercase'>
              Inspo
            </Link>
            <Link href='#' className='hover:text-gray-700 mr-4 ml-4 uppercase'>
              Shop
            </Link>
            <Link href='#' className='hover:text-gray-700 mr-4 ml-4 uppercase'>
              Outlet
            </Link>
            <Link href='#' className='hover:text-gray-700 mr-4 ml-4 uppercase'>
              About
            </Link>

            <div className='flex space-x-8 items-center right-0'>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className='hover:text-gray-700 items-center'
              >
                <Image src={'/icons/search.png'} width={22} height={22} alt='search icon' />
              </button>
              <button className='hover:text-gray-700 flex items-center'>
                <Image src={'/icons/heart.png'} width={22} height={22} alt='heart icon' />
              </button>
              <button className='hover:text-gray-700 flex items-center'>
                <Image
                  src={'/icons/shopping-bag.png'}
                  width={29}
                  height={29}
                  alt='shopping bag icon'
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
