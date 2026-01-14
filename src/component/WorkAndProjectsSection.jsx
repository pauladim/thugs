// src/components/WorkAndProjectsSection.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import './WorkAndProjectsSection.css';
import 'swiper/css';
import 'swiper/css/pagination';

const WorkAndProjectsSection = () => {
  const swiperImages = [
    '/1stimage.jpeg',
    '/2ndimage.jpeg',
    '/project3.jpeg',
    '/4thimage.jpeg',
    '/5thimage.jpeg'
  ];

  return (
    <section className="work-projects-section">
      <div className="section-top">
        <div className="text-side">
          <h2 className="section-title" style={{fontFamily: 'Arial, sans-serif', fontWeight: 'bold'}}>
            LEARN MORE ABOUT<br />
            <span>OUR APPROACH</span>
          </h2>
          <p className="section-text">
            We deliver a range of activities, programs, and interventions, including:
Outreach programs to connect with marginalized individuals on the streets, - Skills training and workshops to equip them with employable skills, - Mentorship and coaching to support personal and
professional growth, - Provision of resources, such as (equipment, housing, and employment opportunities), Rehabilitation programs to support individuals in
need.
          </p>
          <Link to="/Project">
            <button className="our-work-button">OUTREACH</button>
          </Link>
        </div>

        <div className="image-side">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="work-projects-swiper"
          >
            {swiperImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Project image ${index + 1}`}
                  className="classroom-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WorkAndProjectsSection;