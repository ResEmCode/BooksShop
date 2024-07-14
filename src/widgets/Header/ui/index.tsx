'use client';

import Link from 'next/link';
import { useState } from 'react';
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
