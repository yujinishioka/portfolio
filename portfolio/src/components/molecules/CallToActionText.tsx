"use client";

import { Button } from "@/components/atoms/Button";
import { CallToActionTextProps } from "@/types/components";

export default function CallToActionText({ data }: Readonly<{ data: CallToActionTextProps }>) {
  return (
    <div className="space-y-4 max-w-[90%] sm:text-center md:max-w-[66%]">
      <h1 className="font-bold text-white text-2xl lg:text-4xl xl:text-6xl">{data.hero}</h1>
      <p className="text-white/80 text-lg lg:text-2xl">{data.description}</p>
      <div className="flex flex-col justify-center gap-4 md:flex-row">
        <Button
          variant="default"
          className="h-16 md:px-16"
        >
          {data.button1}
        </Button>
        <Button
          variant="outline"
          className="h-16 text-white border-white md:px-16"
        >
          {data.button2}
        </Button>
      </div>
    </div>
  );
}
