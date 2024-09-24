import React from 'react';
import { Link } from 'react-router-dom'; // Adjust the import if you're using next/link for Next.js
import hero6Img from '/img/hero-6-img.png'; // Adjust the path according to your project structure
import hero6El1 from '/img/hero-6-el-1.png';
import hero6El2 from '/img/hero-6-el-2.png';
import hero6El3 from '/img/hero-6-el-3.png';

const HeroSix = () => {
  return (
    <div className="hero-6 overflow-hidden">
      <div className="hero-6__inner section-space-sm-y">
        <div className="section-space-top section-space-sm-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <h2 className="mb-6 clr-white text-center fw-extrabold animate-line-3d">
                  Craft Professional Videos{' '}
                  <span className="d-inline-block ff-4 fw-normal">
                    Your text in <span className="d-inline-block text-underline clr-grad-4">Minutes.</span>
                  </span>
                </h2>
                <p className="mb-12 text-center ff-1 fs-18 fw-semibold clr-neutral-90 max-text-50 mx-auto animate-text-from-right">
                  Your One-Stop Solution for Content Creation, Audio Generation, Image Crafting, & AI Chatbot Development.
                </p>
                <div className="d-flex justify-content-center align-items-center flex-wrap gap-8 fadeIn_bottom">
                  <Link to="/login" className="link d-inline-block py-4 px-6 ff-1 bg-grad-4 clr-white fw-bold rounded">
                    Create Free Video
                  </Link>
                  <Link to="/login" className="link d-inline-block py-4 px-6 ff-1 gradient-btn-4 clr-white fw-bold rounded">
                    Try a template
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="position-relative z-1 fadeIn_bottom">
                <img src={hero6Img} alt="Trulli" className="img-fluid rounded-4 border border-8x border-outline border-opacity-2" />
                <img src={hero6El1} alt="element 1" className="img-fluid d-none d-lg-block hero-6__el hero-6__el-1" />
                <img src={hero6El2} alt="element 2" className="img-fluid d-none d-lg-block hero-6__el hero-6__el-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="hero-6__blurred d-none d-md-block"></span>
      <img src={hero6El3} alt="element 3" className="img-fluid d-none d-lg-block hero-6__el hero-6__el-3" />
      <svg width="0" height="0" className="d-none">
        <filter id="grainy" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency=".537"></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
          <feBlend mode="multiply" in="SourceGraphic" in2="floodFill"></feBlend>
        </filter>
      </svg>
    </div>
  );
};

export default HeroSix;
