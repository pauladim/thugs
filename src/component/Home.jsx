import React from 'react';
import './Home.css';
import HeroSwiper from './HeroSwiper';
import AnnualReport from './AnnualReport';
import ThugFoundationHero from './ThugFoundationHero';
import WhyThugSection from './WhyThugSection';
import WorkAndProjectsSection from './WorkAndProjectsSection';
import AboutThug from './AboutThug';

const Home = () => {
  return (
    <div className="home-container">
      <HeroSwiper />
      <AnnualReport />
      <ThugFoundationHero />
      <WhyThugSection />
      <WorkAndProjectsSection />
      <AboutThug />
    </div>
  );
};

export default Home;