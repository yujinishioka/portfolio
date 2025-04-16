import CallToActionText from "@/components/molecules/CallToActionText";

export default function HeroSection(props: any) {
  return (
    <section className="h-screen bg-radial-[at_25%_25%] from-black to-green-900 to-75% rounded-b-[80px] flex items-center justify-center px-4">
      <CallToActionText {...props} />
    </section>
  );
}
