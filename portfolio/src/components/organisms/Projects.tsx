import { useTranslations } from 'next-intl';
import { twMerge } from "tailwind-merge";
import ProjectCard from '@/components/molecules/ProjectCard';

export default function Projects({ className }: Readonly<{ className?: string }>) {
  const t = useTranslations('Projects');
  const projectsGroup = t.raw('projects_group') as {
    id: number;
    title: string;
    header: string;
    description: string;
    url: string;
    tags: string[];
    technologies: string[];
    images?: {
      src: string;
      alt: string;
    }[];
  }[];
  const projectsSolo = t.raw('projects_solo') as {
    id: number;
    title: string;
    header: string;
    description: string;
    url: string;
    tags: string[];
    technologies: string[];
    images?: {
      src: string;
      alt: string;
    }[];
  }[];

  return (
    <section className={twMerge('bg-black/80 text-white min-h-screen py-48 flex flex-col items-center', className)}>
      <h2 id='projetos' className='text-green-300 text-4xl scroll-mt-24 md:text-6xl lg:text-8xl'>{t('title')}</h2>
      <p className='pt-6 pb-12 text-center max-w-[80%] md:pb-24 lg:text-lg lg:max-w-[40%]'>{t('description')}</p>
      <div className='grid items-center justify-between gap-24 md:gap-12 md:max-w-[80%] lg:grid-cols-2 xl:grid-cols-3'>
        {
          projectsGroup.map((project) => (
            <ProjectCard
              key={'project-' + project.id}
              title={project.title}
              header={project.header}
              description={project.description}
              url={project.url}
              tags={project.tags}
              technologies={project.technologies}
              images={project.images}
              urlText={t('urlText')}
              technologiesText={t('technologiesText')}
            />
          ))
        }
      </div>
      <p className='py-12 text-center max-w-[80%] md:py-24 lg:text-lg lg:max-w-[40%]'>{t('half')}</p>
      <div className='grid items-center justify-between gap-24 md:gap-12 md:max-w-[80%] lg:grid-cols-2 xl:grid-cols-3'>
        {
          projectsSolo.map((project) => (
            <ProjectCard
              key={'project-solo-' + project.id}
              title={project.title}
              header={project.header}
              description={project.description}
              url={project.url}
              tags={project.tags}
              technologies={project.technologies}
              images={project.images}
              urlText={t('urlText')}
              technologiesText={t('technologiesText')}
            />
          ))
        }
      </div>
    </section>
  );
}
