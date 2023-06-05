import React from 'react';

import cloud from '../../images/cloud.png';
import cloudSoft from '../../images/cloud-soft.png';

import Navigation from './navigation-bar';
import IntroContent from './intro-content';

import './style.scss';

const Intro = () => {
  return (
    <div className='intro-section' id="home">
      <div className="vector-bg" id="parallax"></div>

      <img src={cloud} alt="intro" className='cloud' />
      <img src={cloudSoft} alt="intro" className='cloud-soft cloud' />

      <div className="content">
        <Navigation />
        <IntroContent />
      </div>
    </div>
  );
}

export default Intro;
