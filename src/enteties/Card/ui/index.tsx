import React from 'react';
import Link from 'next/link';

import s from './index.module.scss';

const Card = () => {
  return (
    <div className={s.card}>
      <img width={267.5} height={150} />
      <h3 className={s.title}>Книга о ...</h3>
      <p className={s.desc}>Описание: Эта книга о..., в ней есть ...</p>
      <div className={s.footer}>
        <div className={s.info}>
          <p>Автор: Username</p>
          <p>Цена: 12 $</p>
        </div>
        <div className={s.actions}>
          <Link href='/'>
            <button>Купить</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
