'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false, // Désactiver SSR pour le composant MapComponent
});

export default function LocalisationPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Le code n'est exécuté qu'après le rendu côté client
  }, []);

  if (!isClient) {
    return null; // Ne rend rien pendant le SSR
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Localisation</h1>
      <MapComponent />
    </div>
  );
}
