import React, { useState } from 'react';

const FaqSection = () => {
  const [activeAccordion, setActiveAccordion] = useState("faqAccordion1"); // Use null instead of an empty string

  const toggleAccordion = (accordionId) => {
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
  };

  return (
    <div className="faq-section-5 section-space-y position-relative z-1">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="section-space-sm-bottom">
              <div className="d-flex align-items-center gap-3 mb-1 fadeIn_bottom">
                <span className="d-inline-block flex-shrink-0">
                  <img src="/img/icon-subtitle.png" alt="image" className="img-fluid"/>
                </span>
                <span className="d-inline-block clr-secondary-key ff-1 fw-bold fs-18"> AI Safety </span>
              </div>
              <h4 className="mb-6 clr-neutral-90 fw-extrabold max-text-20 animate-line-3d"> Established on a bedrock of ethics & safety. </h4>
              <p className="mb-0 clr-neutral-80 animate-text-from-right"> People first, always. We prioritized secure, safe and ethical use of Artificial Intelligence in our product development processes. </p>
            </div>
            <div className="bg-neutral-10 top-shadow rounded-4 p-4 p-md-8 fadeIn_bottom">
              <ul className="list list-flush">
                <li className="fadeIn_bottom">
                  <div className="pb-6">
                    <div className="d-flex align-items-center gap-3 mb-4">
                      <span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-primary-2 border-opacity-3 bg-neutral-90 bg-opacity-05 clr-white">
                        <i className="bi bi-check2"></i>
                      </span>
                      <span className="d-block ff-1 fs-18 fw-semibold clr-white"> In Adherence to SOC 2 & GDPR Standards. </span>
                    </div>
                    <p className="mb-0 clr-neutral-80"> Our data handling practices, systems and processes have been independently audited & certified. </p>
                  </div>
                </li>
                <li className="fadeIn_bottom">
                  <div className="py-6">
                    <div className="d-flex align-items-center gap-3 mb-4">
                      <span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-primary-2 border-opacity-3 bg-neutral-90 bg-opacity-05 clr-white">
                        <i className="bi bi-check2"></i>
                      </span>
                      <span className="d-block ff-1 fs-18 fw-semibold clr-white"> Trust & Safety team </span>
                    </div>
                    <p className="mb-0 clr-neutral-80"> Our data handling practices, systems and processes have been independently audited & certified. </p>
                  </div>
                </li>
                <li className="fadeIn_bottom">
                  <div className="py-6">
                    <div className="d-flex align-items-center gap-3 mb-4">
                      <span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-primary-2 border-opacity-3 bg-neutral-90 bg-opacity-05 clr-white">
                        <i className="bi bi-check2"></i>
                      </span>
                      <span className="d-block ff-1 fs-18 fw-semibold clr-white"> Content Moderation Policy </span>
                    </div>
                    <p className="mb-0 clr-neutral-80"> Our data handling practices, systems and processes have been independently audited & certified. </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-space-sm-bottom">
              <div className="d-flex align-items-center gap-3 mb-1 fadeIn_bottom">
                <span className="d-inline-block flex-shrink-0">
                  <img src="/img/icon-subtitle.png" alt="image" className="img-fluid"/>
                </span>
                <span className="d-inline-block clr-secondary-key ff-1 fw-bold fs-18"> FAQ </span>
              </div>
              <h4 className="mb-0 clr-neutral-90 fw-extrabold max-text-20 animate-line-3d"> Questions? We have Answers. </h4>
            </div>
            <div className="accordion custom-accordion custom-accordion--faq" id="faqAccordionOne">
              <div className={`accordion-item border-bottom-0 border-start-0 border-end-0 top-shadow rounded-4 fadeIn_bottom ${activeAccordion === 'faqAccordion1' ? 'active' : ''}`}>
                <h2 className="accordion-header">
                  <button className="accordion-button fs-20 fw-bold" type="button" onClick={() => toggleAccordion('faqAccordion1')} aria-expanded={activeAccordion === 'faqAccordion1'}>
                    How does the Type tone AI app work / Where do I start?
                  </button>
                </h2>
                <div id="faqAccordion1" className={`accordion-collapse collapse ${activeAccordion === 'faqAccordion1' ? 'show' : ''}`} data-bs-parent="#faqAccordionOne">
                  <div className="accordion-body pt-0 pb-6">
                    <ul className="list gap-4 mb-8">
                      <li> 1. Create an account and write completely free, forever! If you want more features and Tone </li>
                      <li> 2. Log in to the app and choose a template, such as "Article Writing". </li>
                      <li> 3. Fill in the required fields and click Generate the more context output. </li>
                    </ul>
                    <p className="mb-0"> Have questions about how the app works? Ask your question to our live chat or send an email and we will help you further. </p>
                  </div>
                </div>
              </div>
              <div className={`accordion-item border-bottom-0 border-start-0 border-end-0 top-shadow rounded-4 fadeIn_bottom ${activeAccordion === 'faqAccordion2' ? 'active' : ''}`}>
                <h2 className="accordion-header">
                  <button className="accordion-button fs-20 fw-bold" type="button" onClick={() => toggleAccordion('faqAccordion2')} aria-expanded={activeAccordion === 'faqAccordion2'}>
                    Another FAQ question
                  </button>
                </h2>
                <div id="faqAccordion2" className={`accordion-collapse collapse ${activeAccordion === 'faqAccordion2' ? 'show' : ''}`} data-bs-parent="#faqAccordionOne">
                  <div className="accordion-body pt-0 pb-6">
                    <p> Answer to the second FAQ question goes here. </p>
                  </div>
                </div>
              </div>
              <div className={`accordion-item border-bottom-0 border-start-0 border-end-0 top-shadow rounded-4 fadeIn_bottom ${activeAccordion === 'faqAccordion3' ? 'active' : ''}`}>
                <h2 className="accordion-header">
                  <button className="accordion-button fs-20 fw-bold" type="button" onClick={() => toggleAccordion('faqAccordion3')} aria-expanded={activeAccordion === 'faqAccordion3'}>
                    Yet another FAQ question
                  </button>
                </h2>
                <div id="faqAccordion3" className={`accordion-collapse collapse ${activeAccordion === 'faqAccordion3' ? 'show' : ''}`} data-bs-parent="#faqAccordionOne">
                  <div className="accordion-body pt-0 pb-6">
                    <p> Answer to the third FAQ question goes here. </p>
                  </div>
                </div>
              </div>
              <div className={`accordion-item border-bottom-0 border-start-0 border-end-0 top-shadow rounded-4 fadeIn_bottom ${activeAccordion === 'faqAccordion3' ? 'active' : ''}`}>
                <h2 className="accordion-header">
                  <button className="accordion-button fs-20 fw-bold" type="button" onClick={() => toggleAccordion('faqAccordion4')} aria-expanded={activeAccordion === 'faqAccordion4'}>
                    Yet another FAQ question
                  </button>
                </h2>
                <div id="faqAccordion4" className={`accordion-collapse collapse ${activeAccordion === 'faqAccordion4' ? 'show' : ''}`} data-bs-parent="#faqAccordionOne">
                  <div className="accordion-body pt-0 pb-6">
                    <p> Answer to the third FAQ question goes here. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/img/faq-5-shape-1.png" alt="image" className="img-fluid position-absolute top-0 end-0 z-n1 translate-y-n25 pointer-none"/>
    </div>
  );
};

export default FaqSection;
