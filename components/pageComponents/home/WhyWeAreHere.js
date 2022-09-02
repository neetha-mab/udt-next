import React, { useEffect } from 'react';
import Image from 'next/dist/client/image';
import parse from 'html-react-parser';
import AOS from 'aos';
import "aos/dist/aos.css";
import styles from './whywearehere.module.scss'

const WhyWeAreHere = ({data}) => {

  useEffect(() => {
    AOS.init({once: true});
  },[])


  const { imageUrl, imageUrl2, alt, title, subQuestion, analysis } = data[0]

  return (
    <section className={styles.why_we_are_here}>
        <div className={styles.image_wrap} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div className={styles.desktop}><Image src={imageUrl} alt={alt} objectFit={'cover'} layout={'fill'} /></div>
            {/* <div className={styles.desktop}><Image src={imageUrl} alt={alt} width={720} height={1064} layout={'responsive'} /></div> */}
            <div  className={styles.mobile}><Image src={imageUrl2} alt={alt} width={390} height={240} layout={'responsive'} /></div>
        </div>
        <div className={styles.text_wrap} data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <h2>{parse(title)}</h2>
            <p>{subQuestion}</p>
            {analysis.map((item, index) => (
              <div className={styles.block_outer_wrap} key={index}>
                <div className={styles.first_heading}>{parse(item.heading)}</div>
                <div className={styles.second_heading}>{parse(item.headingTwo)}</div>
              </div>
            ))}
        </div>
    </section>
  )
}

export default WhyWeAreHere