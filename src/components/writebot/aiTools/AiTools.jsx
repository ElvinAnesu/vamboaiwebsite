import React from 'react';

const AiTools = () => {
  return (
    <section className="ai-tools-section section-space-top home-7-section-top-border">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center">
              <span className="rounded-1 bg-primary-key bg-opacity-2 clr-white fs-12 fw-bold px-4 py-2 d-inline-block mb-4 fadeIn_bottom">WriteBot AI</span>
              <h3 className="clr-neutral-90 fw-bold animate-line-3d">WritBot AI Tools.</h3>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="row gy-4">
            <div className="col-lg-4">
              <div className="row gy-4">
                <div className="col-lg-12 col-md-6">
                  <AiToolsCard imgSrc="/img/ai-tools-card-img-1.png" title="Advance Dashboard" text="AI-powered translation tools Save per day on ad management" />
                </div>
                <div className="col-lg-12 col-md-6">
                  <AiToolsCard imgSrc="/img/ai-tools-card-img-2.png" title="Advance Dashboard" text="AI-powered translation tools Save per day on ad management" />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <AiToolsCardWithGlobe />
            </div>
            <div className="col-lg-4">
              <div className="row gy-4">
                <div className="col-lg-12 col-md-6">
                  <AiToolsCard imgSrc="/img/ai-tools-card-img-4.png" title="Advance Dashboard" text="AI-powered translation tools Save per day on ad management" />
                </div>
                <div className="col-lg-12 col-md-6">
                  <AiToolsCard imgSrc="/img/ai-tools-card-img-5.png" title="Advance Dashboard" text="AI-powered translation tools Save per day on ad management" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/img/ai-tools-top-shape.png" alt="image" className="img-fluid ai-tools-section-top-shape" />
      <img src="/img/ai-tools-shape-top-right.png" alt="image" className="img-fluid ai-tools-section-top-right-shape" />
      <img src="/img/ai-tools-shape-left.png" alt="image" className="img-fluid ai-tools-section-left-shape" />
      <img src="/img/ai-tools-shape-bottom.png" alt="image" className="img-fluid ai-tools-section-bottom-shape" />
      <img src="/img/ai-tools-shape-bottom-layer.png" alt="image" className="img-fluid ai-tools-section-bottom-layer-shape" />
      <img src="/img/ai-tools-shape-left-start.png" alt="image" className="img-fluid ai-tools-section-left-start parallax" />
      <img src="/img/ai-tools-shape-right-start.png" alt="image" className="img-fluid ai-tools-section-right-start parallax" />
    </section>
  );
}

const AiToolsCard = ({ imgSrc, title, text }) => {
  return (
    <div className="ai-tools-card text-center overflow-hidden py-10 px-8 h-100 fadeIn_bottom" data-tilt data-tilt-max="0" data-tilt-glare data-tilt-max-glare="0.15">
      <img src={imgSrc} alt="image" className="img-fluid mt-2 mb-5 img-gray" />
      <h4 className="clr-neutral-90 fs-18 fw-semibold">{title}</h4>
      <p className="clr-neutral-80 mb-0">{text}</p>
      <img src="/img/ai-tools-card-shape-1.png" alt="image" className="img-fluid ai-tools-card-shape" />
    </div>
  );
}

const AiToolsCardWithGlobe = () => {
  return (
    <div className="ai-tools-card text-center overflow-hidden py-10 px-8 h-100 fadeIn_bottom" data-tilt data-tilt-max="0" data-tilt-glare data-tilt-max-glare="0.15">
      <div className="mt-2 mb-10 ai-tools-card-globe">
        <img src="/img/ai-tools-card-img-3-globe.png" alt="image" className="img-fluid" />
        <img src="/img/ai-tools-card-img-3-flag.png" alt="image" className="img-fluid ai-tools-card-flag" />
      </div>
      <h4 className="clr-neutral-90 fs-18 fw-semibold">Advance Dashboard</h4>
      <p className="clr-neutral-80 mb-0">AI-powered translation tools Save per day on ad management</p>
      <img src="/img/ai-tools-card-shape-3.png" alt="image" className="img-fluid ai-tools-card-shape" />
    </div>
  );
}

export default AiTools;
