import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <div className="relative flex flex-col min-h-screen mt-24">
      <div className="absolute left-0 top-0 w-[4px] h-full -translate-x-1/2 transform rounded-full bg-primary-light md:left-1/2" />
      <div className="py-24">
        <ExperienceCard />
      </div>
    </div>
  )
}
