import React from 'react';
import PropTypes from 'prop-types';

const Button = (): JSX.Element => <button>A button</button>;

Button.displayName = 'Button';
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: null,
};

export default Button;
