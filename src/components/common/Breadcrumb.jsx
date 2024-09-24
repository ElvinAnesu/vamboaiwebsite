import { Link } from "react-router-dom";

const Breadcrumb = ({name,title}) => {
  return (
    <>
      <section class="breadcrumb-section">
    <div class="container">
      <div class="row">
        <div class="col-xxl-7 col-xl-8">
          <div class="d-inline-flex align-items-center py-2 px-4 bg-info-10 bg-opacity-3 rounded-1">
            <Link href="" class="link fs-12 clr-white">Home</Link>
            <span class="fs-12 clr-white">-</span>
            <span class="fs-12 clr-neutral-90">{name}</span>
          </div>
          <h2 class="h3 fw-bold clr-neutral-90 mt-4">{title}</h2>
        </div>
      </div>
    </div>
    <img src="/img/breadcrumb-shape-top.png" alt="image" class="img-fluid breadcrumb-shape breadcrumb-shape-top"/>
    <img src="/img/breadcrumb-shape-left.png" alt="image" class="img-fluid breadcrumb-shape breadcrumb-shape-left"/>
    <img src="/img/breadcrumb-shape-right.png" alt="image" class="img-fluid breadcrumb-shape breadcrumb-shape-right"/>
    <img src="/img/breadcrumb-shape-line-left.png" alt="image" class="img-fluid breadcrumb-shape breadcrumb-shape-line-left"/>
    <img src="/img/breadcrumb-shape-line-right.png" alt="image" class="img-fluid breadcrumb-shape breadcrumb-shape-line-right"/>
  </section>
    </>
  )
};

export default Breadcrumb
