import { Link } from "react-router-dom";

const BreadCrumbe = ({title,subtitle}) => {
  return (
    <>
     <section className="breadcrumb-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xxl-8 col-xl-8 text-center">
          <div className="d-inline-flex align-items-center py-2 px-4 bg-info-10 bg-opacity-3 rounded-1">
            <Link to="/home-writebot" className="link fs-12 clr-white">Home</Link>
            <span className="fs-12 clr-white">-</span>
            <span className="fs-12 clr-white">{title}</span>
          </div>
          <h2 className="h3 fw-bold clr-neutral-90 mt-4 max-text-32 ms-auto me-auto"> {subtitle} </h2>
        </div>
      </div>
    </div>
    <div className="use-case-breadcrumb-bottom">
      <div className="use-case-breadcrumb-bottom-circle">
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
            <img src="/img/hero-7-logo.png" alt="image" className="img-fluid hero-7-logo"/>
          </div>
        </div>
      </div>
    </div>
    <img src="/img/breadcrumb-shape-top.png" alt="image" className="img-fluid breadcrumb-shape breadcrumb-shape-top"/>
    <img src="/img/breadcrumb-shape-left.png" alt="image" className="img-fluid breadcrumb-shape breadcrumb-shape-left"/>
    <img src="/img/breadcrumb-shape-right.png" alt="image" className="img-fluid breadcrumb-shape breadcrumb-shape-right"/>
    <img src="/img/breadcrumb-shape-line-left.png" alt="image" className="img-fluid breadcrumb-shape breadcrumb-shape-line-left"/>
    <img src="/img/breadcrumb-shape-line-right.png" alt="image" className="img-fluid breadcrumb-shape breadcrumb-shape-line-right"/>
  </section>
    </>
  )
};

export default BreadCrumbe
