import { AppLocales } from '.';

export const LOCALE_KEY = '@@locales/language';

export const getLocale = () => {
  return window.localStorage.getItem(LOCALE_KEY);
};

export const saveLocale = (language: AppLocales) => {
  window.localStorage.setItem(LOCALE_KEY, language);
};
