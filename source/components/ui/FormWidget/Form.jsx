import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash.get';

import { Logo, Button } from '../../index';

const FormRow = ({}) => {
  return (
    <div>
      <span></span>
      <span></span>
    </div>
  );
};

const getForm = (scheme) => {
  Object.keys(scheme).map(() => {

  });

  return (
    <div>
      
    </div>
  )
}

const Form = ({ showLogo }) => {
  return (
    <div className='form-item'>
      {showLogo && <Logo />}
      <Button blue>Proceed to wallet</Button>
    </div>
  );
};

Form.propTypes = {
  showLogo: PropTypes.bool
};

Form.defaultProps = {
  showLogo: true
};

export default Form;
