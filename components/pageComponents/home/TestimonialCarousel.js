import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import styles from './Testimonial_carousel.module.scss';
import AOS from 'aos';
import "aos/dist/aos.css"
import 'swiper/css';

const TestimonialCarousel = () => {

  useEffect(() => {
    AOS.init({once: true});
  },[])

  const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slidePrev()} className={styles.left_button}>{children}</button>;
  };

  const SwiperButtonPrev = ({ children }) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slideNext()} className={styles.right_button}>{children}</button>;
  };


  return (
    <section className={styles.testimonial_carousel}>
        <div className={styles.container}>
            <h4 data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">Shooting isn’t just the mechanics.</h4>
            <div className={styles.carousel_wrap} data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
            >
              <SwiperButtonNext><Image src={'/images/icons/prev.png'} alt={'prev'} width={12} height={30} layout={'responsive'} /></SwiperButtonNext>
              <SwiperSlide className={styles.swiper_slide}>
                <div className={styles.image_wrap}>
                  <Image src={'/images/img.png'} alt="img" width={354} height={408} layout={'responsive'} />
                </div>
                <div className={styles.text_wrap}>
                  <p>“A great training experience to prepare you for real-life scenarios and any imminent danger one may ever have to face.”<span>- Allison S.</span></p>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiper_slide}>
                <div className={styles.image_wrap}>
                  <Image src={'/images/img.png'} alt="img" width={354} height={408} layout={'responsive'} />
                </div>
                <div className={styles.text_wrap}>
                  <p>“A great training experience to prepare you for real-life scenarios and any imminent danger one may ever have to face.”<span>- Allison S.</span></p>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiper_slide}>
                <div className={styles.image_wrap}>
                  <Image src={'/images/img.png'} alt="img" width={354} height={408} layout={'responsive'} />
                </div>
                <div className={styles.text_wrap}>
                  <p>“A great training experience to prepare you for real-life scenarios and any imminent danger one may ever have to face.”<span>- Allison S.</span></p>
                </div>
              </SwiperSlide>
              <SwiperButtonPrev><Image src={'/images/icons/next.png'} alt={'next'} width={12} height={30} layout={'responsive'} /></SwiperButtonPrev>
            </Swiper>
            </div>
        </div>
    </section>
  )
}

export default TestimonialCarousel