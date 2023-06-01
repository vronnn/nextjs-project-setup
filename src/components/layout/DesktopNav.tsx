import { useRouter } from 'next/router';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import BaseLink from '@/components/links/BaseLink';
import clsxm from '@/lib/clsxm';

export type NavItem = {
  label: string;
  href: string;
}[];

export type NavProp = {
  links: NavItem;
  className?: string;
};

export default function DesktopNav({ links, className }: NavProp) {
  const router = useRouter();
  return (
    <ul className={clsxm('hidden items-center gap-x-6 md:flex', className)}>
      {links.map((link) => (
        <li key={link.label}>
          <BaseLink
            href={link.href}
            className={clsxm(
              'text-sm text-theme-nav md:text-[15px]',
              'hover:text-theme-navhover',
              router.asPath === link.href && 'text-theme-navhover'
            )}
          >
            {link.label}
          </BaseLink>
        </li>
      ))}
      <div className='flex gap-x-4'>
        <BaseLink openNewTab href='https://github.com/vronnn'>
          <FaGithub
            size={20}
            className='text-theme-navhover hover:text-theme-nav'
          />
        </BaseLink>
        <BaseLink openNewTab href='https://www.linkedin.com/in/zhafran-dzaky/'>
          <FaLinkedinIn
            size={20}
            className='text-theme-navhover hover:text-theme-nav'
          />
        </BaseLink>
      </div>
    </ul>
  );
}
