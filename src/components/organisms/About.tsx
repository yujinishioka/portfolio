import { useTranslations } from 'next-intl';
import Html from '@/components/atoms/Html';

export default function About() {
  const t = useTranslations('About');

  return (
    <section className="flex flex-col w-full min-h-screen items-center justify-center bg-black/80 text-white">
      <h2 id="about" className="text-primary-light text-4xl scroll-mt-24 md:text-6xl lg:text-8xl">{t('title')}</h2>
      <Html text={t.raw('description')} className='flex flex-col mt-8 p-12 gap-4 rounded-lg text-gray-light md:max-w-1/3 md:mt-12 md:bg-black/40' />
    </section>
  )
}
