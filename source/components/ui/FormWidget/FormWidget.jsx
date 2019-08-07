import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash.get';

import Form from './Form';

const FormWidget = ({ scheme }) => {
  const showLogo = _get(scheme, 'LOGO.visible', true);

  const formProps = {
    showLogo
  };

  return (
    <div className='form-widget'>
      <Form {...formProps} />
      <Form {...formProps} />
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
