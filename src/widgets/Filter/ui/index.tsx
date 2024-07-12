import React from 'react'
import s from './index.module.scss'
import Search from './search'
import Sort from './sort'

const Filter = () => {
  return (
    <div className={s.filter}>
      <Search />
      <Sort />
    </div>
  )
}

export default Filter
