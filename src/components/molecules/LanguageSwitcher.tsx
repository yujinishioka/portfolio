'use client';

import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const otherLocales = routing.locales.filter((lang) => lang !== locale);

  return (
    <div className="flex justify-end">
      {otherLocales.map((lang) => (
        <Link
          key={lang}
          href={pathname}
          locale={lang}
          className="p-3 text-white hover:text-primary-light transition-colors duration-200 ease-in-out"
        >
          {lang.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
