import React from 'react';
import Cart from '../../components/Cart/Cart';
import Sort from '../../components/Sort/Sort';

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
      </div>
    </div>
  )
}

export default Characters;