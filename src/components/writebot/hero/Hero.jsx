import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-7 section-space-bottom">
      <div className="section-space-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h3 className="clr-white text-center position-relative z-index-1 mb-8 animate-line-3d">
                Unlocking The Power Of AI
              </h3>
              <div className="d-flex flex-wrap gap-6 justify-content-center align-items-center position-relative z-index-1 fadeIn_bottom">
                <Link to="/register" className="link d-inline-flex justify-content-center align-items-center gap-2 py-4 px-6 border border-primary-key :border-primary-30 bg-primary-key :bg-primary-30 rounded-1 fw-bold clr-white :arrow-btn">
                  <span>Get Started Now</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
                <Link to="/login" className="link d-inline-flex justify-content-center align-items-center gap-2 py-4 px-6 border border-primary-key :border-primary-30 :bg-primary-30 rounded-1 fw-bold clr-white :arrow-btn">
                  <span>Download Now</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-7-circle-wrapper">
        <div className="hero-7-circle hero-7-circle-one"></div>
        <div className="hero-7-circle hero-7-circle-two"></div>
        <div className="hero-7-circle hero-7-circle-three"></div>
        <div className="hero-7-radar">
          <div className="animated-text-wrapper">
            <p className="cd-headline slide mb-0">
              <span className="cd-words-wrapper">
                <b className="is-visible">WriteBot AI</b>
                <b>WriteBot AI</b>
                <b>WriteBot AI</b>
              </span>
            </p>
          </div>
        </div>
        <div className="hero-7-logo-wrapper d-flex justify-content-center align-items-center">
          <img src="/img/hero-7-logo.png" alt="image" className="img-fluid hero-7-logo" />
        </div>
      </div>
      <div className="hero-7-video-main">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="hero-7-video-wrapper">
                <div className="hero-7-video-wrapper-inner">
                  <video autoPlay className="w-100 h-100">
                    <source src="/img/wirtebot-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <img src="/img/hero-7-video-frame.png" alt="image" className="img-fluid hero-7-video-frame" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-7-main-cirlce">
        <div className="hero-7-main-cirlce-left"></div>
        <div className="hero-7-main-cirlce-right"></div>
      </div>
      <img src="/img/hero-7-top-line.png" alt="image" className="img-fluid hero-7-shape hero-7-shape-top-line" />
      <img src="/img/hero-7-top-dots.png" alt="image" className="img-fluid hero-7-shape hero-7-shape-top-dots" />
      <img src="/img/hero-7-ai-feature-text.png" alt="image" className="img-fluid hero-7-shape hero-7-shape-text" />
    </section>
  );
};

export default Hero;
