import { Link } from "react-router-dom";

const FeatureUsecase = () => {
  return (
    <>
       <div className="section-space-sm-top section-space-sm-bottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="py-10 px-10 py-md-25 px-md-20 bg-neutral-4 border border-neutral-10 rounded-3">
            <span className="d-inline-flex align-items-center py-2 px-4 bg-info-10 bg-opacity-3 rounded-1 clr-white fs-12 mb-4"> Featured Use Case </span>
            <h4 className="h4 fw-bold clr-neutral-90">“WriteBot is the best AI tool for campaign creation, and I recommend it to every marketer in my B2B SaaS community.”</h4>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-4 mt-10">
              <div className="d-flex flex-wrap gap-6 align-items-center">
                <img src="/img/comment-1.png" alt="image" className="img-fluid w-24 h-24 object-fit-cover rounded-circle"/>
                <div>
                  <h5 className="clr-neutral-90 fw-bold fs-24 mb-0">Mark Villomas</h5>
                  <span className="fs-14 clr-neutral-80 d-inline-block">CEO Themetag</span>
                </div>
              </div>
              <Link to="/register" className="link d-inline-flex align-items-center gap-2 clr-white py-4 px-6 bg-primary-key :bg-primary-30 rounded-2">
                <span className="fw-bold fs-14">Get Started Now</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
};

export default FeatureUsecase
