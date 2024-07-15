import React from 'react';

import Search from './search';
import Sort from './sort';

import s from './index.module.scss';

const Filter = () => {
  return (
    <div className={s.filter}>
      <Search />
      <Sort />
    </div>
  );
};

export default Filter;
