import React from 'react';
import PropTypes from 'prop-types';

import { Button, InputFormatted } from '../../index';

const ConfiguratorRow = ({name, title, value, unit, type, hidden, locked, lockDisabled, onInputChange, onHiddenClick, onLockedClick }) => {
  const inputProps = {
    name,
    value,
    type,
    unit,
    onChange: onInputChange
  }

  const buttonHiddenProps = {
    small:true,
    blue: hidden,
    onClick: () => onHiddenClick(name)
  };

  const buttonLockedProps = {
    small: true,
    blue: locked,
    disabled: lockDisabled,
    onClick: () => onLockedClick(name)
  };

  return (
    <div className='configurator-row'>
      <span className="configurator-row__title">{title}</span>
      <InputFormatted {...inputProps} />
      <div className="configurator-row__controls">
        <Button {...buttonHiddenProps}>Hidden</Button>
        <Button {...buttonLockedProps}>Locked</Button>
      </div>
    </div>
  );
};

ConfiguratorRow.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  unit: PropTypes.string,
  hidden: PropTypes.bool,
  locked: PropTypes.bool,
  lockDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  onHiddenClick: PropTypes.func,
  onLockedClick: PropTypes.func
};

ConfiguratorRow.defaultProps = {
  name: '',
  title: '',
  value: '',
  unit: '',
  hidden: false,
  locked: false,
  lockDisabled: false,
  onChange: () => {},
  onHiddenClick: () => {},
  onLockedClick: () => {}
};

export default ConfiguratorRow;
