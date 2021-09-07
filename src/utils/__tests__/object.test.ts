import { getDeepKeys, getDeepLeafKeys } from '../object';

describe('Utils - Object', () => {
  describe('Dado que eu tenho um objeto qualquer', () => {
    test('deve retornar um array com todas as chaves do objeto', () => {
      const mockObj = {
        key1: {
          subKey1: 'test',
        },
        key2: {
          subKey2: {
            subSubKey2: 'test2',
          },
        },
      };

      const result = getDeepKeys(mockObj);

      expect(result).toEqual([
        'key1',
        'key1.subKey1',
        'key2',
        'key2.subKey2',
        'key2.subKey2.subSubKey2',
      ]);
    });
    test('deve retornar um array apenas as "folhas" do objeto', () => {
      const mockObj = {
        key1: {
          subKey1: 'test',
        },
        key2: {
          subKey2: {
            subSubKey2: 'test2',
          },
        },
      };

      const result = getDeepLeafKeys(mockObj);

      expect(result).toEqual(['key1.subKey1', 'key2.subKey2.subSubKey2']);
    });
  });
});
