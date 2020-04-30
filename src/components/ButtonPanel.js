/* eslint-disable no-unused-vars */
import React from 'react';
import Button from './Button';
import '../styles/styles.css';

const ButtonPanel = () => {
  const Gray = '#e0e0e0';
  return (
    <div className="buttonpanel">
      <div>
        <Button name="AC" color="{Gray}" />
        <Button name="+/-" color="{Gray}" />
        <Button name="%" color="{Gray}" />
        <Button name="÷" />
      </div>
      <div>
        <Button name="7" color="{Gray}" />
        <Button name="8" color="{Gray}" />
        <Button name="9" color="{Gray}" />
        <Button name="X" />
      </div>
      <div>
        <Button name="4" color="{Gray}" />
        <Button name="5" color="{Gray}" />
        <Button name="6" color="{Gray}" />
        <Button name="-" />
      </div>
      <div>
        <Button name="1" color="{Gray}" />
        <Button name="2" color="{Gray}" />
        <Button name="3" color="{Gray}" />
        <Button name="+" />
      </div>
      <div>
        <Button name="0" color="{Gray}" mid />
        <Button name="." color="{Gray}" />
        <Button name="=" />
      </div>
    </div>
  );
};

export default ButtonPanel;
