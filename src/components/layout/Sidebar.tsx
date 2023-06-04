import { useRouter } from 'next/router';
import { BsFillQuestionCircleFill } from 'react-icons/bs';

import BaseLink from '@/components/links/BaseLink';
import clsxm from '@/lib/clsxm';

export const sideBarItems = [
  { label: 'Create Next App', href: '/docs' },
  { label: 'Prettier', href: '/docs/prettier' },
  { label: 'ESlint', href: '/docs/eslint' },
  { label: 'Typescript ESLint', href: '/docs/typescript' },
  { label: 'Husky & Lint-staged', href: '/docs/husky' },
  { label: 'Commit Conventional', href: '/docs/commit' },
  { label: 'Script', href: '/docs/script' },
  { label: 'Unit Testing', href: '/docs/unit-testing' },
  { label: 'Workspace Config', href: '/docs/workspace' },
];

export default function Sidebar() {
  const router = useRouter();
  return (
    <div className='sidebar-layout sticky top-[4rem] hidden h-[calc(100vh-4rem)] overflow-y-clip bg-base-navbar md:block'>
      <div className='relative h-full w-full p-4'>
        <ul className='w-full space-y-1'>
          {sideBarItems.map((nav, index) => (
            <li
              key={index}
              className={clsxm(
                'rounded px-3 py-1.5 text-[.9rem] leading-[1.35rem] text-theme-nav',
                'hover:bg-base-navbarhover hover:text-theme-navhover',
                router.asPath === nav.href && [
                  'bg-theme-saxe bg-opacity-20 text-theme-lightsaxe',
                  'hover:bg-theme-saxe hover:bg-opacity-20 hover:text-theme-lightsaxe',
                ]
              )}
            >
              <BaseLink href={nav.href} className='w-full'>
                <div>{nav.label}</div>
              </BaseLink>
            </li>
          ))}
        </ul>
        <div className='absolute bottom-2 left-0 w-full space-y-4 p-4'>
          <div className='h-[.8px] w-full bg-base-navbarhover'></div>
          <BaseLink
            target='_blank'
            href="mailto:zhafrandzaky@gmail.com?subject=Regarding%20your%20website&body=Hello,%0D%0A%0D%0AI'm contacting you regarding..."
            className='flex items-center gap-x-2 px-3 py-1.5 text-[.9rem] leading-[1.35rem] text-theme-nav'
          >
            <BsFillQuestionCircleFill />
            <span>Ask me</span>
          </BaseLink>
        </div>
      </div>
    </div>
  );
}
