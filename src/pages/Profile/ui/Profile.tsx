'use client';

import { Header } from '@/src/widgets';
import Stats from '@/src/widgets/Stats';

import s from './Profile.module.scss';

const Profile = () => {
  return (
    <div className={s.container}>
      <Header />
      <div className={s.user}>
        <div className={s.userBlock}>
          <img
            className={s.avatar}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSptPGSNaOiSoh1QUmzzaVts8auSzZ3hXUPjw&s'
            alt=''
          />
          <div className={s.userInfo}>
            <h2 className={s.name}>Nickname</h2>
            <p>Пол: Мужской</p>
            <p>Возраст: 1488</p>
            <p>Любимые жанры: хоррор, детектив, мистика, боевики, бла-бла-бла</p>
          </div>
        </div>
        <div className={s.userAbout}>
          <h4 className={s.userAboutText}>About me</h4>
          <div className={s.userText}>
            LormeSDafghfgddddddddddddddddddddddddddddddddddfdscgdvhbnm,bnbvncgfdfghnhmnb
          </div>
        </div>
      </div>
      <Stats />
    </div>
  );
};

export default Profile;
