import React from 'react';
import classnames from 'classnames';

export const FooterNav = ({ items }) => (
  <div className='footer-nav'>
    {items.map((section, index) => (
      <div className='footer-nav__section' key={`f-s-${index}`}>
        <h4 className='footer-nav__title'>{section.title}</h4>
        <ul className='footer-nav__list'>
          {section.links.map((link, index) => (
            <li className='footer-nav__el' key={`f-el-${index}`}>
              <a className={classnames('footer-nav__link navigation__link', { 'disabled': link.disabled })} href={link.link}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default FooterNav;
