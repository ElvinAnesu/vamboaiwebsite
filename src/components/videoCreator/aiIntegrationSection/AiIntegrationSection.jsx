import React from 'react';
import { Link } from 'react-router-dom';

const AiIntegrationSection = () => {
  return (
    <div className="ai-integration-section section-space-sm-y">
      <div className="section-space-sm-bottom">
        <div className="container">
          <div className="row g-4 justify-content-xxl-between align-items-center">
            <div className="col-md-6 col-xxl-5">
              <div className="d-flex align-items-center gap-3 mb-1 fadeIn_bottom">
                <span className="d-inline-block flex-shrink-0">
                  <img src="/img/icon-subtitle-primary.png" alt="image" className="img-fluid" />
                </span>
                <span className="d-inline-block clr-primary-2 ff-1 fw-bold fs-18"> AI Video Featured </span>
              </div>
              <h3 className="mb-0 clr-neutral-90 fw-extrabold animate-line-3d">
                Embed your <span className="d-inline-block ff-4 clr-grad-4 fw-normal">Videos into</span> your favourites tools
              </h3>
            </div>
            <div className="col-md-6 col-xxl-5">
              <p className="mb-5 clr-neutral-80 animate-text-from-right">
                Easily integrate your videos with your preferred tools and platforms. Whether you rely on project management software, email marketing embedding feature allows you to effortlessly incorporate your videos into these applications.
              </p>
              <Link to="/about" className="link d-inline-flex align-items-center gap-1 ff-1 clr-secondary-key fadeIn_bottom">
                <span className="d-inline-block fw-semibold"> Explore all integrations </span>
                <span className="d-inline-block">
                  <i className="bi bi-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-xl-8">
            <div className="text-center fadeIn_bottom">
              <img src="/img/integrated-img.png" alt="image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiIntegrationSection;
