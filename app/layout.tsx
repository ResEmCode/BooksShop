import type { Metadata } from 'next';

import Layout from '@/src/pages/Layout';

export const metadata: Metadata = {
  title: 'Books Shop',
  description: 'Библиотека с более чем 40 миллионами книг!'
};

type props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: props) => {
  return <Layout>{children}</Layout>;
};

export default RootLayout;
