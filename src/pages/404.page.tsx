import { FiChevronRight } from 'react-icons/fi';
import { MdWbTwilight } from 'react-icons/md';

import BaseLink from '@/components/links/BaseLink';

export default function NotFoundPage() {
  return (
    <main>
      <section className='bg-theme-dark'>
        <div className='flex min-h-screen w-full flex-col items-center justify-center gap-y-2 text-theme-navhover'>
          <MdWbTwilight
            size={70}
            className='drop-shadow-glow animate-pulse text-red-500'
          />
          <h1 className='text-4xl font-extrabold'>Page Not Found</h1>
          <div className='group mt-2'>
            <div className='flex items-center'>
              <BaseLink
                href='/'
                className='text-lg tracking-wide text-theme-navhover'
              >
                Back to home
              </BaseLink>
              <FiChevronRight size={22} />
            </div>
            <div className='h-[.6px] w-full bg-base-stealth transition-colors duration-200 group-hover:bg-theme-nav'></div>
          </div>
        </div>
      </section>
    </main>
  );
}
