import CallToActionText from "@/components/molecules/CallToActionText";
import homeData from "@/data/home.json";
import { HomeData } from "@/types/home";

export default function HeroSection() {
  const typedHomeData = homeData as HomeData;
  return (
    <section className="h-screen bg-radial-[at_25%_25%] from-black to-green-900 to-75% rounded-b-[80px] flex items-center justify-center px-4">
      <CallToActionText {...typedHomeData} />
    </section>
  );
}
