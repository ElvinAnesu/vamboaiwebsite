import { Link } from "react-router-dom";

const FooterSeven = () => {
  return (
    <>
       <footer className="footer-7">
      <div className="footer-7-wrapper">
        <div className="container">
          <div className="row gap-4 align-items-center justify-content-between">
            <div className="col-xl-5">
              <ul className="list list-row flex-wrap gap-6 justify-content-center justify-content-xl-start">
                <li>
                  <a href="https://www.facebook.com" className="link clr-neutral-80 d-flex gap-2 :clr-fb">
                    <i className="bi bi-facebook"></i> Facebook </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" className="link clr-neutral-80 d-flex gap-2 :clr-ins">
                    <i className="bi bi-instagram"></i> Instagram </a>
                </li>
                <li>
                  <a href="https://twitter.com" className="link clr-neutral-80 d-flex gap-2 :clr-tw">
                    <i className="bi bi-twitter"></i> Twitter </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com" className="link clr-neutral-80 d-flex gap-2 :clr-in">
                    <i className="bi bi-linkedin"></i> TikTok </a>
                </li>
              </ul>
            </div>
            <div className="col-xl-5">
              <ul className="list list-row flex-wrap gap-6 justify-content-xl-end justify-content-center">
                <li>
                  <Link to="/privacy-policy" className="link clr-neutral-80 :clr-primary-key">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-service" className="link clr-neutral-80 :clr-primary-key"> Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
          <p className="fs-14 fw-semibold mb-0 text-center mt-xl-15 mt-lg-10 mt-md-8 mt-5 clr-neutral-80">
            Copyright @2023 All Rights Reserved by <Link to="/home-writebot" className="link clr-primary-key">WriteBot</Link>
          </p>
        </div>
      </div>
      <div className="radar-logo-wrapper">
        <div className="radar">
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
        <div className="logo-wrapper d-flex justify-content-center align-items-center">
          <img src="/img/hero-7-logo.png" alt="image" className="img-fluid hero-7-logo" />
        </div>
      </div>
      <img src="/img/footer-7-shape-bottom-circle.png" alt="image" className="img-fluid object-fit-cover footer-7-shape footer-7-shape-bottom-circle" />
      <img src="/img/footer-7-shape-left.png" alt="image" className="img-fluid footer-7-shape footer-7-shape-left" />
      <img src="/img/footer-7-shape-right.png" alt="image" className="img-fluid footer-7-shape footer-7-shape-right" />
    </footer>
    </>
  )
};

export default FooterSeven
