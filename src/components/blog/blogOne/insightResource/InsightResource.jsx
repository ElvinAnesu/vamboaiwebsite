import { Link } from "react-router-dom";

const InsightResource = () => {
  return (
    <>
        <div className="section-space-sm-top section-space-sm-bottom">
    <div className="container">
      <div className="mb-10">
        <div className="row">
          <div className="col-lg-5">
            <h2 className="h3 clr-neutral-90 fw-extrabold mb-4">Insight Resource</h2>
            <p className="clr-neutral-80 mb-0">When new material doesn't quite click for a student, several factors might be contributing to the disconnect. In particular, learning gaps are a common culprit.</p>
          </div>
        </div>
      </div>
      <div className="row gy-4">
        <div className="col-md-6 col-xl-4">
          <div className="bg-neutral-4 rounded-4">
            <img src="/img/insight-1.png" alt="image" className="img-fluid w-100 object-fit-cover rounded-top-start-4 rounded-top-end-4"/>
            <div className="p-8">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="w-14 h-2px bg-secondary-key d-inline-block"></span>
                <span className="clr-secondary-key fw-bold">AI News</span>
              </div>
              <h4 className="fs-20 fw-extrabold"><Link to="/blog-details" className="clr-neutral-90 link :clr-primary-key">Performing an SEO Audit The Definitive Checklist</Link></h4>
              <p className="clr-neutral-80 mb-6">With our AI Generators, the possibilities are endless designing stunning.</p>
              <ul className="list list-row gap-5">
                <li className="fs-14 clr-neutral-80 d-flex gap-2">
                  <i className="bi bi-calendar2-date"></i> March 19, 2022
                </li>
                <li className="fs-14 clr-neutral-80"> (15) Comments </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-4">
          <div className="bg-neutral-4 rounded-4">
            <img src="/img/insight-2.png" alt="image" className="img-fluid w-100 object-fit-cover rounded-top-start-4 rounded-top-end-4"/>
            <div className="p-8">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="w-14 h-2px bg-secondary-key d-inline-block"></span>
                <span className="clr-secondary-key fw-bold">AI News</span>
              </div>
              <h4 className="fs-20 fw-extrabold"><Link href="/blog-details" className="clr-neutral-90 link :clr-primary-key">Performing an SEO Audit The Definitive Checklist</Link></h4>
              <p className="clr-neutral-80 mb-6">With our AI Generators, the possibilities are endless designing stunning.</p>
              <ul className="list list-row gap-5">
                <li className="fs-14 clr-neutral-80 d-flex gap-2">
                  <i className="bi bi-calendar2-date"></i> March 19, 2022
                </li>
                <li className="fs-14 clr-neutral-80"> (15) Comments </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-4">
          <div className="bg-neutral-4 rounded-4">
            <img src="/img/insight-3.png" alt="image" className="img-fluid w-100 object-fit-cover rounded-top-start-4 rounded-top-end-4"/>
            <div className="p-8">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="w-14 h-2px bg-secondary-key d-inline-block"></span>
                <span className="clr-secondary-key fw-bold">AI News</span>
              </div>
              <h4 className="fs-20 fw-extrabold"><Link to="/blog-details" className="clr-neutral-90 link :clr-primary-key">Performing an SEO Audit The Definitive Checklist</Link></h4>
              <p className="clr-neutral-80 mb-6">With our AI Generators, the possibilities are endless designing stunning.</p>
              <ul className="list list-row gap-5">
                <li className="fs-14 clr-neutral-80 d-flex gap-2">
                  <i className="bi bi-calendar2-date"></i> March 19, 2022
                </li>
                <li className="fs-14 clr-neutral-80"> (15) Comments </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
};

export default InsightResource
