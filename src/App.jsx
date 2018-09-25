import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import EmployeeList from './components/EmployeeList';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

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
        <div>
          <Header />
          <Switch>
            <Route exact path="/" render={props => <EmployeeList {...props} items={items} />} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
