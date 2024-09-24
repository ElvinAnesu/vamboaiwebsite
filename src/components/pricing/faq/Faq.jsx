import { useState } from "react";
import { Link } from "react-router-dom";

const faqData = [
    {
      id: 'faqAccordion1',
      question: 'What is WriteBot?',
      answer:
        'It takes less than 20 minutes to go through our onboarding forms. If your information matches our records, you will be pushed through immediately by our automated system. If not, we\'ll ask for further documentation and get back to you in less.',
      isActive: true,
    },
    {
      id: 'faqAccordion2',
      question: 'Who owns the generated content?',
      answer:
        'It takes less than 20 minutes to go through our onboarding forms. If your information matches our records, you will be pushed through immediately by our automated system. If not, we\'ll ask for further documentation and get back to you in less.',
      isActive: false,
    },
    {
      id: 'faqAccordion3',
      question: 'What do I need to apply for an account?',
      answer:
        'It takes less than 20 minutes to go through our onboarding forms. If your information matches our records, you will be pushed through immediately by our automated system. If not, we\'ll ask for further documentation and get back to you in less.',
      isActive: false,
    },
    {
      id: 'faqAccordion4',
      question: 'Is Chatsonic by Writesonic the ultimate ChatGPT alternative?',
      answer:
        'It takes less than 20 minutes to go through our onboarding forms. If your information matches our records, you will be pushed through immediately by our automated system. If not, we\'ll ask for further documentation and get back to you in less.',
      isActive: false,
    },
  ];
  const faqBillingData = [
   
    {
      id: 'faqAccordion5',
      question: 'Do you offer free trials?',
      answer: 'It takes less than 20 minutes to go through our onboarding forms. If your information matches our records, you will be pushed through immediately by our automated system. If not, we\'ll ask for further documentation and get back to you in less.',
      details: [
        'Unified custody for both crypto & fiat',
        'Instant on/off-ramps with automatic gains & losses calculations',
        
      ]
    },
    {
      id: 'faqAccordion6',
      question: 'Do you offer Enterprise plans?',
      answer: 'It takes less than 20 minutes to go through our onboarding forms. If your information matches our records, you will be pushed through immediately by our automated system. If not, we\'ll ask for further documentation and get back to you in less.',
      details: [
        'Unified custody for both crypto & fiat',
        'Instant on/off-ramps with automatic gains & losses calculations',
        'Native Gnosis Safe integration'
      ]
    },
    {
      id: 'faqAccordion7',
      question: 'Can I upgrade to a different plan at a later time?',
      answer: 'It takes less than 20 minutes to go through our onboarding forms. If your information matches our records, you will be pushed through immediately by our automated system. If not, we\'ll ask for further documentation and get back to you in less.',
      details: [
        'Unified custody for both crypto & fiat',
        'Instant on/off-ramps with automatic gains & losses calculations',
        'Native Gnosis Safe integration'
      ]
    }
  ];

  const faqProductData = [
   
    {
      id: 'faqAccordion8',
      question: 'What does WriteBot do with my data?',
      answer: 'It takes less than 20 minutes to go through our onboarding forms. If your information matches our records, you will be pushed through immediately by our automated system. If not, we\'ll ask for further documentation and get back to you in less.',
      details: [
        'Unified custody for both crypto & fiat',
        'Instant on/off-ramps with automatic gains & losses calculations',
        'Native Gnosis Safe integration'
      ]
    },
    {
      id: 'faqAccordion9',
      question: 'What is WriteBot Fair Use Policy?',
      answer: 'It takes less than 20 minutes to go through our onboarding forms. If your information matches our records, you will be pushed through immediately by our automated system. If not, we\'ll ask for further documentation and get back to you in less.',
      details: [
        'Unified custody for both crypto & fiat',
        'Instant on/off-ramps with automatic gains & losses calculations',
        'Native Gnosis Safe integration'
      ]
    },
    {
      id: 'faqAccordion10',
      question: 'Can I upgrade to a different plan at a later time?',
      answer: 'It takes less than 20 minutes to go through our onboarding forms. If your information matches our records, you will be pushed through immediately by our automated system. If not, we\'ll ask for further documentation and get back to you in less.',
      details: [
        'Unified custody for both crypto & fiat',
        'Instant on/off-ramps with automatic gains & losses calculations',
        'Native Gnosis Safe integration'
      ]
    }
  ];
  
  
const Faq = () => {
    const [activeFaq,setActive]=useState("faqAccordion1")
    const handleChangeFaq = (id) => {
        setActive(prevId => (prevId === id ? "" : id)); 
      };

    //   billing question
    const [activeBillingFaq,setActiveBillingFaq]=useState("faqAccordion5")
    const handleChangeBillingFaq = (id) => {
        setActiveBillingFaq(prevId => (prevId === id ? "" : id)); 
      };

    //   product question
    const [activeProductFaq,setActiveProductFaq]=useState("faqAccordion8")
    const handleChangeProductFaq = (id) => {
        setActiveProductFaq(prevId => (prevId === id ? "" : id)); 
      };
   
  return (
    <>
      <div className="pricing-faq-section section-space-top section-space-bottom">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-5">
          <h3 className="clr-neutral-90 fw-extrabold animate-line-3d"> Frequently Asked Questions 👍 </h3>
          <p className="mb-6 fw-semibold clr-neutral-80 max-text-32 animate-text-from-right"> Have a question that is not answered? You can contact us at </p>
          <Link to="/login" className="link d-inline-block py-3 px-6 rounded-pill bg-neutral-10 :bg-primary-key clr-white fs-14 fw-semibold fadeIn_bottom"> Have a question? Submit a Ticket </Link>
        </div>
        <div className="col-lg-7">
          <div className="accordion custom-accordion custom-accordion--faq mb-8 fadeIn_bottom" id="faqAccordionOne">
            {
                faqData.map((q,i)=><div key={i+20} className="accordion-item top-shadow rounded-2 gradient-card mb-4">
                <h2 className="accordion-header">
                  <button onClick={()=>handleChangeFaq(q.id)} className={`accordion-button fs-16 fw-bold rounded-2 ${activeFaq==q.id?"":"collapsed"}`} type="button">{q.question} </button>
                </h2>
                <div id="faqAccordion1" className={`accordion-collapse collapse ${activeFaq==q.id?"show":""}`} >
                  <div className="accordion-body">
                    <p>{q.answer}</p>
                    
                  </div>
                </div>
              </div>)
            }
           
          </div>
        </div>
      </div>
      <div className="mt-xxl-24 mt-xl-15 mt-lg-10 mt-8">
        <div className="row g-4">
          <div className="col-lg-5">
            <h3 className="clr-neutral-90 fw-extrabold animate-line-3d"> Billing <br/> Questions 🎯 </h3>
          </div>
          <div className="col-lg-7">
            <div className="accordion custom-accordion custom-accordion--faq mb-8 fadeIn_bottom" id="faqAccordionTwo">
              {
                faqBillingData.map((q,i)=><div key={i+10} className="accordion-item top-shadow rounded-2 gradient-card mb-4">
                <h2 className="accordion-header">
                  <button onClick={()=>handleChangeBillingFaq(q.id)} className={`accordion-button fs-16 fw-bold  rounded-2 ${activeBillingFaq==q.id?"":"collapsed"}`} type="button" > {q.question} </button>
                </h2>
                <div  className={`accordion-collapse collapse ${activeBillingFaq==q.id?"show":""}`}>
                  <div className="accordion-body">
                    <p>{q.answer}</p>
                    <ul className="list list-disc gap-4 mb-0">
                      {
                        q.details.map((qd,i)=><><li key={i+5}> {qd} </li></>)
                      }
                    </ul>
                  </div>
                </div>
              </div>)
              }
             
            </div>
          </div>
        </div>
      </div>
      <div className="mt-xxl-24 mt-xl-15 mt-lg-10 mt-8">
        <div className="row g-4">
          <div className="col-lg-5">
            <h3 className="clr-neutral-90 fw-extrabold animate-line-3d"> Product <br/> Questions 🥉 </h3>
          </div>
          <div className="col-lg-7">
            <div className="accordion custom-accordion custom-accordion--faq mb-8 fadeIn_bottom" id="faqAccordionThree">
            {
                faqProductData.map((q,i)=><div key={i+30} className="accordion-item top-shadow rounded-2 gradient-card mb-4">
                <h2 className="accordion-header">
                  <button onClick={()=>handleChangeProductFaq(q.id)} className={`accordion-button fs-16 fw-bold rounded-2 ${activeProductFaq==q.id?"":"collapsed"}`} type="button">{q.question} </button>
                </h2>
                <div  className={`accordion-collapse collapse ${activeProductFaq==q.id?"show":""}`} >
                  <div className="accordion-body">
                    <p>{q.answer}</p>
                    
                  </div>
                </div>
              </div>)
            }
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="/img/pricing-faq-top-left.png" alt="image" className="img-fluid pricing-fag-shape pricing-fag-shape-top-left"/>
    <img src="/img/pricing-faq-top-right.png" alt="image" className="img-fluid pricing-fag-shape pricing-fag-shape-top-right"/>
    <img src="/img/pricing-faq-bottom-right.png" alt="image" className="img-fluid pricing-fag-shape pricing-fag-shape-bottom-right"/>
  </div>
    </>
  )
};

export default Faq
