import CallToActionText from "@/components/molecules/CallToActionText";
import { CallToActionTextProps } from "@/types/components";

export default function HeroSection(props: Readonly<CallToActionTextProps>) {
  return (
    <section className="min-h-screen bg-radial-[at_25%_25%] from-black to-green-900 to-75% flex items-center justify-center px-4 lg:rounded-b-[80px]">
      <CallToActionText data={props} />
    </section>
  );
}
