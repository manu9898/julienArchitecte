import {notFound} from 'next/navigation';
import {getMessages, getTranslations, setRequestLocale} from 'next-intl/server';
import {NextIntlClientProvider} from 'next-intl';
import {ReactNode} from 'react';
import {clsx} from 'clsx';
import {Inter} from 'next/font/google';
import {routing} from '@/i18n/routing';
import Navigation from '@/components/Navigation';
import './styles.css';
import Footer from '@/components/Footer';

type Props = {
  children: ReactNode;
  params: Promise<{locale: string}>;
};

const inter = Inter({subsets: ['latin']});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata(props: Omit<Props, 'children'>) {
  const {locale} = await props.params;

  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: t('title')
  };
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html className="h-full bg-[#ffe6e5]" lang={locale}>
      <body className={clsx(inter.className, 'flex min-h-screen flex-col ')}>
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main className="flex flex-grow flex-col"> {children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
