import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import AOS from 'aos';
import "aos/dist/aos.css"
import styles from './plain_vertical_carousel.module.scss';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const PlainVerticalCarousel = () => {

  useEffect(() => {
    AOS.init({once: true});
  },[])

  return (
    <section className={styles.plain_vertical_carousel}>
        <div className={styles.container}>
            <div className={styles.text_wrapper} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <h3>Special operations for everyday life.</h3>
              <hr/>
              <p>Enter a safe, controlled and supportive environment where you will learn how to assess, communicate, de-escalate, move and function under pressure.</p>
              <p>Discover your confidence and personal power as you learn to defend yourself and your family in a life-threatening situation.</p>
              <Link href={'#'} passHref><a href='replace' className={`${styles.btn} ${styles.btn_primary}`}>Try Our Program</a></Link>
            </div>
            <div className={`${styles.slider_wrapper} slider_one`} data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              //onSlideChange={() => console.log('slide change')}
              //onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide className={styles.custom_changes}>
                <Image src={'/images/slider.png'} alt={'slider'} width={693} height={500} layout={'responsive'} />
                <h4>How do you<span>REACT</span><br/>if you’re being followed <br/>down the street?</h4>
              </SwiperSlide>
              <SwiperSlide className={styles.custom_changes}>
                <Image src={'/images/slider.png'} alt={'slider'} width={693} height={500} layout={'responsive'} />
                <h4>How do you<span>REACT</span><br/>if you’re being followed <br/>down the street?</h4>
              </SwiperSlide>
              <SwiperSlide className={styles.custom_changes}>
                <Image src={'/images/slider.png'} alt={'slider'} width={693} height={500} layout={'responsive'} />
                <h4>How do you<span>REACT</span><br/>if you’re being followed <br/>down the street?</h4>
              </SwiperSlide>
              <SwiperSlide className={styles.custom_changes}>
                <Image src={'/images/slider.png'} alt={'slider'} width={693} height={500} layout={'responsive'} />
                <h4>How do you<span>REACT</span><br/>if you’re being followed <br/>down the street?</h4>
              </SwiperSlide>
            </Swiper>

            <Link href={'#'} passHref><a href='replace' className={`${styles.btn} ${styles.btn_primary}`}>Try Our Program</a></Link>
            </div>
        </div>
    </section>
  )
}

export default PlainVerticalCarousel