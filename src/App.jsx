import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import EmployeeList from './components/EmployeeList';
import NotFound from './components/NotFound';

import itemsJSON from './items.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: itemsJSON };
  }

  render() {
    const { items } = this.state;

    return (
      <Router>
        <Switch>
          <Route exact path="/" render={props => <EmployeeList {...props} items={items} />} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default hot(module)(App);
