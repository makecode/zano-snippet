import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import FormRow from './FormRow';

import { KEY_LOGO_NAME } from '../../../framework/constants/app';
import { formItem, formButton, formButtonText, formLogo, formLogoImage, formLogoText } from './formStyles';

/**
 * What happened here?
 * This is a widget for inserting to 3d party sites
 * and we need inline styles for that.
 */
const FormWidget = ({ activeColor, color, scheme, showLogo, onClick }) => {
  const formItemStyles = Object.assign({}, formItem, {
    'backgroundColor': color === 'white' ? 'white' : '#1E3068' 
  });

  const renderLogo = () => (
    <div style={formLogo}>
      <span style={formLogoImage} />
      <span style={formLogoText} >Zano</span>
    </div>
  );

  return (
    <div id='zano-form-widget' className={classnames('zano-form-widget', color, { 'active': color === activeColor })} style={formItemStyles} onClick={() => onClick(color)}>
      {showLogo && renderLogo()}

      {scheme.map((item, index) => {
        const rowProps = {
          color,
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

      <button style={formButton} onClick={() => {}}>
        <span style={formButtonText}>Proceed to wallet</span>
      </button>
    </div>
)};

FormWidget.propTypes = {
  showLogo: PropTypes.bool,
  color: PropTypes.oneOf([
    'black', 'white'
  ]),
  onClick: PropTypes.func
};

FormWidget.defaultProps = {
  showLogo: true,
  color: 'black',
  onClick: () => {}
};

export default FormWidget;
