import { useTranslations } from 'next-intl';
import NavBar from '@/components/organisms/NavBar';
import HeroSection from "@/components/organisms/HeroSection";
import { CallToActionTextProps } from '@/types/components';

export default function HomePage() {
  const t = useTranslations('HomePage');
  const dataHeroSection = {
    hero: t('hero'),
    description: t('description'),
    button1: t('button1'),
    button2: t('button2')
  } as CallToActionTextProps;

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar className="hidden md:flex"/>
      <HeroSection {...dataHeroSection}/>
    </div>
  );
}
