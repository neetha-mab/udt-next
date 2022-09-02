import React, { useEffect } from 'react';
import Image from 'next/dist/client/image';
import styles from './small_quote.module.scss'
import AOS from 'aos';
import "aos/dist/aos.css";
import Link from 'next/link';

const SmallQuote = () => {
  useEffect(() => {
    AOS.init({once: true});
  },[])

  return (
    <section className={styles.small_quote}>
        <div className={styles.desktop}><Image src={'/images/small-cell.png'} alt={'small cell'} width={1440} height={410} layout={'responsive'} /></div>
        <div className={styles.mobile}><Image src={'/images/small-cell-mobile.png'} alt={'small cell'} width={390} height={141} layout={'responsive'} /></div>
        <div className={styles.overlayer_content}>
            <div className={styles.container}>
                <div className={styles.text_content} data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <h4>Think dynamically.<br/>Move strategically.<br/>React with confidence.</h4>
                    <h5>Try your first class for free. </h5>
                    <Link href={'#'} passHref><a href='replace' className={`${styles.btn} ${styles.btn_primary}`}>Learn More</a></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SmallQuote