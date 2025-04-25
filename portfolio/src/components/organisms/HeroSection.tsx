import { twMerge } from "tailwind-merge";
import CallToActionText from "@/components/molecules/CallToActionText";
import { CallToActionTextProps } from "@/types/components";

type HeroSectionProps = CallToActionTextProps & {
  url?:string;
  isArchon?: boolean;
  className?: string;
};

export default function HeroSection({ className, ...props }: Readonly<HeroSectionProps>) {
  return (
    <section className={twMerge(
      "min-h-screen bg-radial-[at_25%_25%] from-black to-green-900 to-75% flex items-center justify-center px-4 lg:rounded-b-[80px]",
      className
    )}>
      <CallToActionText data={props} fallbackUrl="#projetos" />
    </section>
  );
}
