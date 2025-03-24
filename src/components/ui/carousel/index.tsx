import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {EffectCoverflow, Pagination} from 'swiper/modules';
import Image from 'next/image';
import 'swiper/swiper-bundle.css';

type Image = {
  src: string;
  alt: string;
};

// Typage des props de Carousel
type CarouselProps = {
  images: Image[]; // Un tableau d'objets Image
};
const Carousel = ({images}: CarouselProps) => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }}
      pagination={{clickable: true}}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {images.map((image, index: number) => (
        <SwiperSlide key={index}>
          <Image
            className="object-cover mx-auto"
            src={image.src}
            alt={image.alt}
            width={800}
            height={600}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
