import React from 'react';

import { Logo, Social, FooterNav } from '../../index';
import { FOOTER_ITEMS, SOCIAL_ITEMS } from '../../../framework/constants/app';

const Footer = () => (
  <footer className='footer'>
    <Logo />
    <FooterNav items={FOOTER_ITEMS} />
    <Social items={SOCIAL_ITEMS} />
    <span className="copyright">Copyright © 2019 ZANO.org</span>
  </footer>
);

export default Footer;
