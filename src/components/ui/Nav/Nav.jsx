import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

const Nav = ({ items }) => {
  return(
    <nav className='navigation'>
      {items.map((item, index) => (
        <a
          className={classnames('navigation__link', { 'disabled': item.disabled })}
          href={item.link}
          key={index}>
            {item.title}
        </a>
      ))}
    </nav>
  )
};

Nav.propTypes = {
  items: PropTypes.array.isRequired
}

Nav.defaultProps = {
  items: []
}

export default Nav;
