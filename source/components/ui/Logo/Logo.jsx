import React from 'react';

import logo from './../../../media/images/logo.svg';

const Logo = () => {
  return (
    <a className='logo' href="https://zano.org/" target='_self'>
      <img className='logo__image' src={logo} alt="Zano"/>
      <p className='logo__text'>
        <span className='logo__world'>Zano</span>
      </p>
    </a>
  );  
};

export default Logo;
