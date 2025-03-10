"use client";
import React from 'react';
import Image from "next/image";

export default function Presentation() {
  return (
    <section className="mx-5 md:mx-20 my-10">
      <div className="mx-20">
        <h1 className="italic text-3xl font-bold mb-10 lg:mb-0">Démarche</h1>

        <div className="flex flex-wrap flex-col-reverse 2xl:flex-row">

          <div className="w-full 2xl:w-1/2 min-w-0 flex flex-col justify-center">
            <h2 className="text-md bg-white rounded-xl py-1 px-1.5 underline mb-4 m-0 w-auto max-w-fit">
              Un bien commun
            </h2>
            <p className="2xl:w-full text-xl leading-10 flex items-center md:text-center lg:text-left">
              Pour proposer une architecture porteuse de sens, impliquer
              les habitants et usagers dans la conception et la construction
              de leurs projets. <br />
              Pour des constructions pérennes, réfléchir ensemble aux
              usages, à la mise en œuvre, à l’exploitation, l’entretien et la
              vie du bâtiment. <br />
              Pour construire le projet d’architecture comme un lieu de vie
              commun, penser le partage entre les hommes cohabitants,
              la faune et la flore.
            </p>
          </div>


          <div className="w-full 2xl:w-1/2 flex justify-center">
            <Image
              src="/assets/demarche/demarche_2.png"
              alt="Illustration démarche"
              className="w-full md:w-2/3 lg:w-1/2 max-w-[500px] lg:max-w-[700px] object-contain"
              loading="lazy"
              width={700}
              height={400}
            />
          </div>
        </div>


        <div className="flex flex-wrap flex-col 2xl:flex-row mt-10">
          {/* Image */}
          <div className="w-full 2xl:w-1/2 flex justify-center flex-wrap">
            <Image
              src="/assets/demarche/Démarche_4.png"
              alt="Illustration démarche"
              className="w-full md:w-2/3 lg:w-1/2 max-w-[500px] lg:max-w-[700px] object-contain mb-10"
              loading="lazy"
              width={700}
              height={400}
            />
            <Image
              src="/assets/demarche/Démarche_5.png"
              alt="Illustration démarche"
              className="w-full md:w-2/3 lg:w-1/2 max-w-[500px] lg:max-w-[700px] object-contain"
              loading="lazy"
              width={700}
              height={400}
            />
          </div>


          <div className="w-full 2xl:w-1/2 min-w-0 flex flex-col justify-center ">
            <h2 className="text-md bg-white rounded-xl py-1 px-1.5 underline mb-4 m-0 w-auto max-w-fit">
              Une opportunité de partage
            </h2>
            <p className="2xl:w-full text-xl leading-10 flex items-center md:text-center lg:text-justify">
              Chaque projet soude une équipe pluridisciplinaire : c’est
              un moment de rencontre entre des pratiques et des savoir-
              faire. <br/>
              L’acte de bâtir peut constituer le moment fédérateur d’une
              communauté. C’est retrouver des pratiques d’entraide,
              imaginer un projet d’architecture comme une opportunité de
              partage et de médiation. <br/>
              Impliquer les habitants/usagers, c’est intégrer des
              ateliers de co-conception, des chantiers participatifs, de
              l’accompagnement à auto-construction / auto-réhabilitation,
              de la pédagogie. <br/>
              Pour des projets engagés sur le participatif, l’expertise
              de l’architecte se lie à des compétences de médiation et
              d’évènementiel.
            </p>
          </div>
        </div>


        <div className="flex flex-wrap flex-col-reverse 2xl:flex-row pt-10">
          {/* Texte */}
          <div className="w-full 2xl:w-1/2 min-w-0 flex flex-col justify-center">
            <h2 className="text-md bg-white rounded-xl py-1 px-1.5 underline mb-4 m-0 w-auto max-w-fit">
              Un assemblage de matériaux et de savoir-faire
            </h2>
            <p className="2xl:w-full text-xl leading-10 flex items-center md:text-center lg:text-left">
              L’attention au détail et la sobriété fonde ma pratique.
              C’est utiliser le bon matériau au bon endroit sans chercher
              à révolutionner les méthodes constructives. <br/>
              C’est employer les matériaux dans de justes proportions,
              pour des projets riches en créativité mais sobre en dépense
              d’énergie. <br/>
              C’est soutenir à travers des choix architecturaux, des filières
              qui ont parfois disparu ou sont diminuées par les effets de la
              mondialisation. C’est faire le choix de l’artisanat, des circuits
              courts. <br/>
              C’est prioriser la filière bois local, la filière paille, la pierre
              sèche, la terre, la fibre végétales ; et aussi la filière du
              réemploi, et dans une moindre mesure celle du recyclage. <br/>
            </p>
          </div>


          <div className="w-full 2xl:w-1/2 flex justify-center">
            <Image
              src="/assets/demarche/demarche_1.png"
              alt="Illustration démarche"
              className="w-full md:w-2/3 lg:w-1/2 max-w-[500px] lg:max-w-[700px] object-contain"
              loading="lazy"
              width={700}
              height={400}
            />
          </div>
        </div>

        <div className="flex flex-wrap flex-col 2xl:flex-row mt-10">
          {/* Image */}
          <div className="w-full 2xl:w-1/2 flex justify-center ">
            <Image
              src="/assets/demarche/demarche_3.png"
              alt="Illustration démarche"
              className="w-full md:w-2/3 lg:w-1/2 max-w-[500px] lg:max-w-[700px] object-contain mb-10"
              loading="lazy"
              width={700}
              height={400}
            />

          </div>


          <div className="w-full 2xl:w-1/2 min-w-0 flex flex-col justify-center">
            <h2 className="text-md bg-white rounded-xl py-1 px-1.5 underline mb-4 m-0 w-auto max-w-fit">
              Un accompagnant architecte
            </h2>
            <p className="2xl:w-full text-xl leading-10 flex items-center md:text-center lg:text-justify">
              L’architecte contemporain, c’est pour moi un métier
              d’accompagnant à la construction. <br/>
              Pour mettre en espace les idées, le narratif de chaque client.
              Pour fédérer et coordonner des partenaires passionnés
              pour chaque projet. <br/>
              Pour créer les opportunités et les espaces afin de réfléchir
              et construire ensemble un avenir désirable.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
}
