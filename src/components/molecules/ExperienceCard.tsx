'use client'

import { useRef } from "react";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { motion, useInView } from "framer-motion";
import Html from "@/components/atoms/Html";

export default function ExperienceCard({
  date,
  position,
  company,
  workModel,
  companyUrl,
  summary,
  leftSide = false,
}: Readonly<{
  date: string;
  position: string;
  company: string;
  workModel: string;
  companyUrl: string;
  summary: string;
  leftSide?: boolean;
}>) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations('Experience');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex items-start justify-start w-full px-6 pb-12 md:max-w-[600px]"
    >
      <div className={`absolute top-0 -left-3 w-6 h-6 rounded-full bg-black border-8 border-primary-light ${
        leftSide ? "md:left-auto md:-right-3" : "-left-3"
      }`} />
      <div className={`flex flex-col -mt-[2px] gap-2 ${
        leftSide ? "md:items-end" : "items-start"
      }`}>
        <p className="px-4 pt-1 text-center font-semibold rounded-lg text-black/80 bg-primary-light">{date}</p>
        <p className="text-lg">{position}</p>
        <p className="text-primary-light">{company} | {workModel}</p>
        <Link
          href={companyUrl}
          target="_blank"
          className="px-8 rounded-lg bg-primary"
        >
          {t('visitCompany')}
        </Link>
        <Html
          text={summary}
          className={`flex flex-col mt-2 gap-1 text-sm ${
            leftSide ? "md:text-end" : ""
          }`}
        />
      </div>
    </motion.div>
  );
}
