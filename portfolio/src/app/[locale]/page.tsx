import { useTranslations } from 'next-intl';
import { CallToActionTextProps } from '@/types/components';
import NavBar from '@/components/organisms/NavBar';
import HeroSection from "@/components/organisms/HeroSection";
import Projects from '@/components/organisms/Projects';
import Experience from '@/components/organisms/Experience';
import About from '@/components/organisms/About';
import Contact from '@/components/organisms/Contact';

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
      <HeroSection {...{
        ...dataHeroSection,
        url: 'projetos',
        isArchon: true,
        className: "z-10"
      }} />
      <Projects className="md:-mt-24 md:pt-72"/>
      <Experience />
      <About />
      <Contact />
    </div>
  );
}
