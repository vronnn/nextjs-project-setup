import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Sidebar from '@/components/layout/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <main className='bg-theme-dark text-white'>
        <section className='dashboard-layout'>
          <div className='dashboard-shadow flex w-full overflow-y-clip'>
            <Sidebar />
            {children}
          </div>
        </section>
      </main>
    </Layout>
  );
}
