import React from 'react';

import styles from './Paginate.module.scss';
import BtnPaginate from './BtnPaginate/BtnPaginate';

const Paginate: React.FC = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.paginateContainer}>
            <BtnPaginate children="Back" />
            <div className={styles.countPage}>Page 1 of 9</div>
            <BtnPaginate children="Forward" />
        </div>
    </div>
  )
}

export default Paginate;