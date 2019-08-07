import React from 'react';

import classnames from 'classnames';

const Icon = (props) => {
  return (
    <span className={classnames('icon', props.title)} />
  );
};

export default Icon;
