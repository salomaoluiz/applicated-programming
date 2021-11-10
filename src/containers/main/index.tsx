import { Layout } from 'antd';
import React from 'react';

import Menu from '@components/menu';

interface Props {
  children: JSX.Element;
}
const Main = (props: Props) => {
  return (
    <Layout>
      <Menu />
      {props.children}
    </Layout>
  );
};

export default Main;
