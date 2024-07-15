import { Pie } from 'react-chartjs-2';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';

import { data } from '../configs/StatsData';

import s from './Stats.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const Stats = () => {
  return (
    <div className={s.status}>
      <h2 className={s.status_title}>My stats</h2>
      <Pie className={s.genre} data={data} />
    </div>
  );
};

export default Stats;
