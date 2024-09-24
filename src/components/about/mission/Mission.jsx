
const Mission = () => {
  return (
    <>
        <section className="mission-section">
    <div className="container">
      <div className="mb-xl-5 mb-8">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex align-items-center gap-4">
              <div className="w-14 h-14 bg-primary-key rounded-circle d-flex align-items-center justify-content-center clr-primary-key fs-24 bg-opacity-2">
                <i className="bi bi-gear"></i>
              </div>
              <h3 className="h3 fw-bold mb-0 clr-neutral-90">Our Mission</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="mission-wrapper">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <p className="fs-18 fw-bold clr-neutral-80">We pride ourselves on offering AI Generators that are unmatched in their quality, versatility, and ease of use. Here's what sets us apart from the competition:</p>
            <p className="clr-neutral-80">With our AI Generators, the possibilities are endless. From generating compelling marketing copy and designing stunning visuals to automating data analysis and creating personalized user experiences, our tools will transform the way you work and help you achieve remarkable outcomes.</p>
            <p className="clr-neutral-80">Join our community of innovators, creators, and forward-thinkers who are leveraging the power of AI to revolutionize their industries. Start your journey with [Company Name] today and unlock the full potential of AI Generators.</p>
          </div>
          <div className="col-xl-6">
            <img src="/img/ai-mission.png" alt="image" className="img-fluid"/>
          </div>
        </div>
        <img src="/img/mission-line-top.png" alt="image" className="img-fluid mission-shape-line mission-shape-line-top"/>
        <img src="/img/mission-line-right.png" alt="image" className="img-fluid mission-shape-line mission-shape-line-right"/>
      </div>
    </div>
    <img src="/img/mission-shape-circle.png" alt="image" className="img-fluid mission-shape-circle"/>
  </section>
    </>
  )
};

export default Mission
