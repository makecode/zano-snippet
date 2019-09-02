import React from 'react';
import PropTypes from 'prop-types';

import FormWidget from './FormWidget';

const FormsContainer = ({ activeColor, scheme, showLogo, onFormClick }) => {
  const formProps = {
    activeColor,
    showLogo,
    scheme,
    onClick: onFormClick
  };

  return (
    <div className='forms-container'>
      <FormWidget {...formProps} color='black' />
      <FormWidget {...formProps} color='white' />
    </div>
  );
};

FormsContainer.propTypes = {
  activeColor: PropTypes.oneOf([
    'black', 'white'
  ]),
  scheme: PropTypes.array,
  showLogo: PropTypes.bool,
  onFormClick: PropTypes.func
}

FormsContainer.defaultProps = {
  scheme: {},
  showLogo: true,
  onFormClick: () => {}
};

export default FormsContainer;
