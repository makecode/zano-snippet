import React from 'react';
import PropTypes from 'prop-types';

import Form from './Form';

const FormWidget = ({ activeColor, scheme, showLogo, onFormClick }) => {
  const formProps = {
    activeColor,
    showLogo,
    scheme,
    onClick: onFormClick
  };

  return (
    <div className='form-widget'>
      <Form {...formProps} color='black' />
      <Form {...formProps} color='white' />
    </div>
  );
};

Form.propTypes = {
  activeColor: PropTypes.oneOf([
    'black', 'white'
  ]),
  scheme: PropTypes.object,
  showLogo: PropTypes.bool,
  onFormClick: PropTypes.func
}

Form.defaultProps = {
  scheme: {},
  showLogo: true,
  onFormClick: () => {}
};

export default FormWidget;
