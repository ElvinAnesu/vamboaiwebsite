import { Link } from "react-router-dom";

const VideoTemplate = () => {
  return (
    <>
      <div className="position-relative z-1 section-space-sm-y">
      <div className="section-space-sm-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-xl-6 col-xxl-5">
              <div className="d-flex justify-content-center align-items-center gap-3 mb-1 fadeIn_bottom">
                <span className="d-inline-block flex-shrink-0">
                  <img src="/img/icon-subtitle.png" alt="image" className="img-fluid" />
                </span>
                <span className="d-inline-block clr-secondary-key ff-1 fw-bold fs-18"> Video Template </span>
              </div>
              <h3 className="mb-0 text-center clr-neutral-90 fw-extrabold animate-line-3d">
                Templates Covering <span className="d-inline-block clr-grad-4 ff-4 fw-normal text-underline">Every Concept</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="section-space-sm-bottom">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-4 col-xl-5">
              <div className="rounded-2 overflow-hidden fadein_bottom_34">
                <img src="/img/blog-img-10.png" alt="image" className="img-fluid w-100" />
                <div className="bg-neutral-10 py-6 px-8">
                  <h5 className="d-inline-block fw-extrabold">
                      <Link to="/blog-details" className="link d-inline-block clr-neutral-99 :clr-primary-2"> Marketing Videos   </Link>
                  </h5>
                  <p className="mb-0 clr-neutral-80"> Keep your consumers informed and stand out from the competition with short video newsletters. </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="rounded-2 overflow-hidden fadein_bottom_34">
                <img src="/img/blog-img-11.png" alt="image" className="img-fluid w-100" />
                <div className="bg-neutral-10 py-6 px-8">
                  <h6 className="d-inline-block fw-extrabold">
                      <Link to="/blog-details" className="link d-inline-block clr-neutral-99 :clr-primary-2"> Team Birthdays   </Link>
                  </h6>
                  <p className="mb-0 clr-neutral-80"> Keep your consumers informed and stand out from the competition newsletters. </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="rounded-2 overflow-hidden fadein_bottom_34">
                <img src="/img/blog-img-12.png" alt="image" className="img-fluid w-100" />
                <div className="bg-neutral-10 py-6 px-8">
                  <h6 className="d-inline-block fw-extrabold">
                      <Link to="/blog-details" className="link d-inline-block clr-neutral-99 :clr-primary-2"> Team Birthdays   </Link>
                  </h6>
                  <p className="mb-0 clr-neutral-80"> Keep your consumers informed and short video newsletters. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="text-center fadeIn_bottom">
              <Link to="/blog-1" className="link d-inline-flex justify-content-center align-items-center gap-1 ff-1 clr-primary-2 mx-auto">
                <span className="d-inline-block fw-semibold"> Explore the template library </span>
                <span className="d-inline-block">
                  <i className="bi bi-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img src="/img/video-template-section-shape-1.png" alt="image" className="img-fluid position-absolute start-0 bottom-0 z-n1 translate-y-25" />
    </div>
    </>
  )
};

export default VideoTemplate
