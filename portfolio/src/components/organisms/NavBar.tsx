import { twMerge } from "tailwind-merge";
import LanguageSwitcher from "@/components/molecules/LanguageSwitcher";

export default function NavBar({ className }: Readonly<{ className?: string }>) {
  return (
    <div className={twMerge("fixed z-50 top-4 left-1/2 -translate-x-1/2 px-2 bg-black/80 text-white shadow-md border-2 border-green-200 rounded-4xl", className)}>
      <nav className="flex items-center justify-center">
        <div className="p-3">projetos</div>
        <div className="p-3">experiencia</div>
        <div className="p-3">sobre</div>
        <div className="p-3">contato</div>
        <LanguageSwitcher />
      </nav>
    </div>
  );
}
