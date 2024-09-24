import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const tabData = [
    {
      id: 'p1-tab',
      target: '#p1-tab-pane',
      label: 'AIl Things AI',
      ariaControls: 'p1-tab-pane',
      ariaSelected: 'true',
      className: 'nav-link clr-neutral-80 active'
    },
    {
      id: 'p2-tab',
      target: '#p2-tab-pane',
      label: 'AI Content Writing',
      ariaControls: 'p2-tab-pane',
      ariaSelected: 'false',
      className: 'nav-link clr-neutral-80'
    },
    {
      id: 'p3-tab',
      target: '#p3-tab-pane',
      label: 'Design & Creative',
      ariaControls: 'p3-tab-pane',
      ariaSelected: 'false',
      className: 'nav-link clr-neutral-80'
    },
    {
      id: 'p4-tab',
      target: '#p4-tab-pane',
      label: 'Marketing Strategy',
      ariaControls: 'p4-tab-pane',
      ariaSelected: 'false',
      className: 'nav-link clr-neutral-80'
    },
    {
      id: 'p5-tab',
      target: '#p5-tab-pane',
      label: 'Product Update',
      ariaControls: 'p5-tab-pane',
      ariaSelected: 'false',
      className: 'nav-link clr-neutral-80'
    }
  ];


  
const PopularPost = () => {
    const tabDataDes = [
        {
            
            title: "Performing an SEO Audit The Definitive Checklist",
            image: "/img/popular-post-1.png",
            date: "March 19, 2022",
            comments: 15,
            description: "With our AI Generators, the possibilities are endless we don't keep secrets from our friends.",
            link: "blog-details.html"
          },
          {
            title: "Performing an SEO Audit The Definitive Checklist",
            image: "/img/popular-post-2.png",
            date: "March 19, 2022",
            comments: 15,
            description: "With our AI Generators, the possibilities are endless we don't keep secrets from our friends.",
            link: "blog-details.html"
          },
          {
            title: "Performing an SEO Audit The Definitive Checklist",
            image: "/img/popular-post-3.png",
            date: "March 19, 2022",
            comments: 15,
            description: "With our AI Generators, the possibilities are endless we don't keep secrets from our friends.",
            link: "blog-details.html"
          },
       
      {
      
       
            title: "Performing an SEO Audit The Definitive Checklist 2",
            image: "/img/popular-post-4.png",
            date: "March 19, 2022",
            comments: 15,
            description: "With our AI Generators, the possibilities are endless we don't keep secrets from our friends.",
            link: "blog-details.html"
          },
          {
            title: "Performing an SEO Audit The Definitive Checklist",
            image: "/img/popular-post-5.png",
            date: "March 19, 2022",
            comments: 15,
            description: "With our AI Generators, the possibilities are endless we don't keep secrets from our friends.",
            link: "blog-details.html"
          },
          {
            title: "Performing an SEO Audit The Definitive Checklist",
            image: "/img/popular-post-6.png",
            date: "March 19, 2022",
            comments: 15,
            description: "With our AI Generators, the possibilities are endless we don't keep secrets from our friends.",
            link: "blog-details.html"
          },
    ];
    const [activeTab, setActiveTab] = useState('p1-tab');
    // console.log('activede',activeTab)
  
    const handleTabSelect = (tabId) => {
      setActiveTab(tabId);
    };
  return (
    <>
       <div className="section-space-top section-space-sm-bottom">
    <div className="container">
      <div className="mb-10">
        <div className="row">
          <div className="col-lg-5">
            <h2 className="h3 clr-neutral-90 fw-extrabold mb-4">Most Popular Post</h2>
          </div>
        </div>
      </div>
      <Tabs className="row gy-4">
        <div className="col-lg-8">
          <TabList className="nav nav-underline nav-bordered" id="popularTab" role="tablist">
           {
            tabData.map((t,i)=> <Tab key={i} className="nav-item " >
            <button onClick={()=>handleTabSelect(t.id)} className={`nav-link clr-neutral-80 ${activeTab==t.id? "active":""}`} type="button" >{t.label}</button>
          </Tab>)
           }
           
          </TabList>
          <div className="tab-content mt-10" id="popularTabContent">
            <TabPanel  className="tab-pane fade show active" id="p1-tab-pane" role="tabpanel" aria-labelledby="p1-tab" tabIndex="0">
                <div  className="row gy-5">
                    {
                        tabDataDes.slice(0,3).map((td,i)=><div key={i} className="col-12">
                        <div className="row">
                          <div className="col-md-4">
                            <Link to="/blog-details" className="d-block">
                              <img src={td.image} alt="image" className="img-fluid rounded-4"/>
                            </Link>
                          </div>
                          <div className="col-md-7">
                            <span className="clr-secondary-key fw-bold mb-2 d-inline-block">AI News</span>
                            <h4 className="fs-24 fw-extrabold max-text-24"><Link to="/blog-details" className="clr-neutral-90 link :clr-primary-key">{td.title} </Link></h4>
                            <p className="clr-neutral-80 mb-6">{td.description}</p>
                            <ul className="list list-row gap-5">
                              <li className="fs-14 clr-neutral-80 d-flex gap-2">
                                <i className="bi bi-calendar2-date"></i> March 19, 2022
                              </li>
                              <li className="fs-14 clr-neutral-80"> (15) Comments </li>
                            </ul>
                          </div>
                        </div>
                      </div>)
                    }
                    
                  </div>
                
              </TabPanel>
            
              <TabPanel  className="tab-pane fade show active" id="p1-tab-pane" role="tabpanel" aria-labelledby="p1-tab" tabIndex="0">
                <div  className="row gy-5">
                    {
                        tabDataDes.slice(3,6).map((td,i)=><div key={i} className="col-12">
                        <div className="row">
                          <div className="col-md-4">
                            <Link to="/blog-details" className="d-block">
                              <img src={td.image} alt="image" className="img-fluid rounded-4"/>
                            </Link>
                          </div>
                          <div className="col-md-7">
                            <span className="clr-secondary-key fw-bold mb-2 d-inline-block">AI News</span>
                            <h4 className="fs-24 fw-extrabold max-text-24"><Link to="/blog-details" className="clr-neutral-90 link :clr-primary-key">{td.title} </Link></h4>
                            <p className="clr-neutral-80 mb-6">{td.description}</p>
                            <ul className="list list-row gap-5">
                              <li className="fs-14 clr-neutral-80 d-flex gap-2">
                                <i className="bi bi-calendar2-date"></i> March 19, 2022
                              </li>
                              <li className="fs-14 clr-neutral-80"> (15) Comments </li>
                            </ul>
                          </div>
                        </div>
                      </div>)
                    }
                    
                  </div>
                
              </TabPanel>
              <TabPanel  className="tab-pane fade show active" id="p1-tab-pane" role="tabpanel" aria-labelledby="p1-tab" tabIndex="0">
                <div  className="row gy-5">
                    {
                        tabDataDes.slice(2,5).map((td,i)=><div key={i} className="col-12">
                        <div className="row">
                          <div className="col-md-4">
                            <Link to="/blog-details" className="d-block">
                              <img src={td.image} alt="image" className="img-fluid rounded-4"/>
                            </Link>
                          </div>
                          <div className="col-md-7">
                            <span className="clr-secondary-key fw-bold mb-2 d-inline-block">AI News</span>
                            <h4 className="fs-24 fw-extrabold max-text-24"><Link to="/blog-details" className="clr-neutral-90 link :clr-primary-key">{td.title} </Link></h4>
                            <p className="clr-neutral-80 mb-6">{td.description}</p>
                            <ul className="list list-row gap-5">
                              <li className="fs-14 clr-neutral-80 d-flex gap-2">
                                <i className="bi bi-calendar2-date"></i> March 19, 2022
                              </li>
                              <li className="fs-14 clr-neutral-80"> (15) Comments </li>
                            </ul>
                          </div>
                        </div>
                      </div>)
                    }
                    
                  </div>
                
              </TabPanel>
              <TabPanel  className="tab-pane fade show active" id="p1-tab-pane" role="tabpanel" aria-labelledby="p1-tab" tabIndex="0">
                <div  className="row gy-5">
                    {
                        tabDataDes.slice(1,4).map((td,i)=><div key={i} className="col-12">
                        <div className="row">
                          <div className="col-md-4">
                            <Link to="/blog-details" className="d-block">
                              <img src={td.image} alt="image" className="img-fluid rounded-4"/>
                            </Link>
                          </div>
                          <div className="col-md-7">
                            <span className="clr-secondary-key fw-bold mb-2 d-inline-block">AI News</span>
                            <h4 className="fs-24 fw-extrabold max-text-24"><Link to="/blog-details" className="clr-neutral-90 link :clr-primary-key">{td.title} </Link></h4>
                            <p className="clr-neutral-80 mb-6">{td.description}</p>
                            <ul className="list list-row gap-5">
                              <li className="fs-14 clr-neutral-80 d-flex gap-2">
                                <i className="bi bi-calendar2-date"></i> March 19, 2022
                              </li>
                              <li className="fs-14 clr-neutral-80"> (15) Comments </li>
                            </ul>
                          </div>
                        </div>
                      </div>)
                    }
                    
                  </div>
                
              </TabPanel>
              <TabPanel  className="tab-pane fade show active" id="p1-tab-pane" role="tabpanel" aria-labelledby="p1-tab" tabIndex="0">
                <div  className="row gy-5">
                    {
                        tabDataDes.slice(4,7).map((td,i)=><div key={i} className="col-12">
                        <div className="row">
                          <div className="col-md-4">
                            <Link to="/blog-details" className="d-block">
                              <img src={td.image} alt="image" className="img-fluid rounded-4"/>
                            </Link>
                          </div>
                          <div className="col-md-7">
                            <span className="clr-secondary-key fw-bold mb-2 d-inline-block">AI News</span>
                            <h4 className="fs-24 fw-extrabold max-text-24"><Link to="/blog-details" className="clr-neutral-90 link :clr-primary-key">{td.title} </Link></h4>
                            <p className="clr-neutral-80 mb-6">{td.description}</p>
                            <ul className="list list-row gap-5">
                              <li className="fs-14 clr-neutral-80 d-flex gap-2">
                                <i className="bi bi-calendar2-date"></i> March 19, 2022
                              </li>
                              <li className="fs-14 clr-neutral-80"> (15) Comments </li>
                            </ul>
                          </div>
                        </div>
                      </div>)
                    }
                    
                  </div>
                
              </TabPanel>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="bg-neutral-4 rounded-4 py-8 px-6">
            <h4 className="clr-neutral-90 fs-24 fw-semibold mb-8">Related Posts</h4>
            <div className="d-flex gap-4 mt-6">
              <div className="w-20 h-20 rounded-1 overflow-hidden flex-shrink-0">
                <Link to="/blog-details" className="d-block h-100">
                  <img src="/img/small-post-1.png" alt="image" className="img-fluid w-100 h-100 object-fit-cover"/>
                </Link>
              </div>
              <div>
                <span className="d-inline-flex align-items-center gap-2 fs-14 clr-neutral-80 mb-2"><i className="bi bi-calendar2-date"></i> Oct 29, 2023</span>
                <h5 className="fs-16 fw-bold mb-0">
                  <Link to="/blog-details" className="link clr-neutral-90 :clr-primary-key">Advance warning of the next big solar storm</Link>
                </h5>
              </div>
            </div>
            <div className="d-flex gap-4 mt-6">
              <div className="w-20 h-20 rounded-1 overflow-hidden flex-shrink-0">
                <Link to="/blog-details" className="d-block h-100">
                  <img src="/img/small-post-2.png" alt="image" className="img-fluid w-100 h-100 object-fit-cover"/>
                </Link>
              </div>
              <div>
                <span className="d-inline-flex align-items-center gap-2 fs-14 clr-neutral-80 mb-2"><i className="bi bi-calendar2-date"></i> Oct 29, 2023</span>
                <h5 className="fs-16 fw-bold mb-0">
                  <Link to="/blog-details" className="link clr-neutral-90 :clr-primary-key">Advance warning of the next big solar storm</Link>
                </h5>
              </div>
            </div>
            <div className="d-flex gap-4 mt-6">
              <div className="w-20 h-20 rounded-1 overflow-hidden flex-shrink-0">
                <Link to="/blog-details" className="d-block h-100">
                  <img src="/img/small-post-3.png" alt="image" className="img-fluid w-100 h-100 object-fit-cover"/>
                </Link>
              </div>
              <div>
                <span className="d-inline-flex align-items-center gap-2 fs-14 clr-neutral-80 mb-2"><i className="bi bi-calendar2-date"></i> Oct 29, 2023</span>
                <h5 className="fs-16 fw-bold mb-0">
                  <Link to="/blog-details" className="link clr-neutral-90 :clr-primary-key">Advance warning of the next big solar storm</Link>
                </h5>
              </div>
            </div>
            <div className="d-flex gap-4 mt-6">
              <div className="w-20 h-20 rounded-1 overflow-hidden flex-shrink-0">
                <Link to="/blog-details" className="d-block h-100">
                  <img src="/img/small-post-4.png" alt="image" className="img-fluid w-100 h-100 object-fit-cover"/>
                </Link>
              </div>
              <div>
                <span className="d-inline-flex align-items-center gap-2 fs-14 clr-neutral-80 mb-2"><i className="bi bi-calendar2-date"></i> Oct 29, 2023</span>
                <h5 className="fs-16 fw-bold mb-0">
                  <Link to="/blog-details" className="link clr-neutral-90 :clr-primary-key">Advance warning of the next big solar storm</Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h4 className="clr-neutral-90 fs-24 fw-semibold mb-8">Popular Tags</h4>
            <ul className="list list-row flex-wrap gap-4">
              <li>
                <Link to="/blog-1" className="py-4 px-8 border border-neutral-10 rounded-2 clr-neutral-80 link fs-14 d-block :bg-primary-key :clr-white">Content</Link>
              </li>
              <li>
                <Link to="/blog-1" className="py-4 px-8 border border-neutral-10 rounded-2 clr-neutral-80 link fs-14 d-block :bg-primary-key :clr-white">Design</Link>
              </li>
              <li>
                <Link to="/blog-1" className="py-4 px-8 border border-neutral-10 rounded-2 clr-neutral-80 link fs-14 d-block :bg-primary-key :clr-white">Marketing</Link>
              </li>
              <li>
                <Link to="/blog-1" className="py-4 px-8 border border-neutral-10 rounded-2 clr-neutral-80 link fs-14 d-block :bg-primary-key :clr-white">Web development</Link>
              </li>
              <li>
                <Link to="/blog-1" className="py-4 px-8 border border-neutral-10 rounded-2 clr-neutral-80 link fs-14 d-block :bg-primary-key :clr-white">Innovation</Link>
              </li>
              <li>
                <Link to="/blog-1" className="py-4 px-8 border border-neutral-10 rounded-2 clr-neutral-80 link fs-14 d-block :bg-primary-key :clr-white">Tech</Link>
              </li>
              <li>
                <Link to="/blog-1" className="py-4 px-8 border border-neutral-10 rounded-2 clr-neutral-80 link fs-14 d-block :bg-primary-key :clr-white">Luxury</Link>
              </li>
              <li>
                <Link to="/blog-1" className="py-4 px-8 border border-neutral-10 rounded-2 clr-white link fs-14 d-block :bg-primary-key :clr-white">Sport</Link>
              </li>
            </ul>
          </div>
        </div>
      </Tabs>
    </div>
  </div>
    </>
  )
};

export default PopularPost
