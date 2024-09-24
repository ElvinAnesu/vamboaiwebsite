import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <>
       <section className="cta-section-4 section-space-sm-top">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="cta-wrapper-4 fadeIn_bottom">
            <div className="text-center">
              <span className="rounded-1 bg-primary-key bg-opacity-2 clr-white fs-12 fw-bold px-4 py-2 d-inline-block mb-4 fadeIn_bottom">WriteBot AI</span>
              <h3 className="clr-neutral-90 fw-bold animate-line-3d">WritBot AI Loved by thinkers</h3>
              <p className="mb-0 fs-14 clr-neutral-80 animte-text-from-right">Write 10x faster, engage your audience, & never struggle with the blank page again.</p>
              <Link to="/login" className="link d-inline-flex justify-content-center align-items-center gap-2 py-4 px-6 border border-primary-key :border-primary-30 bg-primary-key :bg-primary-30 rounded-1 fw-bold clr-white mt-8 :arrow-btn fadeIn_bottom">
                <span>Get Started Now</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <img src="/img/cta-4-bg.png" alt="image" className="img-fluid cta-wrapper-4-bg w-100 h-100 object-fit-cover"/>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
};

export default Cta
