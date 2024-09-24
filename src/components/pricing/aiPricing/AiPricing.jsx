import { Link } from "react-router-dom";

const AiPricing = () => {
  return (
    <>
       <section className="section-space-sm-top section-space-bottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="pricing-difference-wrapper">
            <div className="text-end pe-30">
              <span className="clr-neutral-40 fs-20 fw-semibold">WriteBot AI Pricing </span>
            </div>
            <div className="pricing-difference-wrapper-inner">
              <img src="/img/pricing-line-top.png" alt="image" className="img-fluid pricing-line pricing-line-top" />
              <img src="/img/pricing-line-bottom.png" alt="image" className="img-fluid pricing-line pricing-line-bottom"/>
              <img src="/img/pricing-line-right.png" alt="image" className="img-fluid pricing-line pricing-line-right"/>
              <h4 className="h4 clr-neutral-90 fw-bold text-center mb-10">Not sure which plan to choose?</h4>
              <div className="pricing-price-head">
                <div className="single-price-head">
                  <span className="clr-neutral-80 d-inline-block fs-14 fw-semibold">Started</span>
                  <div className="d-flex align-items-center justify-content-center gap-3 mt-2">
                    <h4 className="h4 clr-neutral-90 fw-extrabold mb-0">$10</h4>
                    <div>
                      <span className="bg-neutral-10 fs-10 fw-semibold py-1 px-3 clr-neutral-87 rounded-2">20%</span>
                      <p className="mb-0 clr-neutral-24 fs-12 fw-semibold mt-2">Per Mon</p>
                    </div>
                  </div>
                  <Link to="/login" className="link py-2 px-4 clr-white bg-neutral-10 :bg-primary-key rounded-2 fs-14 mt-4 d-inline-flex">Start Trail </Link>
                </div>
                <div className="single-price-head">
                  <span className="clr-neutral-80 d-inline-block fs-14 fw-semibold">Business</span>
                  <div className="d-flex align-items-center justify-content-center gap-3 mt-2">
                    <h4 className="h4 clr-neutral-90 fw-extrabold mb-0">$50</h4>
                    <div>
                      <span className="bg-neutral-10 fs-10 fw-semibold py-1 px-3 clr-neutral-87 rounded-2">20%</span>
                      <p className="mb-0 clr-neutral-24 fs-12 fw-semibold mt-2">Per Mon</p>
                    </div>
                  </div>
                  <Link to="/login" className="link py-2 px-4 clr-white bg-neutral-10 :bg-primary-key rounded-2 fs-14 mt-4 d-inline-flex">Start Trail </Link>
                </div>
                <div className="single-price-head">
                  <span className="clr-neutral-80 d-inline-block fs-14 fw-semibold">Enterprise</span>
                  <div className="d-flex align-items-center justify-content-center gap-3 mt-2">
                    <h4 className="h4 clr-neutral-90 fw-extrabold mb-0">$100</h4>
                    <div>
                      <span className="bg-neutral-10 fs-10 fw-semibold py-1 px-3 clr-neutral-87 rounded-2">20%</span>
                      <p className="mb-0 clr-neutral-24 fs-12 fw-semibold mt-2">Per Mon</p>
                    </div>
                  </div>
                  <Link to="/login" className="link py-2 px-4 clr-white bg-neutral-10 :bg-primary-key rounded-2 fs-14 mt-4 d-inline-flex">Start Trail </Link>
                </div>
              </div>
              <div className="pricing-single-row">
                <h5 className="fs-18 clr-neutral-90 fw-semibold mb-0 py-4">Processing and Generation</h5>
                <ul className="pricing-single-list list list-column m-0 ps-0 gap-5">
                  <li className="d-flex align-items-center">
                    <span className="pricing-single-caption clr-neutral-80 fw-medium">Image Generation</span>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-opacity-3 bg-danger-40 rounded-circle d-inline-flex align-items-center justify-content-center clr-danger-50">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="pricing-single-caption clr-neutral-80 fw-medium">Editing and Enhancement</span>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-opacity-3 bg-danger-40 rounded-circle d-inline-flex align-items-center justify-content-center clr-danger-50">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="clr-neutral-87 fs-14">Unlimited</span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="pricing-single-caption clr-neutral-80 fw-medium">Visual Recognition</span>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-opacity-3 bg-danger-40 rounded-circle d-inline-flex align-items-center justify-content-center clr-danger-50">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="pricing-single-caption clr-neutral-80 fw-medium">Style Transfer</span>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-opacity-3 bg-danger-40 rounded-circle d-inline-flex align-items-center justify-content-center clr-danger-50">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-opacity-3 bg-danger-40 rounded-circle d-inline-flex align-items-center justify-content-center clr-danger-50">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="pricing-single-row">
                <h5 className="fs-18 clr-neutral-90 fw-semibold mb-0 py-4">Natural Language Processing</h5>
                <ul className="pricing-single-list list list-column m-0 ps-0 gap-5">
                  <li className="d-flex align-items-center">
                    <span className="pricing-single-caption clr-neutral-80 fw-medium">Image Generation</span>
                    <div className="pricing-single-feature">
                      <span className="clr-neutral-80 fs-14">10 slots</span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="clr-neutral-80 fs-14">100 slots</span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="clr-neutral-80 fs-14">Unlimited</span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="pricing-single-caption clr-neutral-80 fw-medium">Text Summarization</span>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-opacity-3 bg-danger-40 rounded-circle d-inline-flex align-items-center justify-content-center clr-danger-50">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="pricing-single-caption clr-neutral-80 fw-medium">Language Translation</span>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-opacity-3 bg-danger-40 rounded-circle d-inline-flex align-items-center justify-content-center clr-danger-50">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="pricing-single-caption clr-neutral-80 fw-medium">Entity Linking</span>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-opacity-3 bg-danger-40 rounded-circle d-inline-flex align-items-center justify-content-center clr-danger-50">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-opacity-3 bg-danger-40 rounded-circle d-inline-flex align-items-center justify-content-center clr-danger-50">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="pricing-single-caption clr-neutral-80 fw-medium">Keyword Extraction</span>
                    <div className="pricing-single-feature">
                      <span className="clr-neutral-80 fs-14">100</span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="clr-neutral-80 fs-14">500</span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="clr-neutral-80 fs-14">Unlimited</span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="pricing-single-caption clr-neutral-80 fw-medium">Text Clustering</span>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-opacity-3 bg-danger-40 rounded-circle d-inline-flex align-items-center justify-content-center clr-danger-50">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="pricing-single-row">
                <h5 className="fs-18 clr-neutral-90 fw-semibold mb-0 py-4">Data Analysis and Insights</h5>
                <ul className="pricing-single-list list list-column m-0 ps-0 gap-5">
                  <li className="d-flex align-items-center">
                    <span className="pricing-single-caption clr-neutral-80 fw-medium">Statistical Analysis</span>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="pricing-single-caption clr-neutral-80 fw-medium">Predictive Modeling</span>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-opacity-3 bg-danger-40 rounded-circle d-inline-flex align-items-center justify-content-center clr-danger-50">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-opacity-3 bg-danger-40 rounded-circle d-inline-flex align-items-center justify-content-center clr-danger-50">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="pricing-single-caption clr-neutral-80 fw-medium">Data Visualization</span>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-opacity-3 bg-danger-40 rounded-circle d-inline-flex align-items-center justify-content-center clr-danger-50">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="pricing-single-caption clr-neutral-80 fw-medium">Cluster Analysis</span>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-opacity-3 bg-danger-40 rounded-circle d-inline-flex align-items-center justify-content-center clr-danger-50">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-opacity-3 bg-danger-40 rounded-circle d-inline-flex align-items-center justify-content-center clr-danger-50">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                    <div className="pricing-single-feature">
                      <span className="w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key">
                        <i className="bi bi-check-circle-fill"></i>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
};

export default AiPricing
