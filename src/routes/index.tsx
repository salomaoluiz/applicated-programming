import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Error404 from '@screens/404';
import Home from '@screens/home';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path="/" to="/home" />

        {/* -- Routes -- */}

        <Route exact path="/home" component={Home} />
        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
