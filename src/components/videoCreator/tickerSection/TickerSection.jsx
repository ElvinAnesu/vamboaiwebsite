import React from 'react';

const TickerSection = () => {
  return (
    <div className="section-space-xsm-y overflow-hidden">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-12">
            <div className="scroller-x mb-4" data-direction="left" data-speed="slow">
              <ul className="list list-row align-items-center gap-4 scroller-x__list">
                <li>
                  <h2 className="mb-0 d4 clr-neutral-90 ff-4 fw-normal"> Generative Ai Conference </h2>
                </li>
                <li>
                  <img src="/img/icon-star-outline.png" alt="image" className="img-fluid" />
                </li>
                <li>
                  <h2 className="mb-0 d4 text-outline"> Next Level </h2>
                </li>
                <li>
                  <img src="/img/icon-star-gradient-alt.png" alt="image" className="img-fluid" />
                </li>
                <li>
                  <h2 className="mb-0 d4 clr-grad-4 ff-4 fw-normal"> AI Image Generator </h2>
                </li>
                <li>
                  <img src="/img/icon-star-gradient-alt.png" alt="image" className="img-fluid" />
                </li>
                <li>
                  <h2 className="mb-0 d4 clr-black gradient-stroke"> Ai Voice Generator </h2>
                </li>
                <li>
                  <img src="/img/icon-star-outline.png" alt="image" className="img-fluid" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TickerSection;
