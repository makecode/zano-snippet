import React from 'react';

import { Title } from './../../index';

const Hero = ({ txt }) => (
  <section className='container section hero'>
    <Title title={txt.sectionHero.title} shadow={txt.sectionHero.titleShadow} centred />
    <p className='section__text'>{txt.sectionHero.description}</p>
  </section>
);

export default Hero;
