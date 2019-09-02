import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Step from './Step';

const Steps = ({ steps }) => {
  const [ visible, setVisible ] = useState(true);
  
  const renderButton = () => {
    const word = visible ? 'Hide' : 'Show';
    const symbol = visible ? '-' : '+';

    return (
      <span className={classnames('steps__button', { filled: visible })} onClick={() => setVisible(!visible)}>
        {`${word} info ${symbol}`}
      </span>
    );
  };

  return (
    <div className='steps'>
      <div className="steps__controls">
        {renderButton()}
      </div>
      <ul className="steps__list">
        {visible ? steps.map((step, index) => <li className='steps__el' key={index}><Step {...step} /></li>) : false}
      </ul>
    </div>
  );
};

Steps.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape(Step.propTypes)
  )
};

export default Steps;
