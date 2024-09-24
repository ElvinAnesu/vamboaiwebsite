
const Ticker = () => {
  return (
    <>
       <div className="ticker-section-5 section-space-sm-bottom">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="overflow-hidden bg-neutral-4 rounded-2 py-4">
            <div className="scroller-x" data-direction="left" data-speed="slow">
              <ul className="list list-row align-items-center gap-4 scroller-x__list">
                <li>
                  <p className="h5 fw-bold mb-0 clr-neutral-87"> 100% Strong </p>
                </li>
                <li>
                  <img src="/img/icon-star-gradient-sm.png" alt="image" className="img-fluid"/>
                </li>
                <li>
                  <p className="h5 fw-bold mb-0 clr-neutral-87"> 1M+ People Join Our Community </p>
                </li>
                <li>
                  <img src="/img/icon-star-gradient-sm.png" alt="image" className="img-fluid"/>
                </li>
                <li>
                  <p className="h5 fw-bold mb-0 clr-neutral-87"> Join Our WriteBot Community </p>
                </li>
                <li>
                  <img src="/img/icon-star-gradient-sm.png" alt="image" className="img-fluid"/>
                </li>
                <li>
                  <p className="h5 fw-bold mb-0 clr-neutral-87"> WriteBot AI </p>
                </li>
                <li>
                  <img src="/img/icon-star-gradient-sm.png" alt="image" className="img-fluid"/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
};

export default Ticker
