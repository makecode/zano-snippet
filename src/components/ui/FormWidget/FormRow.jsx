import React from 'react';
import FormInput from './FormInput';

import { formTitle, formRow } from './formStyles';

const FormRow = ({ color, title, value, unit, disabled, hidden }) => {
  const inputProps = {
    value,
    unit,
    disabled
  };

  const titleStyles = Object.assign({}, formTitle, {
    'color': color === 'white' ? 'black' : 'white'
  });

  return !hidden && (
    <div style={formRow}>
      <div style={titleStyles}>{title}</div>
      <FormInput {...inputProps} />
    </div>
  );
};

export default FormRow;
