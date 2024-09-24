import { Link } from "react-router-dom";

const BreadCrum = () => {
  return (
    <>
       <section className="breadcrumb-section">
    <div className="breadcrumb-section-inner">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-8">
            <div className="text-center">
              <div className="d-inline-flex align-items-center py-2 px-4 bg-info-10 bg-opacity-3 rounded-1">
                <Link to="/home-writebot" className="link fs-12 clr-white">Home</Link>
                <span className="fs-12 clr-white">-</span>
                <span className="fs-12 clr-white">About Us</span>
              </div>
              <h2 className="h3 fw-bold clr-neutral-90 mt-4">The new standard for modern software development</h2>
              <p className="clr-neutral-80 max-text-60 mx-auto mt-4 mb-0">We pride ourselves on offering AI Generators that are unmatched in their quality, versatility, and ease of use. Here's what sets us apart.</p>
            </div>
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

export default BreadCrum
