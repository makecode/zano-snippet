import React from 'react';
import PropTypes from 'prop-types';

import { formInputContainer, formInputField, formInputUnit } from './formStyles';

const FormInput = ({ name, value, unit, type, disabled, onChange }) => {
  const inputProps = {
    name,
    value,
    type,
    onChange: (event) => onChange(name, event.target.value)
  };

  const inputStyles = Object.assign({}, formInputField, {
    
  });

  return (
    <div style={formInputContainer}>
      <input style={inputStyles} {...inputProps} disabled={disabled} />
      {unit && (<span style={formInputUnit}>{unit}</span>)}
    </div>
  )
};

FormInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  unit: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'number'
  ]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

FormInput.defaultProps = {
  name: '',
  value: '',
  unit: '',
  type: 'text',
  disabled: false,
  onChange: () => {}
};

export default FormInput;
