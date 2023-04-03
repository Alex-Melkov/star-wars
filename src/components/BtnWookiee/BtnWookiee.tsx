import React from 'react';
import Wookiee from '../../images/wookiee.png';

import styles from './BtnWookiee.module.scss';

const BtnWookiee = () => {
  return (
    <button className={styles.btnWookiee}>
      <img src={Wookiee} width="70" height="70" alt="Wookiee" />
    </button>
  )
}

export default BtnWookiee;