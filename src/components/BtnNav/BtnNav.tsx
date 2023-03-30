import React from 'react';
import { Link } from 'react-router-dom';

import styles from './BtnNav.module.scss';

type BtnNavType = {
    children: string;
    backgroundColor: string;
    path: string;
}

const BtnNav: React.FC<BtnNavType> = ( {children, backgroundColor, path} ) => {
  return (
    <Link to={path} style={{backgroundColor: `${backgroundColor}`}} className={styles.buttonNav}>{children}</Link>
  )
}

export default BtnNav;