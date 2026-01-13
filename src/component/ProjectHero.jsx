import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import './ProjectHero.css';

// Import images for the swiper
import image1 from '/df1.jpeg';
import image2 from '/df22.jpeg';
import image3 from '/df3.jpeg';
import image4 from '/df4.jpeg';
import image5 from '/df5.jpeg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProjectHero = () => {
  // Images array for the swiper
  const images = [
    { id: 1, src: image1, alt: "Project Image 1" },
    { id: 2, src: image2, alt: "Project Image 2" },
    { id: 3, src: image3, alt: "Project Image 3" },
    { id: 4, src: image4, alt: "Project Image 4" },
    { id: 5, src: image5, alt: "Project Image 5" }
  ];

  return (
    <section className="project-hero">
      <div className="swiper-container">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          className="project-swiper"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="slide-content">
                <img src={image.src} alt={image.alt} className="slide-image" />
                <div className="slide-overlay">
                  <div className="slide-text">
                    <h2 className="slide-title">ENDORSED BY LAGOS STATE MINISTRY OF YOUTH AND SOCIAL DEVELOPMENT</h2>
                    <p className="slide-subtitle">DRUGFREE'20 project has been endorsed by the Lagos state ministry of youth and social development (MYSD) & Lagos state kick against drug abuse (LASKADA)</p>
                    <Link to="/DrugFree20" className="slide-button">
                      DRUG FREE 20
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectHero;