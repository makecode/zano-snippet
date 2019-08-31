import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const InputFormatted = ({ name, value, suffix, type, disabled, onChange }) => {
  const inputProps = {
    name,
    value,
    type,
    disabled,
    onChange: (event) => onChange(name, event.target.value)
  };

  return (
    <div className={classnames('formatted', { 'disabled': disabled })}>
      <input
        className='formatted__input'
        {...inputProps}
      />
      {suffix && (<span className='formatted__suffix'>{suffix}</span>)}
    </div>
  )
}

InputFormatted.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  suffix: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'number'
  ]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

InputFormatted.defaultProps = {
  name: '',
  value: '',
  suffix: '',
  type: 'text',
  disabled: false,
  onChange: () => {}
};

export default InputFormatted;
