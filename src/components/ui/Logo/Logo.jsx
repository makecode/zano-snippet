import React from 'react';

const Logo = () => {
  return (
    <a className='logo' href="https://zano.org/" target='_self'>
      <span className='logo__image'/>
      <p className='logo__text'>
        <span className='logo__world'>Zano</span>
        <span className='logo__world'>Marketplace</span>
      </p>
    </a>
  );
};

export default Logo;
