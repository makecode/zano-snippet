import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';

const Social = ({ items }) => (
  <ul className='social'>
    { items.map((icon, index) => (
      <li className='social__el' key={index}>
        <a className='social__link' href={icon.link} title={icon.title}>
          <Icon title={icon.title} />
        </a>
      </li>
    )) }
  </ul>
);

Social.propTypes = {
  items: PropTypes.array.isRequired
}

Social.defaultProps = {
  items: []
}

export default Social;
