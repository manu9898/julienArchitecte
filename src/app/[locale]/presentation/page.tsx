"use client";
import React from 'react';

import Image from "next/image";
import Carousel from "../../../../src/components/ui/carousel/index"

const firstCarouselImages = [
  { src: "/assets/pictures/diapoPresentation/parcours/PRESENTATION_05.jpg", alt: "Architecte Marseille", hover: "Présentation" },
  { src: "/assets/pictures/diapoPresentation/parcours/PRESENTATION_02.jpg", alt: "Architecte Marseille", hover: "Présentation" },
  { src: "/assets/pictures/diapoPresentation/parcours/PRESENTATION_06.jpg", alt: "Architecte Marseille", hover: "Présentation" },
];

const secondCarouselImages = [
  { src: "/assets/pictures/diapoPresentation/approche/PRESENTATION_03.jpg", alt: "Architecte Marseille", hover: "Présentation" },
  { src: "/assets/pictures/diapoPresentation/approche/PRESENTATION_04.jpg", alt: "Architecte Marseille", hover: "Présentation" },
  { src: "/assets/pictures/diapoPresentation/approche/PRESENTATION_07.jpg", alt: "Architecte Marseille", hover: "Présentation" },
];

export default function Presentation() {

  return (
    <section className="flex justify-center items-center lg:min-h-[calc(100vh-208px)] gap-20 flex-wrap lg:my-6 my-20">
      <div className="w-5/6 lg:w-4/6 xl:w-1/4 h-auto">
        <Carousel images={firstCarouselImages} ></Carousel>
      </div>
      <div className="w-5/6 lg:w-4/6 xl:w-1/4">
        <Image
          src="/assets/pictures/diapoPresentation/PRESENTATION_01.jpg"
          alt="Julien Blatteau"
          className="w-full object-contain"
          loading="lazy"
          width={500}
          height={500}
        />
      </div>
      <div className="w-5/6 lg:w-4/6 xl:w-1/4 h-auto">
        <Carousel images={secondCarouselImages}></Carousel>
      </div>
    </section>
  );
}
