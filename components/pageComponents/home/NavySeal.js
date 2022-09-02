import Image from 'next/image';
import React, {useEffect} from 'react';
import Link from 'next/dist/client/link';
import AOS from 'aos';
import "aos/dist/aos.css"
import styles from './Navyseal.module.scss';

const NavySeal = () => {

  useEffect(() => {
    AOS.init({once: true});
  },[])


  return (
    <section className={styles.navy_seal}>
        <div className={styles.image_wrapper} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div className={styles.desktop}><Image src={'/images/patches_desktop.png'} alt="seals" width={866} height={690} layout={'responsive'} /></div>
            <div className={styles.mobile}><Image src={'/images/patches.png'} alt="seals" width={622} height={396} layout={'responsive'} /></div>
        </div>
        <div className={styles.text_wrapper} data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <h4>From novice to <br/>Navy Seal</h4>
            <p>Our 8-level training curriculum covers everyone from new shooters to advanced experts. Track your earned skills while you interact with friends and grow within the global UDT community.</p>
            <Link href={'#'} passHref><a href='replace'>{'>> Explore Our Levels'}</a></Link>
        </div>
    </section>
  )
}

export default NavySeal