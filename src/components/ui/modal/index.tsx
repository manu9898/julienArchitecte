import { useCallback, useEffect, useRef } from 'react';
import React from 'react';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';


type ModalProps = {
  children: React.ReactNode;
  onLeave: () => void;
  swiperRef: React.RefObject<any>; // Référence du Swiper
};

const Modal = ({ children, onLeave, swiperRef }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onLeave();
      }
    },
    [onLeave]
  );

  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onLeave();
      }
    },
    [onLeave]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [handleClickOutside, handleEscapeKey]);

  const goToPrevious = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev(); // Aller à l'image précédente
    }
  };

  const goToNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext(); // Aller à l'image suivante
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={() => onLeave()}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative lg:w-[50%] flex items-center justify-center bg-white rounded-md shadow-lg"
      >
        {/* Bouton de fermeture */}
        <button
          onClick={() => onLeave()}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
        >
          &#10005; {/* Unicode pour un "x" */}
        </button>

        {/* Flèches de navigation */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-lightgray text-4xl p-2 focus:outline-none"
        >
          <GoArrowLeft className="text-gray-400" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-lightgray text-4xl p-2 focus:outline-none"
        >
          <GoArrowRight className="text-gray-400" />
        </button>

        {/* Le Carousel */}
        {children}
      </div>
    </div>
  );
};

export default Modal;