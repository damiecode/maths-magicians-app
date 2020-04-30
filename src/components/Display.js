/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  return (
    <div className="display">
      {result}
    </div>
  );
};

Display.prop = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
