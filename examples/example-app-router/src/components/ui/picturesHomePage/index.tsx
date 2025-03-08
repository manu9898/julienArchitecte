import Image from "next/image";
import React, { useState } from "react";

// Définir le type de la prop onPictureClick
interface PicturesHomePageProps {
    onPictureClick: (id: "cycloide" | "logo" | "belvedere") => void; // Le type de la fonction onPictureClick
}

const images = [
    {
        id: "cycloide",
        srcDefault: "/assets/pictures/cycloide/cycloideFondVide.png",
        srcHover: "/assets/pictures/cycloide/cycloideFondBlanc.png",
        alt: "Cycloide",
    },
    {
        id: "logo",
        srcDefault: "/assets/pictures/logos/logoFondVide.png",
        srcHover: "/assets/pictures/logos/logoFondBlanc.png",
        alt: "Logo",
    },
    {
        id: "belvedere",
        srcDefault: "/assets/pictures/belvedere/belvedereLogoFondVide.png",
        srcHover: "/assets/pictures/belvedere/belvedereLogoFondBlanc.png",
        alt: "Belvedere Logo",
    },
];

// Maintenant, on ajoute le typage des props dans le composant PicturesHomePage
export const PicturesHomePage: React.FC<PicturesHomePageProps> = ({ onPictureClick }) => {
    const [hoveredImage, setHoveredImage] = useState<string | null>(null);

    const handleMouseEnter = (id: string) => {
        setHoveredImage(id);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };

    const handleClick = (event: React.MouseEvent, id: string) => {
        event.stopPropagation();
        onPictureClick(id as "cycloide" | "logo" | "belvedere");
    };

    return (
      <div className="flex justify-around w-full flex-wrap">
          {images.map((image) => (
            <Image
              key={image.id}
              src={hoveredImage === image.id ? image.srcHover : image.srcDefault}
              alt={image.alt}
              loading="lazy"
              width={500}
              height={300}
              className="max-w-72 object-contain cursor-pointer"
              onMouseEnter={() => handleMouseEnter(image.id)}
              onMouseLeave={handleMouseLeave}
              onClick={(event) => handleClick(event, image.id)} // Empêche la propagation
            />
          ))}
      </div>
    );
};
