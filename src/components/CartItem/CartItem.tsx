import React from 'react';

import styles from './CartItem.module.scss';

type ColorGenderType = {
    male: string;
    female: string;
    hermaphrodite: string
};

export const colorGender: ColorGenderType = {
    male: '#73D677',
    female: '#C956FF',
    hermaphrodite: '#F5DB13',
};

const CartItem: React.FC = () => {
  return (
    <div className={styles.cartItemContainer}>
        <div className={styles.cartItemName}>
            <h3>Jango Fett</h3>
        </div>
        <div className={styles.cartItemParams}>
            <div className={styles.paramsItem}>
                <div className={styles.paramsItemValue}><p>172</p></div>
                <p className={styles.paramsItemName}>height</p>
            </div>
            <div className={styles.paramsItem}>
                <div className={styles.paramsItemValue}><p>77</p></div>
                <p className={styles.paramsItemName}>mass</p>
            </div>
        </div>
        <div className={styles.cartItemInformation}>
            <div style={{backgroundColor: `${colorGender['hermaphrodite']}`}} className={styles.gender}>hermaphrodite</div>
            <div className={styles.age}>19BBY</div>
        </div>
    </div>
  )
}

export default CartItem;