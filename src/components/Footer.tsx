import {useLocale, useTranslations} from 'next-intl';
import  Link  from "next/link";

export default function Footer () {
    const  t  = useTranslations();
    const locale = useLocale();

    return (
        <footer className="shadow m-0 p-0 bg-stone-200">
            <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">

                {/* Premier bloc de texte */}
                <span className="text-sm text-neutral-600 sm:text-center mb-4 sm:mb-0">
                    © 2023
                    <Link href={`/${locale}/copyright`}  className="hover:underline me-4 md:me-6 pl-2">Copyright</Link>
                    Julien Blatteau | {t("footer.architect")} | Marseille.
                </span>

                {/* Deuxième bloc de texte */}
                <span className="text-sm text-neutral-600 sm:text-center mb-4 sm:mb-0">
                    <p className="hover:underline">Réalisé par Emmanuel Muscat</p>
                </span>

                {/* Liste des liens */}
                <ul className="flex flex-wrap items-center mt-3 sm:mt-0 text-sm text-neutral-600 sm:justify-end">
                    <li>
                        <Link href={`/${locale}/infos`}  className="hover:underline me-4 md:me-6">{t("footer.about_me")}</Link>
                    </li>
                    <li>
                        <Link href={`/${locale}/localisation`} className="hover:underline me-4 md:me-6">{t("footer.location")}</Link>
                    </li>
                    <li>
                        <Link href={`/${locale}/contact`} className="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};
