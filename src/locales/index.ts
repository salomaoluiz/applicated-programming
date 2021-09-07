import i18n from 'i18n-js';

import { DeepLeafKeys, DeepValue, Keys } from '@utils/object';

import * as persist from './persist';
import * as utils from './utils';
import enUS from './en-us'; // eslint-disable-line
import ptBR from './pt-br'; // eslint-disable-line

export type AppLocales = 'pt-BR' | 'en-US';

export const translations: Record<AppLocales, typeof enUS | typeof ptBR> = {
  ['pt-BR']: { ...ptBR },
  ['en-US']: { ...enUS },
};

i18n.translations = translations;

i18n.defaultLocale = 'pt-BR';
i18n.fallbacks = true;

export const initLocale = () => {
  const currentLocale = persist.getLocale() as AppLocales;

  if (!currentLocale) {
    i18n.locale = navigator.language;
    return;
  }

  i18n.locale = currentLocale;
};
initLocale();

export const translate = <T extends DeepLeafKeys<typeof enUS>>(
  p: T,
  options?: Record<Keys<DeepValue<T, typeof enUS>>[number], string>,
) => i18n.t(p, options);

export const getLanguage = () => i18n.locale;

export const getAvailableLocales = () =>
  Object.keys(i18n.translations) as AppLocales[];

export const translateInLocale = (key: string, locale: AppLocales) =>
  i18n.t(key, { locale });

export const setLanguage = (language: AppLocales) => {
  const isAvailable = utils.hasTranslationAvailable(language);

  if (!isAvailable) throw new Error('Unavailable language');

  i18n.locale = language;
  persist.saveLocale(language);
};
