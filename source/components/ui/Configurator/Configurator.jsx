import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash.get';

import ConfiguratorRow from './ConfiguratorRow';
import ConfiguratorRowLogo from './ConfiguratorRowLogo';

const Configurator = ({ scheme }) => {
  return (
    <div className='configurator'>
      {Object.keys(scheme).map((key, index) => {
        const rowProps = {
          title: _get(scheme[key], 'title', ''),
          value: _get(scheme[key], 'value', ''),
          unit: _get(scheme[key], 'unit', ''),
          lockDisabled: _get(scheme[key], 'lockDisabled', true)
        };
        
        // for LOGO we need another similar component
        return  key !== 'LOGO' ? <ConfiguratorRow {...rowProps} key={`${index}-${key}`} /> : <ConfiguratorRowLogo {...rowProps} key={`${index}-${key}`} />;
      })}
      
    </div>
  );
};

Configurator.propTypes = {
  scheme: PropTypes.object
};

Configurator.defaultProps = {
  scheme: {}
};

export default Configurator;
