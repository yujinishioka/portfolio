'use client'

import React, { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  const t = useTranslations('Experience');
  const experiences = t.raw('items') as {
    id: number;
    date: string;
    position: string;
    company: string;
    workModel: string;
    companyUrl: string;
    summary: string;
  }[];

  const lineRef = useRef(null);
  const isLineInView = useInView(lineRef, { once: true });
  
  return (
    <div className="relative flex flex-col min-h-screen mt-24">
      <motion.div
        ref={lineRef}
        initial={{ height: 0 }}
        animate={isLineInView ? { height: "100%" } : {}}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute left-6 top-0 w-[4px] h-full -translate-x-1/2 transform rounded-full bg-primary-light md:left-1/2"
      />
      <div className="grid py-24 pl-6 items-start md:grid-cols-2 md:pl-0">
        {experiences.map((experience, index) => (
          <React.Fragment key={experience.id}>
            { index % 2 === 0 ? (
              <>
                <div className="hidden md:block" />
                <ExperienceCard
                  date={experience.date}
                  position={experience.position}
                  company={experience.company}
                  workModel={experience.workModel}
                  companyUrl={experience.companyUrl}
                  summary={experience.summary}
                />
              </>
            ):(
              <>
                <ExperienceCard
                  date={experience.date}
                  position={experience.position}
                  company={experience.company}
                  workModel={experience.workModel}
                  companyUrl={experience.companyUrl}
                  summary={experience.summary}
                  leftSide
                />
                <div className="hidden md:block" />
              </>
            )
            }
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
