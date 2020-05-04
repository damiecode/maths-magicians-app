/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../styles/styles.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(calculate(this.state, buttonName));
  }

  render() {
    let result;
    const { next, total } = this.state;
    if (next != null) {
      result = next;
    } else if (total != null) {
      result = total;
    }
    return (
      <div className="app">
        <Display result={result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
