import { useTranslations } from 'next-intl';
import HeroSection from "@/components/organisms/HeroSection";

export default function HomePage() {
  const t = useTranslations('HomePage');
  const data = {
    hero: t('hero'),
    description: t('description'),
    button1: t('button1'),
    button2: t('button2')
  }

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection data={data}/>
    </div>
  );
}
