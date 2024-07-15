import { Cards, Filter, Header } from '@/src/widgets'
import React from 'react'
import s from './index.module.scss'

type props = {
  params: {
    listId: string
  }
}

const List = ({params}: props) => {
  return (
    <div className={s.container}>
      <Header />
      <h1 className={s.title}>Название списка...</h1> {/* Потом данные будут браться с бекенда */}
      <Filter />
      <Cards limit={10} />
    </div>
  )
}

export default List
