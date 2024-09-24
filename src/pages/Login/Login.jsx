import { Link } from "react-router-dom";

const Login = () => {
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
            <h4 className="h4 fw-bold mb-2 clr-neutral-90">Sign in to </h4>
            <p className="clr-neutral-80">Get Started with 10,000 Free Words</p>
            <form>
              <div className="d-flex flex-wrap gap-xl-6 gap-4 align-items-center justify-content-center mt-6">
                <a href="https://www.facebook.com/" className="link d-inline-flex align-items-center justify-content-center gap-4 py-3 px-8 rounded-2 bg-neutral-6 login-with-btn">
                  <img src="/img/login-facebook.svg" alt="image" className="img-fluid"/>
                  <span className="d-inline-block clr-neutral-80 fs-14">Facebook</span>
                </a>
                <a href="https://www.google.co.uk/" className="link d-inline-flex align-items-center justify-content-center gap-4 py-3 px-8 rounded-2 bg-neutral-6 login-with-btn">
                  <img src="/img/login-google.svg" alt="image" className="img-fluid"/>
                  <span className="d-inline-block clr-neutral-80 fs-14">Google</span>
                </a>
              </div>
              <div className="mt-8">
                <label className="clr-neutral-80 mb-2">User Name</label>
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
              <div className="d-flex flex-wrap align-items-center justify-content-between mt-8">
                <div className="form-check check-box check-box check-box-neutral-30 gap-1">
                  <input className="form-check-input check-box__input clr-white my-auto border-0 bg-neutral-17" type="checkbox" id="n30dash"/>
                  <label className="form-check-label clr-neutral-80 fs-12 ps-1" htmlFor="n30dash"> Remember me </label>
                </div>
                <Link href="" className="link clr-neutral-80 fs-12 :clr-primary-key">Forgot Password ?</Link>
              </div>
              <button type="submit" className="link d-inline-flex justify-content-center align-items-center gap-2 py-4 px-6 border border-primary-key bg-primary-key rounded-1 fw-bold clr-white border-0 w-100 mt-8 :arrow-btn">
                <span>Login Now</span>
                <i className="bi bi-arrow-right"></i>
              </button>
              <p className="mb-0 clr-neutral-80 text-center mt-8">Don't have an Account ? <Link to="/register" className="link clr-primary-key fw-semibold">Register</Link></p>
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

export default Login
