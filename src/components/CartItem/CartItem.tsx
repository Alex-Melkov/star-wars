import React from 'react';

import styles from './CartItem.module.scss';
import { useGetCharacterQuery } from '../../redux/Characters/characterApi';

type CartItemPropsType = {
    onOpen: () => void;
    itemId: number;
};

const CartItem: React.FC<CartItemPropsType> = ( {onOpen, itemId} ) => {
    const { data, isSuccess, isFetching, isError} = useGetCharacterQuery(`${itemId}`);
    let color = data?.gender as string;

    if (isFetching) {
        return <h1>Загрузка</h1>
    }

  return (
    <div onClick={onOpen} className={styles.cartItemContainer}>
        <div className={styles.cartItemName}>
            <h3>{data?.name}</h3>
        </div>
        <div className={styles.cartItemParams}>
            <div className={styles.paramsItem}>
                <div className={styles.paramsItemValue}><p>{data?.height}</p></div>
                <p className={styles.paramsItemName}>height</p>
            </div>
            <div className={styles.paramsItem}>
                <div className={styles.paramsItemValue}><p>{data?.mass}</p></div>
                <p className={styles.paramsItemName}>mass</p>
            </div>
        </div>
        <div className={styles.cartItemInformation}>
            <div className={styles[color]} style={{display: `${data?.gender === 'n/a' ? 'none' : 'block'}`}}>{data?.gender}</div>
            <div className={styles.age} style={{display: `${data?.birth_year === 'unknown' ? 'none' : 'block'}`}}>{data?.birth_year}</div>
        </div>
    </div>
  )

}

export default CartItem;