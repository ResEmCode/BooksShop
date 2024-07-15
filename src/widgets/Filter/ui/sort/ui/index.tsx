import { SortIcon } from '@/src/shared/svgs';

import s from './index.module.scss';

const Sort = () => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {};

  return (
    <div className={s.sort}>
      <button onClick={onClick}>По цене</button>
      <SortIcon />
    </div>
  );
};

export default Sort;
