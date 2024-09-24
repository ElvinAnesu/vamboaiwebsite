import React from 'react';
import iconSubtitle from '/img/icon-subtitle.png';
import customerLogo1 from '/img/customer-logo-1.png';
import customerLogo2 from '/img/customer-logo-2.png';
import customerLogo3 from '/img/customer-logo-3.png';
import customerRatingEl1 from '/img/customer-rating-el-1.png';
import customerRatingEl2 from '/img/customer-rating-el-2.png';

const CustomerRating = () => {
  return (
    <div className="container">
      <div className="row g-4">
        <div className="col-12">
          <div className="section-space-sm-y position-relative z-1">
            <div className="row g-4">
              <div className="col-lg-4 col-xl-5">
                <div className="d-flex align-items-center gap-3 fadeIn_bottom">
                  <span className="d-inline-block flex-shrink-0">
                    <img src={iconSubtitle} alt="Customer Rating Icon" className="img-fluid" />
                  </span>
                  <span className="d-inline-block clr-secondary-key ff-1 fw-bold fs-18">
                    190+ Customer Rating
                  </span>
                </div>
              </div>
              <div className="col-lg-8 col-xl-7">
                <h5 className="mb-12 fw-extrabold clr-neutral-90 animate-line-3d">
                  Trustpilot rates our <span className="clr-grad-4">AI Video Generator an impressive</span> 4.2 Globally.
                  Join our satisfied customers and unleash the potential of easy video creation.
                </h5>
                <div className="row g-4">
                  <div className="col-sm-6 col-md-4 fadein_bottom_32">
                    <div className="d-flex flex-column align-items-start justify-content-between rounded-1 bg-neutral-10 border border-neutral-17 p-4 px-md-6 h-100">
                      <h3 className="mb-10 clr-neutral-92 fw-extrabold">4.2</h3>
                      <div className="mt-auto">
                        <ul className="list list-row gap-1 mb-4">
                          <li><span className="d-inline-block text-info fs-14"><i className="bi bi-star-fill"></i></span></li>
                          <li><span className="d-inline-block text-info fs-14"><i className="bi bi-star-fill"></i></span></li>
                          <li><span className="d-inline-block text-info fs-14"><i className="bi bi-star-fill"></i></span></li>
                          <li><span className="d-inline-block text-info fs-14"><i className="bi bi-star-fill"></i></span></li>
                          <li><span className="d-inline-block text-info fs-14"><i className="bi bi-star-fill"></i></span></li>
                        </ul>
                        <img src={customerLogo1} alt="Customer Logo 1" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 fadein_bottom_32">
                    <div className="d-flex flex-column align-items-start justify-content-between rounded-1 bg-neutral-10 border border-neutral-17 p-4 px-md-6 h-100">
                      <h3 className="mb-10 clr-neutral-92 fw-extrabold">4.5</h3>
                      <div className="mt-auto">
                        <ul className="list list-row gap-1 mb-4">
                          <li><span className="d-inline-block text-success fs-14"><i className="bi bi-star-fill"></i></span></li>
                          <li><span className="d-inline-block text-success fs-14"><i className="bi bi-star-fill"></i></span></li>
                          <li><span className="d-inline-block text-success fs-14"><i className="bi bi-star-fill"></i></span></li>
                          <li><span className="d-inline-block text-success fs-14"><i className="bi bi-star-fill"></i></span></li>
                          <li><span className="d-inline-block text-success fs-14"><i className="bi bi-star-fill"></i></span></li>
                        </ul>
                        <img src={customerLogo2} alt="Customer Logo 2" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 fadein_bottom_32">
                    <div className="d-flex flex-column align-items-start justify-content-between rounded-1 bg-neutral-10 border border-neutral-17 p-4 px-md-6 h-100">
                      <h3 className="mb-10 clr-neutral-92 fw-extrabold">4.8</h3>
                      <div className="mt-auto">
                        <ul className="list list-row gap-1 mb-4">
                          <li><span className="d-inline-block clr-warning-50 fs-14"><i className="bi bi-star-fill"></i></span></li>
                          <li><span className="d-inline-block clr-warning-50 fs-14"><i className="bi bi-star-fill"></i></span></li>
                          <li><span className="d-inline-block clr-warning-50 fs-14"><i className="bi bi-star-fill"></i></span></li>
                          <li><span className="d-inline-block clr-warning-50 fs-14"><i className="bi bi-star-fill"></i></span></li>
                          <li><span className="d-inline-block clr-warning-50 fs-14"><i className="bi bi-star-fill"></i></span></li>
                        </ul>
                        <img src={customerLogo3} alt="Customer Logo 3" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img src={customerRatingEl1} alt="Customer Rating Element 1" className="img-fluid d-none d-xl-block z-n1 position-absolute top-0 end-0 translate-y-n100 fadeIn_bottom" />
            <img src={customerRatingEl2} alt="Customer Rating Element 2" className="img-fluid d-none d-xl-block z-n1 position-absolute bottom-0 start-0 translate-y-50 fadeIn_bottom" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRating;
