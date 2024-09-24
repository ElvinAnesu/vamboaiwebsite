import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const pricingPlans = [
  {
    name: "Starter",
    price: {
      monthly: "$10",
      yearly: "$20",
      lifetime: "$30",
      prepaid: "$40"
    },
    discount: "20%",
    features: [
      "25 Free Messages",
      "1 Chatbot",
      "Basic Models",
      "100 Captured Contacts",
      "Basic Support"
    ],
    link: "pricing.html"
  },
  {
    name: "Popular",
    price: {
      monthly: "$16",
      yearly: "$60",
      lifetime: "$70",
      prepaid: "$40"
    },
    discount: "20%",
    features: [
      "25 Free Messages",
      "1 Chatbot",
      "Basic Models",
      "100 Captured Contacts",
      "Basic Support"
    ],
    link: "pricing.html"
  },
  {
    name: "Premium",
    price: {
      monthly: "$24",
      yearly: "$80",
      lifetime: "$90",
      prepaid: "$60"
    },
    discount: "20%",
    features: [
      "25 Free Messages",
      "1 Chatbot",
      "Basic Models",
      "100 Captured Contacts",
      "Basic Support"
    ],
    link: "pricing.html"
  },
  {
    name: "Enterprise",
    price: {
      monthly: "$90",
      yearly: "$120",
      lifetime: "$300",
      prepaid: "$80"
    },
    discount: "20%",
    features: [
      "25 Free Messages",
      "1 Chatbot",
      "Basic Models",
      "100 Captured Contacts",
      "Basic Support"
    ],
    link: "pricing.html"
  }
];
const pricingTabList=[
    {
        name:"Monthly"
    },
    {
        name:"Yearly"
    },
    {
        name:"Lieftime"
    },
    {
        name:"Prepaid"
    }
]
const Subscription = () => {
    const [activeTab, setActiveTab] = useState('Monthly');
  
    const handleTabSelect = (tabId) => {
      setActiveTab(tabId);
      setSeeMore(false)
    };
  return (
    <>
    <Tabs>
      <section className="breadcrumb-section">
    <div className="breadcrumb-section-inner">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-8">
            <div className="text-center">
              <div className="d-inline-flex align-items-center py-2 px-4 bg-info-10 bg-opacity-3 rounded-1">
                <span className="fs-12 clr-white">WriteBot AI</span>
              </div>
              <h2 className="h3 fw-bold clr-neutral-90 mt-4">WriteBot Subscription Plans </h2>
            </div>
          </div>
        </div>
        <div className="pricing- mt-10 d-flex justify-content-center">
        <TabList className="pricing-5-list list list-sm-row align-items-center gap-3 fadeIn_bottom">
          {
            pricingTabList.map((tab,i)=><Tab key={i} className={`pricing-btn-5 ${activeTab===tab.name ? "active":""}`}>
            <button onClick={()=>setActiveTab(tab.name)} type="button" className="link d-inline-flex py-2 px-3 fs-12 fw-bold clr-neutral-70 border-0 bg-transparent" id="selectMonthly">{tab.name}</button>
          </Tab>)
          }
          
          <li className="pricing-btn-5">
            <span className="d-inline-flex py-2 px-3 fs-12 fw-bold clr-white bg-primary-key rounded-1">Yearly 20% off</span>
          </li>
        </TabList>
      </div>
      <TabPanel className="mt-10">
        <div className="row gy-4">
          {
            pricingPlans?.map((plan,i)=><div key={i} className="col-sm-6 col-lg-4 col-xxl-3 fadein_bottom_39 ">
            <div className={`pricing-5-card text-center ${plan.name==="Popular" ? "popular" :""}`}>
              <span className="pricing-5-card-name fs-16 fw-bold clr-neutral-90"> {plan.name} </span>
              <p className="fs-14 clr-neutral-80 mt-3">Start with 3,000 word limit</p>
              <div className="d-flex align-items-center justify-content-center gap-2">
                <h3 className="pricing-5-card-price fw-extrabold mb-0 clr-neutral-90">
                  <span className="monthly-price">{plan.price.monthly}</span>
                </h3>
                <div className="text-start">
                  <span className="pricing-5-card-discount">{plan.discount}</span>
                  <p className="fs-12 fw-semibold clr-neutral-40 mb-0 mt-1">Per Mon</p>
                </div>
              </div>
              <ul className="list gap-4 mt-8">
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <span className="flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10">
                      <i className="bi bi-check2 mt-1"></i>
                    </span>
                    <span className="d-block fs-14 clr-neutral-80 fw-medium">25 Free Messages</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <span className="flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10">
                      <i className="bi bi-check2 mt-1"></i>
                    </span>
                    <span className="d-block fs-14 clr-neutral-80 fw-medium">1 Chatbot</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <span className="flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10">
                      <i className="bi bi-check2 mt-1"></i>
                    </span>
                    <span className="d-block fs-14 clr-neutral-80 fw-medium">Basic Models</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <span className="flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10">
                      <i className="bi bi-check2 mt-1"></i>
                    </span>
                    <span className="d-block fs-14 clr-neutral-80 fw-medium">100 Captured Contacts</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <span className="flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10">
                      <i className="bi bi-check2 mt-1"></i>
                    </span>
                    <span className="d-block fs-14 clr-neutral-80 fw-medium">Basic Support</span>
                  </div>
                </li>
              </ul>
              <Link to="/pricing" className="link pricing-5-card-btn py-2 px-4 fs-14 clr-neutral-80 d-inline-flex align-items-center gap-2 rounded-1 border border-neutral-80 mt-10">Try For Free <i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>)
          }
         
        </div>
      </TabPanel>
      <TabPanel className="mt-10">
        <div className="row gy-4">
          {
            pricingPlans?.map((plan,i)=><div key={i} className="col-sm-6 col-lg-4 col-xxl-3 fadein_bottom_39 ">
            <div className={`pricing-5-card text-center ${plan.name==="Popular" ? "popular" :""}`}>
              <span className="pricing-5-card-name fs-16 fw-bold clr-neutral-90"> {plan.name} </span>
              <p className="fs-14 clr-neutral-80 mt-3">Start with 3,000 word limit</p>
              <div className="d-flex align-items-center justify-content-center gap-2">
                <h3 className="pricing-5-card-price fw-extrabold mb-0 clr-neutral-90">
                  <span className="monthly-price">{plan.price.yearly}</span>
                </h3>
                <div className="text-start">
                  <span className="pricing-5-card-discount">{plan.discount}</span>
                  <p className="fs-12 fw-semibold clr-neutral-40 mb-0 mt-1">Per Mon</p>
                </div>
              </div>
              <ul className="list gap-4 mt-8">
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <span className="flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10">
                      <i className="bi bi-check2 mt-1"></i>
                    </span>
                    <span className="d-block fs-14 clr-neutral-80 fw-medium">25 Free Messages</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <span className="flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10">
                      <i className="bi bi-check2 mt-1"></i>
                    </span>
                    <span className="d-block fs-14 clr-neutral-80 fw-medium">1 Chatbot</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <span className="flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10">
                      <i className="bi bi-check2 mt-1"></i>
                    </span>
                    <span className="d-block fs-14 clr-neutral-80 fw-medium">Basic Models</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <span className="flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10">
                      <i className="bi bi-check2 mt-1"></i>
                    </span>
                    <span className="d-block fs-14 clr-neutral-80 fw-medium">100 Captured Contacts</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <span className="flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10">
                      <i className="bi bi-check2 mt-1"></i>
                    </span>
                    <span className="d-block fs-14 clr-neutral-80 fw-medium">Basic Support</span>
                  </div>
                </li>
              </ul>
              <Link to="/pricing" className="link pricing-5-card-btn py-2 px-4 fs-14 clr-neutral-80 d-inline-flex align-items-center gap-2 rounded-1 border border-neutral-80 mt-10">Try For Free <i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>)
          }
         
        </div>
      </TabPanel>
      <TabPanel className="mt-10">
        <div className="row gy-4">
          {
            pricingPlans?.map((plan,i)=><div key={i} className="col-sm-6 col-lg-4 col-xxl-3 fadein_bottom_39 ">
            <div className={`pricing-5-card text-center ${plan.name==="Popular" ? "popular" :""}`}>
              <span className="pricing-5-card-name fs-16 fw-bold clr-neutral-90"> {plan.name} </span>
              <p className="fs-14 clr-neutral-80 mt-3">Start with 3,000 word limit</p>
              <div className="d-flex align-items-center justify-content-center gap-2">
                <h3 className="pricing-5-card-price fw-extrabold mb-0 clr-neutral-90">
                  <span className="monthly-price">{plan.price.lifetime}</span>
                </h3>
                <div className="text-start">
                  <span className="pricing-5-card-discount">{plan.discount}</span>
                  <p className="fs-12 fw-semibold clr-neutral-40 mb-0 mt-1">Per Mon</p>
                </div>
              </div>
              <ul className="list gap-4 mt-8">
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <span className="flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10">
                      <i className="bi bi-check2 mt-1"></i>
                    </span>
                    <span className="d-block fs-14 clr-neutral-80 fw-medium">25 Free Messages</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <span className="flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10">
                      <i className="bi bi-check2 mt-1"></i>
                    </span>
                    <span className="d-block fs-14 clr-neutral-80 fw-medium">1 Chatbot</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <span className="flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10">
                      <i className="bi bi-check2 mt-1"></i>
                    </span>
                    <span className="d-block fs-14 clr-neutral-80 fw-medium">Basic Models</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <span className="flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10">
                      <i className="bi bi-check2 mt-1"></i>
                    </span>
                    <span className="d-block fs-14 clr-neutral-80 fw-medium">100 Captured Contacts</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <span className="flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10">
                      <i className="bi bi-check2 mt-1"></i>
                    </span>
                    <span className="d-block fs-14 clr-neutral-80 fw-medium">Basic Support</span>
                  </div>
                </li>
              </ul>
              <Link to="/pricing" className="link pricing-5-card-btn py-2 px-4 fs-14 clr-neutral-80 d-inline-flex align-items-center gap-2 rounded-1 border border-neutral-80 mt-10">Try For Free <i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>)
          }
         
        </div>
      </TabPanel>
      <TabPanel className="mt-10">
        <div className="row gy-4">
          {
            pricingPlans?.map((plan,i)=><div key={i} className="col-sm-6 col-lg-4 col-xxl-3 fadein_bottom_39 ">
            <div className={`pricing-5-card text-center ${plan.name==="Popular" ? "popular" :""}`}>
              <span className="pricing-5-card-name fs-16 fw-bold clr-neutral-90"> {plan.name} </span>
              <p className="fs-14 clr-neutral-80 mt-3">Start with 3,000 word limit</p>
              <div className="d-flex align-items-center justify-content-center gap-2">
                <h3 className="pricing-5-card-price fw-extrabold mb-0 clr-neutral-90">
                  <span className="monthly-price">{plan.price.prepaid}</span>
                </h3>
                <div className="text-start">
                  <span className="pricing-5-card-discount">{plan.discount}</span>
                  <p className="fs-12 fw-semibold clr-neutral-40 mb-0 mt-1">Per Mon</p>
                </div>
              </div>
              <ul className="list gap-4 mt-8">
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <span className="flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10">
                      <i className="bi bi-check2 mt-1"></i>
                    </span>
                    <span className="d-block fs-14 clr-neutral-80 fw-medium">25 Free Messages</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <span className="flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10">
                      <i className="bi bi-check2 mt-1"></i>
                    </span>
                    <span className="d-block fs-14 clr-neutral-80 fw-medium">1 Chatbot</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <span className="flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10">
                      <i className="bi bi-check2 mt-1"></i>
                    </span>
                    <span className="d-block fs-14 clr-neutral-80 fw-medium">Basic Models</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <span className="flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10">
                      <i className="bi bi-check2 mt-1"></i>
                    </span>
                    <span className="d-block fs-14 clr-neutral-80 fw-medium">100 Captured Contacts</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <span className="flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10">
                      <i className="bi bi-check2 mt-1"></i>
                    </span>
                    <span className="d-block fs-14 clr-neutral-80 fw-medium">Basic Support</span>
                  </div>
                </li>
              </ul>
              <Link to="/pricing" className="link pricing-5-card-btn py-2 px-4 fs-14 clr-neutral-80 d-inline-flex align-items-center gap-2 rounded-1 border border-neutral-80 mt-10">Try For Free <i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>)
          }
         
        </div>
      </TabPanel>
        
      </div>
    </div>
    <img src="/img/breadcrumb-shape-top.png" alt="image" className="img-fluid breadcrumb-shape breadcrumb-shape-top"/>
    <img src="/img/breadcrumb-shape-left.png" alt="image" className="img-fluid breadcrumb-shape breadcrumb-shape-left"/>
    <img src="/img/breadcrumb-shape-right.png" alt="image" className="img-fluid breadcrumb-shape breadcrumb-shape-right"/>
    <img src="/img/breadcrumb-shape-line-left.png" alt="image" className="img-fluid breadcrumb-shape breadcrumb-shape-line-left"/>
    <img src="/img/breadcrumb-shape-line-right.png" alt="image" className="img-fluid breadcrumb-shape breadcrumb-shape-line-right"/>
  </section>
  </Tabs>
    </>
  )
};

export default Subscription
