import React from 'react';
import PropTypes from 'prop-types';

import { Button, TextField } from '../../index';

const ConfiguratorRow = ({ title, value, unit, lockDisabled, onChange, onHiddenClick, onLockedClick }) => {
  const getValue = () => {
    const u = unit ? ` ${unit}` : ''
    return `${value}${u}`
  };

  return (
    <div className='configurator-row'>
      <span className="configurator-row__title">{title}</span>
      <div className='configurator-row__value'>
        <TextField value={getValue()} onChange={onChange} />
      </div>
      <div className="configurator-row__controls">
        <Button small onClick={onHiddenClick}>Hidden</Button>
        <Button small onClick={onLockedClick} disabled={lockDisabled}>Locked</Button>
      </div>
    </div>
  );
};

ConfiguratorRow.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  unit: PropTypes.string,
  lockDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  onHiddenClick: PropTypes.func,
  onLockedClick: PropTypes.func
};

ConfiguratorRow.defaultProps = {
  title: '',
  value: '',
  unit: '',
  lockDisabled: false,
  onChange: () => {},
  onHiddenClick: () => {},
  onLockedClick: () => {}
};

export default ConfiguratorRow;
