import React from 'react';
import Link from 'next/link';
import Image from 'next/dist/client/image';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer_wrap}>
      <div className={styles.container}>
        <Link href={'/'} passHref><a href='replace' className={styles.footer_logo}><Image src={'/images/united-defense-logo.png'} alt={'logo'} width={197} height={198} layout={'responsive'} /></a></Link>
        <div className={styles.copy_right}>
          <p>Copyright ©2022 United Defense Tactical. All rights reserved.</p>
          <a href="tel:8886797464">888-679-7464</a>
        </div>
        <div className={styles.footer_menu}>
          <ul>
            <li><Link href={'/about'} passHref><a href='replace'>About Us</a></Link></li>
            <li><Link href={'/locations'} passHref><a href='replace'>Locations</a></Link></li>
          </ul>
          <ul>
            <li><Link href={'/contact'} passHref><a href='replace'>Contact</a></Link></li>
            <li><Link href={'/classes'} passHref><a href='replace'>Classes</a></Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;