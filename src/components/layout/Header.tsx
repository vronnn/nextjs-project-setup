import clsx from 'clsx';
import * as React from 'react';
import { HiLightningBolt, HiOutlineMenu } from 'react-icons/hi';

import DesktopNav from '@/components/layout/DesktopNav';
import MobileNav from '@/components/layout/MobileNav';
import clsxm from '@/lib/clsxm';

import BaseLink from '../links/BaseLink';

export default function Header() {
  const [isShift, setIsShift] = React.useState(false);
  const [showNav, setShowNav] = React.useState(false);
  const handleScroll = () => {
    setIsShift(window.pageYOffset == 0);
  };
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavbar = () => {
    setShowNav(!showNav);
  };

  const links = [
    { label: 'Docs', href: '/get-started' },
    { label: 'Blog', href: '/blog' },
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
  ];

  return (
    <>
      <header
        className={clsx(
          'sticky top-0 z-50 transition-shadow',
          'border-b border-base-subtle',
          !isShift && 'backdrop-blur'
        )}
      >
        <div className='bg-theme-dark'>
          <nav className='flex min-h-[4rem] items-center justify-between px-6 md:px-16'>
            <div className='flex items-center gap-x-4'>
              <BaseLink href=''>
                <HiLightningBolt size={25} className='text-theme-navhover' />
              </BaseLink>
              <div className='h-6 w-[.8px] rotate-12 bg-base-stealth'></div>
              <BaseLink href='' className='text-xl text-theme-navhover'>
                vron
              </BaseLink>
            </div>
            <HiOutlineMenu
              size={28}
              className='cursor-pointer text-theme-navhover hover:text-theme-nav md:hidden'
              onClick={handleNavbar}
            />

            <DesktopNav links={links} />
          </nav>
        </div>
      </header>
      <div
        className={clsxm(
          'absolute top-[4rem] z-10 flex w-full bg-base-navbar transition-transform duration-300 md:hidden',
          showNav && '-translate-y-[calc(100%+4rem)]'
        )}
      >
        <MobileNav links={links} />
      </div>
    </>
  );
}
