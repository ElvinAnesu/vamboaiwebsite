
const HowWork = () => {
  return (
    <>
       <section className="how-work-section-2 section-space-sm-bottom">
    <div className="container">
      <div className="mb-xl-10 mb-8">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex align-items-center gap-4">
              <div className="w-14 h-14 bg-primary-key rounded-circle d-flex align-items-center justify-content-center clr-primary-key fs-24 bg-opacity-2">
                <i className="bi bi-gem"></i>
              </div>
              <h3 className="clr-neutral-90 h3 fw-bold mb-0">How we works</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="how-work-2-wrapper">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6 px-lg-8 ps-xl-12 ps-xxl-20">
            <div className="accordion how-work-accordion" id="howWorkAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c-1" aria-expanded="false" aria-controls="c-1">
                    <i className="bi bi-check2"></i> Trust & Safety team </button>
                </h2>
                <div id="c-1" className="accordion-collapse collapse" data-bs-parent="#howWorkAccordion">
                  <div className="accordion-body">
                    <p>Our data handling practices, systems and processes have been independently audited & certified. Below is a suggested course outline for a Figma course. This outline covers essential</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#c-2" aria-expanded="true" aria-controls="c-2">
                    <i className="bi bi-check2"></i> In Adherence to SOC 2 & GDPR Standards. </button>
                </h2>
                <div id="c-2" className="accordion-collapse collapse show" data-bs-parent="#howWorkAccordion">
                  <div className="accordion-body">
                    <p>Our data handling practices, systems and processes have been independently audited & certified. Below is a suggested course outline for a Figma course. This outline covers essential</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c-3" aria-expanded="false" aria-controls="c-3">
                    <i className="bi bi-check2"></i> Content Moderation Policy </button>
                </h2>
                <div id="c-3" className="accordion-collapse collapse" data-bs-parent="#howWorkAccordion">
                  <div className="accordion-body">
                    <p>Our data handling practices, systems and processes have been independently audited & certified. Below is a suggested course outline for a Figma course. This outline covers essential</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c-4" aria-expanded="false" aria-controls="c-4">
                    <i className="bi bi-check2"></i> Chat with your project </button>
                </h2>
                <div id="c-4" className="accordion-collapse collapse" data-bs-parent="#howWorkAccordion">
                  <div className="accordion-body">
                    <p>Our data handling practices, systems and processes have been independently audited & certified. Below is a suggested course outline for a Figma course. This outline covers essential</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="/img/how-work-section-2-main.png" alt="image" className="img-fluid"/>
          </div>
        </div>
        <img src="/img/how-work-section-2-line.png" alt="image" className="img-fluid how-work-2-wrapper-line"/>
      </div>
    </div>
    <img src="/img/how-work-section-2-shape-right.png" alt="image" className="img-fluid how-work-section-2-shape"/>
  </section>
    </>
  )
};

export default HowWork
