'use client';

import Image from 'next/image';
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
}>) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='h-full flex flex-col items-center border border-gray-800 shadow cursor-pointer transition md:rounded-lg md:rounded-tr-[8rem]'>
          {images?.[0] && (
            <Image
              src={images[0].src}
              alt={images[0].alt}
              width={1000}
              height={500}
              className='w-full h-80 object-cover mb-4 md:rounded-tl-md md:rounded-tr-[8rem]'
            />
          )}
          <h3 className='text-2xl lg:text-4xl'>{title}</h3>
          <p className='pt-2 pb-8 text-center max-w-[80%] lg:text-lg'>{header}</p>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className='text-2xl'>{title}</DialogTitle>
          <DialogDescription>{header}</DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <p className="text-sm text-muted-foreground">{description}</p>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline text-sm"
            >
              Visitar site
            </a>
          )}
          <div>
            <strong>Tags:</strong>
            <div className="flex flex-wrap gap-2 mt-1">
              {tags.map((tag) => (
                <span key={tag} className="bg-muted px-2 py-1 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <strong>Tecnologias:</strong>
            <div className="flex flex-wrap gap-2 mt-1">
              {technologies.map((tech) => (
                <span key={tech} className="bg-muted px-2 py-1 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
