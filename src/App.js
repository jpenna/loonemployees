import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

import EmployeeList from './components/EmployeeList';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

import itemsJSON from './items.json';

export class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { items: itemsJSON };

    this.onClickBio = this.onClickBio.bind(this);
  }

  onClickBio({ e, id }) {
    e.stopPropagation();
    e.currentTarget.blur(); // Remove focus outline on click, but keep for accessibility
    const randomHsl = `hsla(${Math.random() * 360}, 60%, 80%, 0.4)`;

    this.setState((prevState) => {
      const { items: prevItems } = prevState;
      const items = [...prevItems];
      const index = items.findIndex(i => i.id === id);
      const item = { ...items[index], backgroundColor: randomHsl };
      items[index] = item;
      return { items };
    });
  }

  render() {
    const { items } = this.state;

    return (
      <div className="app-container">
        <div className="container app-content">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <EmployeeList
                  {...props}
                  items={items}
                  onClickBio={this.onClickBio}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default hot(module)(AppComponent);
