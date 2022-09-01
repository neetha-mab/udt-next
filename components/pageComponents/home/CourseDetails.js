import React from 'react';
import Image from 'next/image';
import Link from 'next/dist/client/link';
import styles from './Course.module.scss';

const CourseDetails = () => {
  return (
    <section className={styles.course_details}>
        <div className={styles.container}>
            <h3>Training like no other.</h3>
            <h4>Reality-based defense instruction. Made for you.</h4>
            <div className={styles.row}>
                <div className={styles.fifty_percent}>
                    <div className={styles.video_icon}>
                        <Image src={'/images/vid.png'} alt={'video'} width={578} height={454} layout={'responsive'} />
                        <button type='button'><Image src='/images/icons/play-btn.png' alt='icon' width={191} height={191} layout={'responsive'}/></button>
                    </div>
                    
                </div>
                <div className={`${styles.fifty_percent} ${styles.text_wrap}`}>
                    <p>United Defense Tactical provides top-level training for civilians, military, and law enforcement because there is nothing more important than your safety. Nowhere else will you learn to protect and defend yourself in an emergency situation. </p>

                    <p>You can’t do something you haven’t been trained to do. It’s time to train to survive.</p>
                    <Link href={'#'} passHref><a href='replace' className={`${styles.btn} ${styles.btn_primary}`}>Join today</a></Link>
                </div>
            </div>
            <div className={`${styles.row} ${styles.link_boxes}`}>
                <div className={styles.col_3}>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default CourseDetails