import { useTranslations } from 'next-intl';
import { MidiaButton } from '@/components/atoms/MidiaButton';
import GitHubIcon from '@/components/icons/GitHubIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import EmailIcon from '@/components/icons/EmailIcon';
import Link from 'next/link';

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <section className="flex flex-col w-full min-h-screen items-center justify-center bg-black/80 text-white">
      <h2 id="contact" className="text-primary-light text-4xl scroll-mt-24 md:text-6xl lg:text-8xl">{t('title')}</h2>
      <p className='mt-6 p-6 md:mt-6'>Sinta-se livre para me contatar.</p>
      <div className='flex mt-6 gap-4 md:gap-8'>
        <a
          href="mailto:yuu.nishioka@outlook.com"
          target='_blank'
        >
          <MidiaButton>
            <EmailIcon className='w-13 h-13 m-1' />
          </MidiaButton>
        </a>
        <Link
          href="https://www.linkedin.com/in/yuji-nishioka/"
          target='_blank'
        >
          <MidiaButton>
            <LinkedInIcon className='w-10 h-10 m-3' />
          </MidiaButton>
        </Link>
        <Link
          href="https://github.com/yujinishioka"
          target='_blank'
        >
          <MidiaButton>
            <GitHubIcon className='w-16 h-16' />
          </MidiaButton>
        </Link>
      </div>
    </section>
  )
}
