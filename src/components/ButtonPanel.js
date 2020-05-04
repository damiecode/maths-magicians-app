/* eslint-disable no-unused-vars */
import React from 'react';
import propTypes from 'prop-types';
import Button from './Button';
import '../styles/styles.css';

const ButtonPanel = ({ clickHandler }) => {
  const Gray = '#e0e0e0';
  return (
    <div className="buttonpanel">
      <div>
        <Button name="AC" color="{Gray}" clickHandler={clickHandler} />
        <Button name="+/-" color="{Gray}" clickHandler={clickHandler} />
        <Button name="%" color="{Gray}" clickHandler={clickHandler} />
        <Button name="÷" clickHandler={clickHandler} />
      </div>
      <div>
        <Button name="7" color="{Gray}" clickHandler={clickHandler} />
        <Button name="8" color="{Gray}" clickHandler={clickHandler} />
        <Button name="9" color="{Gray}" clickHandler={clickHandler} />
        <Button name="X" clickHandler={clickHandler} />
      </div>
      <div>
        <Button name="4" color="{Gray}" clickHandler={clickHandler} />
        <Button name="5" color="{Gray}" clickHandler={clickHandler} />
        <Button name="6" color="{Gray}" clickHandler={clickHandler} />
        <Button name="-" clickHandler={clickHandler} />
      </div>
      <div>
        <Button name="1" color="{Gray}" clickHandler={clickHandler} />
        <Button name="2" color="{Gray}" clickHandler={clickHandler} />
        <Button name="3" color="{Gray}" clickHandler={clickHandler} />
        <Button name="+" />
      </div>
      <div>
        <Button name="0" color="{Gray}" mid clickHandler={clickHandler} />
        <Button name="." color="{Gray}" clickHandler={clickHandler} />
        <Button name="=" />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: propTypes.func.isRequired,
};

export default ButtonPanel;
