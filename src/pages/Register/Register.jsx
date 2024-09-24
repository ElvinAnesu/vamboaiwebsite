import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
       <div className="login-page bg-black body-clip">
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-xxl-7 col-xl-6 d-none d-xl-block">
          <div className="radar-main-wrapper">
            <div className="radar-main-circle-one"></div>
            <div className="radar-main-circle-two"></div>
            <div className="radar-main-circle-three"></div>
            <img src="/img/login-shape-circle-text.png" alt="image" className="img-fluid radar-main-shape-text"/>
            <div className="radar-logo-wrapper">
              <div className="radar">
                <div className="animated-text-wrapper">
                  <p className="cd-headline slide mb-0">
                    <span className="cd-words-wrapper">
                      <b className="is-hidden">WriteBot AI</b>
                      <b className="is-hidden">WriteBot AI</b>
                      <b className="is-visible">WriteBot AI</b>
                    </span>
                  </p>
                </div>
              </div>
              <div className="logo-wrapper d-flex justify-content-center align-items-center">
                <img src="/img/hero-7-logo.png" alt="image" className="img-fluid hero-7-logo"/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-5 col-xl-6 col-lg-8 col-md-10">
          <div className="gradient-card py-sm-12 py-8 px-sm-8 px-5 rounded-5">
            <p className="fs-24 fw-medium clr-neutral-80 mb-5">Welcome !</p>
            <h4 className="h4 mb-2 clr-neutral-90 fw-bold">Sign up to </h4>
            <p className="clr-neutral-80">Get Started with 10,000 Free Words</p>
            <form>
              <div className="mt-8">
                <label className="clr-neutral-80 mb-2">Email</label>
                <input type="email" name="#0" className="form-control border border-neutral-17 clr-neutral-90 :focus-clr-current rounded-2 py-4 px-4 bg-neutral-4 placeholder-50 focus-bg-none" placeholder="Enter your email"/>
              </div>
              <div className="mt-8">
                <label className="clr-neutral-80 mb-2">User name</label>
                <input type="text" name="#0" className="form-control border border-neutral-17 clr-neutral-90 :focus-clr-current rounded-2 py-4 px-4 bg-neutral-4 placeholder-50 focus-bg-none" placeholder="Enter your user name"/>
              </div>
              <div className="mt-8">
                <label className="clr-neutral-80 mb-2">Password</label>
                <div className="pass-field-area">
                  <input type="password" name="#0" className="form-control border border-neutral-17 clr-neutral-90 :focus-clr-current rounded-2 py-4 px-4 bg-neutral-4 placeholder-50 focus-bg-none" placeholder="Enter your password"/>
                  <button type="button" className="bg-transparent border-0 pass-eye">
                    <i className="bi bi-eye-slash-fill eye-off"></i>
                    <i className="bi bi-eye-fill eye-on"></i>
                  </button>
                </div>
              </div>
              <div className="mt-8">
                <label className="clr-neutral-80 mb-2">Confirm Password</label>
                <div className="pass-field-area">
                  <input type="password" name="#0" className="form-control border border-neutral-17 clr-neutral-90 :focus-clr-current rounded-2 py-4 px-4 bg-neutral-4 placeholder-50 focus-bg-none" placeholder="Confirm password"/>
                  <button type="button" className="bg-transparent border-0 pass-eye">
                    <i className="bi bi-eye-slash-fill eye-off"></i>
                    <i className="bi bi-eye-fill eye-on"></i>
                  </button>
                </div>
              </div>
              <button type="submit" className="link d-inline-flex justify-content-center align-items-center gap-2 py-4 px-6 border border-primary-key bg-primary-key rounded-1 fw-bold clr-white border-0 w-100 mt-8 :arrow-btn">
                <span>Register</span>
                <i className="bi bi-arrow-right"></i>
              </button>
              <p className="mb-0 clr-neutral-80 text-center mt-8">Do you have an Account? <Link to="/login" className="link clr-primary-key fw-semibold">Login Now</Link></p>
              <div className="text-center mt-6">
                <Link to="/" className="link d-inline-flex justify-content-center align-items-center gap-2 py-2 px-4 border border-primary-key bg-primary-key :bg-primary-30 rounded-pill fs-14 fw-bold text-center clr-white">
                  <span className="d-block"> Back to Home </span>
                  <span className="d-block fs-10">
                    <i className="bi bi-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="login-copyright">
        <p className="mb-0 text-center clr-neutral-80">Copyright @2023 <span className="clr-white">Writebot</span></p>
      </div>
    </div>
    <img src="/img/login-shape-top.png" alt="image" className="img-fluid login-shape login-shape-top"/>
    <img src="/img/login-shape-left.png" alt="image" className="img-fluid login-shape login-shape-left"/>
    <img src="/img/login-shape-right.png" alt="image" className="img-fluid login-shape login-shape-right"/>
    <img src="/img/login-shape-line-left.png" alt="image" className="img-fluid login-shape login-shape-line-left"/>
    <img src="/img/login-shape-line-right.png" alt="image" className="img-fluid login-shape login-shape-line-right"/>
  </div>
    </>
  )
};

export default Register
