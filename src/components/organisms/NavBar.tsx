'use client'

import { useTranslations } from 'next-intl';
import { twMerge } from "tailwind-merge";
import LanguageSwitcher from "@/components/molecules/LanguageSwitcher";

export default function NavBar({ className }: Readonly<{ className?: string }>) {
  const t = useTranslations('NavBar');
  const buttonClass = "p-3 cursor-pointer transition-colors duration-200 ease-in-out hover:text-primary-light";
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={twMerge("fixed z-50 top-4 left-1/2 -translate-x-1/2 px-2 bg-black/80 text-white shadow-md border-2 border-primary-light rounded-4xl", className)}>
      <nav className="flex items-center justify-center">
        <button className={buttonClass} onClick={() => scrollTo("projects")}>{t('projects')}</button>
        <button className={buttonClass} onClick={() => scrollTo("experience")}>{t('experience')}</button>
        <button className={buttonClass} onClick={() => scrollTo("about")}>{t('about')}</button>
        <button className={buttonClass} onClick={() => scrollTo("contact")}>{t('contact')}</button>
        <LanguageSwitcher />
      </nav>
    </div>
  );
}
