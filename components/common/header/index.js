import React from 'react';
import Logo from '../logo/Logo';
import Nav from '../nav';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header_wrap}>
        <div className={styles.container}>
          <Logo />
          <Nav />
        </div>
    </header>
  )
}

export default Header