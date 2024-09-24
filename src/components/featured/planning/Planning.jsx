import FeaturedBlock from "../featuredBlock/FeaturedBlock";
import FeaturedSidebar from "../FeaturedSidebar/FeaturedSidebar";

const Planning = () => {
  return (
    <>

    
      <div className="featured-section section-space-top section-space-sm-bottom">
    <div className="container">
      <div className="row gy-5">
        <FeaturedSidebar />
        <div className="col-lg-10">
          <div data-bs-spy="scroll" data-bs-target="#featured-block-list" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0">
            <FeaturedBlock
              id="featured-block-1"
              icon="bi-gear"
              title="Planning"
              content="lets you edit and write code with the AI. To edit, try selecting some code, click 'Edit,' and describe how the code should be changed. To generate completely new code, just type Command K without selecting anything. With great teams come great processes. Using our developer API, create and publish extensions to your organization."
              additionalContent={

                <>
                
                <div className="planning-feature-list-wrapper rounded-3 mt-10">
                  <div className="single-planning-feature single-planning-feature-bg-1 gap-2">
                    <i className="bi bi-lightbulb-fill"></i>
                    <span className="clr-white">Auto AI Transitions</span>
                  </div>
                  <div className="single-planning-feature single-planning-feature-bg-2 gap-2">
                    <i className="bi bi-collection-fill"></i>
                    <span className="clr-white">Articles</span>
                  </div>
                  <div className="single-planning-feature single-planning-feature-bg-3 gap-2">
                    <i className="bi bi-basket2"></i>
                    <span className="clr-white">Ecommerce</span>
                  </div>
                  <div className="single-planning-feature single-planning-feature-bg-4 gap-2">
                    <i className="bi bi-bar-chart-fill"></i>
                    <span className="clr-white">SEO</span>
                  </div>
                  <div className="single-planning-feature single-planning-feature-bg-5 gap-2">
                    <i className="bi bi-android"></i>
                    <span className="clr-white">Coding </span>
                  </div>
                  <div className="single-planning-feature single-planning-feature-bg-6 gap-2">
                    <i className="bi bi-apple"></i>
                    <span className="clr-white">Social Media</span>
                  </div>
                  <div className="single-planning-feature single-planning-feature-bg-7 gap-2">
                    <i className="bi bi-soundwave"></i>
                    <span className="clr-white">Speech Enhance</span>
                  </div>
                  <div className="single-planning-feature single-planning-feature-bg-8 gap-2">
                    <i className="bi bi-chat-dots-fill"></i>
                    <span className="clr-white">Blogging</span>
                  </div>
                  <div className="single-planning-feature single-planning-feature-bg-9 gap-2">
                    <i className="bi bi-display"></i>
                    <span className="clr-white">Auto Caption</span>
                  </div>
                  <img src="/img/planning-feature-bg.png" alt="image" className="img-fluid planning-feature-bg"/>
                </div>

                <div className="planning-item-wrapper mt-12">
                  <div className="row gy-4">
                    <div className="col-xl-4">
                      <div className="d-flex align-items-center gap-4">
                        <div className="w-14 h-14 rounded-2 bg-neutral-12 d-flex justify-content-center align-items-center flex-shrink-0">
                          <img src="/img/planning-feature-icon.svg" alt="image" className="img-fluid"/>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="fs-18 clr-neutral-90 mb-3">Image Generation</h5>
                          <p className="fs-14 mb-0 clr-neutral-80">Create your projects and start tracking time according</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="d-flex align-items-center gap-4">
                        <div className="w-14 h-14 rounded-2 bg-neutral-12 d-flex justify-content-center align-items-center flex-shrink-0">
                          <img src="/img/planning-feature-icon.svg" alt="image" className="img-fluid"/>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="fs-18 clr-neutral-90 mb-3">Image Generation</h5>
                          <p className="fs-14 mb-0 clr-neutral-80">Create your projects and start tracking time according</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="d-flex align-items-center gap-4">
                        <div className="w-14 h-14 rounded-2 bg-neutral-12 d-flex justify-content-center align-items-center flex-shrink-0">
                          <img src="/img/planning-feature-icon.svg" alt="image" className="img-fluid"/>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="fs-18 clr-neutral-90 mb-3">Image Generation</h5>
                          <p className="fs-14 mb-0 clr-neutral-80">Create your projects and start tracking time according</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img src="/img/planning-item-line-left.png" alt="image" className="img-fluid planning-item-line planning-item-line-left"/>
                  <img src="/img/planning-item-line-right.png" alt="image" className="img-fluid planning-item-line planning-item-line-right"/>
                </div>
                </>
              }
            />
            <FeaturedBlock
              id="featured-block-2"
              icon="bi-gem"
              title="Progress"
              content="Progress lets you talk with an AI that sees your codebase. The chat can always see your current file and cursor, so you can ask it things like: 'Is there a bug here?'. You can add particular blocks of code to the context with Command+Shift+L or '@.' You can chat with your entire codebase with Command+Enter."
              additionalContent={<div className="row gy-4 mt-1"> 
              
              <div className="col-lg-4 col-sm-6">
                    <div className="gradient-card rounded-4 p-4 text-center">
                      <img src="/img/progress-img-1.png" alt="image" className="img-fluid"/>
                      <h5 className="clr-neutral-90 fs-16 fw-bold mt-5 mb-3">Wires & ACH</h5>
                      <p className="clr-neutral-80 fs-14 max-text-20 mx-auto">Same-next day transfer to bank accounts</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="gradient-card rounded-4 p-4 text-center">
                      <img src="/img/progress-img-2.png" alt="image" className="img-fluid"/>
                      <h5 className="clr-neutral-90 fs-16 fw-bold mt-5 mb-3">Git Integration</h5>
                      <p className="clr-neutral-80 fs-14 max-text-20 mx-auto">Same-next day transfer to bank accounts</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="gradient-card rounded-4 p-4 text-center">
                      <img src="/img/progress-img-3.png" alt="image" className="img-fluid"/>
                      <h5 className="clr-neutral-90 fs-16 fw-bold mt-5 mb-3">Custom Template</h5>
                      <p className="clr-neutral-80 fs-14 max-text-20 mx-auto">Same-next day transfer to bank accounts</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="gradient-card rounded-4 p-4 text-center">
                      <img src="/img/progress-img-4.png" alt="image" className="img-fluid"/>
                      <h5 className="clr-neutral-90 fs-16 fw-bold mt-5 mb-3">Wires & ACH</h5>
                      <p className="clr-neutral-80 fs-14 max-text-20 mx-auto">Same-next day transfer to bank accounts</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="gradient-card rounded-4 p-4 text-center">
                      <img src="/img/progress-img-5.png" alt="image" className="img-fluid"/>
                      <h5 className="clr-neutral-90 fs-16 fw-bold mt-5 mb-3">Git Integration</h5>
                      <p className="clr-neutral-80 fs-14 max-text-20 mx-auto">Same-next day transfer to bank accounts</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="gradient-card rounded-4 p-4 text-center">
                      <img src="/img/progress-img-6.png" alt="image" className="img-fluid"/>
                      <h5 className="clr-neutral-90 fs-16 fw-bold mt-5 mb-3">Custom Template</h5>
                      <p className="clr-neutral-80 fs-14 max-text-20 mx-auto">Same-next day transfer to bank accounts</p>
                    </div>
                  </div>
              </div>}
            />
            <FeaturedBlock
              id="featured-block-3"
              icon="bi-gem"
              title="Collaborate"
              content=""
              additionalContent={<div className="border-items-wrapper mt-5"> 
              
              <div className="border-items-wrapper mt-5">
                  <div className="row g-0">
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="border-item p-6">
                        <img src="/img/collborate-icon-1.png" alt="image" className="img-fluid"/>
                        <h4 className="fw-semibold fs-16 clr-neutral-90 mb-3 mt-4">Build for Speed</h4>
                        <p className="mb-0 fs-14 clr-neutral-80">Create your projects and start tracking time according</p>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="border-item p-6">
                        <img src="/img/collborate-icon-1.png" alt="image" className="img-fluid"/>
                        <h4 className="fw-semibold fs-16 clr-neutral-90 mb-3 mt-4">Build for Speed</h4>
                        <p className="mb-0 fs-14 clr-neutral-80">Create your projects and start tracking time according</p>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="border-item p-6">
                        <img src="/img/collborate-icon-1.png" alt="image" className="img-fluid"/>
                        <h4 className="fw-semibold fs-16 clr-neutral-90 mb-3 mt-4">Build for Speed</h4>
                        <p className="mb-0 fs-14 clr-neutral-80">Create your projects and start tracking time according</p>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="border-item p-6">
                        <img src="/img/collborate-icon-1.png" alt="image" className="img-fluid"/>
                        <h4 className="fw-semibold fs-16 clr-neutral-90 mb-3 mt-4">Build for Speed</h4>
                        <p className="mb-0 fs-14 clr-neutral-80">Create your projects and start tracking time according</p>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="border-item p-6">
                        <img src="/img/collborate-icon-1.png" alt="image" className="img-fluid"/>
                        <h4 className="fw-semibold fs-16 clr-neutral-90 mb-3 mt-4">Build for Speed</h4>
                        <p className="mb-0 fs-14 clr-neutral-80">Create your projects and start tracking time according</p>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="border-item p-6">
                        <img src="/img/collborate-icon-1.png" alt="image" className="img-fluid"/>
                        <h4 className="fw-semibold fs-16 clr-neutral-90 mb-3 mt-4">Build for Speed</h4>
                        <p className="mb-0 fs-14 clr-neutral-80">Create your projects and start tracking time according</p>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="border-item p-6">
                        <img src="/img/collborate-icon-1.png" alt="image" className="img-fluid"/>
                        <h4 className="fw-semibold fs-16 clr-neutral-90 mb-3 mt-4">Build for Speed</h4>
                        <p className="mb-0 fs-14 clr-neutral-80">Create your projects and start tracking time according</p>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="border-item p-6">
                        <img src="/img/collborate-icon-1.png" alt="image" className="img-fluid"/>
                        <h4 className="fw-semibold fs-16 clr-neutral-90 mb-3 mt-4">Build for Speed</h4>
                        <p className="mb-0 fs-14 clr-neutral-80">Create your projects and start tracking time according</p>
                      </div>
                    </div>
                  </div>
                  <img src="/img/collborate-shape-line.png" alt="image" className="img-fluid collaborate-shape-line"/>
                </div>
              </div>}
            />
            <FeaturedBlock
              id="featured-block-4"
              icon="bi-stars"
              title="Data Analysis"
              content="Progress lets you talk with an AI that sees your codebase. The chat can always see your current file and cursor, so you can ask it things like: 'Is there a bug here?'. You can add particular blocks of code to the context with Command+Shift+L or '@.' You can chat with your entire codebase with Command+Enter."
              additionalContent={<img src="/img/data-analysis-main.png" alt="image" className="img-fluid mt-4" />}
            />
            <FeaturedBlock
              id="featured-block-5"
              icon="bi-stars"
              title="Level Code"
              content=""
              additionalContent={<>
                <img src="/img/level-up-code.png" alt="img" className="img-fluid mt-5"/>
                <div className="row gy-4 mt-4 align-items-center">
                  <div className="col-lg-5">
                    <img src="/img/ai-benefit-main.png" alt="image" className="img-fluid"/>
                  </div>
                  <div className="col-lg-7">
                    <p className="clr-neutral-80">Progress lets you talk with an AI that sees your codebase. The chat can always see your current file and cursor, so you can ask it things like: "Is there a bug here?". You can add particular blocks</p>
                    <p className="clr-neutral-80 mb-0">code to the context with Command+Shift+L or "@." You can chat with your entire codebase with Command+Enter.</p>
                  </div>
                </div>
                </>
              }
            />
            <FeaturedBlock
              id="featured-block-6"
              icon="bi-stars"
              title="WriteBot Secure"
              content=""
              additionalContent={<div className="dark-overlay-two">  <div className="scroller-x mb-2" data-direction="right" data-speed="slow" data-animated="true">
                <ul className="list list-row gap-1 scroller-x__list">
                  <li>
                    <img src="/img/secure-1.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-2.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-3.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-4.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-5.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-6.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-7.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-8.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-9.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-10.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-11.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-12.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-13.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-1.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-2.png" alt="img" className="img-fluid"/>
                  </li>
                </ul>
              </div>
              <div className="scroller-x mb-2" data-direction="left" data-speed="slow" data-animated="true">
                <ul className="list list-row gap-1 scroller-x__list">
                  <li>
                    <img src="/img/secure-1.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-2.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-3.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-4.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-5.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-6.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-7.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-8.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-9.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-10.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-11.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-12.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-13.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-1.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-2.png" alt="img" className="img-fluid"/>
                  </li>
                </ul>
              </div>
              <div className="scroller-x mb-2" data-direction="right" data-speed="slow" data-animated="true">
                <ul className="list list-row gap-1 scroller-x__list">
                  <li>
                    <img src="/img/secure-1.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-2.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-3.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-4.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-5.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-6.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-7.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-8.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-9.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-10.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-11.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-12.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-13.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-1.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-2.png" alt="img" className="img-fluid"/>
                  </li>
                </ul>
              </div>
              <div className="scroller-x mb-2" data-direction="left" data-speed="slow" data-animated="true">
                <ul className="list list-row gap-1 scroller-x__list">
                  <li>
                    <img src="/img/secure-1.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-2.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-3.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-4.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-5.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-6.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-7.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-8.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-9.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-10.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-11.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-12.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-13.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-1.png" alt="img" className="img-fluid"/>
                  </li>
                  <li>
                    <img src="/img/secure-2.png" alt="img" className="img-fluid"/>
                  </li>
                </ul>
              </div></div>}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
};

export default Planning
