import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // lista de idiomas suportados
  locales: ['pt', 'en'],
  // idioma padrão
  defaultLocale: 'pt'
});
