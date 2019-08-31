import React from 'react';

import classnames from 'classnames';

import { Logo, Nav, Social } from '../../index';
import { MENU_ITEMS, SOCIAL_ITEMS } from '../../../framework/constants/app';

const Header = () => (
  <header className='header' id="header">
    <div className={classnames('header__wrap', 'container')}>
      <Logo />
      <Nav items={MENU_ITEMS} />
      <Social items={SOCIAL_ITEMS} />
    </div>
  </header>
);

export default Header;
