import React  from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/swiper-bundle.css';
import VideoComponent from '@/components/ui/VideoComponent';

export type AssetType = {
  src: string;
  alt: string;
  type: 'Image' | 'Video';
};

type CarouselProps = {
  assets: AssetType[];
  swiperRef: React.RefObject<any>; // Référence du Swiper
};

const Carousel = ({ assets, swiperRef }: CarouselProps) => {
  return (
    <Swiper
      ref={swiperRef} // Associer la référence à Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {assets.map((asset: AssetType, index: number) => (
        <SwiperSlide key={index}>
          {asset.type === 'Image' ? (
            <Image
              className="object-cover mx-auto"
              src={asset.src}
              alt={asset.alt}
              width={800}
              height={600}
            />
          ) : (
            <VideoComponent src={asset.src} alt={asset.alt}></VideoComponent>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
