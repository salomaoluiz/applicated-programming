import { Layout } from 'antd';
import React from 'react';

import Header from '@components/header';

interface Props {
  children: JSX.Element;
}
const Main = (props: Props) => {
  return (
    <Layout>
      <Header />
      {props.children}
    </Layout>
  );
};

export default Main;
