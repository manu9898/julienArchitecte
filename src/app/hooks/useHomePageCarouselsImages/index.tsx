import {useLocale} from 'next-intl';
import {AssetType} from '@/components/ui/carousel';

type ConfigType = Record<'hay' | 'belvedere' | 'terresDesLegendes' | 'cycloide' | 'leu' | 'logo' , AssetType[]>
const getConfig = (locale: string): ConfigType => {
  return {
    hay: [
      {
        type: "Image",
        src: '/assets/pictures/diapoHay/HAY_00.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoHay/HAY_01.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src:
          locale === 'en'
            ? '/assets/pictures/diapoHay/HAY_02_FR.jpg'
            : '/assets/pictures/diapoHay/HAY_02_FR.jpg',
        alt:
          locale === 'en'
            ? 'Participatory architecture, ecological materials'
            : 'Architecture participative, matériaux écologiques'
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoHay/HAY_03.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoHay/HAY_b.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoHay/HAY_c.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoHay/HAY_d.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      }
    ],

    terresDesLegendes: [
      {
        type: "Image",
        src: '/assets/pictures/diapoTerreDesLegendes/TerreDeLegende_00.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoTerreDesLegendes/TerreDeLegende_01.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src:
          locale === 'en'
            ? '/assets/pictures/diapoTerreDesLegendes/TerreDeLegende_02_FR.jpg'
            : '/assets/pictures/diapoTerreDesLegendes/TerreDeLegende_02_FR.jpg',
        alt:
          locale === 'en'
            ? 'Participatory architecture, ecological materials'
            : 'Architecture participative, matériaux écologiques'
      },
      {
        type: "Video",
        src: "/assets/TerreDeLegendes_04_video.mp4",
        alt:"video Terre des Légendes"
      },
      {
        type: "Video",
        src: "/assets/TerreDeLegendes_03_video.mp4",
        alt:"video Terre des Légendes"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoTerreDesLegendes/TerreDeLegende_02_FR.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoTerreDesLegendes/TerreDeLegende_06.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoTerreDesLegendes/TerreDeLegende_08.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoTerreDesLegendes/TerreDeLegende_09.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      }
    ],
    cycloide: [
      {
        type: "Image",
        src: '/assets/pictures/diapoCycloide/CYCLO_00.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoCycloide/CYCLO_01.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src:
          locale === 'en'
            ? '/assets/pictures_en/CYCLO_02_ENG.jpg'
            : '/assets/pictures/diapoCycloide/CYCLO_02_FR.jpg',
        alt:
          locale === 'en'
            ? 'Participatory architecture, ecological materials'
            : 'Architecture participative, matériaux écologiques'
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoCycloide/CYCLO_03.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoCycloide/CYCLO_04.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoCycloide/CYCLO_05.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoCycloide/CYCLO_06.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoCycloide/CYCLO_07.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoCycloide/CYCLO_08.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoCycloide/CYCLO_09.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoCycloide/CYCLO_10.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoCycloide/CYCLO_11.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoCycloide/CYCLO_12.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      }
    ],
    leu: [
      {
        type: "Image",
        src: '/assets/pictures/diapoLeu/leu_00.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoLeu/leu_01.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src:
          locale === 'en'
            ? '/assets/pictures/diapoLeu/leu_02_FR.jpg'
            : '/assets/pictures/diapoLeu/leu_02_FR.jpg',
        alt:
          locale === 'en'
            ? 'Participatory architecture, ecological materials'
            : 'Architecture participative, matériaux écologiques'
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoLeu/leu_03.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoLeu/leu_04.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoLeu/leu_05.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoLeu/leu_06.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoLeu/leu_07.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoLeu/leu_08.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoLeu/leu_09.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoLeu/leu_10.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoLeu/leu_11.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      }
    ],
    logo: [
      {
        type: "Image",
        src: '/assets/pictures/diapoLogo/DERIVES_00.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur",

      },
      {
        type: "Image",
        src: '/assets/pictures/diapoLogo/DERIVES_01.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur",

      },
      {
        type: "Image",
        src:
          locale === 'en'
            ? '/assets/pictures_en/DERIVES_02_ENG.jpg'
            : '/assets/pictures/diapoLogo/DERIVES_02_FR.jpg',
        alt:
          locale === 'en'
            ? "Architecture Provence-alpes-cote-d'azur"
            : "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoLogo/DERIVES_03.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur",

      },
      {
        type: "Image",
        src: '/assets/pictures/diapoLogo/DERIVES_04.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur",

      },
      {
        type: "Image",
        src: '/assets/pictures/diapoLogo/DERIVES_05.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur",

      },
      {
        type: "Image",
        src: '/assets/pictures/diapoLogo/DERIVES_06.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur",

      },
      {
        type: "Image",
        src: '/assets/pictures/diapoLogo/DERIVES_07.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur",

      },
      {
        type: "Image",
        src: '/assets/pictures/diapoLogo/DERIVES_08.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur",

      },
      {
        type: "Image",
        src: '/assets/pictures/diapoLogo/DERIVES_09.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur",

      },
      {
        type: "Image",
        src: '/assets/pictures/diapoLogo/DERIVES_10.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur",

      },
      {
        type: "Image",
        src: '/assets/pictures/diapoLogo/DERIVES_11.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur",

      }
    ],
    belvedere: [
      {
        type: "Image",
        src: '/assets/pictures/diapoBelvedere/BELVEDERE_00.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoBelvedere/BELVEDERE_01.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src:
          locale === 'en'
            ? '/assets/pictures_en/BELVEDERE_02_ENG.jpg'
            : '/assets/pictures/diapoBelvedere/BELVEDERE_02_FR.jpg',
        alt:
          locale === 'en'
            ? "Architecture Provence-alpes-cote-d'azur"
            : "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoBelvedere/BELVEDERE_03.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoBelvedere/BELVEDERE_04.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoBelvedere/BELVEDERE_05.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoBelvedere/BELVEDERE_06.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoBelvedere/BELVEDERE_07.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoBelvedere/BELVEDERE_08.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoBelvedere/BELVEDERE_09.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoBelvedere/BELVEDERE_10.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoBelvedere/BELVEDERE_11.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoBelvedere/BELVEDERE_12.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      },
      {
        type: "Image",
        src: '/assets/pictures/diapoBelvedere/BELVEDERE_13.jpg',
        alt: "Architecture Provence-alpes-cote-d'azur"
      }
    ]
  };
};

type CarouselConfigKey = keyof ReturnType<typeof getConfig>;

function useHomePageCarouselsImages(activeCarousel: CarouselConfigKey) {
  const locale = useLocale();
  const config = getConfig(locale);

  // Sinon, on retourne les images de la catégorie correspondante
  return config[activeCarousel] || [];
}

export default useHomePageCarouselsImages;
