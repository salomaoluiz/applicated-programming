import { Layout, Menu as MenuAnt } from 'antd';
import * as React from 'react';

import { translate } from '@locales';
import enUS from '@locales/en-us';
import { DeepLeafKeys } from '@utils/object';

import useHeader from './use-menu';

type MenuListMapValues = { label: DeepLeafKeys<typeof enUS> };

const menuList = new Map<string, MenuListMapValues>([
  ['home', { label: 'home.title' }],
  ['data-structure', { label: 'dataStructure.title' }],
  ['algorithms', { label: 'algorithms.title' }],
  ['software-architecture', { label: 'architecture.title' }],
]);

const Menu = () => {
  const { onClick, path } = useHeader();
  return (
    <Layout.Header>
      <MenuAnt
        onClick={onClick}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[path]}>
        {Array.from(menuList).map((menu) => (
          <MenuAnt.Item key={menu[0]}>{translate(menu[1].label)}</MenuAnt.Item>
        ))}
      </MenuAnt>
    </Layout.Header>
  );
};

export default Menu;
