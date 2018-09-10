import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import HelloWorld from './components/hello-world';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button className="button is-primary">Meu botao</button>
      </div>
    );
  }
}

export default hot(module)(App);
