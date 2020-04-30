import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, color, mid } = props;
  const style = {
    width: mid ? '50%' : '25%',
    background: color,
  };
  return (
    <button className="buttons" type="button" style={style}>
      {name}
    </button>
  );
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
  mid: false,
  color: 'orange',
};

Button.defaultProps = {
  mid: false,
  color: 'orange',
};

export default Button;
