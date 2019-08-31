import React from 'react';
import PropTypes from 'prop-types';

import ConfiguratorRow from './ConfiguratorRow';
import ConfiguratorRowLogo from './ConfiguratorRowLogo';

import { KEY_LOGO_NAME } from '../../../framework/constants/app';

const Configurator = ({ scheme, onHiddenClick, onLockedClick, onInputChange }) => {
  return (
    <div className='configurator'>
      {scheme.map((item, index) => {
        const rowProps = {
          name: item.name,
          title: item.title,
          value: item.value,
          unit: item.unit,
          type: item.type,
          hidden: item.hidden,
          locked: item.locked,
          lockDisabled: item.lockDisabled,

          onHiddenClick,
          onLockedClick,
          onInputChange
        };
        
        // for LOGO we need another similar component
        return  item.name !== KEY_LOGO_NAME ? <ConfiguratorRow {...rowProps} key={`${index}-${item.name}`} /> : <ConfiguratorRowLogo {...rowProps} key={`${index}-${item.name}`} />;
      })}
      
    </div>
  );
};

Configurator.propTypes = {
  scheme: PropTypes.array,
  onHiddenClick: PropTypes.func,
  onLockedClick: PropTypes.func,
  onInputChange: PropTypes.func
};

Configurator.defaultProps = {
  scheme: [],
  onHiddenClick: () => {},
  onLockedClick: () => {},
  onInputChange: () => {}
};

export default Configurator;
