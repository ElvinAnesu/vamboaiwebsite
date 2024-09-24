import React from 'react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  return (
    <div className="blog-section-4 section-space-y">
      <div className="section-space-sm-bottom">
        <div className="container">
          <div className="row g-4 justify-content-between align-items-center">
            <div className="col-md-5">
              <div className="d-flex align-items-center gap-3 fadeIn_bottom">
                <span className="d-inline-block flex-shrink-0">
                  <img src="/img/icon-subtitle.png" alt="image" className="img-fluid" />
                </span>
                <span className="d-inline-block clr-secondary-key ff-1 fw-bold fs-18"> Recent Post </span>
              </div>
            </div>
            <div className="col-md-6">
              <h5 className="mb-0 clr-neutral-90 fw-extrabold animate-line-3d">
                Explore the latest <span className="d-inline-block clr-grad-4">AI developments trends &</span> insights in our dynamic news & posts section. Stay informed & ahead in AI.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="blog-card-1 top-shadow px-6 py-10 position-relative z-1 overflow-hidden rounded-3 bg-neutral-10 bg-opacity-6 fadein_bottom_35">
              <div className="d-inline-block py-1 px-2 fs-14 fw-bold ff-1 bg-primary-2 clr-white rounded"> AI News </div>
              <div className="blog-card-1__img">
                <img src="/img/blog-img-1.jpg" alt="image" className="img-fluid h-100 object-fit-cover" />
              </div>
              <div className="blog-card-1__body">
                <div className="d-flex align-items-center gap-2 mb-1">
                  <span className="d-inline-block clr-neutral-90 fs-14 fw-medium ff-1"> March 18, 2022 </span>
                  <span className="d-inline-block w-1 h-1 rounded-circle bg-neutral-90"></span>
                  <span className="d-inline-block clr-neutral-90 fs-14 fw-medium ff-1"> Comments </span>
                </div>
                <h6 className="mb-6 fs-24">
                  <Link to="/blog-details" className="link d-block clr-neutral-90"> Antenna Promises New era For Satellite Communication </Link>
                </h6>
                <Link to="/blog-details" className="link d-inline-flex justify-content-center align-items-center gap-1 ff-1 clr-primary-2 mx-auto">
                  <span className="d-inline-block fw-semibold"> Explore More </span>
                  <span className="d-inline-block">
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="blog-card-1 top-shadow px-6 py-10 position-relative z-1 overflow-hidden rounded-3 bg-neutral-10 bg-opacity-6 fadein_bottom_35">
              <div className="d-inline-block py-1 px-2 fs-14 fw-bold ff-1 bg-secondary-key clr-white rounded"> AI News </div>
              <div className="blog-card-1__img">
                <img src="img/blog-img-2.jpg" alt="image" className="img-fluid h-100 object-fit-cover" />
              </div>
              <div className="blog-card-1__body">
                <div className="d-flex align-items-center gap-2 mb-1">
                  <span className="d-inline-block clr-neutral-90 fs-14 fw-medium ff-1"> March 18, 2022 </span>
                  <span className="d-inline-block w-1 h-1 rounded-circle bg-neutral-90"></span>
                  <span className="d-inline-block clr-neutral-90 fs-14 fw-medium ff-1"> Comments </span>
                </div>
                <h6 className="mb-6 fs-24">
                  <Link to="/blog-details" className="link d-block clr-neutral-90"> AI software offers repetitive & mundane patterns </Link>
                </h6>
                <Link to="/blog-details" className="link d-inline-flex justify-content-center align-items-center gap-1 ff-1 clr-primary-2 mx-auto">
                  <span className="d-inline-block fw-semibold"> Explore More </span>
                  <span className="d-inline-block">
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="blog-card-1 top-shadow px-6 py-10 position-relative z-1 overflow-hidden rounded-3 bg-neutral-10 bg-opacity-6 fadein_bottom_35">
              <div className="d-inline-block py-1 px-2 fs-14 fw-bold ff-1 bg-primary-2 clr-white rounded"> AI News </div>
              <div className="blog-card-1__img">
                <img src="/img/blog-img-3.jpg" alt="image" className="img-fluid h-100 object-fit-cover" />
              </div>
              <div className="blog-card-1__body">
                <div className="d-flex align-items-center gap-2 mb-1">
                  <span className="d-inline-block clr-neutral-90 fs-14 fw-medium ff-1"> March 18, 2022 </span>
                  <span className="d-inline-block w-1 h-1 rounded-circle bg-neutral-90"></span>
                  <span className="d-inline-block clr-neutral-90 fs-14 fw-medium ff-1"> Comments </span>
                </div>
                <h6 className="mb-6 fs-24">
                  <Link to="/blog-details" className="link d-block clr-neutral-90"> Antenna Promises New era For Satellite Communication </Link>
                </h6>
                <Link to="/blog-details" className="link d-inline-flex justify-content-center align-items-center gap-1 ff-1 clr-primary-2 mx-auto">
                  <span className="d-inline-block fw-semibold"> Explore More </span>
                  <span className="d-inline-block">
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-space-sm-top">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center fadeIn_bottom">
                <Link to="/blog" className="link d-inline-flex gap-2 align-items-center py-3 px-6 ff-1 gradient-btn-4 clr-white fw-bold rounded">
                  <span className="d-inline-block"> More Post </span>
                  <span className="d-inline-block">
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
