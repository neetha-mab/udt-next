import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import "aos/dist/aos.css"
import styles from './Promotion.module.scss'

const Promotion = () => {
  useEffect(() => {
    AOS.init({once: true});
  },[])

  return (
    <section className={styles.promotion}>
        <div className={styles.container}>
            <h4 data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">No one regrets being safe.</h4>
            <p data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">Plan for tomorrow today with specialty instruction that will keep you alive. </p>
            <Link href={'#'} passHref><a href='replace' className={`${styles.btn} ${styles.btn_primary}`} data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">Try the 1st Class Free</a></Link>
        </div>
    </section>
  )
}

export default Promotion