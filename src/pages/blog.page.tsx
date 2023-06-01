import AOS from 'aos';
import * as React from 'react';

import Layout from '@/components/layout/Layout';

export default function GetStartedPage() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout>
      <main className='bg-theme-dark text-white'>
        <section className='layout min-h-screen space-y-6 py-12'>
          <div className='space-y-6'>
            <h1 className='text-center text-3xl font-bold leading-none md:text-[2.75rem]'>
              Blog
            </h1>
            <p className='text-center font-light text-theme-nav md:text-lg'>
              The latest update and change to this setup repo
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
