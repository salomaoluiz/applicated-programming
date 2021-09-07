import { Layout, Menu } from 'antd';
import * as React from 'react';

import useHeader from './use-header';

const menuList = new Map([
  ['home', { label: 'Programação Aplicada' }],
  ['data-structure', { label: 'Estrutura de Dados' }],
  ['algorithms', { label: 'Algoritmos' }],
]);

const Header = () => {
  const { onClick, currentPath } = useHeader();
  return (
    <Layout.Header>
      <Menu
        onClick={onClick}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[currentPath]}>
        {Array.from(menuList).map((menu) => (
          <Menu.Item key={menu[0]}>{menu[1].label}</Menu.Item>
        ))}
      </Menu>
    </Layout.Header>
  );
};

export default Header;
