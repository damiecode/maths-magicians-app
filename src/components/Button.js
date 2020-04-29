import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;
  return (
    <button className="buttons" type="button">
      {name}
    </button>
  );
};

Button.prop = {
  name: PropTypes.string.isRequired,
};

export default Button;