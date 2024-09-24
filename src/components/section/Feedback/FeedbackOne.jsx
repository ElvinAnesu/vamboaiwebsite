import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import userImage from "/img/user.jpg";
import userImage1 from "/img/user-1.png";
import faqSectionShape1 from "/img/faq-shape-1.webp";
import faqSectionShape2 from "/img/faq-shape-2.webp";
const FeedbackOne = () => {
	return (
		<div className="faq-section-1 section-space-top section-space-sm-bottom">
			<div className="section-space-sm-bottom">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-8 col-xl-6">
							<div className="d-flex justify-content-center align-items-center gap-4 flex-wrap mb-4">
								<div className="w-30 subtitle-flush-x subtitle-flush-x--secondary subtitle_line_3"></div>
								<h6 className="mb-0 clr-secondary-key fs-18 fadein_1">Creative Approach</h6>
								<div className="w-30 subtitle-flush-x subtitle-flush-x--secondary subtitle_line_4"></div>
							</div>
							<h3 className="mb-0 clr-neutral-90 text-center animate-line-3d">
								What Creatives People Are Saying About Us
							</h3>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<Swiper
							loop={true}
							slidesPerView={"auto"}
							spaceBetween={24}
							speed={2000}
							autoplay={true}
							breakpoints={{
								768: {
									slidesPerView: 2,
									slidesPerGroup: 2,
								},
							}}
							modules={[Autoplay]}
							className="faq-1"
						>
							<SwiperSlide>
								<div className="d-flex flex-column justify-content-between px-8 py-12 rounded-1 border border-neutral-10 h-100">
									<p className="faq-1__para mb-6 clr-neutral-80">
										{`"Our AI image solutions have exceeded our customers' expectations. they
											appreciate the remarkable quality, efficiency, and creative Here's a
											opportunities. Here's a glimpse of their positive feedback and new found
											creative opportunities satisfaction.."`}
									</p>
									<div className="d-flex align-items-center justify-content-between flex-wrap gap-4">
										<div className="d-flex align-items-center gap-4 flex-wrap">
											<div className="avatar w-12 ratio ratio-1x1 flex-shrink-0">
												<img
													src={userImage}
													alt="image"
													className="img-fluid object-fit-cover rounded-circle"
												/>
											</div>
											<div className="flex-grow-1">
												<h6 className="mb-0 fs-18 clr-neutral-80">Mark Villomas</h6>
												<span className="d-block fs-14 clr-neutral-80">Designer</span>
											</div>
										</div>
										<ul className="list list-row gap-1">
											<li>
												<span className="d-inline-block text-warning">
													<i className="bi bi-star"></i>
												</span>
											</li>
											<li>
												<span className="d-inline-block text-warning">
													<i className="bi bi-star"></i>
												</span>
											</li>
											<li>
												<span className="d-inline-block text-warning">
													<i className="bi bi-star"></i>
												</span>
											</li>
											<li>
												<span className="d-inline-block text-warning">
													<i className="bi bi-star"></i>
												</span>
											</li>
											<li>
												<span className="d-inline-block text-warning">
													<i className="bi bi-star"></i>
												</span>
											</li>
										</ul>
									</div>
								</div>
							</SwiperSlide>

							<SwiperSlide>
								<div className="d-flex flex-column justify-content-between px-8 py-12 rounded-1 border border-neutral-10 h-100">
									<p className="faq-1__para mb-6 clr-neutral-80">
										{`"Our AI image solutions have exceeded our customers' expectations. they
											appreciate the remarkable quality, efficiency, and creative Here's a
											opportunities. Here's a glimpse of their positive feedback and new found
											creative opportunities satisfaction.."`}
									</p>
									<div className="d-flex align-items-center justify-content-between flex-wrap gap-4">
										<div className="d-flex align-items-center gap-4 flex-wrap">
											<div className="avatar w-12 ratio ratio-1x1 flex-shrink-0">
												<img
													src={userImage1}
													alt="image"
													className="img-fluid object-fit-cover rounded-circle"
												/>
											</div>
											<div className="flex-grow-1">
												<h6 className="mb-0 fs-18 clr-neutral-80">Mark Villomas</h6>
												<span className="d-block fs-14 clr-neutral-80">Designer</span>
											</div>
										</div>
										<ul className="list list-row gap-1">
											<li>
												<span className="d-inline-block text-warning">
													<i className="bi bi-star"></i>
												</span>
											</li>
											<li>
												<span className="d-inline-block text-warning">
													<i className="bi bi-star"></i>
												</span>
											</li>
											<li>
												<span className="d-inline-block text-warning">
													<i className="bi bi-star"></i>
												</span>
											</li>
											<li>
												<span className="d-inline-block text-warning">
													<i className="bi bi-star"></i>
												</span>
											</li>
											<li>
												<span className="d-inline-block text-warning">
													<i className="bi bi-star"></i>
												</span>
											</li>
										</ul>
									</div>
								</div>
							</SwiperSlide>

							<SwiperSlide>
								<div className="d-flex flex-column justify-content-between px-8 py-12 rounded-1 border border-neutral-10 h-100">
									<p className="faq-1__para mb-6 clr-neutral-80">
										{`"Our AI image solutions have exceeded our customers' expectations. they
											appreciate the remarkable quality, efficiency, and creative Here's a
											opportunities. Here's a glimpse of their positive feedback and new found
											creative opportunities satisfaction.."`}
									</p>
									<div className="d-flex align-items-center justify-content-between flex-wrap gap-4">
										<div className="d-flex align-items-center gap-4 flex-wrap">
											<div className="avatar w-12 ratio ratio-1x1 flex-shrink-0">
												<img
													src={userImage}
													alt="image"
													className="img-fluid object-fit-cover rounded-circle"
												/>
											</div>
											<div className="flex-grow-1">
												<h6 className="mb-0 fs-18 clr-neutral-80">Mark Villomas</h6>
												<span className="d-block fs-14 clr-neutral-80">Designer</span>
											</div>
										</div>
										<ul className="list list-row gap-1">
											<li>
												<span className="d-inline-block text-warning">
													<i className="bi bi-star"></i>
												</span>
											</li>
											<li>
												<span className="d-inline-block text-warning">
													<i className="bi bi-star"></i>
												</span>
											</li>
											<li>
												<span className="d-inline-block text-warning">
													<i className="bi bi-star"></i>
												</span>
											</li>
											<li>
												<span className="d-inline-block text-warning">
													<i className="bi bi-star"></i>
												</span>
											</li>
											<li>
												<span className="d-inline-block text-warning">
													<i className="bi bi-star"></i>
												</span>
											</li>
										</ul>
									</div>
								</div>
							</SwiperSlide>

							<SwiperSlide>
								<div className="d-flex flex-column justify-content-between px-8 py-12 rounded-1 border border-neutral-10 h-100">
									<p className="faq-1__para mb-6 clr-neutral-80">
										{`"Our AI image solutions have exceeded our customers' expectations. they
											appreciate the remarkable quality, efficiency, and creative Here's a
											opportunities. Here's a glimpse of their positive feedback and new found
											creative opportunities satisfaction.."`}
									</p>
									<div className="d-flex align-items-center justify-content-between flex-wrap gap-4">
										<div className="d-flex align-items-center gap-4 flex-wrap">
											<div className="avatar w-12 ratio ratio-1x1 flex-shrink-0">
												<img
													src={userImage1}
													alt="image"
													className="img-fluid object-fit-cover rounded-circle"
												/>
											</div>
											<div className="flex-grow-1">
												<h6 className="mb-0 fs-18 clr-neutral-80">Mark Villomas</h6>
												<span className="d-block fs-14 clr-neutral-80">Designer</span>
											</div>
										</div>
										<ul className="list list-row gap-1">
											<li>
												<span className="d-inline-block text-warning">
													<i className="bi bi-star"></i>
												</span>
											</li>
											<li>
												<span className="d-inline-block text-warning">
													<i className="bi bi-star"></i>
												</span>
											</li>
											<li>
												<span className="d-inline-block text-warning">
													<i className="bi bi-star"></i>
												</span>
											</li>
											<li>
												<span className="d-inline-block text-warning">
													<i className="bi bi-star"></i>
												</span>
											</li>
											<li>
												<span className="d-inline-block text-warning">
													<i className="bi bi-star"></i>
												</span>
											</li>
										</ul>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
			<img src={faqSectionShape1} alt="image" className="img-fluid faq-section-1__img faq-section-1__img--1" />
			<img src={faqSectionShape2} alt="image" className="img-fluid faq-section-1__img faq-section-1__img--2" />
		</div>
	);
};
export default FeedbackOne;
