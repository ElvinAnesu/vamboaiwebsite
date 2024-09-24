import React from 'react';
import { Link } from 'react-router-dom';

const FeatureSection = () => {
  return (
    <div className="section-space-sm-y">
      <div className="section-space-sm-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8 col-xxl-6">
              <div className="d-flex justify-content-center align-items-center gap-3 mb-1 fadeIn_bottom">
                <span className="d-inline-block flex-shrink-0">
                  <img src="/img/icon-subtitle.png" alt="image" className="img-fluid" />
                </span>
                <span className="d-inline-block clr-secondary-key ff-1 fw-bold fs-18"> AI Video Featured </span>
              </div>
              <h3 className="mb-0 text-center clr-neutral-90 fw-extrabold animate-line-3d">
                Completely <span className="d-inline-block clr-grad-4 ff-4 text-underline">Ai-Powered</span> Video Generator
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-12">
            <div className="bg-neutral-10 border border-neutral-17 rounded-4 p-4 p-md-8 fadeIn_bottom">
              <div className="row g-4 align-items-center justify-content-between">
                <div className="col-md-6 col-xxl-5">
                  <div className="d-flex align-items-center gap-3 mb-2 fadeIn_bottom">
                    <span className="d-inline-block flex-shrink-0">
                      <img src="/img/icon-subtitle-primary.png" alt="image" className="img-fluid" />
                    </span>
                    <span className="d-inline-block clr-primary-2 ff-1 fw-bold fs-18"> AI Avatars </span>
                  </div>
                  <h5 className="mb-6 clr-neutral-90 animate-text-from-right">
                    Produce Videos that Cater to the Diversity of your Viewers.
                  </h5>
                  <ul className="list gap-3 mb-8">
                    <li className="fadeIn_bottom">
                      <div className="d-flex gap-2 align-items-center">
                        <span className="d-inline-block w-1 h-1 rounded-circle bg-neutral-80 flex-shrink-0"></span>
                        <span className="d-block flex-grow-1 clr-neutral-80 fs-14"> Engage your viewers with over 140 AI Avatars. </span>
                      </div>
                    </li>
                    <li className="fadeIn_bottom">
                      <div className="d-flex gap-2 align-items-center">
                        <span className="d-inline-block w-1 h-1 rounded-circle bg-neutral-80 flex-shrink-0"></span>
                        <span className="d-block flex-grow-1 clr-neutral-80 fs-14"> Make your videos more inclusive & diverse. </span>
                      </div>
                    </li>
                    <li className="fadeIn_bottom">
                      <div className="d-flex gap-2 align-items-center">
                        <span className="d-inline-block w-1 h-1 rounded-circle bg-neutral-80 flex-shrink-0"></span>
                        <span className="d-block flex-grow-1 clr-neutral-80 fs-14"> Create your own AI Avatar (your digital twin) </span>
                      </div>
                    </li>
                  </ul>
                  <Link to="/login" className="link d-inline-block py-3 px-6 ff-1 gradient-btn-4 clr-white fw-bold rounded fadeIn_bottom">
                    See all Avatar
                  </Link>
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-center gap-4 scroller-card fadeIn_bottom">
                    {['top', 'bottom', 'top', 'bottom'].map((direction, index) => (
                      <div key={index} className="scroller-y" data-direction={direction} data-speed="slow">
                        <ul className="list gap-4 scroller-y__list">
                          {Array.from({ length: 6 }, (_, i) => (
                            <li key={i}>
                              <img className="img-fluid" src={`/img/thumb-${i + 1 + index * 6}.png`} alt="image" />
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {[
            {
              imgSrc: 'ai-featured-video-img-2.png',
              title: 'Animation Video',
              description: 'Transforming AI Text into Animation Videos',
              linkText: 'Test All Language',
              items: [
                'Engage your viewers with over 140 AI Avatars.',
                'Make your videos more inclusive & diverse.',
                'Create your own AI Avatar (your digital twin)'
              ]
            },
            {
              imgSrc: 'ai-featured-video-img-3.png',
              title: 'AI Language',
              description: 'Quality Text to Voice Recordings With WriteBot Ai',
              linkText: 'Hear & Text Language',
              items: [
                'Engage your viewers with over 140 AI Avatars.',
                'Make your videos more inclusive & diverse.',
                'Create your own AI Avatar (your digital twin)'
              ]
            },
            {
              imgSrc: 'ai-featured-video-img-4.png',
              title: 'Easy Customization',
              description: 'Versatile Video Sizing Solutions for Professionals',
              linkText: 'See all Features',
              items: [
                'Engage your viewers with over 140 AI Avatars.',
                'Make your videos more inclusive & diverse.',
                'Create your own AI Avatar (your digital twin)'
              ]
            }
          ].map((card, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="bg-neutral-10 border border-neutral-17 rounded-4 p-4 p-md-8 h-100 fadeIn_bottom">
                <div className="rounded-4 overflow-hidden mb-7 fadeIn_bottom">
                  <img src={`/img/${card.imgSrc}`} alt="image" className="img-fluid w-100 h-100 object-fit-cover" />
                </div>
                <div className="mt-auto">
                  <div className="d-flex align-items-center gap-3 mb-2 fadeIn_bottom">
                    <span className="d-inline-block flex-shrink-0">
                      <img src="/img/icon-subtitle-primary.png" alt="image" className="img-fluid" />
                    </span>
                    <span className="d-inline-block clr-primary-2 ff-1 fw-bold fs-18">{card.title}</span>
                  </div>
                  <h6 className="clr-neutral-90 animate-line-3d">{card.description}</h6>
                  <ul className="list gap-2 mb-8">
                    {card.items.map((item, i) => (
                      <li key={i} className="fadeIn_bottom">
                        <div className="d-flex gap-2 align-items-center">
                          <span className="d-inline-block w-1 h-1 rounded-circle bg-neutral-80 flex-shrink-0"></span>
                          <span className="d-block flex-grow-1 clr-neutral-80 fs-14">{item}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Link to="/blog-details" className="link d-inline-flex align-items-center gap-1 fs-14 clr-secondary-key fadeIn_bottom">
                    <span className="d-inline-block fw-semibold">{card.linkText}</span>
                    <span className="d-inline-block">
                      <i className="bi bi-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
