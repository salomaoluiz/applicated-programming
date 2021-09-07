import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Main from '@containers/main';
import Error404 from '@screens/404';
import Home from '@screens/home';

const Router = () => {
  return (
    <BrowserRouter>
      <Main>
        <Switch>
          <Redirect exact path="/" to="/home" />

          {/* -- Routes -- */}

          <Route exact path="/home" component={Home} />

          <Route path="*" component={Error404} />
        </Switch>
      </Main>
    </BrowserRouter>
  );
};

export default Router;
