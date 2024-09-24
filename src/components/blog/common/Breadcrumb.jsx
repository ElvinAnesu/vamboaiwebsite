import { Link } from "react-router-dom";

const Breadcrumb = ({name,title}) => {
    return (
      <>
        <section className="breadcrumb-section">
      <div className="container">
        <div className="row">
          <div className="col-xxl-7 col-xl-8">
            <div className="d-inline-flex align-items-center py-2 px-4 bg-info-10 bg-opacity-3 rounded-1">
              <Link to="/home-writebot" className="link fs-12 clr-white">Home</Link>
              <span className="fs-12 clr-white">-</span>
              <span className="fs-12 clr-neutral-90">{name}</span>
            </div>
            <h2 className="h3 fw-bold clr-neutral-90 mt-4">{title}</h2>
          </div>
        </div>
      </div>
      <img src="/img/breadcrumb-shape-top.png" alt="image" className="img-fluid breadcrumb-shape breadcrumb-shape-top"/>
      <img src="/img/breadcrumb-shape-left.png" alt="image" className="img-fluid breadcrumb-shape breadcrumb-shape-left"/>
      <img src="/img/breadcrumb-shape-right.png" alt="image" className="img-fluid breadcrumb-shape breadcrumb-shape-right"/>
      <img src="/img/breadcrumb-shape-line-left.png" alt="image" className="img-fluid breadcrumb-shape breadcrumb-shape-line-left"/>
      <img src="/img/breadcrumb-shape-line-right.png" alt="image" className="img-fluid breadcrumb-shape breadcrumb-shape-line-right"/>
    </section>
      </>
    )
  };
  
  export default Breadcrumb
  