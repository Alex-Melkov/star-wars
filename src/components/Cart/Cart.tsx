import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import CartItem from '../CartItem/CartItem';

import styles from './Cart.module.scss';

type CartPropsType = {
    onOpen: () => void;
    count: number | undefined;
};

const Cart: React.FC<CartPropsType> = ( {onOpen, count = 0} ) => {
    let items = [...new Array(10)];
    
  return (
        <div className={styles.cartContainer}>
            {items.map((item, index) => (
                <CartItem onOpen={onOpen} key={index} itemId={index + 1} />
            ))}
        </div>
  )
}

export default Cart;