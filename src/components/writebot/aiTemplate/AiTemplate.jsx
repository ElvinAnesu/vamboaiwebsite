import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const aiTemplateTab=[
  {
    id: "ai-template-1-tab",
    icon: "bi bi-bookmarks-fill",
    label: "All",
    target: "#ai-template-1-tab-pane",
    ariaControls: "ai-template-1-tab-pane",
    ariaSelected: true,
    title: "AI Coding",
    description: "AI helps you write code faster, efficiently and error-free."
  },
  {
    id: "ai-template-2-tab",
    icon: "bi bi-newspaper",
    label: "Blog",
    target: "#ai-template-2-tab-pane",
    ariaControls: "ai-template-2-tab-pane",
    ariaSelected: false,
    title: "AI Blogging",
    description: "Discover AI-driven insights for your blogging success."
  },
  {
    id: "ai-template-3-tab",
    icon: "bi bi-cart2",
    label: "Ecommerce",
    target: "#ai-template-3-tab-pane",
    ariaControls: "ai-template-3-tab-pane",
    ariaSelected: false,
    title: "AI Ecommerce",
    description: "Enhance your ecommerce strategy with AI-powered solutions."
  },
  {
    id: "ai-template-4-tab",
    icon: "bi bi-code-square",
    label: "Development",
    target: "#ai-template-4-tab-pane",
    ariaControls: "ai-template-4-tab-pane",
    ariaSelected: false,
    title: "AI Development",
    description: "Explore AI solutions for software development and coding."
  },
  {
    id: "ai-template-5-tab",
    icon: "bi bi-gear",
    label: "Advertisement",
    target: "#ai-template-5-tab-pane",
    ariaControls: "ai-template-5-tab-pane",
    ariaSelected: false,
    title: "AI Advertisement",
    description: "Optimize your ads with AI-driven insights and automation."
  },
  {
    id: "ai-template-6-tab",
    icon: "bi bi-chat-dots",
    label: "Social media",
    target: "#ai-template-6-tab-pane",
    ariaControls: "ai-template-6-tab-pane",
    ariaSelected: false,
    title: "AI Social Media",
    description: "Harness AI for effective social media marketing strategies."
  },
  {
    id: "ai-template-7-tab",
    icon: "bi bi-tiktok",
    label: "TikTok",
    target: "#ai-template-7-tab-pane",
    ariaControls: "ai-template-7-tab-pane",
    ariaSelected: false,
    title: "AI TikTok",
    description: "Create engaging content on TikTok with AI-powered tools."
  },
  {
    id: "ai-template-8-tab",
    icon: "bi bi-mailbox2",
    label: "Email",
    target: "#ai-template-8-tab-pane",
    ariaControls: "ai-template-8-tab-pane",
    ariaSelected: false,
    title: "AI Email Marketing",
    description: "Enhance email marketing campaigns using AI algorithms."
  },
  {
    id: "ai-template-9-tab",
    icon: "bi bi-megaphone",
    label: "Marketing",
    target: "#ai-template-9-tab-pane",
    ariaControls: "ai-template-9-tab-pane",
    ariaSelected: false,
    title: "AI Marketing Strategies",
    description: "Deploy AI for innovative and effective marketing strategies."
  },
  {
    id: "ai-template-10-tab",
    icon: "bi bi-soundwave",
    label: "Voiceover",
    target: "#ai-template-10-tab-pane",
    ariaControls: "ai-template-10-tab-pane",
    ariaSelected: false,
    title: "AI Voiceover",
    description: "Generate natural-sounding voiceovers using AI technology."
  },
  {
    id: "ai-template-11-tab",
    icon: "bi bi-display",
    label: "Website contents",
    target: "#ai-template-11-tab-pane",
    ariaControls: "ai-template-11-tab-pane",
    ariaSelected: false,
    title: "AI Website Content",
    description: "Automate content creation and optimization for websites."
  },
  {
    id: "ai-template-12-tab",
    icon: "bi bi-nintendo-switch",
    label: "Fun or quote",
    target: "#ai-template-12-tab-pane",
    ariaControls: "ai-template-12-tab-pane",
    ariaSelected: false,
    title: "AI Fun and Quotes",
    description: "Get creative with AI-generated fun facts and quotes."
  },
  {
    id: "ai-template-13-tab",
    icon: "bi bi-journal-code",
    label: "Medium",
    target: "#ai-template-13-tab-pane",
    ariaControls: "ai-template-13-tab-pane",
    ariaSelected: false,
    title: "AI Medium Articles",
    description: "Write compelling articles on Medium with AI assistance."
  },
  {
    id: "ai-template-14-tab",
    icon: "bi bi-instagram",
    label: "Instagram",
    target: "#ai-template-14-tab-pane",
    ariaControls: "ai-template-14-tab-pane",
    ariaSelected: false,
    title: "AI Instagram",
    description: "Optimize your Instagram presence with AI tools and analytics."
  },
  {
    id: "ai-template-15-tab",
    icon: "bi bi-emoji-smile",
    label: "Success Story",
    target: "#ai-template-15-tab-pane",
    ariaControls: "ai-template-15-tab-pane",
    ariaSelected: false,
    title: "AI Success Stories",
    description: "Discover inspiring success stories powered by AI innovations."
  },
  {
    id: "ai-template-16-tab",
    icon: "bi bi-cursor",
    label: "SEO Tools",
    target: "#ai-template-16-tab-pane",
    ariaControls: "ai-template-16-tab-pane",
    ariaSelected: false,
    title: "AI SEO Tools",
    description: "Improve SEO performance with AI-driven tools and analytics."
  }
]

const aiTemplatesData=[
  {
    title: "AI Helps Boost Productivity",
    des: "Discover how AI accelerates coding tasks, improving efficiency and reducing errors."
  },
  {
    title: "AI for Seamless Development",
    des: "Explore how AI streamlines coding workflows, making development faster and error-free."
  },
  {
    title: "AI Innovations in Coding",
    des: "Learn about the latest AI advancements that revolutionize coding practices for efficiency."
  },
  {
    title: "AI and Error-Free Coding",
    des: "Harness AI capabilities to write code swiftly and accurately, enhancing productivity."
  },
  {
    title: "AI-driven Coding Solutions",
    des: "Utilize AI to enhance coding processes, ensuring faster development with fewer errors."
  },
  {
    title: "Efficient Coding ",
    des: "Optimize coding tasks using AI tools for enhanced efficiency and improved outcomes."
  },
  {
    title: "AI-Powered Coding ",
    des: "Implement AI strategies to expedite coding tasks and achieve error-free results."
  },
  {
    title: "AI for Smarter ",
    des: "Discover how AI technologies facilitate smarter, more efficient coding practices."
  },
  {
    title: "AI for Enhanced ",
    des: "Explore AI solutions that accelerate coding speed while maintaining high accuracy."
  },
  {
    title: "AI: Transforming ",
    des: "See how AI transforms coding practices, making development faster and more reliable."
  },
  {
    title: "AI and Efficient ",
    des: "Learn how AI enhances code production efficiency, minimizing errors and delays."
  },
  {
    title: "AI: Revolutionizing ",
    des: "Explore how AI revolutionizes code writing processes for faster, error-free results."
  }
];

const AiTemplate = () => {
  const [activeTab, setActiveTab] = useState('ai-template-1-tab');
  
  const handleTabSelect = (tabId) => {
    setActiveTab(tabId);
    setSeeMore(false)
  };

  const [seeMore,setSeeMore]=useState(false)

  return (
    <>
       <section className="ai-template-section section-space-top">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center">
            <span className="rounded-1 bg-primary-key bg-opacity-2 clr-white fs-12 fw-bold px-4 py-2 d-inline-block mb-4 fadeIn_bottom">Templated</span>
            <h3 className="clr-neutral-90 fw-bold animate-line-3d">AI Templates</h3>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="row">
          <Tabs className="col-lg-12">
            <TabList className="nav nav-tabs ai-temaplate-tabs justify-content-center gap-3 gap-xl-4 rounded-1 border-0" id="myTab" role="tablist">
           {
            aiTemplateTab?.map((tab)=>  <Tab key={tab.id} className="nav-item"  role="presentation">
            <button onClick={()=>handleTabSelect(tab.id)} className={`nav-link clr-neutral-90 ${activeTab===tab.id ? "active" :""}`}>
              <i className={ `${tab.icon}`}></i> {tab.label}
            </button>
          </Tab> )
           }
              
            </TabList>
            <div className="tab-content mt-6" id="myTabContent">
              <TabPanel className="tab-pane fade show active" id="ai-template-1-tab-pane" role="tabpanel" aria-labelledby="ai-template-1-tab" tabIndex="0">
                <div id="ai-template-card-wrapper">
                  <div className="row gy-4">
                    {
                      seeMore ? <>{
                        aiTemplatesData?.map((tab,i)=><div key={i} className="col-sm-6 col-lg-4 col-xxl-3 ai-template-card-item">
                        <div className="ai-template-card text-center text-xl-start">
                          <div className="ai-template-card-icon">
                            <i className="bi bi-stars"></i>
                          </div>
                          <h4 className="clr-neutral-90 fs-18 mt-6">{tab.title}</h4>
                          <p className="clr-neutral-80 mb-0 fs-14">{tab.des}</p>
                        </div>
                      </div>)
                      }</> : <>{
                        aiTemplatesData?.slice(0,8).map((tab,i)=><div key={i} className="col-sm-6 col-lg-4 col-xxl-3 ai-template-card-item">
                        <div className="ai-template-card text-center text-xl-start">
                          <div className="ai-template-card-icon">
                            <i className="bi bi-stars"></i>
                          </div>
                          <h4 className="clr-neutral-90 fs-18 mt-6">{tab.title}</h4>
                          <p className="clr-neutral-80 mb-0 fs-14">{tab.des}</p>
                        </div>
                      </div>)
                      }</>
                    }
                    
                  </div>
                  <button onClick={()=>setSeeMore(true)} type="button"  className=" mt-10 py-3 px-6 border border-primary-key :border-primary-30 bg-primary-key :bg-primary-30 rounded-1 fw-bold clr-white mx-auto align-items-center gap-2 :arrow-btn"> See More <i className="bi bi-arrow-right"></i>
                  </button>
                  <div className="ai-template-card-wrapper-overlay"></div>
                </div>
              </TabPanel>
              <TabPanel className="tab-pane fade show active" id="ai-template-2-tab-pane" role="tabpanel" aria-labelledby="ai-template-2-tab" tabIndex="0">
              <div className="row gy-4">
                    {
                      aiTemplatesData?.slice(1,9).map((tab,i)=><div key={i} className="col-sm-6 col-lg-4 col-xxl-3 ai-template-card-item">
                      <div className="ai-template-card text-center text-xl-start">
                        <div className="ai-template-card-icon">
                          <i className="bi bi-stars"></i>
                        </div>
                        <h4 className="clr-neutral-90 fs-18 mt-6">{tab.title}</h4>
                        <p className="clr-neutral-80 mb-0 fs-14">{tab.des}</p>
                      </div>
                    </div>)
                    }
                    
                  </div>
              </TabPanel>
              <TabPanel className="tab-pane fade show active" id="ai-template-3-tab-pane" role="tabpanel" aria-labelledby="ai-template-3-tab" tabIndex="0">
              <div className="row gy-4">
                    {
                      aiTemplatesData?.slice(2,10).map((tab,i)=><div key={i} className="col-sm-6 col-lg-4 col-xxl-3 ai-template-card-item">
                      <div className="ai-template-card text-center text-xl-start">
                        <div className="ai-template-card-icon">
                          <i className="bi bi-stars"></i>
                        </div>
                        <h4 className="clr-neutral-90 fs-18 mt-6">{tab.title}</h4>
                        <p className="clr-neutral-80 mb-0 fs-14">{tab.des}</p>
                      </div>
                    </div>)
                    }
                    
                  </div>
              </TabPanel>
              <TabPanel className="tab-pane fade show active" id="ai-template-4-tab-pane" role="tabpanel" aria-labelledby="ai-template-4-tab" tabIndex="0">
              <div className="row gy-4">
                    {
                      aiTemplatesData?.slice(3,11).map((tab,i)=><div key={i} className="col-sm-6 col-lg-4 col-xxl-3 ai-template-card-item">
                      <div className="ai-template-card text-center text-xl-start">
                        <div className="ai-template-card-icon">
                          <i className="bi bi-stars"></i>
                        </div>
                        <h4 className="clr-neutral-90 fs-18 mt-6">{tab.title}</h4>
                        <p className="clr-neutral-80 mb-0 fs-14">{tab.des}</p>
                      </div>
                    </div>)
                    }
                    
                  </div>
              </TabPanel>
              <TabPanel className="tab-pane fade show active" id="ai-template-5-tab-pane" role="tabpanel" aria-labelledby="ai-template-5-tab" tabIndex="0">
              <div className="row gy-4">
                    {
                      aiTemplatesData?.slice(4,12).map((tab,i)=><div key={i} className="col-sm-6 col-lg-4 col-xxl-3 ai-template-card-item">
                      <div className="ai-template-card text-center text-xl-start">
                        <div className="ai-template-card-icon">
                          <i className="bi bi-stars"></i>
                        </div>
                        <h4 className="clr-neutral-90 fs-18 mt-6">{tab.title}</h4>
                        <p className="clr-neutral-80 mb-0 fs-14">{tab.des}</p>
                      </div>
                    </div>)
                    }
                    
                  </div>
              </TabPanel>
              <TabPanel className="tab-pane fade show active" id="ai-template-6-tab-pane" role="tabpanel" aria-labelledby="ai-template-6-tab" tabIndex="0">
              <div className="row gy-4">
                    {
                      aiTemplatesData?.slice(0,8).map((tab,i)=><div key={i} className="col-sm-6 col-lg-4 col-xxl-3 ai-template-card-item">
                      <div className="ai-template-card text-center text-xl-start">
                        <div className="ai-template-card-icon">
                          <i className="bi bi-stars"></i>
                        </div>
                        <h4 className="clr-neutral-90 fs-18 mt-6">{tab.title}</h4>
                        <p className="clr-neutral-80 mb-0 fs-14">{tab.des}</p>
                      </div>
                    </div>)
                    }
                    
                  </div>
              </TabPanel>
              <TabPanel className="tab-pane fade show active" id="ai-template-7-tab-pane" role="tabpanel" aria-labelledby="ai-template-7-tab" tabIndex="0">
              <div className="row gy-4">
                    {
                      aiTemplatesData?.slice(1,9).map((tab,i)=><div key={i} className="col-sm-6 col-lg-4 col-xxl-3 ai-template-card-item">
                      <div className="ai-template-card text-center text-xl-start">
                        <div className="ai-template-card-icon">
                          <i className="bi bi-stars"></i>
                        </div>
                        <h4 className="clr-neutral-90 fs-18 mt-6">{tab.title}</h4>
                        <p className="clr-neutral-80 mb-0 fs-14">{tab.des}</p>
                      </div>
                    </div>)
                    }
                    
                  </div>
              </TabPanel>
              <TabPanel className="tab-pane fade show active" id="ai-template-8-tab-pane" role="tabpanel" aria-labelledby="ai-template-8-tab" tabIndex="0">
              <div className="row gy-4">
                    {
                      aiTemplatesData?.slice(2,10).map((tab,i)=><div key={i} className="col-sm-6 col-lg-4 col-xxl-3 ai-template-card-item">
                      <div className="ai-template-card text-center text-xl-start">
                        <div className="ai-template-card-icon">
                          <i className="bi bi-stars"></i>
                        </div>
                        <h4 className="clr-neutral-90 fs-18 mt-6">{tab.title}</h4>
                        <p className="clr-neutral-80 mb-0 fs-14">{tab.des}</p>
                      </div>
                    </div>)
                    }
                    
                  </div>
              </TabPanel>
              <TabPanel className="tab-pane fade show active" id="ai-template-9-tab-pane" role="tabpanel" aria-labelledby="ai-template-9-tab" tabIndex="0">
              <div className="row gy-4">
                    {
                      aiTemplatesData?.slice(3,11).map((tab,i)=><div key={i} className="col-sm-6 col-lg-4 col-xxl-3 ai-template-card-item">
                      <div className="ai-template-card text-center text-xl-start">
                        <div className="ai-template-card-icon">
                          <i className="bi bi-stars"></i>
                        </div>
                        <h4 className="clr-neutral-90 fs-18 mt-6">{tab.title}</h4>
                        <p className="clr-neutral-80 mb-0 fs-14">{tab.des}</p>
                      </div>
                    </div>)
                    }
                    
                  </div>
              </TabPanel>
              <TabPanel className="tab-pane fade show active" id="ai-template-10-tab-pane" role="tabpanel" aria-labelledby="ai-template-10-tab" tabIndex="0">
              <div className="row gy-4">
                    {
                      aiTemplatesData?.slice(4,12).map((tab,i)=><div key={i} className="col-sm-6 col-lg-4 col-xxl-3 ai-template-card-item">
                      <div className="ai-template-card text-center text-xl-start">
                        <div className="ai-template-card-icon">
                          <i className="bi bi-stars"></i>
                        </div>
                        <h4 className="clr-neutral-90 fs-18 mt-6">{tab.title}</h4>
                        <p className="clr-neutral-80 mb-0 fs-14">{tab.des}</p>
                      </div>
                    </div>)
                    }
                    
                  </div>
              </TabPanel>
              <TabPanel className="tab-pane fade show active" id="ai-template-11-tab-pane" role="tabpanel" aria-labelledby="ai-template-11-tab" tabIndex="0">
              <div className="row gy-4">
                    {
                      aiTemplatesData?.slice(0,8).map((tab,i)=><div key={i} className="col-sm-6 col-lg-4 col-xxl-3 ai-template-card-item">
                      <div className="ai-template-card text-center text-xl-start">
                        <div className="ai-template-card-icon">
                          <i className="bi bi-stars"></i>
                        </div>
                        <h4 className="clr-neutral-90 fs-18 mt-6">{tab.title}</h4>
                        <p className="clr-neutral-80 mb-0 fs-14">{tab.des}</p>
                      </div>
                    </div>)
                    }
                    
                  </div>
              </TabPanel>
              <TabPanel className="tab-pane fade show active" id="ai-template-12-tab-pane" role="tabpanel" aria-labelledby="ai-template-12-tab" tabIndex="0">
              <div className="row gy-4">
                    {
                      aiTemplatesData?.slice(1,9).map((tab,i)=><div key={i} className="col-sm-6 col-lg-4 col-xxl-3 ai-template-card-item">
                      <div className="ai-template-card text-center text-xl-start">
                        <div className="ai-template-card-icon">
                          <i className="bi bi-stars"></i>
                        </div>
                        <h4 className="clr-neutral-90 fs-18 mt-6">{tab.title}</h4>
                        <p className="clr-neutral-80 mb-0 fs-14">{tab.des}</p>
                      </div>
                    </div>)
                    }
                    
                  </div>
              </TabPanel>
             
              <TabPanel className="tab-pane fade show active" id="ai-template-14-tab-pane" role="tabpanel" aria-labelledby="ai-template-14-tab" tabIndex="0">
              <div className="row gy-4">
                    {
                      aiTemplatesData?.slice(3,11).map((tab,i)=><div key={i} className="col-sm-6 col-lg-4 col-xxl-3 ai-template-card-item">
                      <div className="ai-template-card text-center text-xl-start">
                        <div className="ai-template-card-icon">
                          <i className="bi bi-stars"></i>
                        </div>
                        <h4 className="clr-neutral-90 fs-18 mt-6">{tab.title}</h4>
                        <p className="clr-neutral-80 mb-0 fs-14">{tab.des}</p>
                      </div>
                    </div>)
                    }
                    
                  </div>
              </TabPanel>
              <TabPanel className="tab-pane fade show active" id="ai-template-15-tab-pane" role="tabpanel" aria-labelledby="ai-template-15-tab" tabIndex="0">
              <div className="row gy-4">
                    {
                      aiTemplatesData?.slice(4,12).map((tab,i)=><div key={i} className="col-sm-6 col-lg-4 col-xxl-3 ai-template-card-item">
                      <div className="ai-template-card text-center text-xl-start">
                        <div className="ai-template-card-icon">
                          <i className="bi bi-stars"></i>
                        </div>
                        <h4 className="clr-neutral-90 fs-18 mt-6">{tab.title}</h4>
                        <p className="clr-neutral-80 mb-0 fs-14">{tab.des}</p>
                      </div>
                    </div>)
                    }
                    
                  </div>
              </TabPanel>
              <TabPanel className="tab-pane fade show active" id="ai-template-16-tab-pane" role="tabpanel" aria-labelledby="ai-template-16-tab" tabIndex="0">
              <div className="row gy-4">
                    {
                      aiTemplatesData?.slice(1,9).map((tab,i)=><div key={i} className="col-sm-6 col-lg-4 col-xxl-3 ai-template-card-item">
                      <div className="ai-template-card text-center text-xl-start">
                        <div className="ai-template-card-icon">
                          <i className="bi bi-stars"></i>
                        </div>
                        <h4 className="clr-neutral-90 fs-18 mt-6">{tab.title}</h4>
                        <p className="clr-neutral-80 mb-0 fs-14">{tab.des}</p>
                      </div>
                    </div>)
                    }
                    
                  </div>
              </TabPanel>
              <TabPanel className="tab-pane fade show active" id="ai-template-16-tab-pane" role="tabpanel" aria-labelledby="ai-template-16-tab" tabIndex="0">
              <div className="row gy-4">
                    {
                      aiTemplatesData?.slice(2,10).map((tab,i)=><div key={i} className="col-sm-6 col-lg-4 col-xxl-3 ai-template-card-item">
                      <div className="ai-template-card text-center text-xl-start">
                        <div className="ai-template-card-icon">
                          <i className="bi bi-stars"></i>
                        </div>
                        <h4 className="clr-neutral-90 fs-18 mt-6">{tab.title}</h4>
                        <p className="clr-neutral-80 mb-0 fs-14">{tab.des}</p>
                      </div>
                    </div>)
                    }
                    
                  </div>
              </TabPanel>
              
              
            </div>
          </Tabs>
        </div>
      </div>
      <div className="mt-10">
        <div className="row">
          <div className="col-lg-12 text-center">
            <img src="/img/ai-template-bottom-img.png" alt="image" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
    <img src="/img/ai-template-shape-left.png" alt="image" className="img-fluid ai-template-section-shape ai-template-section-shape-left"/>
  </section>
    </>
  )
};

export default AiTemplate
