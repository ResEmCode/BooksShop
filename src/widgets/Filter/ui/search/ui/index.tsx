'use client';

import { useState } from 'react';

import { SearchIcon } from '@/src/shared/svgs';

import s from './index.module.scss';

const Search = () => {
  const [value, setValue] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={s.search}>
      <input onChange={onChange} placeholder='Введите название книги...' value={value} />
      <SearchIcon />
    </div>
  );
};

export default Search;
