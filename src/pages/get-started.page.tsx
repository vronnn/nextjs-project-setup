import * as React from 'react';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import Layout from '@/components/layout/Layout';
import clsxm from '@/lib/clsxm';
import CreateAppPage from '@/pages/docs/create-app.page';

const sideBarItems = [
  { label: 'Create Next App', page: <CreateAppPage /> },
  { label: 'Prettier', page: <CreateAppPage /> },
  { label: 'ESlint', page: <CreateAppPage /> },
  { label: 'Typescript ESLint', page: <CreateAppPage /> },
  { label: 'Husky & Lint-staged', page: <CreateAppPage /> },
  { label: 'Commit Conventional', page: <CreateAppPage /> },
  { label: 'Script', page: <CreateAppPage /> },
  { label: 'Unit Testing', page: <CreateAppPage /> },
  { label: 'Workspace Config', page: <CreateAppPage /> },
];

export default function GetStartedPage() {
  const [active, setActive] = React.useState(0);
  const handlePrev = () => {
    setActive(active - 1);
  };
  const handleNext = () => {
    setActive(active + 1);
  };
  return (
    <Layout>
      <main className='bg-theme-dark text-white'>
        <section className='mx-auto min-h-[calc(100vh-4rem)] max-w-[1440px]'>
          <div className='flex h-[calc(100vh-4rem)] w-full overflow-y-clip'>
            <div className='relative w-[22rem] overflow-y-auto bg-base-navbar p-4'>
              <ul className='space-y-1'>
                {sideBarItems.map(({ label }, index) => (
                  <li
                    key={index}
                    onClick={() => setActive(index)}
                    className={clsxm(
                      'rounded px-3 py-1.5 text-[.9rem] leading-[1.35rem] text-theme-nav',
                      'hover:bg-base-navbarhover hover:text-theme-navhover',
                      active === index &&
                        'bg-theme-saxe bg-opacity-20 text-theme-lightsaxe'
                    )}
                  >
                    {label}
                  </li>
                ))}
              </ul>
              <div className='absolute bottom-6 w-full space-y-4'>
                <div className='h-[.8px] w-full bg-base-navbarhover'></div>
                <div className='flex items-center gap-x-2 px-3 py-1.5 text-[.9rem] leading-[1.35rem] text-theme-nav'>
                  <BsFillQuestionCircleFill />
                  <span>Ask me</span>
                </div>
              </div>
            </div>
            <div className='w-full overflow-y-auto px-16 py-6'>
              {sideBarItems[active].page}
              <div className='h-[.8px] w-full bg-base-navbarhover'></div>
              <div className='flex justify-between py-6'>
                <div
                  onClick={handlePrev}
                  className='flex cursor-pointer items-center gap-x-1 text-lg font-medium'
                >
                  {active !== 0 && (
                    <>
                      <FiChevronLeft size={20} />
                      <span>{sideBarItems[active - 1].label}</span>
                    </>
                  )}
                </div>
                <div
                  onClick={handleNext}
                  className='flex cursor-pointer items-center gap-x-1 text-lg font-medium'
                >
                  {active !== 8 && (
                    <>
                      <span>{sideBarItems[active + 1].label}</span>
                      <FiChevronRight size={20} />
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className='w-72'></div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
