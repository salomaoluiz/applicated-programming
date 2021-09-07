import i18n from 'i18n-js';

import { AppLocales } from './';

export const hasTranslationAvailable = (language: AppLocales) =>
  Object.prototype.hasOwnProperty.call(i18n.translations, language);
