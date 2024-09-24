import { Link } from "react-router-dom";

const BlogDetailsbreadCrumb = () => {
  return (
    <>
      <section className="breadcrumb-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-8">
          <div className="d-inline-flex align-items-center py-2 px-4 bg-info-10 bg-opacity-3 rounded-1">
            <Link to="/home-writebot" className="link fs-12 clr-white">Home</Link>
            <span className="fs-12 clr-white mx-1">-</span>
            <span className="fs-12 clr-white">Blog Details</span>
          </div>
          <h2 className="h3 fw-bold clr-neutral-90 mt-4">Performing an SEO Audit The Definitive Checklist</h2>
          <ul className="list list-row gap-5 mt-6">
            <li className="fs-14 clr-neutral-80 d-flex gap-2">
              <i className="bi bi-calendar2-date"></i> Updated On October
            </li>
            <li className="fs-14 clr-neutral-80 d-flex gap-2"><i className="bi bi-person-circle"></i> By Aminul Islam </li>
          </ul>
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

export default BlogDetailsbreadCrumb
