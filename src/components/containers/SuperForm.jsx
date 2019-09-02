import React from 'react';
import ReactDOMServer from 'react-dom/server';

import _get from 'lodash.get';
import prettifyHtml from 'prettify-html';
import classnames from 'classnames';
// import {  } from 'react-scroll';

import { Configurator, FormsContainer, FormWidget } from '../index';
import { KEY_LOGO_NAME } from '../../framework/constants/app';
import { FORM_SCHEME } from '../../framework/constants/form';

class SuperForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: FORM_SCHEME,
      formColor: 'black',
      show: true
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
    debugger;
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

  renderButton = () => {
    const { show } = this.state;
    const word = show ? 'Hide' : 'Show';
    const symbol = show ? '-' : '+';

    return (
      <span className={classnames('show-button', { filled: show })} onClick={() => this.setState(() => ({ show: !show }))}>
        {`${word} widget code ${symbol}`}
      </span>
    );
  };

  render() {
    const { show } = this.state;

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

    const showLogo = _get(FORM_SCHEME[KEY_LOGO_NAME], 'visible', true);

    const configuratorProps = {
      scheme: transformedScheme,
      onHiddenClick: this.onHiddenClick,
      onLockedClick: this.onLockedClick,
      onInputChange: this.onInputChange
    };

    const formWidgetProps = {
      showLogo,
      activeColor: this.state.formColor,
      onFormClick: this.onFormClick,
      scheme: transformedScheme
    };

    const formProps = {
      showLogo,
      scheme: transformedScheme,
      color: this.state.formColor
    };

    const textAreaProps = {
      className: 'raw-html-input',
      name: 'raw-html-input',
      id: 'raw-html-input',
      rows: '10',
      value: prettifyHtml(ReactDOMServer.renderToStaticMarkup(<FormWidget {...formProps} />)),
      onClick: (e) => e.target.select(),
      onChange: () => {}
    };

    return (
      <div className='super-form'>
        <Configurator {...configuratorProps} />
        <FormsContainer {...formWidgetProps} />

        <div className='raw-html container'>
          <div className='super-form-controls'>
            {this.renderButton()}
          </div>
          {show && (<textarea {...textAreaProps} />)}
        </div>
      </div>
    );
  }
}

export default SuperForm;
