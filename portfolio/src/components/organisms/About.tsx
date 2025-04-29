import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  return (
    <section className="flex flex-col w-full min-h-screen items-center justify-center bg-black/80 text-white">
      <h2 id="about" className="text-green-300 text-4xl scroll-mt-24 md:text-6xl lg:text-8xl">{t('title')}</h2>
    </section>
  )
}
