import React, { Component } from 'react';

import Layout from 'HOC/Layout';
import BurgerBuilder from 'Containers/BurgerBuilder';
import Checkout from 'Containers/Checkout';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/" component={BurgerBuilder} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
