import { Link } from "react-router-dom";

const CommonFooter = () => {
  return (
    <>
     <footer className="footer-inner section-space-sm-top section-space-xsm-bottom">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="footer-2__content position-relative z-1 section-space-sm-y bg-black border border-neutral-variant-30 rounded-5 px-4 px-xsm-6 px-xl-12">
            <div className="row g-4 gy-5 gy-lg-0">
              <div className="col-lg-4">
                <Link to="/" className="logo link d-inline-flex align-items-center flex-shrink-0 mb-15">
                  <img src="/img/logo-light.png" alt="logo" className="img-fluid object-fit-contain"/>
                </Link>
                <div className="w-100"></div>
                <div className="d-inline-flex gap-4 align-items-center py-3 px-6 bg-neutral-10 rounded-2">
                  <div className="w-7 h-7 rounded-circle overflow-hidden flex-shrink-0">
                    <img src="/img/blog-img-2.jpg" alt="image" className="w-100 h-100 object-fit-cover"/>
                  </div>
                  <div className="flex-grow-1">
                    <span className="d-block mb-1 fs-12 clr-white"> Power By </span>
                    <span className="d-block fs-14 fw-bold clr-white"> Themetags LTD. </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row g-4 gy-5 gy-lg-0">
                  <div className="col-md-3">
                    <h6 className="mb-5 fs-18 clr-neutral-90"> Resources </h6>
                    <ul className="list gap-4">
                      <li>
                        <Link  to="/blog-1" className="link d-inline-block clr-neutral-80 :clr-primary-key"> Vambo Studio </Link>
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
                  <div className="col-md-3">
                    <h6 className="mb-5 fs-18 clr-neutral-90"> Quick Menu </h6>
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
                  <div className="col-md-3">
                    <h6 className="mb-5 fs-18 clr-neutral-90"> Tools </h6>
                    <ul className="list gap-4">
                      <li>
                        <Link to="/use-cases" className="link d-inline-block clr-neutral-80 :clr-primary-key"> Use Cases </Link>
                      </li>
                      <li>
                        <Link to="/about" className="link d-inline-block clr-neutral-80 :clr-primary-key"> Paraphrasing Tool </Link>
                      </li>
                      <li>
                        <Link to="/" className="link d-inline-block clr-neutral-80 :clr-primary-key"> Sentence Expander </Link>
                      </li>
                      <li>
                        <Link to="/" className="link d-inline-block clr-neutral-80 :clr-primary-key"> Text Summarizer </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <h6 className="mb-5 fs-18 clr-neutral-90"> Socials Links </h6>
                    <ul className="list gap-4">
                      <li>
                        <a href="https://www.facebook.com" className="link d-inline-block clr-neutral-70 :clr-primary-key"> Facebook </a>
                      </li>
                      <li>
                        <a href="https://twitter.com" className="link d-inline-block clr-neutral-70 :clr-primary-key"> Twitter </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com" className="link d-inline-block clr-neutral-70 :clr-primary-key"> Instagram </a>
                      </li>
                      <li>
                        <a href="https://discord.com/" className="link d-inline-block clr-neutral-70 :clr-primary-key"> Discord </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-space-sm-top">
              <div className="row g-4 align-items-center">
                <div className="col-lg-3">
                  <p className="mb-0 clr-white fw-medium fs-14 text-lg-start text-center"> Copyright &copy; 2024 <a href="#" className="link d-inline-block clr-white">Writebot</a>
                  </p>
                </div>
                <div className="col-lg-6">
                  <h6 className="text-md-center clr-white"> Subscribe Our Newsletter 👍 </h6>
                  <div className="newsletter-1 d-inline-block w-100 max-text-60 mx-auto position-relative z-1 overflow-hidden rounded-pill">
                    <div className="d-flex p-3 bg-neutral-10 rounded ">
                      <input type="text" className="form-control newsletter-1__input bg-transparent clr-neutral-60" placeholder="Enter  Email Address"/>
                      <button type="submit" className="bg-primary-key :bg-primary-30 position-relative z-1 link d-inline-flex justify-content-center align-items-center gap-2 px-5 py-2 rounded-pill fs-14 fw-bold text-center border-0 clr-white"> Subscribe </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 text-lg-end text-center">
                  <a href="#" className="link w-12 h-12 bg-neutral-4 clr-white d-inline-flex justify-content-center align-items-center rounded-2">
                    <i className="bi bi-arrow-up"></i>
                  </a>
                </div>
              </div>
            </div>
            <img src="/img/footer-2-shape-1.png" alt="image" className="img-fluid d-none d-md-block pointer-none position-absolute start-0 bottom-0 z-n1"/>
            <img src="/img/footer-2-shape-2.png" alt="image" className="img-fluid d-none d-md-block pointer-none position-absolute end-0 bottom-0 z-n1"/>
          </div>
        </div>
      </div>
    </div>
    <img src="/img/footer-inner-shape-left.png" alt="image" className="img-fluid footer-inner-shape footer-inner-shape-left"/>
    <img src="/img/footer-inner-shape-right.png" alt="image" className="img-fluid footer-inner-shape footer-inner-shape-right"/>
    <img src="/img/footer-inner-shape-line-left.png" alt="image" className="img-fluid footer-inner-shape footer-inner-shape-line-left"/>
    <img src="/img/footer-inner-shape-line-right.png" alt="image" className="img-fluid footer-inner-shape footer-inner-shape-line-right"/>
  </footer> 
    </>
  )
};

export default CommonFooter
