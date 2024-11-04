import React, { ReactNode } from 'react';

import './styles.scss';

interface HomeProps {
  children: ReactNode;
}

export function Home({ children }: HomeProps) {
  return (
    <>
      <h1>Home</h1>
      {children}
    </>
  );
}
