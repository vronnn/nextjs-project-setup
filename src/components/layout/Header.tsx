import clsx from 'clsx';
import * as React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';

import BaseLink from '../links/BaseLink';

export default function Header() {
  const [isShift, setIsShift] = React.useState(false);
  const handleScroll = () => {
    setIsShift(window.pageYOffset == 0);
  };
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const links = [
    { label: 'Docs', href: '/get-started' },
    { label: 'Blog', href: '/blog' },
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
  ];

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 transition-shadow',
        'border-b border-base-subtle',
        !isShift && 'backdrop-blur'
      )}
    >
      <div className='bg-theme-dark'>
        <nav className='flex min-h-[4rem] items-center justify-between px-4 md:px-16'>
          <div className='flex items-center gap-x-4'>
            <BaseLink href=''>
              <HiLightningBolt size={25} className='text-theme-navhover' />
            </BaseLink>
            <div className='h-6 w-[.8px] rotate-12 bg-base-stealth'></div>
            <h2 className='text-xl text-theme-navhover'>vron</h2>
          </div>
          <ul className='flex items-center gap-x-6'>
            {links.map((link) => (
              <li key={link.label}>
                <BaseLink
                  href={link.href}
                  className={clsx(
                    'text-sm text-theme-nav md:text-[15px]',
                    'hover:text-theme-navhover'
                  )}
                >
                  {link.label}
                </BaseLink>
              </li>
            ))}
            <div className='flex gap-x-4'>
              <BaseLink openNewTab href='https://github.com/vronnn'>
                <FaGithub size={20} className='text-theme-navhover' />
              </BaseLink>
              <BaseLink
                openNewTab
                href='https://www.linkedin.com/in/zhafran-dzaky/'
              >
                <FaLinkedinIn size={20} className='text-theme-navhover' />
              </BaseLink>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
