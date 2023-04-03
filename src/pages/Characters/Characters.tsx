import React from 'react';

import Cart from '../../components/Cart/Cart';
import Sort from '../../components/Sort/Sort';
import Paginate from '../../components/Paginate/Paginate';
import BtnWookiee from '../../components/BtnWookiee/BtnWookiee';

import styles from './Characters.module.scss';

const Characters: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.charactersContainer}>
        <div className={styles.language}>
          <p>language: en</p>
        </div>
        <div className={styles.title}>
          <h2><span>60 Peoples</span> for you to choose your favorite</h2>
        </div>
        <Sort />
        <Cart />
        <Paginate />
        <BtnWookiee />
      </div>
    </div>
  )
}

export default Characters;