import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Logo, Button, InputFormatted } from '../../index';
import { KEY_LOGO_NAME } from '../../../framework/constants/app';

const FormRow = ({ title, value, unit, disabled, hidden }) => {
  const inputProps = {
    value,
    disabled
  };

  return !hidden && (
    <div className='form-row'>
      <div className='form-row__title'>{title}</div>
      <div className='form-row__value'>
        <InputFormatted {...inputProps} />
        {unit && <span className='form-row__unit'>{unit}</span>}
      </div>
    </div>
  );
};

const Form = ({ activeColor, color, scheme, showLogo, onClick }) => (
  <div className={classnames('form-item', color, { 'active': color === activeColor })} onClick={() => onClick(color)}>
    {showLogo && <Logo />}

    {scheme.map((item, index) => {
      const rowProps = {
        name: item.name,
        title: item.title,
        value: item.value,
        unit: item.unit,
        type: item.type,
        hidden: item.hidden,
        disabled: item.locked
      };

      return item.name !== KEY_LOGO_NAME && <FormRow {...rowProps} key={`form-row-${index}`} />;
    })}

    <Button blue>Proceed to wallet</Button>
  </div>
);

Form.propTypes = {
  showLogo: PropTypes.bool
};

Form.defaultProps = {
  showLogo: true
};

export default Form;
