import { Layout, Menu } from 'antd';
import * as React from 'react';

import { translate } from '@locales';
import enUS from '@locales/en-us';
import { DeepLeafKeys } from '@utils/object';

import useHeader from './use-header';

type MenuListMapValues = { label: DeepLeafKeys<typeof enUS> };

const menuList = new Map<string, MenuListMapValues>([
  ['home', { label: 'home.title' }],
  ['data-structure', { label: 'dataStructure.title' }],
  ['algorithms', { label: 'algorithms.title' }],
]);

const Header = () => {
  const { onClick, path } = useHeader();
  return (
    <Layout.Header>
      <Menu
        onClick={onClick}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[path]}>
        {Array.from(menuList).map((menu) => (
          <Menu.Item key={menu[0]}>{translate(menu[1].label)}</Menu.Item>
        ))}
      </Menu>
    </Layout.Header>
  );
};

export default Header;
