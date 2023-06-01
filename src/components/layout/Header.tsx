import { useRouter } from 'next/router';
import * as React from 'react';
import { HiLightningBolt, HiOutlineMenu } from 'react-icons/hi';

import DesktopNav from '@/components/layout/DesktopNav';
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
  const router = useRouter();

  const links = [
    { label: 'Docs', href: '/get-started' },
    { label: 'Blog', href: '/blog' },
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
  ];

  return (
    <>
      <header
        className={clsxm(
          'sticky top-0 z-50 transition-shadow',
          'border-b border-base-subtle'
        )}
      >
        <div
          className={clsxm(
            'bg-theme-dark',
            !isShift && 'bg-opacity-75 backdrop-blur'
          )}
        >
          <nav className='flex min-h-[4rem] items-center justify-between px-6 md:px-16'>
            <div className='flex items-center gap-x-4 font-medium'>
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
          'absolute top-[4rem] z-10 w-full bg-base-navbar transition-transform duration-300 md:hidden',
          !showNav && '-translate-y-[calc(100%+4rem)]'
        )}
      >
        <ul className={clsxm('w-full space-y-1 px-6 py-4')}>
          {links.map((link) => (
            <li key={link.label}>
              <BaseLink
                href={link.href}
                onClick={handleNavbar}
                className={clsxm(
                  'text-sm text-theme-nav md:text-[15px]',
                  'group hover:text-theme-navhover',
                  router.asPath === link.href && 'text-theme-saxe'
                )}
              >
                <div className='rounded px-3 py-1.5 group-hover:bg-base-navbarhover'>
                  {link.label}
                </div>
              </BaseLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
