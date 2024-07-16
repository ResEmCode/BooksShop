'use client';

import { useState } from 'react';
import Link from 'next/link';

import s from './index.module.scss';

const Header = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className={s.header}>
      <Link href='/'>Books Shop</Link>
      {isAuth ? <Link href='/profile'>Username</Link> : <Link href='/login'>Вход</Link>}
    </div>
  );
};

export default Header;
