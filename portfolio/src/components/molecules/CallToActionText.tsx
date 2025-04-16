"use client";

import { Button } from "@/components/atoms/Button";

export default function CallToActionText({ data }: Readonly<{ data: any }>) {
  return (
    <div className="text-center space-y-4 max-w-[66%]">
      <h1 className="text-6xl font-bold text-white">{data.hero}</h1>
      <p className="text-2xl text-white/80">{data.description}</p>
      <div className="flex justify-center gap-4">
        <Button variant="default">{data.button1}</Button>
        <Button variant="outline" className="text-white border-white">
          {data.button2}
        </Button>
      </div>
    </div>
  );
}
