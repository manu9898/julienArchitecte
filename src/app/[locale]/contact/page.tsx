"use client"
import Form from 'next/form'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations} from 'next-intl';
import {useForm} from "react-hook-form";

import {sendEmail} from "../../actions.js"
import Image from "next/image";


export default function Contact()  {
    const t = useTranslations(); // Hook pour les traductions

    const {
        register,
        formState: { errors },
    } = useForm();

    const [emailSent, setEmailSent] = useState(false);

    async function formAction(formData:FormData) {

        sendEmail(Object.fromEntries(formData));
        setEmailSent(true)
        console.log('message bien envoyé')
    }

    const router = useRouter();

    const handleReturnToMain = () => {
        router.push("/"); // Redirige vers la page d'accueil
    };



    return (
        <Form action={formAction} className="w-full">
            <div className="flex justify-center italic text-lg mt-10 mb-10 lg:mt-5 lg:mb-5">
                <h2 className="text-center text-sm lg:text-lg md:pl-12 lg:pr-14">
                    {t("form.contact_me")}
                </h2>
            </div>
            <div className="flex justify-center">
                <Image className="w-5/6 lg:w-1/3 xl:w-1/3"
                       src="/assets/pictures/contact.png"
                       alt="architecture Marseille"
                        width={450}
                       height={450}
                />
            </div>
            <div
                className="w-full flex items-center flex-col pb-10"

            >
                <div className="flex flex-col w-5/6 lg:w-1/3">
                    <label className="text-center" htmlFor="name">{t("form.name")} :</label>
                    <input
                        {...register("name", { required: true, maxLength: 20 })}
                        className="rounded-xl"
                        type="text"
                        id="name"
                        placeholder={t("form.your_name")}
                    />
                </div>
                <div className="flex flex-col w-5/6 lg:w-1/3">
                    <label className="text-center" htmlFor="firstname">{t("form.first_name")} :</label>
                    <input
                        {...register("firstname", { pattern: /^[A-Za-z]+$/i })}
                        className="rounded-xl"
                        type="text"
                        id="firstname"
                        placeholder={t("form.your_first_name")}
                    />
                </div>
                <div className="flex flex-col w-5/6 lg:w-1/3">
                    <label className="text-center" htmlFor="email">{t("form.email")} :</label>
                    <input
                        {...register("email", { required: true })}
                        className="rounded-xl"
                        type="email"
                        id="email"
                        placeholder={t("form.your_email")}
                    />
                    {errors.email && (
                        <span className="text-red-500">{t("form.email_required")}</span>
                    )}
                </div>
                <div className="flex flex-col w-5/6 lg:w-1/3">
                    <label className="text-center" htmlFor="subject">{t("form.object")} :</label>
                    <input
                        {...register("subject")}
                        className="rounded-xl"
                        type="text"
                        placeholder={t("form.your_object")}
                    />
                </div>
                <div className="flex flex-col w-5/6 lg:w-1/3 mb-10">
                    <label className="text-center" htmlFor="message">{t("form.text")} :</label>
                    <textarea
                        {...register("message")}
                        rows={10}
                        className="rounded-xl"
                        placeholder={t("form.your_message")}
                    />
                </div>
                <button
                    type="submit"
                    className="block bg-gray-500 hover:bg-white hover:text-black cursor-pointer text-white px-3 py-3 rounded-xl"
                >
                    {t("form.sent")}
                </button>
            </div>
            {emailSent && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded-xl shadow-lg text-center">
                        <h2 className="text-lg font-bold">{t("form.success")}</h2>
                        <p className="mt-2">{t("form.thanks_for_your_message")}</p>
                        <button
                            onClick={handleReturnToMain}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                            {t("form.back_to_main_page")}
                        </button>
                    </div>
                </div>
            )}
        </Form>
    );
};
