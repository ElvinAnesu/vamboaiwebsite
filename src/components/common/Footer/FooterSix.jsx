import { Link } from 'react-router-dom'; 
const FooterSix = () => {
  return (
    <>
      <footer className="footer-6">
    <div className="section-space-xsm-bottom">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-xl-4">
            <Link to="/" className="logo link d-inline-flex align-items-center flex-shrink-0 mb-8">
              <img src="/img/logo-light.png" alt="logo" className="img-fluid object-fit-contain"/>
            </Link>
            <p className="mb-12 clr-neutral-80"> Streamline your video creation process by embedding your videos into your authoring colleagues don't jump in the air when they but that we haven't seen before. </p>
            <div className="d-flex flex-wrap gap-6 fadeIn_bottom">
              <Link to="/" className="link d-inline-flex align-items-center gap-2 py-2 px-4 ff-1 bg-grad-4 clr-white fw-bold rounded">
                <div className="flex-shrink-0 fs-24 lh-1">
                  <i className="bi bi-google-play"></i>
                </div>
                <div className="d-flex flex-column align-items-start">
                  <span className="d-block ff-1 fs-10 fw-semibold"> Get it on </span>
                  <span className="d-block ff-1 fs-14 fw-bold"> Google Play </span>
                </div>
              </Link>
              <Link to="/" className="link d-inline-flex align-items-center gap-2 py-2 px-4 ff-1 bg-neutral-20 clr-white fw-bold rounded :bg-grad-4">
                <div className="flex-shrink-0 fs-24 lh-1">
                  <i className="bi bi-apple"></i>
                </div>
                <div className="d-flex flex-column align-items-start">
                  <span className="d-block ff-1 fs-10 fw-semibold"> Download on the </span>
                  <span className="d-block ff-1 fs-14 fw-bold"> App Store </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="row g-4">
              <div className="col-sm-6 col-md-3">
                <h6 className="mb-2 fs-18 clr-neutral-90"> Resources </h6>
                <div className="w-10 h-2px bg-grad-4 mb-8"></div>
                <ul className="list gap-4">
                  <li>
                    <Link to="/blog-1" className="link d-inline-block clr-neutral-80 :clr-primary-key"> Blog </Link>
                  </li>
                  <li>
                    <Link to="/about" className="link d-inline-block clr-neutral-80 :clr-primary-key"> About </Link>
                  </li>
                  <li>
                    <Link to="/copywrite" className="link d-inline-block clr-neutral-80 :clr-primary-key"> API Access </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="link d-inline-block clr-neutral-80 :clr-primary-key"> FAQ </Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3">
                <h6 className="mb-2 fs-18 clr-neutral-90"> Quick Menu </h6>
                <div className="w-10 h-2px bg-grad-4 mb-8"></div>
                <ul className="list gap-4">
                  <li>
                    <Link to="/featured" className="link d-inline-block clr-neutral-80 :clr-primary-key"> Features </Link>
                  </li>
                  <li>
                    <Link to="/login" className="link d-inline-block clr-neutral-80 :clr-primary-key"> Login </Link>
                  </li>
                  <li>
                    <Link to="/pricing" className="link d-inline-block clr-neutral-80 :clr-primary-key"> Pricing </Link>
                  </li>
                  <li>
                    <Link to="/register" className="link d-inline-block clr-neutral-80 :clr-primary-key"> Register </Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3">
                <h6 className="mb-2 fs-18 clr-neutral-90"> Features </h6>
                <div className="w-10 h-2px bg-grad-4 mb-8"></div>
                <ul className="list gap-4">
                  <li>
                    <Link to="/use-cases" className="link d-inline-block clr-neutral-80 :clr-primary-key"> Use Cases </Link>
                  </li>
                  <li>
                    <Link to="/about" className="link d-inline-block clr-neutral-80 :clr-primary-key"> Paraphrasing Tool </Link>
                  </li>
                  <li>
                    <Link to="/terms-service" className="link d-inline-block clr-neutral-80 :clr-primary-key"> Terms & Condition </Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" className="link d-inline-block clr-neutral-80 :clr-primary-key"> Privacy & Policy </Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3">
                <h6 className="mb-2 fs-18 clr-neutral-90"> Tools </h6>
                <div className="w-10 h-2px bg-grad-4 mb-8"></div>
                <ul className="list gap-4">
                  <li>
                    <Link to="/blog-1" className="link d-inline-block clr-neutral-80 :clr-primary-key"> Blog </Link>
                  </li>
                  <li>
                    <Link to="/about" className="link d-inline-block clr-neutral-80 :clr-primary-key"> About </Link>
                  </li>
                  <li>
                    <Link to="/copywrite" className="link d-inline-block clr-neutral-80 :clr-primary-key"> API Access </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="link d-inline-block clr-neutral-80 :clr-primary-key"> FAQ </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section-space-xsm-y">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6 col-xl-5 ms-xl-auto">
            <h6 className="clr-neutral-90"> Subscribe Our Newsletter 👍 </h6>
            <div className="newsletter-1 d-inline-block w-100 max-text-60 mx-auto position-relative z-1 overflow-hidden rounded-pill">
              <div className="d-flex p-3 bg-neutral-10 rounded ">
                <input type="text" className="form-control newsletter-1__input bg-transparent clr-neutral-60" placeholder="Enter  Email Address"/>
                <Link to="#" className="bg-grad-4 position-relative z-1 link d-inline-flex justify-content-center align-items-center gap-2 px-5 py-2 rounded-pill clr-white fs-14 fw-bold text-center"> Subscribe </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <h6 className="fs-18 clr-neutral-90"> Social Media </h6>
            <ul className="list list-row gap-4 flex-wrap">
              <li>
                <Link to="https://twitter.com" className="link d-grid place-content-center w-12 h-12 bg-neutral-10 :bg-grad-4 rounded-circle clr-white fs-20">
                  <i className="bi bi-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="https://www.facebook.com" className="link d-grid place-content-center w-12 h-12 bg-neutral-10 :bg-grad-4 rounded-circle clr-white fs-20">
                  <i className="bi bi-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="https://dribbble.com/" className="link d-grid place-content-center w-12 h-12 bg-neutral-10 :bg-grad-4 rounded-circle clr-white fs-20">
                  <i className="bi bi-dribbble"></i>
                </Link>
              </li>
              <li>
                <Link to="https://www.behance.net/" className="link d-grid place-content-center w-12 h-12 bg-neutral-10 :bg-grad-4 rounded-circle clr-white fs-20">
                  <i className="bi bi-behance"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-6__bottom py-6">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-5 col-lg-6">
            <p className="mb-0 clr-neutral-90 fs-14 fw-semibold"> Copyright &copy;2023 All Rights Reserved by <Link to="/" className="link d-inline-block clr-secondary-key">WriteBot</Link>
            </p>
          </div>
          <div className="col-md-7 col-lg-6">
            <ul className="list list-row flex-wrap gap-3 justify-content-md-end">
              <li>
                <Link to="https://www.facebook.com" className="link d-inline-flex align-items-center gap-2 fs-14 clr-neutral-80 :clr-fb fw-medium">
                  <span className="d-block flex-shrink-0">
                    <i className="bi bi-facebook"></i>
                  </span>
                  <span className="d-block flex-grow-1"> Facebook </span>
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com" className="link d-inline-flex align-items-center gap-2 fs-14 clr-neutral-80 :clr-ins fw-medium">
                  <span className="d-block flex-shrink-0">
                    <i className="bi bi-instagram"></i>
                  </span>
                  <span className="d-block flex-grow-1"> Instagram </span>
                </Link>
              </li>
              <li>
                <Link to="https://twitter.com" className="link d-inline-flex align-items-center gap-2 fs-14 clr-neutral-80 :clr-tw fw-medium">
                  <span className="d-block flex-shrink-0">
                    <i className="bi bi-twitter"></i>
                  </span>
                  <span className="d-block flex-grow-1"> Twitter </span>
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/" className="link d-inline-flex align-items-center gap-2 fs-14 clr-neutral-80 :clr-in fw-medium">
                  <span className="d-block flex-shrink-0">
                    <i className="bi bi-linkedin"></i>
                  </span>
                  <span className="d-block flex-grow-1"> Linkedin </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
};

export default FooterSix
