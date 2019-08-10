import React from 'react';
import PropTypes from 'prop-types';

import { Button, TextField } from '../../index';

const ConfiguratorRow = ({ name, title, onHiddenClick }) => {

  return (
    <div className='configurator-row'>
      <span className="configurator-row__title">{title}</span>
      <div className="configurator-row__controls">
        <Button small onClick={() => onHiddenClick(name)}>Hidden</Button>
      </div>
    </div>
  );
};

ConfiguratorRow.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  onHiddenClick: PropTypes.func
};

ConfiguratorRow.defaultProps = {
  name: '',
  title: '',
  onHiddenClick: () => {}
};

export default ConfiguratorRow;
