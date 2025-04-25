'use client'

import { twMerge } from "tailwind-merge";
import LanguageSwitcher from "@/components/molecules/LanguageSwitcher";

export default function NavBar({ className }: Readonly<{ className?: string }>) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={twMerge("fixed z-50 top-4 left-1/2 -translate-x-1/2 px-2 bg-black/80 text-white shadow-md border-2 border-green-200 rounded-4xl", className)}>
      <nav className="flex items-center justify-center">
        <button className="p-3" onClick={() => scrollTo("projetos")}>projetos</button>
        <button className="p-3" onClick={() => scrollTo("experiencia")}>experiencia</button>
        <button className="p-3" onClick={() => scrollTo("sobre")}>sobre</button>
        <button className="p-3" onClick={() => scrollTo("contato")}>contato</button>
        <LanguageSwitcher />
      </nav>
    </div>
  );
}
