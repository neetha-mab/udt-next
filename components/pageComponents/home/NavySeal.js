import Image from 'next/image';
import React from 'react';
import Link from 'next/dist/client/link';
import styles from './Navyseal.module.scss';

const NavySeal = () => {
  return (
    <section className={styles.navy_seal}>
        <div className={styles.image_wrapper}>
            <div className={styles.desktop}><Image src={'/images/patches_desktop.png'} alt="seals" width={866} height={690} layout={'responsive'} /></div>
            <div className={styles.mobile}><Image src={'/images/patches.png'} alt="seals" width={622} height={396} layout={'responsive'} /></div>
        </div>
        <div className={styles.text_wrapper}>
            <h4>From novice to <br/>Navy Seal</h4>
            <p>Our 8-level training curriculum covers everyone from new shooters to advanced experts. Track your earned skills while you interact with friends and grow within the global UDT community.</p>
            <Link href={'#'} passHref><a href='replace'>{'>> Explore Our Levels'}</a></Link>
        </div>
    </section>
  )
}

export default NavySeal