import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const Gray = '#e0e0e0';
  return (
    <div className="buttonpanel">
      <div>
        <Button key="AC" name="AC" color={Gray} clickHandler={clickHandler} />
        <Button key="+/-" name="+/-" color={Gray} clickHandler={clickHandler} />
        <Button key="%" name="%" color={Gray} clickHandler={clickHandler} />
        <Button key="÷" name="÷" clickHandler={clickHandler} />
      </div>
      <div>
        <Button key="7" name="7" color={Gray} clickHandler={clickHandler} />
        <Button key="8" name="8" color={Gray} clickHandler={clickHandler} />
        <Button key="9" name="9" color={Gray} clickHandler={clickHandler} />
        <Button key="X" name="X" clickHandler={clickHandler} />
      </div>
      <div>
        <Button key="4" name="4" color={Gray} clickHandler={clickHandler} />
        <Button key="5" name="5" color={Gray} clickHandler={clickHandler} />
        <Button key="6" name="6" color={Gray} clickHandler={clickHandler} />
        <Button key="-" name="-" clickHandler={clickHandler} />
      </div>
      <div>
        <Button key="1" name="1" color={Gray} clickHandler={clickHandler} />
        <Button key="2" name="2" color={Gray} clickHandler={clickHandler} />
        <Button key="3" name="3" color={Gray} clickHandler={clickHandler} />
        <Button key="+" name="+" clickHandler={clickHandler} />
      </div>
      <div>
        <Button key="0" name="0" color={Gray} half clickHandler={clickHandler} />
        <Button key="." name="." color={Gray} clickHandler={clickHandler} />
        <Button key="=" name="=" clickHandler={clickHandler} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
