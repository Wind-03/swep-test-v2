/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Bottom from './sections/Bottom';
import './LandingPage.css';


function LandingPage() {
  return (
    <div className='landingPage'>
      <Header/>
      <Hero/>
      <Features/>
      <Bottom/>
    </div>
  )
}

export default LandingPage