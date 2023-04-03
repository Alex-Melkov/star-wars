import React from 'react';
import Star from '../../images/death-star.png';

import styles from './NotFound.module.scss';
import BtnNav from '../../components/BtnNav/BtnNav';

const NotFound: React.FC = () => {
  return (
    <div className={styles.wrapper}> 
      <div className={styles.notFoundContainer}>
        <div className={styles.text}>404</div>
        <img src={Star} className={styles.deathStar} alt="Death Star" />
      </div>
      <div className={styles.btnBlock}>
        <BtnNav children="Return" backgroundColor="#73D677" path="/" />
      </div>
    </div>
  )
}

export default NotFound;