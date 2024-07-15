import { Inter } from 'next/font/google';

import './index.scss';

const inter = Inter({ subsets: ['latin'] });

interface props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: props) => {
  return (
    <html lang='ru'>
      <body className={inter.className}>
        <div className='root'>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
