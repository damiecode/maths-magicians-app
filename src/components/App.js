/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-unused-vars */
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
    const { next, total, operation } = this.state;
    return (
      <div className="app">
        <Display operation={operation} next={next || '0'} total={total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
