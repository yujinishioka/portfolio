import { useTranslations } from 'next-intl';

export default function Projects() {
  const t = useTranslations('Projects');

  return (
    <section className='min-h-screen py-48 flex flex-col items-center'>
      <h2 className='text-8xl text-green-300'>{t('title')}</h2>
      <p className='py-6 text-center md:max-w-[30%]'>{t('description')}</p>
    </section>
  );
}
