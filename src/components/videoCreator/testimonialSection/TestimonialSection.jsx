import React, { useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
const TestimonialSection3 = () => {
    const prevRef  = useRef(null);
    const nextRef = useRef(null)
  return (
    <div className="testimonial-section-3 section-space-y">
      <div className="section-space-sm-bottom">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-between">
            <div className="col-md-6 col-xl-5">
              <div className="d-flex align-items-center gap-3 mb-2 fadeIn_bottom">
                <span className="d-inline-block flex-shrink-0">
                  <img src="/img/icon-subtitle.png" alt="image" className="img-fluid" />
                </span>
                <span className="d-inline-block clr-secondary-key ff-1 fw-bold fs-18"> Testimonial </span>
              </div>
              <h3 className="mb-0 clr-neutral-90 animate-line-3d"> What Creative People Are Saying </h3>
            </div>
            <div className="col-md-6 col-xl-5 col-xxl-4">
              <p className="mb-0 clr-neutral-80 animate-text-from-right"> Streamline your video creation process by embedding your videos into your authoring tool, LMS, LXP & more. Usually, our colleagues don't jump in the air when they but that we haven't seen before. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="testimonial-slider-3">
              <div className="swiper testimonial-slider-3__is">
              <Swiper className="swiper-wrapper" modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={13}
      breakpoints={{
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
      }}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current
      }}
       onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
         }}
    //   navigation
    //   pagination={{ clickable: true }}
    >
                
                  <SwiperSlide className="swiper-slide">
                    <div className="d-flex flex-column justify-content-between px-8 py-10 rounded-1 top-shadow bg-neutral-10 h-100">
                      <p className="mb-12 ff-1 fw-medium clr-neutral-80"> "Our AI image solutions have exceeded our customers' expectations. they appreciate the remarkable quality, efficiency, and creative Here's a opportunities. Here's a glimpse of their positive feedback and new found creative opportunities satisfaction.." </p>
                      <div className="d-flex align-items-center gap-4 flex-wrap">
                        <div className="avatar w-12 ratio ratio-1x1 flex-shrink-0">
                          <img src="/img/user-1.jpg" alt="image" className="img-fluid object-fit-cover rounded-circle" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fs-18 clr-neutral-90"> Mark Villomas </h6>
                          <span className="d-block fs-14 clr-neutral-80"> Designer </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="d-flex flex-column justify-content-between px-8 py-10 rounded-1 top-shadow bg-neutral-10 h-100">
                      <p className="mb-12 ff-1 fw-medium clr-neutral-80"> "Our AI image solutions have exceeded our customers' expectations. they appreciate the remarkable quality, efficiency, and creative Here's a opportunities. Here's a glimpse of their positive feedback and new found creative opportunities satisfaction.." </p>
                      <div className="d-flex align-items-center gap-4 flex-wrap">
                        <div className="avatar w-12 ratio ratio-1x1 flex-shrink-0">
                          <img src="/img/user-2.jpg" alt="image" className="img-fluid object-fit-cover rounded-circle" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fs-18 clr-neutral-90"> Peter Parker </h6>
                          <span className="d-block fs-14 clr-neutral-80"> Designer </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="d-flex flex-column justify-content-between px-8 py-10 rounded-1 top-shadow bg-neutral-10 h-100">
                      <p className="mb-12 ff-1 fw-medium clr-neutral-80"> "Our AI image solutions have exceeded our customers' expectations. they appreciate the remarkable quality, efficiency, and creative Here's a opportunities. Here's a glimpse of their positive feedback and new found creative opportunities satisfaction.." </p>
                      <div className="d-flex align-items-center gap-4 flex-wrap">
                        <div className="avatar w-12 ratio ratio-1x1 flex-shrink-0">
                          <img src="/img/user-3.jpg" alt="image" className="img-fluid object-fit-cover rounded-circle" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fs-18 clr-neutral-90"> Steve Rogers </h6>
                          <span className="d-block fs-14 clr-neutral-80"> Designer </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="d-flex flex-column justify-content-between px-8 py-10 rounded-1 top-shadow bg-neutral-10 h-100">
                      <p className="mb-12 ff-1 fw-medium clr-neutral-80"> "Our AI image solutions have exceeded our customers' expectations. they appreciate the remarkable quality, efficiency, and creative Here's a opportunities. Here's a glimpse of their positive feedback and new found creative opportunities satisfaction.." </p>
                      <div className="d-flex align-items-center gap-4 flex-wrap">
                        <div className="avatar w-12 ratio ratio-1x1 flex-shrink-0">
                          <img src="/img/user-5.jpg" alt="image" className="img-fluid object-fit-cover rounded-circle" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fs-18 clr-neutral-90"> Tony Stark </h6>
                          <span className="d-block fs-14 clr-neutral-80"> Designer </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="d-flex flex-column justify-content-between px-8 py-10 rounded-1 top-shadow bg-neutral-10 h-100">
                      <p className="mb-12 ff-1 fw-medium clr-neutral-80"> "Our AI image solutions have exceeded our customers' expectations. they appreciate the remarkable quality, efficiency, and creative Here's a opportunities. Here's a glimpse of their positive feedback and new found creative opportunities satisfaction.." </p>
                      <div className="d-flex align-items-center gap-4 flex-wrap">
                        <div className="avatar w-12 ratio ratio-1x1 flex-shrink-0">
                          <img src="/img/user-6.jpg" alt="image" className="img-fluid object-fit-cover rounded-circle" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fs-18 clr-neutral-90"> Bruce Wayne </h6>
                          <span className="d-block fs-14 clr-neutral-80"> Designer </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
               
</Swiper>

                {/* siper ............... */}
              </div>
              <div className="d-flex justify-content-end align-items-center gap-4 mt-6">
                <button ref={prevRef} type="button" className="testimonial-slider-3__nav-prev">
                  <i className="bi bi-arrow-left"></i>
                </button>
                <button ref={nextRef} type="button" className="testimonial-slider-3__nav-next">
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection3;
