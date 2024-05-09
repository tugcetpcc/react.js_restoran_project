import React from 'react';
import './HeroStyles.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="container">
        <div className="content">
          <div className="text">
            <p>Her zaman</p>
          </div>
          <h1>Taze Servis Edilir</h1>
          <h1>Günlük</h1>
          <button className="btn btn-delivery">Teslimat</button>
          <button className="btn btn-order">Sipariş et</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

