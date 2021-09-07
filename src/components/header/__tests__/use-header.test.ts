import { act, renderHook } from '@testing-library/react-hooks';
import * as reactRouter from 'react-router';

import useHeader from '../use-header';

jest.mock('react-router');

describe('Components - useHeader', () => {
  const historyPush = jest.fn();
  jest.spyOn(reactRouter, 'useHistory').mockReturnValue({
    push: historyPush,
    location: { pathname: '/data-structure' },
  } as never);

  describe('Ao renderizar o hook', () => {
    test('deve retornar a rota atual', () => {
      const { result } = renderHook(useHeader);

      expect(result.current.currentPath).toEqual('data-structure');
    });
  });

  describe('Dado que eu clico em no menu', () => {
    test('devo navegar para aquela rota', () => {
      const { result } = renderHook(useHeader);

      act(() => {
        result.current.onClick({ key: 'home' });
      });

      expect(historyPush).toHaveBeenCalledWith('home');
    });
  });
});
