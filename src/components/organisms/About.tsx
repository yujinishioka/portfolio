import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  return (
    <section className="flex flex-col w-full min-h-screen items-center justify-center bg-black/80 text-white">
      <h2 id="about" className="text-primary-light text-4xl scroll-mt-24 md:text-6xl lg:text-8xl">{t('title')}</h2>
      <p className='mt-6 p-6 rounded-lg text-gray-light md:mt-12 md:bg-black/40'>texto sobre mim e piriri pororo.</p>
    </section>
  )
}
