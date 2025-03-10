"use client";
import React from 'react';
import Image from "next/image";

export default function Presentation() {
  return (
    <section className="lg:min-h-[calc(100vh-208px)] lg:my-6 my-20 mx-20">
      <div className="flex justify-center w-full items-stretch gap-20 flex-wrap mb-20">
        <div className="2xl:w-1/2 max-w-[500px] flex flex-col justify-between">
          <div className="bg-white z-10 flex flex-col justify-between h-full p-10 rounded-3xl">
            <h2 className="underline pb-10">Julien Blatteau</h2>
            <p className="max-w-[500px] text-xl leading-8 flex-grow">
              Je suis architecte inscrit au tableau de l’Ordre PACA. Je vis à
              Marseille, et j’exerce en indépendant depuis 2023. Mon terrain
              d’action privilégié est le Var et les Bouches-du-Rhône, la région
              Provence Alpes Côte d’Azur, mais j’opère ponctuellement sur des
              projets en France et à l’international. <br />
              Ma pratique est centrée sur l’architecture participative, le
              partage des savoirs-faire autour des matériaux écologiques.
            </p>
          </div>
        </div>

        <div className="2xl:w-1/2 max-w-[500px] flex justify-center">
          <Image
            src="/assets/pictures/diapoPresentation/PRESENTATION_01.jpg"
            alt="Julien Blatteau"
            className="object-cover w-full h-full rounded-3xl"
            loading="lazy"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="flex justify-center w-full items-stretch gap-20 flex-wrap mb-20">
        {/* Première colonne */}
        <div className="2xl:w-1/2 max-w-[500px] flex flex-col justify-start">
          <div className="- z-10 flex flex-col justify-start h-full p-10 rounded-3xl">
            <h2 className="bg-white text-md  rounded-xl py-1 px-1.5 underline mb-5 m-0 w-auto max-w-fit">
              Expériences en tant qu’indépendant
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <Image className="pt-1" src="/assets/icons/diamond.svg" alt="Diamond icon" width={16} height={16} />
                <div>
                  <p>En cours : Terres de Légendes</p>
                  <p className="italic">Résidence architecturale / construction d’observatoires</p>
                  <p className="italic">pour le PNR de la Sainte-Baume (83),</p>
                  <p className="italic">soutien DRAC PACA, région Sud</p>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <Image className="pt-1" src="/assets/icons/diamond.svg" alt="Diamond icon" width={16} height={16} />
                <div>
                  <p>2023 : Festival des Architectures Vives</p>
                  <p>en logements avec Atelier TMV</p>
                  <p className="italic">Montpellier (34)</p>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <Image className="pt-1" src="/assets/icons/diamond.svg" alt="Diamond icon" width={16} height={16} />
                <div>
                  <p>2023 : Conversion d’un bâtiment du Diocèse</p>
                  <p>en logements avec Atelier TMV</p>
                  <p className="italic">Marseille (13)</p>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <Image className="pt-1" src="/assets/icons/diamond.svg" alt="Diamond icon" width={16} height={16} />
                <div>
                  <p>2021 : Belvédère du Banchet, pavillon en paille</p>
                  <p className="italic">pour le festival Archi’Nature, Ayn-en-Savoie (73)</p>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <Image className="pt-1" src="/assets/icons/diamond.svg" alt="Diamond icon" width={16} height={16} />
                <div>
                  <p>2019 : Exposition à la Cité des Sciences et de l’Industrie</p>
                  <p className="italic">avec le collectif MELT.LAB, Paris (75)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Deuxième colonne */}
        <div className="2xl:w-1/2 max-w-[500px] flex flex-col justify-start">
          <div className=" z-10 flex flex-col justify-start h-full p-10 rounded-3xl">
            <h2 className=" bg-white text-md  rounded-xl py-1 px-1.5 underline mb-5 m-0 w-auto max-w-fit">
              Expériences en agence d’architecture
            </h2>
            <ul className="list-none pl-0">
              <li className="flex items-start gap-2">
                <Image className="pt-1" src="/assets/icons/diamond.svg" alt="Diamond icon" width={16} height={16} />
                <div>
                  <p>2023 : chargé de projet chez Régis Roudil</p>
                  <p className="italic">Aix-en-Provence (13)</p>
                </div>
              </li>
              <li className="flex items-start gap-2 mt-4">
                <Image className="pt-1" src="/assets/icons/diamond.svg" alt="Diamond icon" width={16} height={16} />
                <div>
                  <p>2020-2022 : chargé de projet chez MUE Atelier</p>
                  <p className="italic">Paris (75)</p>
                </div>
              </li>
              <li className="flex items-start gap-2 mt-4">
                <Image className="pt-1" src="/assets/icons/diamond.svg" alt="Diamond icon" width={16} height={16} />
                <div>
                  <p>2018-2020 : chargé de projet chez Benoit Rotteleur</p>
                  <p className="italic">Paris (75)</p>
                </div>
              </li>
                <li className="flex items-start gap-2 mt-4">
                  <Image className="pt-1" src="/assets/icons/diamond.svg" alt="Diamond icon" width={16} height={16} />
                  <div>
                    <p>2018 : assistant de projet chez Studio Gardoni</p>
                    <p className="italic">Lyon (69)</p>
                  </div>
                </li>

            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full items-stretch gap-20 flex-wrap mb-20">
        {/* Première colonne */}
        <div className="2xl:w-1/2 max-w-[500px] flex flex-col justify-start">
          <div className=" z-10 flex flex-col justify-start h-full p-10 rounded-3xl">
            <h2 className=" bg-white text-md  rounded-xl py-1 px-1.5 underline mb-5 m-0 w-auto max-w-fit">
              Cursus
            </h2>
            <ul className="list-none pl-0">
              <li className="flex items-start gap-2">
                <Image className="pt-1" src="/assets/icons/diamond.svg" alt="Diamond icon" width={16} height={16} />
                <div>
                  <p>2022 : HMONP à l’ENSA Paris Belleville</p>
                </div>
              </li>
              <li className="flex items-start gap-2 mt-4">
                <Image className="pt-1" src="/assets/icons/diamond.svg" alt="Diamond icon" width={16} height={16} />
                <div>
                  <p>2018 : Architecte D.E. à l’ENSA Lyon</p>
                </div>
              </li>
              <li className="flex items-start gap-2 mt-4">
                <Image className="pt-1" src="/assets/icons/diamond.svg" alt="Diamond icon" width={16} height={16} />
                <div>
                  <p>2015 : Erasmus à Mimar Sinan, Istanbul</p>
                </div>
              </li>
              <li className="flex items-start gap-2 mt-4">
                <Image className="pt-1" src="/assets/icons/diamond.svg" alt="Diamond icon" width={16} height={16} />
                <div>
                  <p>2014 : License d’architecture à l’ENSA Lyon</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Deuxième colonne */}
        <div className="2xl:w-1/2 max-w-[500px] flex flex-col justify-start">
          <div className=" z-10 flex flex-col justify-start h-full p-10 rounded-3xl">
            <h2 className=" bg-white text-md  rounded-xl py-1 px-1.5 underline mb-5 m-0 w-auto max-w-fit">
              Formation continue
            </h2>
            <ul className="list-none pl-0">
              <li className="flex items-start gap-2">
                <Image className="pt-1" src="/assets/icons/diamond.svg" alt="Diamond icon" width={16} height={16} />
                <div>
                  <p>L’art de la pierre sèche,
                    par Albert Porri au Domaine du Rayol</p>
                </div>
              </li>
              <li className="flex items-start gap-2 mt-4">
                <Image className="pt-1" src="/assets/icons/diamond.svg" alt="Diamond icon" width={16} height={16} />
                <div>
                  <p>Construire en fibres végétales aujourd’hui,
                    MOOC Bâtiment Durable</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>


    </section>
  );
}
