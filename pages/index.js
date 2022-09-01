import React from 'react'; 
import Layout from '../components/common/Layout';
import CourseDetails from '../components/pageComponents/home/CourseDetails';
import Hero from '../components/pageComponents/home/Hero';
import NavySeal from '../components/pageComponents/home/NavySeal';
import PlainVerticalCarousel from '../components/pageComponents/home/PlainVerticalCarousel';
import SmallQuote from '../components/pageComponents/home/SmallQuote';
import TestimonialCarousel from '../components/pageComponents/home/TestimonialCarousel';
import WhyWeAreHere from '../components/pageComponents/home/WhyWeAreHere';

const HeroData = [
  {
    imageUrl: '/images/hero.png',
    alt: `hero`,
    title: `Train to be safe.<br/>Train to be confident.<br/><span>Train to survive.</span>`,
    desc: `The first immersive firearm and self-defense training program of its kind. Sign up for a free introductory training course.`
  }
];

const WhyWeHereData = [
  {
    imageUrl: '/images/why-we-are-img.png',
    imageUrl2: '/images/why-we-are-img-mobile.png',
    alt: 'why we are here',
    title: `The threat is <br/>out there.`,
    subQuestion: `Are You Prepared?`,
    analysis: [
      {
        heading: `<h3>A violent crime occurs every<span>24.6 seconds</span></h3>`,
        headingTwo: `<h4>Learn what to do if you’re in danger.</h4>`
      },
      {
        heading: `<h3><span>77% of shots <br/>fired miss </span>the target if it's over 6 ft away</h3>`,
        headingTwo: `<h4>Improve your accuracy and stop the threat.</h4>`
      },
      {
        heading: `<h3>The number of shooting victims <br/>has gone up <span>55% in the last 2 years.</span></h3>`,
        headingTwo: `<h4>Protect yourself and your loved ones when it matters.</h4>`
      }
    ]
  }
];
export default function Home() {
  return (
    <Layout 
      pageClass={'home'}
      title={'Home'}
      description={'Home items'}
      keywords={'Home items'}
    >
      <Hero data={HeroData} />
      <WhyWeAreHere data={WhyWeHereData} />
      <SmallQuote />
      <PlainVerticalCarousel />
      <NavySeal />
      <TestimonialCarousel />
      <CourseDetails />
    </Layout>
  )
}
