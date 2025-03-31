'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import { sendEmail } from '../../actions.js';
import Image from 'next/image';

export default function Contact() {
  const t = useTranslations(); // Hook pour les traductions

  const {
    register,
    formState: { errors }
  } = useForm();

  const [emailSent, setEmailSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // 🔹 État pour suivre si l'email est en train d'être envoyé

  async function formAction(formData: FormData) {
    if (isSubmitting || emailSent) return; // 🔹 Empêche la soumission multiple si déjà en cours ou email déjà envoyé

    setIsSubmitting(true); // 🔹 Active l'état "en soumission"
    try {
      await sendEmail(Object.fromEntries(formData)); // 🔹 Envoi de l'email
      setEmailSent(true); // 🔹 Affiche le message de succès
      console.log('Message bien envoyé');
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
    } finally {
      setIsSubmitting(false); // 🔹 Désactive l'état "en soumission" après l'envoi
    }
  }

  const router = useRouter();

  const handleReturnToMain = () => {
    router.push('/');
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // 🔹 Empêche le comportement par défaut
        const formElement = e.target as HTMLFormElement; // 🔹 FormData doit être créé à partir de HTMLFormElement
        formAction(new FormData(formElement)); // 🔹 Appel de la fonction de soumission
      }}
      className="w-full"
    >
      <div className="flex justify-center italic text-lg mt-10 mb-10 lg:mt-5 lg:mb-5">
        <h2 className="text-center text-sm mx-5 lg:mx-0 lg:text-lg md:pl-12 lg:pr-14">
          {t('form.contact_me')}
        </h2>
      </div>
      <div className="flex justify-center">
        <Image
          className="w-5/6 lg:w-1/3 xl:w-1/3"
          src="/assets/pictures/contact.png"
          alt="architecture Marseille"
          width={450}
          height={450}
        />
      </div>
      <div className="w-full flex items-center flex-col pb-10">
        <div className="flex flex-col w-5/6 lg:w-1/3">
          <label className="text-center" htmlFor="name">
            {t('form.name')} :
          </label>
          <input
            {...register('name', { required: true, maxLength: 20 })}
            className="rounded-xl pl-2"
            type="text"
            id="name"
            placeholder={t('form.your_name')}
            disabled={emailSent} // Désactive le champ après envoi
          />
        </div>
        <div className="flex flex-col w-5/6 lg:w-1/3">
          <label className="text-center" htmlFor="firstname">
            {t('form.first_name')} :
          </label>
          <input
            {...register('firstname', { pattern: /^[A-Za-z]+$/i })}
            className="rounded-xl pl-2"
            type="text"
            id="firstname"
            placeholder={t('form.your_first_name')}
            disabled={emailSent} // Désactive le champ après envoi
          />
        </div>
        <div className="flex flex-col w-5/6 lg:w-1/3">
          <label className="text-center" htmlFor="email">
            {t('form.email')} :
          </label>
          <input
            {...register('email', { required: true })}
            className="rounded-xl  pl-2"
            type="email"
            id="email"
            placeholder={t('form.your_email')}
            disabled={emailSent} // Désactive le champ après envoi
          />
          {errors.email && (
            <span className="text-red-500">{t('form.email_required')}</span>
          )}
        </div>
        <div className="flex flex-col w-5/6 lg:w-1/3">
          <label className="text-center" htmlFor="subject">
            {t('form.object')} :
          </label>
          <input
            {...register('subject')}
            className="rounded-xl pl-2"
            type="text"
            placeholder={t('form.your_object')}
            disabled={emailSent} // Désactive le champ après envoi
          />
        </div>
        <div className="flex flex-col w-5/6 lg:w-1/3 mb-10">
          <label className="text-center" htmlFor="message">
            {t('form.text')} :
          </label>
          <textarea
            {...register('message')}
            rows={10}
            className="rounded-xl pl-2"
            placeholder={t('form.your_message')}
            disabled={emailSent} // Désactive le champ après envoi
          />
        </div>
        <button
          type="submit"
          className={`block px-3 py-3 rounded-xl ${
            isSubmitting ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-500 hover:bg-white hover:text-black cursor-pointer text-white'
          }`}
          disabled={isSubmitting || emailSent} // Désactive le bouton pendant la soumission ou après envoi
        >
          {isSubmitting ? t('form.sending') : t('form.sent')}
        </button>
      </div>
      {emailSent && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-xl shadow-lg text-center">
            <h2 className="text-lg font-bold">{t('form.success')}</h2>
            <p className="mt-2">{t('form.thanks_for_your_message')}</p>
            <button
              onClick={handleReturnToMain}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              {t('form.back_to_main_page')}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
