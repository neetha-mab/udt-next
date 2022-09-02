import React, { useEffect, useState} from 'react';
import Logo from '../logo/Logo';
import Nav from '../nav';
import styles from './header.module.scss';

const Header = () => {

  const [headerSrolldownClass, setHeaderSrolldownClass] = useState("");

  useEffect(() => {
    let isMounted = true;
    window.addEventListener('scroll', () => {
        if (isMounted) {
            if (window.pageYOffset > 0) {
                setHeaderSrolldownClass(`${styles.sticky}`);
            } else {
                setHeaderSrolldownClass("");
            }
        }
    });
    return () => { isMounted = false };
  }, [])

  return (
    <header className={`${styles.header_wrap} ${headerSrolldownClass}`} >
        <div className={styles.container}>
          <Logo />
          <Nav />
        </div>
    </header>
  )
}

export default Header