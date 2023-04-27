import React from 'react';

import CartModal from '../CartModal/CartModal';

import styles from './Mask.module.scss';

type MaskPropsType = {
    open: boolean;
    onClose: () => void;
};

const Mask: React.FC<MaskPropsType> = ( {open, onClose} ) => {
  return (
    <React.Fragment>
    <div onClick={onClose} className={open ? styles.maskedVisible : styles.masked}></div>
    {open && <CartModal onClose={onClose} />}
    </React.Fragment>
  )
}

export default Mask;