import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Benefit = () => {
  return (
    <>
        <div className="ai-benefit-section section-space-sm-top section-space-bottom">
      <Container>
        <div className="ai-benefit-wrapper">
          <div className="text-lg-end pe-lg-20 mb-6">
            <span className="fs-20 fw-semibold clr-neutral-22">Benefit Use WriteBot AI </span>
          </div>
          <Row className="gy-4">
            <Col lg={5}>
              <img src="/img/ai-benefit-main.png" alt="image" className="img-fluid" />
            </Col>
            <Col lg={7}>
              <div className="list-slider-wrapper">
                <div className="list-slider-wrapper-inner">
                  <Swiper className="listSlider">
                    {['Cost Savings: Reduce operational costs by minimizing',
                      'Smart Decision-Making: Utilize data-driven insights to make informed.',
                      'Customer Service Enhancement: Improve customer support',
                      'Innovation Driver: Foster innovation by leveraging AI for the development',
                      'Continuous Availability: Ensure 24/7 service and support with AI systems'
                      
                    ].map((benefit, index) => (
                      <SwiperSlide key={index}>
                        <i className="bi bi-check2"></i>
                        <span>{benefit}</span>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </Col>
          </Row>
          <img src="/img/ai-benefit-line-top.png" alt="image" className="img-fluid ai-benefit-line ai-benefit-line-top" />
          <img src="/img/ai-benefit-line-bottom.png" alt="image" className="img-fluid ai-benefit-line ai-benefit-line-bottom" />
          <img src="/img/ai-benefit-line-left.png" alt="image" className="img-fluid ai-benefit-line ai-benefit-line-left" />
          <img src="/img/ai-benefit-line-right.png" alt="image" className="img-fluid ai-benefit-line ai-benefit-line-right" />
        </div>
      </Container>
      <img src="/img/ai-benefit-shape-left.png" alt="image" className="img-fluid ai-benefit-shape-left" />
    </div>
    </>
  )
};

export default Benefit
