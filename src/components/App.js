import React from 'react';
import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="App">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}
