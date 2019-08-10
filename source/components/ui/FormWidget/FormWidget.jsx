import React from 'react';
import PropTypes from 'prop-types';

import Form from './Form';

const FormWidget = ({ scheme, showLogo, onFormClick }) => {
  const formProps = {
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
  scheme: PropTypes.object
}

Form.defaultProps = {
  scheme: {}
};

export default FormWidget;
