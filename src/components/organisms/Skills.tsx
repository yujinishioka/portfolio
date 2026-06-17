import { useTranslations } from 'next-intl';

type Category = {
  name: string;
  items: string[];
};

export default function Skills() {
  const t = useTranslations('Skills');
  const categories = t.raw('categories') as Category[];

  return (
    <section className="flex flex-col w-full min-h-screen py-32 items-center justify-center bg-black text-white">
      <h2 id="skills" className="text-primary-light text-4xl scroll-mt-24 md:text-6xl lg:text-8xl">
        {t('title')}
      </h2>
      <p className="pt-6 pb-12 text-center max-w-[80%] md:pb-16 lg:text-lg lg:max-w-[40%]">
        {t('description')}
      </p>
      <div className="grid grid-cols-1 gap-10 px-8 md:px-0 md:max-w-[80%] sm:grid-cols-2 md:gap-14">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-light">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary/40 px-3 py-1 text-sm text-white/80 transition-colors duration-200 hover:border-primary-light hover:text-primary-light"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
