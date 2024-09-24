import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="cta-section-3 section-space-sm-y px-4 px-md-12 rounded-3 overflow-hidden fadeIn_bottom">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                <div className="text-center">
                  <div className="d-flex justify-content-center align-items-center gap-3 mb-1 fadeIn_bottom">
                    <span className="d-inline-block flex-shrink-0">
                      <img src="/img/icon-subtitle.png" alt="image" className="img-fluid" />
                    </span>
                    <span className="d-inline-block clr-secondary-key ff-1 fw-bold fs-18"> Frequently asked Question </span>
                  </div>
                  <h4 className="mb-10 text-center clr-neutral-90 fw-extrabold animate-line-3d">
                    Become A Superstar Video Creator with{' '}
                    <span className="d-inline-block clr-grad-4 ff-4 fw-normal">WriteBot</span>
                  </h4>
                  <Link to="/login" className="link d-inline-block py-3 px-6 ff-1 bg-grad-4 clr-white fw-bold rounded fadeIn_bottom">
                    {' '}
                    Create Free Video{' '}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
