import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const tablist = [
  {
    id: "feature-1-tab",
    icon: "bi bi-stars",
    label: "AI Smart Works",
    target: "feature-1-tab-pane",
    isActive: true // Optionally, mark the active tab
  },
  {
    id: "feature-2-tab",
    icon: "bi bi-images",
    label: "AI Image",
    target: "feature-2-tab-pane",
    isActive: false
  },
  {
    id: "feature-3-tab",
    icon: "bi bi-textarea-t",
    label: "AI Content",
    target: "feature-3-tab-pane",
    isActive: false
  },
  {
    id: "feature-4-tab",
    icon: "bi bi-music-note-beamed",
    label: "AI Music",
    target: "feature-4-tab-pane",
    isActive: false
  },
  {
    id: "feature-5-tab",
    icon: "bi bi-code-slash",
    label: "AI Code",
    target: "feature-5-tab-pane",
    isActive: false
  },
  {
    id: "feature-6-tab",
    icon: "bi bi-play-circle-fill",
    label: "AI Video",
    target: "feature-6-tab-pane",
    isActive: false
  }
];

const Feature = () => {
  const [activeTab, setActiveTab] = useState('AI Smart Works');
  
    const handleTabSelect = (tabId) => {
      setActiveTab(tabId);
    };
  return (
    <>
       <section className="feature-section-2 section-space-top section-space-bottom home-7-section-top-border">
    <Tabs className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center">
            <span className="rounded-1 bg-primary-key bg-opacity-2 clr-white fs-12 fw-bold px-4 py-2 d-inline-block mb-4 fadeIn_bottom">WriteBot AI</span>
            <h3 className="clr-neutral-90 fw-bold animate-line-3d">WriteBot AI Feature list</h3>
          </div>
          <TabList className="nav nav-tabs feature-2-tabs justify-content-center py-4 px-6 mt-12 fadeIn_bottom" role="tablist">
            {
              tablist.map((tab,i)=><Tab key={i} className="nav-item" role="presentation">
              <button onClick={()=>handleTabSelect(tab.label)} className={`nav-link ${activeTab==tab.label? "active":""}`}  id="feature-1-tab" data-bs-toggle="tab" data-bs-target="#feature-1-tab-pane" type="button" role="tab" aria-controls="feature-1-tab-pane" aria-selected="true">
                <i className={`${tab.icon}`}></i>
                <span className="nav-link-text">{activeTab}</span>
              </button>
            </Tab>)
            }
            
          </TabList>
        </div>
      </div>
      <div className="mt-24">
        <div className="tab-content feature-2-tab-content">
          <TabPanel className="tab-pane fade show active" id="feature-1-tab-pane" role="tabpanel" aria-labelledby="feature-1-tab" tabIndex="0">
            <div className="row gy-4 justify-content-center">
              <div className="col-xl-3 col-md-6">
                <div className="feature-2-card fadein_bottom_36">
                  <figure className="feature-2-card-thumb mb-0">
                    <img src="/img/feature-2-1.webp" alt="image" className="img-fluid"/>
                    <i className="bi bi-stars"></i>
                  </figure>
                  <div className="feature-2-card-content text-center">
                    <h4 className="fs-16 fw-extrabold clr-neutral-90 title">Ai Power Designer</h4>
                    <p className="fs-14 mb-0 clr-neutral-80">AI-powered robots can perform rule based tasks in business</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="feature-2-card fadein_bottom_36">
                  <figure className="feature-2-card-thumb mb-0">
                    <img src="/img/feature-2-2.webp" alt="image" className="img-fluid"/>
                    <i className="bi bi-stars"></i>
                  </figure>
                  <div className="feature-2-card-content text-center">
                    <h4 className="fs-16 fw-extrabold clr-neutral-90 title">Growth Your Business</h4>
                    <p className="fs-14 mb-0 clr-neutral-80">AI-powered robots can perform rule based tasks in business</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="feature-2-card fadein_bottom_36">
                  <figure className="feature-2-card-thumb mb-0">
                    <img src="/img/feature-2-3.webp" alt="image" className="img-fluid"/>
                    <i className="bi bi-stars"></i>
                  </figure>
                  <div className="feature-2-card-content text-center">
                    <h4 className="fs-16 fw-extrabold clr-neutral-90 title">Use Ai GitHub Copilot</h4>
                    <p className="fs-14 mb-0 clr-neutral-80">AI-powered robots can perform rule based tasks in business</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="feature-2-card fadein_bottom_36">
                  <figure className="feature-2-card-thumb mb-0">
                    <img src="/img/feature-2-4.webp" alt="image" className="img-fluid"/>
                    <i className="bi bi-stars"></i>
                  </figure>
                  <div className="feature-2-card-content text-center">
                    <h4 className="fs-16 fw-extrabold clr-neutral-90 title">Easy to Use Open ai</h4>
                    <p className="fs-14 mb-0 clr-neutral-80">AI-powered robots can perform rule based tasks in business</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-2-card style-big fadein_bottom_37">
                  <figure className="feature-2-card-thumb mb-0">
                    <img src="/img/feature-2-5.webp" alt="image" className="img-fluid"/>
                    <i className="bi bi-stars"></i>
                  </figure>
                  <div className="feature-2-card-content text-center">
                    <h4 className="fs-16 fw-extrabold clr-neutral-90 title">Iterates on designs to unlock new possibilities</h4>
                    <p className="fs-14 mb-0 clr-neutral-80">AI can analyze user behavior to provide personalized recommendations, such as those streaming</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-2-card style-big fadein_bottom_37">
                  <figure className="feature-2-card-thumb mb-0">
                    <img src="/img/feature-2-6.webp" alt="image" className="img-fluid"/>
                    <i className="bi bi-stars"></i>
                  </figure>
                  <div className="feature-2-card-content text-center">
                    <h4 className="fs-16 fw-extrabold clr-neutral-90 title">Iterates on designs to unlock new possibilities</h4>
                    <p className="fs-14 mb-0 clr-neutral-80">AI can analyze user behavior to provide personalized recommendations, such as those streaming</p>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="tab-pane fade show active" id="feature-2-tab-pane" role="tabpanel" aria-labelledby="feature-2-tab" tabIndex="0">
            <div className="row gy-4 justify-content-center">
            <div className="col-xl-3 col-md-6">
                <div className="feature-2-card">
                  <figure className="feature-2-card-thumb mb-0">
                    <img src="/img/feature-2-2.webp" alt="image" className="img-fluid"/>
                    <i className="bi bi-stars"></i>
                  </figure>
                  <div className="feature-2-card-content text-center">
                    <h4 className="fs-16 fw-extrabold clr-neutral-90 title">Growth Your Business</h4>
                    <p className="fs-14 mb-0 clr-neutral-80">AI-powered robots can perform rule based tasks in business</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="feature-2-card">
                  <figure className="feature-2-card-thumb mb-0">
                    <img src="/img/feature-2-1.webp" alt="image" className="img-fluid"/>
                    <i className="bi bi-stars"></i>
                  </figure>
                  <div className="feature-2-card-content text-center">
                    <h4 className="fs-16 fw-extrabold clr-neutral-90 title">Ai Power Designer</h4>
                    <p className="fs-14 mb-0 clr-neutral-80">AI-powered robots can perform rule based tasks in business</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="feature-2-card">
                  <figure className="feature-2-card-thumb mb-0">
                    <img src="/img/feature-2-4.webp" alt="image" className="img-fluid"/>
                    <i className="bi bi-stars"></i>
                  </figure>
                  <div className="feature-2-card-content text-center">
                    <h4 className="fs-16 fw-extrabold clr-neutral-90 title">Easy to Use Open ai</h4>
                    <p className="fs-14 mb-0 clr-neutral-80">AI-powered robots can perform rule based tasks in business</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="feature-2-card">
                  <figure className="feature-2-card-thumb mb-0">
                    <img src="/img/feature-2-3.webp" alt="image" className="img-fluid"/>
                    <i className="bi bi-stars"></i>
                  </figure>
                  <div className="feature-2-card-content text-center">
                    <h4 className="fs-16 fw-extrabold clr-neutral-90 title">Use Ai GitHub Copilot</h4>
                    <p className="fs-14 mb-0 clr-neutral-80">AI-powered robots can perform rule based tasks in business</p>
                  </div>
                </div>
              </div>
             
            </div>
          </TabPanel>
          <TabPanel className="tab-pane fade show active" id="feature-3-tab-pane" role="tabpanel" aria-labelledby="feature-3-tab" tabIndex="0">
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-6">
                <div className="feature-2-card style-big">
                  <figure className="feature-2-card-thumb mb-0">
                    <img src="/img/feature-2-5.webp" alt="image" className="img-fluid"/>
                    <i className="bi bi-stars"></i>
                  </figure>
                  <div className="feature-2-card-content text-center">
                    <h4 className="fs-16 fw-extrabold clr-neutral-90 title">Iterates on designs to unlock new possibilities</h4>
                    <p className="fs-14 mb-0 clr-neutral-80">AI can analyze user behavior to provide personalized recommendations, such as those streaming</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-2-card style-big">
                  <figure className="feature-2-card-thumb mb-0">
                    <img src="/img/feature-2-6.webp" alt="image" className="img-fluid"/>
                    <i className="bi bi-stars"></i>
                  </figure>
                  <div className="feature-2-card-content text-center">
                    <h4 className="fs-16 fw-extrabold clr-neutral-90 title">Iterates on designs to unlock new possibilities</h4>
                    <p className="fs-14 mb-0 clr-neutral-80">AI can analyze user behavior to provide personalized recommendations, such as those streaming</p>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="tab-pane fade show active" id="feature-4-tab-pane" role="tabpanel" aria-labelledby="feature-4-tab" tabIndex="0">
            <div className="row gy-4 justify-content-center">
              <div className="col-xl-4 col-md-6">
                <div className="feature-2-card">
                  <figure className="feature-2-card-thumb mb-0">
                    <img src="/img/feature-2-1.webp" alt="image" className="img-fluid"/>
                    <i className="bi bi-stars"></i>
                  </figure>
                  <div className="feature-2-card-content text-center">
                    <h4 className="fs-16 fw-extrabold clr-neutral-90 title">Ai Power Designer</h4>
                    <p className="fs-14 mb-0 clr-neutral-80">AI-powered robots can perform rule based tasks in business</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="feature-2-card">
                  <figure className="feature-2-card-thumb mb-0">
                    <img src="/img/feature-2-2.webp" alt="image" className="img-fluid"/>
                    <i className="bi bi-stars"></i>
                  </figure>
                  <div className="feature-2-card-content text-center">
                    <h4 className="fs-16 fw-extrabold clr-neutral-90 title">Growth Your Business</h4>
                    <p className="fs-14 mb-0 clr-neutral-80">AI-powered robots can perform rule based tasks in business</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="feature-2-card">
                  <figure className="feature-2-card-thumb mb-0">
                    <img src="/img/feature-2-3.webp" alt="image" className="img-fluid"/>
                    <i className="bi bi-stars"></i>
                  </figure>
                  <div className="feature-2-card-content text-center">
                    <h4 className="fs-16 fw-extrabold clr-neutral-90 title">Use Ai GitHub Copilot</h4>
                    <p className="fs-14 mb-0 clr-neutral-80">AI-powered robots can perform rule based tasks in business</p>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="tab-pane fade show active" id="feature-5-tab-pane" role="tabpanel" aria-labelledby="feature-5-tab" tabIndex="0">
            <div className="row gy-4 justify-content-center">
              <div className="col-xl-3 col-md-6">
                <div className="feature-2-card">
                  <figure className="feature-2-card-thumb mb-0">
                    <img src="/img/feature-2-1.webp" alt="image" className="img-fluid"/>
                    <i className="bi bi-stars"></i>
                  </figure>
                  <div className="feature-2-card-content text-center">
                    <h4 className="fs-16 fw-extrabold clr-neutral-90 title">Ai Power Designer</h4>
                    <p className="fs-14 mb-0 clr-neutral-80">AI-powered robots can perform rule based tasks in business</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="feature-2-card">
                  <figure className="feature-2-card-thumb mb-0">
                    <img src="/img/feature-2-2.webp" alt="image" className="img-fluid"/>
                    <i className="bi bi-stars"></i>
                  </figure>
                  <div className="feature-2-card-content text-center">
                    <h4 className="fs-16 fw-extrabold clr-neutral-90 title">Growth Your Business</h4>
                    <p className="fs-14 mb-0 clr-neutral-80">AI-powered robots can perform rule based tasks in business</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="feature-2-card">
                  <figure className="feature-2-card-thumb mb-0">
                    <img src="/img/feature-2-3.webp" alt="image" className="img-fluid"/>
                    <i className="bi bi-stars"></i>
                  </figure>
                  <div className="feature-2-card-content text-center">
                    <h4 className="fs-16 fw-extrabold clr-neutral-90 title">Use Ai GitHub Copilot</h4>
                    <p className="fs-14 mb-0 clr-neutral-80">AI-powered robots can perform rule based tasks in business</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="feature-2-card">
                  <figure className="feature-2-card-thumb mb-0">
                    <img src="/img/feature-2-4.webp" alt="image" className="img-fluid"/>
                    <i className="bi bi-stars"></i>
                  </figure>
                  <div className="feature-2-card-content text-center">
                    <h4 className="fs-16 fw-extrabold clr-neutral-90 title">Easy to Use Open ai</h4>
                    <p className="fs-14 mb-0 clr-neutral-80">AI-powered robots can perform rule based tasks in business</p>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="tab-pane fade show active" id="feature-6-tab-pane" role="tabpanel" aria-labelledby="feature-6-tab" tabIndex="0">
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-6">
                <div className="feature-2-card style-big">
                  <figure className="feature-2-card-thumb mb-0">
                    <img src="/img/feature-2-5.webp" alt="image" className="img-fluid"/>
                    <i className="bi bi-stars"></i>
                  </figure>
                  <div className="feature-2-card-content text-center">
                    <h4 className="fs-16 fw-extrabold clr-neutral-90 title">Iterates on designs to unlock new possibilities</h4>
                    <p className="fs-14 mb-0 clr-neutral-80">AI can analyze user behavior to provide personalized recommendations, such as those streaming</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-2-card style-big">
                  <figure className="feature-2-card-thumb mb-0">
                    <img src="/img/feature-2-6.webp" alt="image" className="img-fluid"/>
                    <i className="bi bi-stars"></i>
                  </figure>
                  <div className="feature-2-card-content text-center">
                    <h4 className="fs-16 fw-extrabold clr-neutral-90 title">Iterates on designs to unlock new possibilities</h4>
                    <p className="fs-14 mb-0 clr-neutral-80">AI can analyze user behavior to provide personalized recommendations, such as those streaming</p>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </div>
      </div>
    </Tabs>
    <img src="/img/feature-2-top.png" alt="image" className="img-fluid feature-2-top-shape"/>
    <img src="/img/feature-2-shape-1.png" alt="image" className="img-fluid feature-2-shape feature-2-shape-1"/>
    <img src="/img/feature-2-shape-2.png" alt="image" className="img-fluid feature-2-shape feature-2-shape-2"/>
    <img src="/img/feature-2-shape-3.png" alt="image" className="img-fluid feature-2-shape feature-2-shape-3"/>
    <img src="/img/feature-2-shape-4.png" alt="image" className="img-fluid feature-2-shape feature-2-shape-4"/>
  </section>
    </>
  )
};

export default Feature
