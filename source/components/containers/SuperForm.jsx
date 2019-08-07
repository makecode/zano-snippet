import React from 'react';
import classnames from 'classnames';
// import {  } from 'react-scroll';

import { Configurator, FormWidget } from '../index';

const FORM_SCHEME = {
  YOUR_WALLET:  { title: 'Your wallet address',         value: 'XXXXxxxxXXXXxxxxXXXXxxxxXXXXxxxxXXXXxxxxXXXX',      unit: '',               hidden: false,          locked: true,           lockDisabled: true },
  YOUR_ID:      { title: 'Your payment ID',             value: '@test',                                             unit: '',               hidden: false,          locked: true,           lockDisabled: true },
  AMOUNT:       { title: 'Amount',                      value: '15',                                                unit: 'ZANO',           hidden: false,          locked: true,           lockDisabled: false },
  LOGO:         { title: 'ZANO logo',                   visible: true }
}

const SuperForm = () => {

  const onHiddenClick = (name, value) => {

  };

  const onLockedClick = (name, value) => {

  };

  const onInputChange = (name, value) => {
    
  }

  return (
    <div className='super-form'>
      <Configurator scheme={FORM_SCHEME} />
      <FormWidget scheme={FORM_SCHEME} />
    </div>
  )
}

export default SuperForm;
