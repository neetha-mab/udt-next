import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/dist/client/link';
import AOS from 'aos';
import "aos/dist/aos.css"
import styles from './Course.module.scss';
import PopUp from '../commonComponents/PopUp';

const CourseDetails = () => {
   const [showModal, setShowModal] = useState(false);

   useEffect(() => {
        AOS.init({once: true});
   },[])

  const requestPopup = () => {
        setShowModal(true);
        document.querySelector('body').classList.add('remove_over_flow');
  }

  return (
    <section className={styles.course_details}>
        <div className={styles.container}>
            <h3 data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">Training like no other.</h3>
            <h4 data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">Reality-based defense instruction. Made for you.</h4>
            <div className={styles.row}>
                <div className={styles.fifty_percent} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <div className={styles.video_icon}>
                        <Image src={'/images/vid.png'} alt={'video'} width={578} height={454} layout={'responsive'} />
                        <button type='button' onClick={() => requestPopup()}><Image src='/images/icons/play-btn.png' alt='icon' width={191} height={191} layout={'responsive'}/></button>
                    </div>
                    
                </div>
                <div className={`${styles.fifty_percent} ${styles.text_wrap}`} data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <p>United Defense Tactical provides top-level training for civilians, military, and law enforcement because there is nothing more important than your safety. Nowhere else will you learn to protect and defend yourself in an emergency situation. </p>

                    <p>You can’t do something you haven’t been trained to do. It’s time to train to survive.</p>
                    <Link href={'#'} passHref><a href='replace' className={`${styles.btn} ${styles.btn_primary}`}>Join today</a></Link>
                </div>
            </div>
            <div className={`${styles.row} ${styles.link_boxes}`} data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <div className={styles.col_3}>
                    <Link href={'#'} passHref><a href='replace'>
                        <Image src={'/images/img-1.png'} alt={'img'} width={392} height={269} layout={'responsive'} />
                        <h5>UDT <br/>Courses</h5>
                    </a></Link>
                </div>
                <div className={styles.col_3} data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <Link href={'#'} passHref><a href='replace'>
                        <Image src={'/images/img-2.png'} alt={'img'} width={392} height={269} layout={'responsive'} />
                        <h5>CCW Permit <br/>Course</h5>
                    </a></Link>
                    
                </div>
                <div className={styles.col_3} data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <Link href={'#'} passHref><a href='replace'>
                        <Image src={'/images/img-3.png'} alt={'img'} width={392} height={269} layout={'responsive'} />
                        <h5>Shop <br/>UDT</h5>
                    </a></Link>
                </div>
            </div>
        </div>
        <PopUp show={showModal} closePopup={() => setShowModal(false)}>
            <iframe width="" height="500" src="https://www.youtube.com/embed/5T2Im5H-pOA" title="UDT Promo Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </PopUp>
    </section>
  )
}

export default CourseDetails