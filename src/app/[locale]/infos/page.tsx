'use client';
import React from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function Presentation() {
  const t = useTranslations();
  return (
    <section className="lg:min-h-[calc(100vh-208px)] lg:my-6 my-20 mx-0 lg:mx-20">
      <div className="flex justify-center w-full items-stretch gap-20 flex-wrap mb-20">
        <div className="2xl:w-1/2 max-w-[500px] flex flex-col justify-between">
          <div className="bg-white z-10 flex flex-col justify-between h-full p-10 rounded-none sm:rounded-3xl">
            <h2 className="underline pb-10">Julien Blatteau</h2>
            <p className="max-w-[500px] text-xl leading-8 flex-grow">
              {t('infos.registered_architect')}.{t('infos.i_live_in_marseille')}
              ,{t('infos.freelance')}.{t('infos.field_of_action')},
              {t('infos.region_paca')},{t('infos.i_work_internationally')}.{' '}
              <br />
              {t('infos.focused_on_participatory_architecture')},
              {t('infos.sharing_expertise')}.
            </p>
          </div>
        </div>

        <div className="2xl:w-1/2 max-w-[500px] flex justify-center">
          <Image
            src="/assets/pictures/diapoPresentation/PRESENTATION_01.jpg"
            alt="Julien Blatteau"
            className="object-cover w-full h-full rounded-none sm:rounded-3xl"
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
              {t('infos.freelance_experience')}
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <Image
                  className="pt-1"
                  src="/assets/icons/diamond.svg"
                  alt="Diamond icon"
                  width={16}
                  height={16}
                />
                <div>
                  <p>
                    {t('infos.in_progress')}: {t('infos.land_of_legends')}
                  </p>
                  <p className="italic">{t('infos.architectural_residence')}</p>
                  <p className="italic"> {t('infos.sainte_baume')} ,</p>
                  <p className="italic"> {t('infos.drac')} </p>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <Image
                  className="pt-1"
                  src="/assets/icons/diamond.svg"
                  alt="Diamond icon"
                  width={16}
                  height={16}
                />
                <div>
                  <p>2023 : {t('infos.festival_of_architectures')} </p>
                  <p>{t('infos.in_housing_with_atelier')}</p>
                  <p className="italic">Montpellier (34)</p>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <Image
                  className="pt-1"
                  src="/assets/icons/diamond.svg"
                  alt="Diamond icon"
                  width={16}
                  height={16}
                />
                <div>
                  <p>2023 : {t('infos.conversion_of_a_diocesan_building')}</p>
                  <p>{t('infos.in_housing_with_atelier')}</p>
                  <p className="italic">Marseille (13)</p>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <Image
                  className="pt-1"
                  src="/assets/icons/diamond.svg"
                  alt="Diamond icon"
                  width={16}
                  height={16}
                />
                <div>
                  <p>2021 : {t('infos.belvédère_of_banchet_straw_pavilion')}</p>
                  <p className="italic">
                    {' '}
                    {t('infos.archi_nature_festival')} (73)
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <Image
                  className="pt-1"
                  src="/assets/icons/diamond.svg"
                  alt="Diamond icon"
                  width={16}
                  height={16}
                />
                <div>
                  <p>2019 : {t('infos.visit')} </p>
                  <p className="italic"> {t('infos.collective')}, Paris (75)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Deuxième colonne */}
        <div className="2xl:w-1/2 max-w-[500px] flex flex-col justify-start">
          <div className=" z-10 flex flex-col justify-start h-full p-10 rounded-3xl">
            <h2 className=" bg-white text-md  rounded-xl py-1 px-1.5 underline mb-5 m-0 w-auto max-w-fit">
              {t('infos.experience_in_architectural_practice')}
            </h2>
            <ul className="list-none pl-0">
              <li className="flex items-start gap-2">
                <Image
                  className="pt-1"
                  src="/assets/icons/diamond.svg"
                  alt="Diamond icon"
                  width={16}
                  height={16}
                />
                <div>
                  <p>2023 : {t('infos.project_manager_at')} Régis Roudil</p>
                  <p className="italic">Aix-en-Provence (13)</p>
                </div>
              </li>
              <li className="flex items-start gap-2 mt-4">
                <Image
                  className="pt-1"
                  src="/assets/icons/diamond.svg"
                  alt="Diamond icon"
                  width={16}
                  height={16}
                />
                <div>
                  <p>2020-2022 : {t('infos.project_manager_at')} MUE Atelier</p>
                  <p className="italic">Paris (75)</p>
                </div>
              </li>
              <li className="flex items-start gap-2 mt-4">
                <Image
                  className="pt-1"
                  src="/assets/icons/diamond.svg"
                  alt="Diamond icon"
                  width={16}
                  height={16}
                />
                <div>
                  <p>
                    2018-2020 : {t('infos.project_manager_at')} Benoit Rotteleur
                  </p>
                  <p className="italic">Paris (75)</p>
                </div>
              </li>
              <li className="flex items-start gap-2 mt-4">
                <Image
                  className="pt-1"
                  src="/assets/icons/diamond.svg"
                  alt="Diamond icon"
                  width={16}
                  height={16}
                />
                <div>
                  <p>
                    2018 : {t('infos.project_assistant_at')} chez Studio Gardoni
                  </p>
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
              {t('infos.cursus')}
            </h2>
            <ul className="list-none pl-0">
              <li className="flex items-start gap-2">
                <Image
                  className="pt-1"
                  src="/assets/icons/diamond.svg"
                  alt="Diamond icon"
                  width={16}
                  height={16}
                />
                <div>
                  <p>2022 : {t('infos.hmonp')} </p>
                </div>
              </li>
              <li className="flex items-start gap-2 mt-4">
                <Image
                  className="pt-1"
                  src="/assets/icons/diamond.svg"
                  alt="Diamond icon"
                  width={16}
                  height={16}
                />
                <div>
                  <p>2018 : {t('infos.d_e_architect')}</p>
                </div>
              </li>
              <li className="flex items-start gap-2 mt-4">
                <Image
                  className="pt-1"
                  src="/assets/icons/diamond.svg"
                  alt="Diamond icon"
                  width={16}
                  height={16}
                />
                <div>
                  <p>2015 : {t('infos.erasmus')} </p>
                </div>
              </li>
              <li className="flex items-start gap-2 mt-4">
                <Image
                  className="pt-1"
                  src="/assets/icons/diamond.svg"
                  alt="Diamond icon"
                  width={16}
                  height={16}
                />
                <div>
                  <p>2014 : {t('infos.bachelor')} </p>
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
                <Image
                  className="pt-1"
                  src="/assets/icons/diamond.svg"
                  alt="Diamond icon"
                  width={16}
                  height={16}
                />
                <div>
                  <p>
                    {' '}
                    {t('infos.the_art_of_dry_stone')},{t('infos.by')}{' '}
                    {t('infos.albert_porri_at_domaine_s_rayol')}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2 mt-4">
                <Image
                  className="pt-1"
                  src="/assets/icons/diamond.svg"
                  alt="Diamond icon"
                  width={16}
                  height={16}
                />
                <div>
                  <p>
                    {' '}
                    {t('infos.building_with_plant_fibers')},{t('infos.moos')}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
