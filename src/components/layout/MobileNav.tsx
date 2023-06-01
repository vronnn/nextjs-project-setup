import { NavProp } from '@/components/layout/DesktopNav';
import BaseLink from '@/components/links/BaseLink';
import clsxm from '@/lib/clsxm';

export default function MobileNav({ links, className }: NavProp) {
  return (
    <ul className={clsxm('w-full space-y-1 px-6 py-4', className)}>
      {links.map((link) => (
        <li key={link.label}>
          <BaseLink
            href={link.href}
            className={clsxm(
              'text-sm text-theme-nav md:text-[15px]',
              'group hover:text-theme-navhover'
            )}
          >
            <div className='rounded px-3 py-1.5 group-hover:bg-base-navbarhover'>
              {link.label}
            </div>
          </BaseLink>
        </li>
      ))}
      {/* <div className='flex gap-x-4'>
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
      </div> */}
    </ul>
  );
}
