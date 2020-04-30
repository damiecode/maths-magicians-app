import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/styles.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}
