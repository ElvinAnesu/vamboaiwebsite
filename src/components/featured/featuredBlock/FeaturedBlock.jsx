const FeaturedBlock = ({ id, icon, title, content, additionalContent }) => (
    <div className="featured-block" id={id}>
      <div className="d-flex flex-wrap align-items-center gap-6">
        <div className={`w-14 h-14 rounded-circle d-flex justify-content-center align-items-center clr-primary-key featured-title-icon-bg h5 mb-0`}>
          <i className={`bi ${icon}`}></i>
        </div>
        <h3 className="h4 clr-neutral-90 fw-bold mb-0">{title}</h3>
      </div>
      <div className="ps-lg-20">
        <p className="clr-neutral-80 mt-3">{content}</p>
        {additionalContent}
      </div>
    </div>
  );

  export default FeaturedBlock