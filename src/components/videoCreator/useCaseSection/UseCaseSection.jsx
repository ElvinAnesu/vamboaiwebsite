import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const UseCaseSection = () => {
    const [activeTab, setActiveTab] = useState(0); // State to manage active tab index

    const handleTabSelect = (index) => {
      setActiveTab(index); // Update active tab index when a tab is clicked
    };
  return (
    <div className="section-space-sm-y">
      <div className="section-space-sm-bottom">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-6 col-xxl-5">
              <div className="d-flex justify-content-center align-items-center gap-3 mb-1 fadeIn_bottom">
                <span className="d-inline-block flex-shrink-0">
                  <img src="/img/icon-subtitle.png" alt="image" className="img-fluid" />
                </span>
                <span className="d-inline-block clr-secondary-key ff-1 fw-bold fs-18"> Use Case </span>
              </div>
              <h3 className="mb-0 text-center clr-neutral-90 fw-extrabold animate-line-3d">
                Personalize <span className="d-inline-block clr-grad-4 ff-4 fw-normal text-underline">Videos For</span> Who You Are
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
       <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
       <div className="row">
          <div className="col-12">
          <TabList className="nav nav-underline nav-bordered use-case-tab">
                <Tab className="nav-item animate-text-from-right">
                  <button className={`nav-link ${activeTab === 0 ? 'active' : ''}`} type="button">
                    AI Sales Enablement
                  </button>
                </Tab>
                <Tab className="nav-item animate-text-from-right">
                  <button className={`nav-link ${activeTab === 1 ? 'active' : ''}`} type="button">
                    Learning
                  </button>
                </Tab>
                <Tab className="nav-item animate-text-from-right">
                  <button className={`nav-link ${activeTab === 2 ? 'active' : ''}`} type="button">
                    Customer Service
                  </button>
                </Tab>
                <Tab className="nav-item animate-text-from-right">
                  <button className={`nav-link ${activeTab === 3 ? 'active' : ''}`} type="button">
                    Information Security
                  </button>
                </Tab>
                <Tab className="nav-item animate-text-from-right">
                  <button className={`nav-link ${activeTab === 4 ? 'active' : ''}`} type="button">
                    Marketing Team
                  </button>
                </Tab>
              </TabList>
            <div className="tab-content">
            <TabPanel className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`} id="aiSalesEnable" role="tabpanel" aria-labelledby="aiSalesEnable" tabIndex="0">
                <div className="pt-12">
                  <div className="row g-4 align-items-center justify-content-between">
                    <div className="col-lg-6 col-xxl-5">
                      <h5 className="fw-extrabold clr-neutral-90 animate-line-3d">
                        Transform mundane text, PowerPoints & PDFs into compelling videos that will captivate your team
                      </h5>
                      <p className="mb-7 fw-medium clr-neutral-80 animate-text-from-right">
                        Usually, our colleagues don't jump in the air when they hear e-learning but the AI videos created with Writebot have sparked motivation that we haven't seen before.
                      </p>
                      <div className="d-flex align-items-center gap-4 mb-12 fadeIn_bottom">
                        <div className="w-11 h-11 rounded-circle overflow-hidden flex-shrink-0">
                          <img src="/img/avatar-1.png" alt="image" className="w-100 h-100 object-fit-cover" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="fs-16 clr-neutral-92 mb-1"> Peter Parker </h6>
                          <p className="mb-0 clr-neutral-80 fs-12"> Learning Specialist </p>
                        </div>
                      </div>
                      <Link to="/featured" className="link d-inline-block py-3 px-6 ff-1 bg-grad-4 clr-white fw-bold rounded fadeIn_bottom">
                        Explore More
                      </Link>
                    </div>
                    <div className="col-lg-6">
                      <div className="text-center fadeIn_bottom">
                        <img src="/img/use-case-img-1.png" alt="image" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel  className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`} id="learningDevelopment" role="tabpanel" aria-labelledby="learningDevelopment" tabIndex="0">
                <div className="pt-12">
                  <div className="row g-4 align-items-center justify-content-between">
                    <div className="col-lg-6 col-xxl-5">
                      <h5 className="fw-extrabold clr-neutral-90">
                        Transform mundane text, PowerPoints & PDFs into compelling videos that will captivate your team
                      </h5>
                      <p className="mb-7 fw-medium clr-neutral-80">
                        Usually, our colleagues don't jump in the air when they hear e-learning but the AI videos created with Writebot have sparked motivation that we haven't seen before.
                      </p>
                      <div className="d-flex align-items-center gap-4 mb-12">
                        <div className="w-11 h-11 rounded-circle overflow-hidden flex-shrink-0">
                          <img src="/img/avatar-1.png" alt="image" className="w-100 h-100 object-fit-cover" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="fs-16 clr-neutral-92 mb-1"> Peter Parker </h6>
                          <p className="mb-0 clr-neutral-80 fs-12"> Learning Specialist </p>
                        </div>
                      </div>
                      <Link to="/featured" className="link d-inline-block py-3 px-6 ff-1 bg-grad-4 clr-white fw-bold rounded">
                        Explore More
                      </Link>
                    </div>
                    <div className="col-lg-6">
                      <div className="text-center">
                        <img src="/img/use-case-img-2.png" alt="image" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`} id="customerService" role="tabpanel" aria-labelledby="customerService" tabIndex="0">
                <div className="pt-12">
                  <div className="row g-4 align-items-center justify-content-between">
                    <div className="col-lg-6 col-xxl-5">
                      <h5 className="fw-extrabold clr-neutral-90">
                        Transform mundane text, PowerPoints & PDFs into compelling videos that will captivate your team
                      </h5>
                      <p className="mb-7 fw-medium clr-neutral-80">
                        Usually, our colleagues don't jump in the air when they hear e-learning but the AI videos created with Writebot have sparked motivation that we haven't seen before.
                      </p>
                      <div className="d-flex align-items-center gap-4 mb-12">
                        <div className="w-11 h-11 rounded-circle overflow-hidden flex-shrink-0">
                          <img src="/img/avatar-1.png" alt="image" className="w-100 h-100 object-fit-cover" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="fs-16 clr-neutral-92 mb-1"> Peter Parker </h6>
                          <p className="mb-0 clr-neutral-80 fs-12"> Learning Specialist </p>
                        </div>
                      </div>
                      <Link to="/featured" className="link d-inline-block py-3 px-6 ff-1 bg-grad-4 clr-white fw-bold rounded">
                        Explore More
                      </Link>
                    </div>
                    <div className="col-lg-6">
                      <div className="text-center">
                        <img src="/img/use-case-img-3.png" alt="image" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel className={`tab-pane fade ${activeTab === 3 ? 'show active' : ''}`} id="informationSecurity" role="tabpanel" aria-labelledby="informationSecurity" tabIndex="0">
                <div className="pt-12">
                  <div className="row g-4 align-items-center justify-content-between">
                    <div className="col-lg-6 col-xxl-5">
                      <h5 className="fw-extrabold clr-neutral-90">
                        Transform mundane text, PowerPoints & PDFs into compelling videos that will captivate your team
                      </h5>
                      <p className="mb-7 fw-medium clr-neutral-80">
                        Usually, our colleagues don't jump in the air when they hear e-learning but the AI videos created with Writebot have sparked motivation that we haven't seen before.
                      </p>
                      <div className="d-flex align-items-center gap-4 mb-12">
                        <div className="w-11 h-11 rounded-circle overflow-hidden flex-shrink-0">
                          <img src="/img/avatar-1.png" alt="image" className="w-100 h-100 object-fit-cover" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="fs-16 clr-neutral-92 mb-1"> Peter Parker </h6>
                          <p className="mb-0 clr-neutral-80 fs-12"> Learning Specialist </p>
                        </div>
                      </div>
                      <Link to="/featured" className="link d-inline-block py-3 px-6 ff-1 bg-grad-4 clr-white fw-bold rounded">
                        Explore More
                      </Link>
                    </div>
                    <div className="col-lg-6">
                      <div className="text-center">
                        <img src="/img/use-case-img-4.png" alt="image" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel className={`tab-pane fade ${activeTab === 4 ? 'show active' : ''}`} id="marketingTeam" role="tabpanel" aria-labelledby="marketingTeam" tabIndex="0">
                <div className="pt-12">
                  <div className="row g-4 align-items-center justify-content-between">
                    <div className="col-lg-6 col-xxl-5">
                      <h5 className="fw-extrabold clr-neutral-90">
                        Transform mundane text, PowerPoints & PDFs into compelling videos that will captivate your team
                      </h5>
                      <p className="mb-7 fw-medium clr-neutral-80">
                        Usually, our colleagues don't jump in the air when they hear e-learning but the AI videos created with Writebot have sparked motivation that we haven't seen before.
                      </p>
                      <div className="d-flex align-items-center gap-4 mb-12">
                        <div className="w-11 h-11 rounded-circle overflow-hidden flex-shrink-0">
                          <img src="/img/avatar-1.png" alt="image" className="w-100 h-100 object-fit-cover" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="fs-16 clr-neutral-92 mb-1"> Peter Parker </h6>
                          <p className="mb-0 clr-neutral-80 fs-12"> Learning Specialist </p>
                        </div>
                      </div>
                      <Link to="/featured" className="link d-inline-block py-3 px-6 ff-1 bg-grad-4 clr-white fw-bold rounded">
                        Explore More
                      </Link>
                    </div>
                    <div className="col-lg-6">
                      <div className="text-center">
                        <img src="/img/use-case-img-5.png" alt="image" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </div>
          </div>
        </div>
       </Tabs>
      </div>
    </div>
  );
};

export default UseCaseSection;
