import React from 'react';
import CartItem from '../CartItem/CartItem';

import styles from './Cart.module.scss';

const Cart: React.FC = () => {
    let items = [...new Array(9)];

  return (
        <div className={styles.cartContainer}>
            {items.map((item, index) => (
                <CartItem key={index} />
            ))}
        </div>
  )
}

export default Cart;