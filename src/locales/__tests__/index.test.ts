import { getDeepKeys } from '@utils/object';

import { AppLocales, translations } from '../index';
const languages = Object.keys(translations) as AppLocales[];

jest.mock('i18n-js');

describe('Locales', () => {
  describe(`Dado que eu tenho as traduçoes ${languages}`, () => {
    test('Todas as linguagens devem possuir as mesmas chaves', () => {
      languages.forEach((language, index, arr) => {
        if (index + 1 < arr.length) {
          expect(getDeepKeys(translations[language])).toEqual(
            getDeepKeys(translations[arr[index + 1]])
            ,
          );
        }
      });
    });
  });
});
