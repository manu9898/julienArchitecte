'use client';
import React, {useState, useTransition} from 'react';
import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';
import {useRouter, usePathname} from 'next/navigation';

export const NavBar = () => {
  const locale = useLocale();
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false); // State pour le menu burger

  const router = useRouter(); // Récupérer l'instance du routeur
  const pathname = usePathname(); // Récupérer le chemin actuel de la route
  const startTransition = useTransition()[1]; // Transition pour ne pas bloquer l'interface

  // Fonction pour gérer le changement de langue
  function onSelectChange(nextLocale: string) {
    // Utilisation de startTransition pour effectuer la navigation sans bloquer l'interface
    startTransition(() => {
      // Remplacer la locale dans l'URL avec la nouvelle locale
      const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);

      // Remplacer la route tout en gardant la nouvelle locale
      router.replace(newPath);
    });
  }

  // Fonction pour ouvrir/fermer le menu burger
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="2xl:text-xl mt-5 lg:mt-0">
      <nav className="relative bg-[#ffe6e5]">
        {/* Conteneur principal */}
        <div className="flex justify-between items-center px-4 lg:px-8">
          {/* Menu burger pour mobile */}
          <div className="lg:hidden">
            <button className="text-black p-3" onClick={toggleMenu}>
              <svg
                className="block h-6 w-6 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>

          {/* Liens FR/EN à gauche en colonne */}
          <div className="hidden lg:flex flex-col space-y-2">
            <button
              onClick={() => onSelectChange('fr')}
              className="text-md font-extrabold hover:text-gray-500 italic"
            >
              {t('language.fr')}
            </button>
            <button
              onClick={() => onSelectChange('en')}
              className="text-md font-extrabold hover:text-gray-500 italic"
            >
              {t('language.en')}
            </button>
          </div>

          {/* Titre centré */}
          <div className="text-center flex-grow lg:pl-20">
            <h1 className="font-extrabold italic text-xl mx-5 lg:text-lg lg:mx-0">
              {t('navbar.title')}
            </h1>
            <p className="text-sm px-1 lg:text-lg lg:pl-0">
              {t('navbar.subtitle')}
            </p>
          </div>

          {/* Liens Projet/Présentation/Contact à droite en colonne */}
          <div className="hidden lg:flex flex-col items-center pt-8">
            <Link
              href="/public"
              className="text-md font-extrabold hover:text-gray-500 italic"
            >
              {t('navbar.projects')}
            </Link>
            <Link
              href={`/${locale}/infos`}
              className="text-md font-extrabold hover:text-gray-500 italic"
            >
              {t('navbar.news')}
            </Link>
            <Link
              href={`/${locale}/demarche`}
              className="text-md font-extrabold hover:text-gray-500 italic"
            >
              {t('navbar.approach')}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="text-md font-extrabold hover:text-gray-500 italic"
            >
              {t('navbar.contact')}
            </Link>
          </div>
        </div>

        {/* Menu burger en mode mobile */}
        <div
          className={`${
            isOpen ? 'block bg-[#ffe6e5] w-1/2 p-4 space-y-4' : 'hidden'
          } lg:hidden flex flex-col items-start md:bg-[#ffe6e5] mt-5`}
        >
          <button
            onClick={() => onSelectChange('fr')}
            className="text-md font-extrabold hover:text-gray-500 italic"
          >
            {t('language.fr')}
          </button>
          <button
            onClick={() => onSelectChange('en')}
            className="text-md font-extrabold hover:text-gray-500 italic"
          >
            {t('language.en')}
          </button>
          <Link
            href="/public"
            className="text-md font-extrabold hover:text-gray-500 italic"
          >
            {t('navbar.projects')}
          </Link>
          <Link
            href={`/${locale}/infos`}
            className="text-md font-extrabold hover:text-gray-500 italic"
          >
            {t('navbar.news')}
          </Link>
          <Link
            href={`/${locale}/demarche`}
            className="text-md font-extrabold hover:text-gray-500 italic"
          >
            {t('navbar.approach')}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="text-md font-extrabold hover:text-gray-500 italic"
          >
            {t('navbar.contact')}
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
