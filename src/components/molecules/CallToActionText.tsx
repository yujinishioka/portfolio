"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/atoms/Button";
import { CallToActionTextProps } from "@/types/components";

type CallToActionTextFullProps = {
  data: CallToActionTextProps;
  onClickButton1?: () => void;
  onClickButton2?: () => void;
  fallbackUrl?: string;
};

export default function CallToActionText({
  data,
  onClickButton1,
  onClickButton2,
  fallbackUrl = "#",
}: Readonly<CallToActionTextFullProps>) {
  const router = useRouter();

  const handleButtonClick = (type: "button1" | "button2") => {
    if (type === "button1") {
      if (onClickButton1) {
        onClickButton1();
      } else {
        handleDefaultClick();
      }
    }

    if (type === "button2") {
      if (onClickButton2) {
        onClickButton2();
      } else {
        handleArchiveClick();
      }
    }
  };

  const handleDefaultClick = () => {
    if (fallbackUrl.startsWith("#")) {
      const id = fallbackUrl.slice(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(fallbackUrl);
    }
  };

  const handleArchiveClick = () => {
    window.open("/curriculo.pdf", "_blank");
  };

  return (
    <div className="space-y-4 max-w-[90%] sm:text-center md:max-w-[66%]">
      <h1 className="font-bold text-white text-2xl lg:text-4xl xl:text-6xl">
        {data.hero}
      </h1>
      <p className="text-white/80 text-lg lg:text-2xl">{data.description}</p>
      <div className="flex flex-col justify-center gap-4 md:flex-row">
        <Button
          variant="default"
          className="h-16 md:px-16"
          onClick={() => handleButtonClick("button1")}
        >
          {data.button1}
        </Button>
        <Button
          variant="outline"
          className="h-16 text-white border-white md:px-16"
          onClick={() => handleButtonClick("button2")}
        >
          {data.button2}
        </Button>
      </div>
    </div>
  );
}
