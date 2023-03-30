import React from 'react';
import BtnNav from '../../components/BtnNav/BtnNav';
import Yoda from '../../images/yoda.png';
import Cloud from '../../images/cloud.png';
import Ellipse from '../../images/ellipse.png';

import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.homeContainer}>
        <div className={styles.homeText}>
          <div className={styles.homeTitle}>
            <h1><span>Find</span> all your favorite <span>character</span></h1>
          </div>
          <div className={styles.homeBody}>
            <h2>You can find out all the information about your favorite characters</h2>
          </div>
          <BtnNav children="See more..." backgroundColor="#FFC107" path="/characters" />
        </div>
        <div className={styles.homeBanner}>
            <img className={styles.yoda} src={Yoda} alt="Yoda" width="558.77px" height="558.68px" />
          <img className={styles.cloudBig} src={Cloud} alt="Cloud" width="343.35px" height="164.59px" />
          <img className={styles.cloudMini} src={Cloud} alt="Cloud" width="223.88px" height="107.22px" />
          <img className={styles.ellipse} src={Ellipse} alt="Ellipse" width="174.97px" height="18.81px" />
        </div>
      </div>
    </div>
  )
}

export default Home;