import React from 'react';

import { Steps } from './../../index';

const How = ({ txt }) => {

  return (
    <section className='section how' id='how'>
      <div className='section-wrap container'>
        <Steps steps={txt.sectionHow.steps} />
      </div>
    </section>
  )
};

export default How;
