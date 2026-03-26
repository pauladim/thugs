import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function HeroCarousel() {
  // use image files placed in the public directory (e.g. public/images/hero1.jpg)
  // Vite serves those files at the root, so you can reference them with "/images/..."
  const images = [
    'thugsblack.jpeg',
    'thugscolor.jpeg',
    'rectorfans.jpeg',
    'micrector.jpeg',
  ];

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop
      speed={1000}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Dark overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(13, 26, 6, 0.7)',
                backdropFilter: 'brightness(0.6)',
              }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

