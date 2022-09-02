import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/dist/client/image';
import parse from 'html-react-parser'
import AOS from 'aos';
import "aos/dist/aos.css";
import styles from './hero.module.scss';

const Hero = ({data}) => {

  const { imageUrl, imageUrl2, alt, title, desc} = data[0];

  useEffect(() => {
    AOS.init({once: true});
  },[])

  return (
    <section className={styles.hero}>
        <div className={styles.desktop}><Image src={imageUrl} alt={alt} width={1440} height={820} layout={'responsive'} /></div>
        <div className={styles.mobile}><Image src={imageUrl2} alt={alt} width={390} height={239} layout={'responsive'} /></div>
        <div className={styles.hero_overlayer}>
            <div className={styles.container} data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <h1>{parse(title)}</h1>
                <p>{desc}</p>
                <Link href={"#"} passHref><a href='replace' className={`${styles.btn} ${styles.btn_primary}`}>Join Now</a></Link>
            </div>
        </div>
    </section>
  )
}

export default Hero