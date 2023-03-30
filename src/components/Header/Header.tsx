import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../images/logo.png'

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.headerContainer}>
            <div className={styles.logo}>
                <img src={Logo} alt="Logo" />
            </div>
            <div className={styles.menu}>
                <NavLink to="/" className={({ isActive }) =>(isActive ? styles.linkActive : styles.link)}>
                    <div className={styles.linkName}>Home</div>
                    <div className={styles.linkBorder}></div>
                </NavLink>
                <NavLink to="/characters" className={({ isActive }) =>(isActive ? styles.linkActive : styles.link)}>
                    <div className={styles.linkName}>Characters</div>
                    <div className={styles.linkBorder}></div>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Header;