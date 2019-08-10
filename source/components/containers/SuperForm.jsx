import React from 'react';
import classnames from 'classnames';
import _get from 'lodash.get';

// import {  } from 'react-scroll';

import { Configurator, FormWidget } from '../index';
import { KEY_LOGO_NAME } from '../../framework/constants/app';

const FORM_SCHEME = {
  YOUR_WALLET:  { title: 'Your wallet address',         value: 'XXXXxxxxXXXXxxxxXXXXxxxxXXXXxxxxXXXXxxxxXXXX',      unit: '',                                       hidden: false,          locked: false,           lockDisabled: true },
  YOUR_ID:      { title: 'Your payment ID',             value: '@test',                                             unit: '',                                       hidden: false,          locked: false,           lockDisabled: true },
  AMOUNT:       { title: 'Amount',                      value: '15',                                                unit: 'ZANO',         type: 'number',           hidden: false,          locked: true,           lockDisabled: false },
  LOGO:         { title: 'ZANO logo',                   visible: true }
}

class SuperForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: FORM_SCHEME,
      formColor: 'black'
    };
  }

  onHiddenClick = (name) => {
    const { form } = this.state;

    if (name !== KEY_LOGO_NAME) {
      form[name].hidden = !form[name].hidden;
    } else {
      form[name].visible = !form[name].visible;
    }

    this.setState(() => ({
      form
    }));
  };

  onLockedClick = (name) => {
    const { form } = this.state;
    form[name].locked = !form[name].locked

    this.setState(() => ({
      form
    }));
  };

  onInputChange = (name, value) => {
    const { form } = this.state;
    form[name].value = value;

    this.setState(() => ({
      form
    }));
  }

  onFormClick = (color) => this.setState(() => ({
    formColor: color
  }));

  render() {
    const transformedScheme = Object.keys(FORM_SCHEME).map((key) => ({
      name: key,
      title: _get(FORM_SCHEME[key], 'title', ''),
      value: _get(FORM_SCHEME[key], 'value', ''),
      unit: _get(FORM_SCHEME[key], 'unit', ''),
      type: _get(FORM_SCHEME[key], 'type', 'text'),
      hidden: _get(FORM_SCHEME[key], 'hidden', ''),
      locked: _get(FORM_SCHEME[key], 'locked', false),
      lockDisabled: _get(FORM_SCHEME[key], 'lockDisabled', true),
    }));

    const configuratorProps = {
      scheme: transformedScheme,
      onHiddenClick: this.onHiddenClick,
      onLockedClick: this.onLockedClick,
      onInputChange: this.onInputChange
    };

    const formWidgetProps = {
      onFormClick: this.onFormClick,
      showLogo: _get(FORM_SCHEME[KEY_LOGO_NAME], 'visible', true),
      scheme: transformedScheme
    };

    return (
      <div className='super-form'>
        <Configurator {...configuratorProps} />
        <FormWidget {...formWidgetProps} />
      </div>
    );
  }
}

export default SuperForm;
