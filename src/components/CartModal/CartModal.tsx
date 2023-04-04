import React from 'react';
import Hermaphrodite from '../../images/avatar/hermaphrodite.png';
import Male from '../../images/avatar/male.png';
import Female from '../../images/avatar/female.png';
import Close from '../../images/close.png';

import { colorGender } from '../CartItem/CartItem';

import styles from './CartModal.module.scss';

type CartModalProps = React.HTMLProps<HTMLDivElement>;

const CartModal = React.forwardRef<HTMLDivElement, CartModalProps>((props, modalRef) => {
  return (
    <div className={styles.wrapper}>
      <div ref={modalRef} className={styles.modal}>
        <img className={styles.closeModal} src={Close} alt="Close" />
        <div className={styles.avatarBlock}>
          <div className={styles.avatarAndInfo}>
            <div className={styles.avatar}>
              <img src={Hermaphrodite} alt="Hermaphrodite" />
            </div>
            <div className={styles.data}>
              <div className={styles.gender} style={{backgroundColor: `${colorGender['hermaphrodite']}`}}>hermaphrodite</div>
              <div className={styles.age}>600BBY</div>
            </div>
          </div>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.infoAndParams}>
            <div className={styles.nameCharacter}>Jabba Desilijic Tiure</div>
            <div className={styles.params}>
              <p className={styles.paramsItem}>hair color: brown</p>
              <p className={styles.paramsItem}>skin color: white</p>
              <p className={styles.paramsItem}>eye color: white</p>
            </div>
            <div className={styles.heightAndMass}>
              <div className={styles.heightAndMassBlock}>
                <div className={styles.value}>228</div>
                <p className={styles.nameValue}>height</p>
              </div>
              <div className={styles.heightAndMassBlock}>
                <div className={styles.value}>165</div>
                <p className={styles.nameValue}>mass</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default CartModal;