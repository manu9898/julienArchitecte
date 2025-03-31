'use client';

import React, {useState, useRef} from 'react';
import useHomePageCarouselsImages from '../../hooks/useHomePageCarouselsImages';
import {PicturesHomePage} from '@/components/ui/picturesHomePage';
import Modal from '../../../components/ui/modal';
import Carousel from '../../../components/ui/carousel'; // Pour récupérer la langue dans les cookies

export default function Home() {
  const [activeCarousel, setActiveCarousel] = useState<
    'cycloide' | 'logo' | 'belvedere' | null
  >(null);

  // Le hook est appelé inconditionnellement
  const carouselImages = useHomePageCarouselsImages(
    activeCarousel ?? 'cycloide'
  );
  console.log(activeCarousel , carouselImages);

  const swiperRef = useRef(null);

  return (
    <section
      style={{minHeight: 'calc(100vh - 168px)'}}
      className="flex justify-center items-center w-full my-20 md:my-0"
    >
      <PicturesHomePage onPictureClick={setActiveCarousel} />

      {activeCarousel && (
        <Modal onLeave={() => setActiveCarousel(null)}>
          <div className="lg:w-1/2 md:w-1/2 sm:w-1/2 w-2/3 mx-auto mt-10 mb-10">
            <Carousel assets={carouselImages} swiperRef={swiperRef}/>
          </div>
        </Modal>
      )}
    </section>
  );
}
