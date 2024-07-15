'use client';

import { Header } from '@/src/widgets';
import Stats from '@/src/widgets/Stats';

import s from './Profile.module.scss';

const Profile = () => {
  return (
    <div className={s.container}>
      <Header />
      <div className={s.user}>
        <div className={s.user_block}>
          <img
            className={s.avatar}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSptPGSNaOiSoh1QUmzzaVts8auSzZ3hXUPjw&s'
            alt=''
          />
          <div className={s.user_info}>
            <h2 className={s.name}>Nickname</h2>
            <p>Пол: Мужской</p>
            <p>Возраст: 1488</p>
            <p>Любимые жанры: хоррор, детектив, мистика, боевики, бла-бла-бла</p>
          </div>
        </div>
        <div className={s.user_about}>
          <h4 className={s.user_about_text}>About me</h4>
          <div className={s.user_text}>
            LormeSDafghfgddddddddddddddddddddddddddddddddddfdscgdvhbnm,bnbvncgfdfghnhmnb
          </div>
        </div>
      </div>
      <Stats />
    </div>
  );
};

export default Profile;
