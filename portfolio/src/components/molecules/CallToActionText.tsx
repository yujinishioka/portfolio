'use client';

import { Button } from "@/components/atoms/Button";

export default function CallToActionText() {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl font-bold text-white">Bem-vindo ao meu portfólio!</h1>
      <p className="text-lg text-white/80">Explore meus projetos e conheça mais sobre meu trabalho.</p>
      <div className="flex justify-center gap-4">
        <Button variant="default">Ver Projetos</Button>
        <Button variant="outline" className="text-white border-white">Visualizar Currículo</Button>
      </div>
    </div>
  );
}
