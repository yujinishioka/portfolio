import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { htmlPurify } from '@/lib/html-purify';

export default function About() {
  const t = useTranslations('About');
  const description = t.raw('description') as string;

  return (
    <section className="flex flex-col w-full min-h-screen items-center justify-center bg-black/80 text-white">
      <h2 id="about" className="text-primary-light text-4xl scroll-mt-24 md:text-6xl lg:text-8xl">{t('title')}</h2>

      {/* Mobile: texto em cima, foto abaixo */}
      <div className="flex flex-col items-center gap-8 mt-8 px-8 md:hidden">
        <div className="w-full rounded-lg bg-black/40 p-8 text-gray-light">
          <div dangerouslySetInnerHTML={htmlPurify(description)} className="[&>p+p]:mt-4" />
        </div>
        <Image
          src="/img/profile.png"
          alt={t('photoAlt')}
          width={280}
          height={280}
          className="w-64 h-64 rounded-2xl border-2 border-gray object-cover"
        />
      </div>

      {/* Desktop: card com foto sobreposta */}
      <div className="relative hidden mt-12 pb-24 pr-24 md:block md:max-w-1/2 md:min-w-[480px]">
        <div className="p-12 rounded-lg text-gray-light md:bg-black/40">
          <div dangerouslySetInnerHTML={htmlPurify(description)} className="[&>p+p]:mt-4 [&>p:not(:first-child)]:pr-52" />
        </div>
        <Image
          src="/img/profile.png"
          alt={t('photoAlt')}
          width={260}
          height={260}
          className="absolute top-[70%] -translate-y-1/2 right-0 w-56 h-56 rounded-2xl border-2 border-gray object-cover md:w-64 md:h-64"
        />
      </div>
    </section>
  );
}
