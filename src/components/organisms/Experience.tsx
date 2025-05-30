import { useTranslations } from 'next-intl';
import ExperienceTimeline from '@/components/molecules/ExperienceTimeline';

export default function Experience() {
  const t = useTranslations('Experience');

  return (
    <section className="flex flex-col w-full min-h-screen py-48 items-center justify-center bg-black text-white">
      <h2 id="experience" className="text-primary-light text-4xl scroll-mt-24 md:text-6xl lg:text-8xl">{t('title')}</h2>
      <ExperienceTimeline />
    </section>
  )
}
