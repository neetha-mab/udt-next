import React, { useState } from 'react';
import Image from 'next/image';
import { Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Testimonial_carousel.module.scss';
import 'swiper/css';

const TestimonialCarousel = () => {

  const [controlledSwiper, setControlledSwiper] = useState(null);

  const onNextClick = () => {
    controlledSwiper.slideNext(500);
  };

  const onPreviousClick = () => {
      controlledSwiper.slidePrev(500);
  };

  return (
    <section className={styles.testimonial_carousel}>
        <div className={styles.container}>
            <h4>Shooting isn’t just the mechanics.</h4>
            <div className={styles.carousel_wrap}>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              // modules={[Controller]} controller={{ control: controlledSwiper }}
              // onSwiper={setControlledSwiper}
            >
              <button
                  type="button"
                  onClick={onPreviousClick}
                  className="left-button"
              >
                prev
              </button>
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
              <button
                  type="button"
                  onClick={onNextClick}
                  className="right-button"
              >
                   next
              </button>
            </Swiper>
            </div>
        </div>
    </section>
  )
}

export default TestimonialCarousel