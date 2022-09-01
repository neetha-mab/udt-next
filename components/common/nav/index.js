import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/dist/client/image';
import { IoMdClose } from 'react-icons/io';
import styles from './nav.module.scss';

const Nav = () => {

    const NavLinks = [
        {
            navLink: '/',
            navText: 'Franchise',
            btn: false,
            subNav: false,
        },
        {
            navLink: '/',
            navText: 'Find a Location',
            btn: false,
            subNav: false,
        },
        {
            navLink: '/',
            navText: 'Free Intro Class',
            btn: true,
            subNav: false,
        },
        
    ];

    const HamburgerMenu = (ev) => {
        const elem = ev.target.closest('i');
        if (elem.nextSibling.classList.contains(`${styles.active_dropdown}`)) elem.nextSibling.classList.remove(`${styles.active_dropdown}`);
        else elem.nextSibling.classList.add(`${styles.active_dropdown}`);
    }
   
    const closeButton = (e) => {
        e.target.closest('div').classList.remove(`${styles.active_dropdown}`);
    }

  return (
    <>
    <i className={styles.toggle_button} onClick={(ev) => HamburgerMenu(ev)}>
        <Image src={'/images/icons/menu-icon.svg'} alt={'menu-ham'} width={34} height={26} layout={'responsive'} />   
    </i>
    <div className={styles.navigation}>
        <span className={styles.close_btn} onClick={(e) => closeButton(e)}><IoMdClose /></span>
        <nav>
            <ul>
                { NavLinks.map(( item, index ) => (
                    <li key={index}>
                        { !item.btn && <Link href={item.navLink} passHref><a href='replace'>{item.navText}</a></Link> }
                        { item.btn && <Link href={item.navLink} passHref><a href='replace' className={styles.btn_primary}>{item.navText}</a></Link> }
                    </li>
                ))}
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Nav