import { act, renderHook } from '@testing-library/react-hooks';
import * as reactRouter from 'react-router';

import useMenu from '../use-menu';

jest.mock('react-router');

describe('Components - useMenu', () => {
  const historyPush = jest.fn();
  jest.spyOn(reactRouter, 'useHistory').mockReturnValue({
    push: historyPush,
    location: { pathname: '/data-structure' },
  } as never);

  describe('Ao renderizar o hook', () => {
    test('deve retornar a rota atual', () => {
      const { result } = renderHook(useMenu);

      expect(result.current.path).toEqual('data-structure');
    });
  });

  describe('Dado que eu clico em no menu', () => {
    test('devo navegar para aquela rota', () => {
      const { result } = renderHook(useMenu);

      act(() => {
        result.current.onClick({ key: 'home' });
      });

      expect(historyPush).toHaveBeenCalledWith('home');
    });
  });
});
