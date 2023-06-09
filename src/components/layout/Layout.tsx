import * as React from 'react';

import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-theme-dark'>
      <Header />
      {children}
    </div>
  );
}
