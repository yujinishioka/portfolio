import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import "@/app/globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Desenvolvido por Vinicius Yuji Nishioka.",
};

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${sora.variable} antialiased`}>
        <NextIntlClientProvider>
          <div className="flex flex-col min-h-screen">
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
