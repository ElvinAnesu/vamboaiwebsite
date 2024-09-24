import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';
const PerformingSeo = () => {
  return (
    <>
      <div className="single-blog-area section-space-sm-top section-space-sm-bottom">
    <div className="container">
      <div className="swiper blog-single-slider">
        <Swiper className="swiper-wrapper" >
          <SwiperSlide className="swiper-slide">
            <div className="row align-items-center gy-4">
              <div className="col-lg-6">
                <div className="blog-latest-thumb">
                  <Link to="/blog-details" className="d-block">
                    <img src="/img/blog-list-2.png" alt="image" className="img-fluid w-100 object-fit-cover"/>
                  </Link>
                  <span className="blog-latest-label"> Latest News </span>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-latest-content">
                  <ul className="list list-row gap-5 mb-3">
                    <li className="fs-14 clr-neutral-80 d-flex gap-2">
                      <i className="bi bi-calendar2-date"></i> March 19, 2022
                    </li>
                    <li className="fs-14 clr-neutral-80"> (15) Comments </li>
                  </ul>
                  <h4 className="h4 mb-6 fw-extrabold"><Link to="/blog-details" className="link clr-neutral-90 :clr-primary-key">Performing an SEO Audit: The Definitive Checklist</Link></h4>
                  <p className="clr-neutral-80 mb-6">With our AI Generators, the possibilities are endless. From generating compelling marketing copy designing stunning visuals to automating data analysis and creating personalizes user experiences.</p>
                  <ul className="list list-row flex-wrap gap-4">
                    <li>
                      <Link to="/about" className="blog-tag">SEO</Link>
                    </li>
                    <li>
                      <Link to="/about" className="blog-tag">Content Marketing</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="row align-items-center gy-4">
              <div className="col-lg-6">
                <div className="blog-latest-thumb">
                  <Link to="/blog-details" className="d-block">
                    <img src="/img/blog-list-1.png" alt="image" className="img-fluid w-100 object-fit-cover"/>
                  </Link>
                  <span className="blog-latest-label"> Latest News </span>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-latest-content">
                  <ul className="list list-row gap-5 mb-3">
                    <li className="fs-14 clr-neutral-80 d-flex gap-2">
                      <i className="bi bi-calendar2-date"></i> March 19, 2022
                    </li>
                    <li className="fs-14 clr-neutral-80"> (15) Comments </li>
                  </ul>
                  <h4 className="h4 mb-6 fw-extrabold"><Link to="/blog-details" className="link clr-neutral-90 :clr-primary-key">Performing an SEO Audit: The Definitive Checklist</Link></h4>
                  <p className="clr-neutral-80 mb-6">With our AI Generators, the possibilities are endless. From generating compelling marketing copy designing stunning visuals to automating data analysis and creating personalizes user experiences.</p>
                  <ul className="list list-row flex-wrap gap-4">
                    <li>
                      <Link to="/about" className="blog-tag">SEO</Link>
                    </li>
                    <li>
                      <Link to="/about" className="blog-tag">Content Marketing</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="row align-items-center gy-4">
              <div className="col-lg-6">
                <div className="blog-latest-thumb">
                  <Link to="/blog-details" className="d-block">
                    <img src="/img/blog-list-1.png" alt="image" className="img-fluid w-100 object-fit-cover"/>
                  </Link>
                  <span className="blog-latest-label"> Latest News </span>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-latest-content">
                  <ul className="list list-row gap-5 mb-3">
                    <li className="fs-14 clr-neutral-80 d-flex gap-2">
                      <i className="bi bi-calendar2-date"></i> March 19, 2022
                    </li>
                    <li className="fs-14 clr-neutral-80"> (15) Comments </li>
                  </ul>
                  <h4 className="h4 mb-6 fw-extrabold"><Link to="blog-details" className="link clr-neutral-90 :clr-primary-key">Performing an SEO Audit: The Definitive Checklist</Link></h4>
                  <p className="clr-neutral-80 mb-6">With our AI Generators, the possibilities are endless. From generating compelling marketing copy designing stunning visuals to automating data analysis and creating personalizes user experiences.</p>
                  <ul className="list list-row flex-wrap gap-4">
                    <li>
                      <Link to="/about" className="blog-tag">SEO</Link>
                    </li>
                    <li>
                      <Link to="/about" className="blog-tag">Content Marketing</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination dot-pagination"></div>
      </div>
    </div>
  </div>

  {/*  Become a part of our facebook*/}
  <div className="blog-cta-area section-space-sm-bottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="p-10 bg-neutral-4 rounded-3 d-flex flex-wrap gap-4 align-items-center justify-content-lg-between justify-content-center">
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-8 text-md-start text-center">
              <div className="w-24 h-24 border border-primary rounded-3 d-flex justify-content-center align-items-center">
                <div className="bg-white clr-primary-key w-14 h-14 rounded-circle d-flex justify-content-center align-items-center fs-60">
                  <i className="bi bi-facebook"></i>
                </div>
              </div>
              <h4 className="h5 clr-neutral-90 fw-extrabold mb-0">Become a Part of <br/> Our Facebook <span className="clr-grad-4">Community.</span></h4>
            </div>
            <Link to="/login" className="py-4 px-8 clr-white bg-primary-key :bg-primary-30 rounded-2 link">Join the Group</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
};

export default PerformingSeo
