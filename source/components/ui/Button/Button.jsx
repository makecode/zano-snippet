import React from 'react';
import classnames from 'classnames';

const Button = ({ children, className, disabled, blue, small, onClick }) => (
  <button className={classnames('button', className, { 'disabled': disabled, 'blue': blue, 'small': small })} onClick={onClick}>
    <span className="button-text">{children}</span>
  </button>
);

Button.defaultProps = {
  onClick: () => {}
};

export default Button;
