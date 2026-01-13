import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./HeroSwiper.css";

// Slides data with fallback images for better error handling
const slides = [
  {
    id: 1,
    image: "/churchpas.jpeg",
    // fallbackImage: "https://via.placeholder.com/1920x1080/2B1111/FFFFFF?text=Built+for+Visionaries",
    // title: "Built for Visionaries",
    subtitle: "Together, we pave the way for a brighter future, where Drug abuse is eradicated",
    // cta: "Explore",
  },
  {
    id: 2,
    image: "/withboys.jpeg",
    // fallbackImage: "https://via.placeholder.com/1920x1080/A6D388/000000?text=Design.+Motion.+Emotion.",
    // title: "Design. Motion. Emotion.",
    subtitle: "Together, we pave the way for a brighter future, where Drug abuse is eradicated",
    // cta: "Our Work",
  },
  {
    id: 3,
    image: "/withpeople.jpeg",
    // fallbackImage: "https://via.placeholder.com/1920x1080/CC7722/FFFFFF?text=Join+the+Movement",
    // title: "Join the Movement",
    subtitle: "Together, we pave the way for a brighter future, where Drug abuse is eradicated",
    // cta: "Get Started",
  },
];

const HeroSwiper = () => {
  const [loaded, setLoaded] = useState(false);
  const [imageError, setImageError] = useState({});

  const handleImageError = (slideId) => {
    setImageError(prev => ({
      ...prev,
      [slideId]: true
    }));
  };

  return (
    <div className="hero-swiper-container">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1200}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSlideChange={() => setLoaded(true)}
        className="hero-swiper"
        slidesPerView={1}
        spaceBetween={0}
        height="100vh"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="hero-bg"
              style={{ backgroundImage: `url(${imageError[slide.id] ? slide.fallbackImage : slide.image})` }}
              onError={() => handleImageError(slide.id)}
            >
              <Container className="hero-content">
                <h1>{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                {/* <Button variant="warning" className="hero-cta">
                  {slide.cta}
                </Button> */}
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSwiper;