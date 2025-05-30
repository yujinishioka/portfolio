'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import Html from '@/components/atoms/Html';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export default function ProjectCard({
  title,
  header,
  description,
  url,
  tags,
  technologies,
  images,
  urlText = 'Visitar site',
  technologiesText = 'Tecnologias',
}: Readonly<{
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
  urlText?: string;
  technologiesText?: string;
}>) {
  const [emblaRef] = useEmblaCarousel({ loop: true });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="group h-full flex flex-col items-center border border-gray-dark shadow cursor-pointer transition overflow-hidden md:rounded-lg md:rounded-tr-[8rem]"
        >
          {images?.[0] && (
            <div className="w-full h-80 overflow-hidden md:rounded-tl-md md:rounded-tr-[8rem]">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                width={1000}
                height={500}
                className="w-full h-full object-cover mb-4 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          )}
          <h3 className="pt-6 text-2xl lg:text-4xl">{title}</h3>
          <p className="pt-2 pb-8 text-center max-w-[85%] lg:text-lg">{header}</p>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="w-full !max-w-4xl bg-radial-[at_40%_40%] from-primary-dark to-black text-white border-gray-dark overflow-hidden">
        <div className="md:grid md:grid-cols-4 md:gap-4">
          <DialogHeader className="text-start md:col-span-3">
            <DialogTitle className="text-2xl">{title}</DialogTitle>
            <DialogDescription className="text-sm text-gray-light">{header}</DialogDescription>
            <Html text={description} className="text-sm text-gray-light" />
          </DialogHeader>
          <div className="space-y-4 md:col-span-1">
            <div className="flex flex-wrap gap-2 mt-1">
              {tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs bg-black/90 border border-gray-dark rounded-xl">
                  {tag}
                </span>
              ))}
            </div>
            <div>
              <strong>{technologiesText}:</strong>
              <div className="flex flex-wrap gap-2 mt-1">
                {technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs bg-gray rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full px-2 py-1 text-sm text-primary font-bold items-center justify-center border-2 border-primary rounded hover:text-black hover:bg-primary transition duration-300 ease-in-out"
              >
                {urlText}
              </a>
            )}
          </div>
        </div>
        {images && images.length > 1 && (
          <div className="py-2 bg-black border border-black/80 rounded-2xl">
            <div className="embla overflow-hidden px-4">
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container flex gap-2">
                  {images.map((img, index) => (
                    <div
                      className="embla__slide shrink-0 w-[95%] relative h-[320px]"
                      key={'image-' + index}
                    >
                      <Image src={img.src} alt={img.alt} fill className="object-cover rounded-md" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
