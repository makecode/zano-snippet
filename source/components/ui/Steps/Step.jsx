import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Icon, Button } from './../../index';

const Step = ({ classNames, icon, title, active, subtitle, description, button }) => (
  <div className={classnames('step', classNames, {'step-active': active })}>
    <div className='step-title'>
      <Icon title={icon} />
      <span className='step-title-text'>{title}</span>
      {/*<span className='step-title-active'>*/}
      {/*  <Icon title='step-active' />*/}
      {/*</span>*/}
    </div>
    <h5 className='step-subtitle'>{subtitle}</h5>
    <p className='step-description'>{description}</p>
    {button && <Button className='step-button' blue>
      {button.link ? (<a href={button.link}>{button.title}</a>) : <span>{button.title}</span>}
    </Button>}
  </div>
);

Step.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  active: PropTypes.bool,
  button: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string
    })
  )
};

Step.defaultProps = {
  className: '',
  title: '',
  subtitle: '',
  description: '',
  icon: '',
  active: false
}

export default Step;
