import React from 'react';
import classnames from 'classnames';

import logo from './../../../media/images/logo.svg';

const Loader = ({ className }) => {
  return (
    <div className={classnames('loader', className)}>
      <img className='loader__img' src={logo} alt="Zano"/>
      <p className='loader__text'>Loading ...</p>
    </div>
  );
};

export default Loader;
