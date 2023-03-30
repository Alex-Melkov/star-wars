import React from 'react';

import Logo from '../../images/loading.png';

import styles from './Loader.module.scss';

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
        <img src={Logo} alt="loading" />
    </div>
  )
}

export default Loader;