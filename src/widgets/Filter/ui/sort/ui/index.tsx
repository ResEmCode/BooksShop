import s from './index.module.scss'
import {SortIcon} from '@/src/shared/svgs'

const Sort = () => {

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  }

  return (
    <div className={s.sort}>
      <button onClick={onClick}>
        По цене
      </button>
      <SortIcon />
    </div>
  )
}

export default Sort
