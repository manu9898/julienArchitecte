'use client';
import React from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function Presentation() {
  const t = useTranslations();

  return (
    <section className=" my-10">
      <div className="mx-5 md:mx-20">
        <h1 className="italic text-3xl font-bold mb-10 lg:mb-0">
          {t('navbar.approach')}
        </h1>

        <div className="flex flex-wrap flex-col-reverse 2xl:flex-row">
          <div className="w-full 2xl:w-1/2 min-w-0 flex flex-col justify-center">
            <h2 className="text-md bg-white rounded-xl py-1 px-1.5 underline mb-4 m-0 w-auto max-w-fit">
              {t('approach.a_shared_asset')}
            </h2>
            <p className="2xl:w-full text-xl leading-10 flex items-center md:text-center lg:text-left">
              {t('approach.to_propose_meaningful_architecture')},{' '}
              {t('approach.involving_local_residents')} . <br />
              {t('approach.for_sustainable_construction')},{' '}
              {t('approach.thinking_about_uses')},{' '}
              {t('approach.implementation')}, {t('approach.exploitation')},{' '}
              {t('approach.building_maintenance')}. <br />
              {t('approach.to_build_the_architectural_project')},{' '}
              {t('approach.think_of_sharing')},{t('approach.flora_fauna')} .
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
              {t('approach.a_chance_to_share')}
            </h2>
            <p className="2xl:w-full text-xl leading-10 flex items-center md:text-center lg:text-justify">
              {t('approach.every-project')} : {t('approach.meeting')} . <br />
              {t('approach.the_act_of_building')} .{' '}
              {t('approach.mutual_support_practices')},
              {t('approach.imagine_an_architectural_project')}. <br />
              {t('approach.involving_users')} ,{' '}
              {t('approach.integrate_workshops')} ,{' '}
              {t('approach.participative_worksites')},{' '}
              {t('approach.self_build_support')},{t('approach.pedagogy')}.{' '}
              <br />
              {t('approach.participatory_projects')},{' '}
              {t('approach.architect_s_expertise')}.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap flex-col-reverse 2xl:flex-row pt-10">
          {/* Texte */}
          <div className="w-full 2xl:w-1/2 min-w-0 flex flex-col justify-center">
            <h2 className="text-md bg-white rounded-xl py-1 px-1.5 underline mb-4 m-0 w-auto max-w-fit">
              {t('approach.an_assembly_of_materials')}
            </h2>
            <p className="2xl:w-full text-xl leading-10 flex items-center md:text-center lg:text-left">
              {t('approach.attention_to_detail')}.
              {t('approach.use_the_right_material')}. <br />
              {t('approach.use_materials')},{t('approach.rich_projects')}.{' '}
              <br />
              {t('approach.supporting_choices')},
              {t('approach.disappearing_sectors')}.{' '}
              {t('approach.choice_of_craftwork')},{' '}
              {t('approach.short_circuits')}. <br />
              {t('approach.prioritize_local_wood')},{' '}
              {t('approach.the_straw_industry')}, {t('approach.dry_stone')},
              {t('approach.the_ground')}, {t('approach.vegetable_fibers')};{' '}
              {t('approach.reemployment')}, {t('approach.recycling')}. <br />
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
              {t('approach.an_support_architect')}
            </h2>
            <p className="2xl:w-full text-xl leading-10 flex items-center md:text-center lg:text-justify">
              {t('approach.the_contemporary_architect')},
              {t('approach.job_companion')}. <br />
              {t('approach.create_ideas')}, {t('approach.storytelling')}.
              {t('approach.coordinate_partners')}. <br />
              {t('approach.create_opportunities')}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
