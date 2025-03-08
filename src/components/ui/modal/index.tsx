import {useCallback, useEffect, useRef} from 'react';
import React from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

type ModalProps = {
    children: React.ReactNode;  // Contenu de la modal (peut être n'importe quel élément React)
    onLeave: () => void;        // Fonction appelée lorsqu'on quitte la modal
};
const Modal = ({children, onLeave}:ModalProps) => {

    const modalRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = useCallback(
      (event: MouseEvent) => {
          if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
              onLeave();
          }
      },
    [onLeave]
    );



    const handleEscapeKey = useCallback(
      (event:KeyboardEvent) => {
          if (event.key === "Escape") {
              onLeave()
          }
      },
      [onLeave]
    )

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        document.addEventListener("keydown", handleEscapeKey);

        return () => {
            document.removeEventListener("click", handleClickOutside);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, [handleClickOutside, handleEscapeKey]);

    return (

        <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => onLeave()}
        >
            <div
                ref={modalRef}
                onClick={(e) => e.stopPropagation()} // Empêche la propagation pour ne pas fermer le carousel
                className="relative lg:w-[50%] flex items-center justify-center bg-white rounded-md shadow-lg"
            >
                {/* Bouton de fermeture */}
                <button
                    onClick={() => onLeave()}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
                >
                    &#10005; {/* Unicode pour un "x" */}
                </button>
                {children}
            </div>
        </div>


    );
};

export default  Modal;

