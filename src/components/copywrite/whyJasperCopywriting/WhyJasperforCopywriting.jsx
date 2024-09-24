import { Link } from "react-router-dom";

const WhyJasperforCopywriting = () => {
  return (
    <>
       <section className="section-space-sm-top section-space-sm-bottom">
    <div className="container">
      <div className="row gy-4 justify-content-between">
        <div className="col-lg-6">
          <h3 className="clr-neutral-90">Why Jasper for Copywriting</h3>
          <ul className="copywrite-overview-list list list-column gap-4 mt-10">
            <li className="clr-neutral-80">Write, edit, and format your copy all within our easy-to-use document editor.</li>
            <li className="clr-neutral-80">Choose from 50+ content templates to help streamline your writing process.</li>
            <li className="clr-neutral-80">Use Jasper as a brainstorming buddy to help rephrase and rewrite your copy.</li>
            <li className="clr-neutral-80">Make sure your copy stays on brand with custom brand voices.</li>
            <li className="clr-neutral-80">Collaborate with stakeholders with document sharing and status updates</li>
          </ul>
        </div>
        <div className="col-xl-5 col-lg-6">
          <div className="copywrite-overview-wrapper text-center">
            <img src="/img/logo-light.png" alt="img" className="img-fluid copywrite-logo"/>
            <h5 className="clr-neutral-90 mb-6 fw-bold fs-20 mt-3">Ready to optimize your Copywriting workflow with AI?"</h5>
            <Link to="/login" className="link d-inline-flex align-items-center gap-2 clr-white py-2 px-4 bg-primary-key :bg-primary-30 rounded-2">
              <span className="fw-bold fs-14">Start Free Trail</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
            <img src="/img/copywrite-line-top.png" alt="image" className="img-fluid copywrite-line copywrite-line-top"/>
            <img src="/img/copywrite-line-bottom.png" alt="image" className="img-fluid copywrite-line copywrite-line-bottom"/>
            <img src="/img/copywrite-line-left.png" alt="image" className="img-fluid copywrite-line copywrite-line-left"/>
            <img src="/img/copywrite-line-right.png" alt="image" className="img-fluid copywrite-line copywrite-line-right"/>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
};

export default WhyJasperforCopywriting
