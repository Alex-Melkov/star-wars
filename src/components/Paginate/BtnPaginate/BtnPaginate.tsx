import React from 'react';

import styles from './BtnPaginate.module.scss';

type BtnPaginateProps = {
  children: string;
}

const BtnPaginate: React.FC<BtnPaginateProps> = ( {children} ) => {
  return (
    <button className={styles.btnPaginate}>{children}</button>
  )
}

export default BtnPaginate;