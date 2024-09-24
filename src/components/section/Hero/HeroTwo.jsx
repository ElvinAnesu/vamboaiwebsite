import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import heroImg1 from "/img/hero-2-img-1.png";
import heroImg2 from "/img/hero-2-img-2.png";
import heroThumb1 from "/img/hero-2-thumb-1.png";
import heroThumb2 from "/img/hero-2-thumb-2.png";
import heroShape from "/img/hero-2-shape.png";

const HeroTwo = () => {
	return (
		<div className="hero-2">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="p-md-6 rounded-4 bg-black">
							<div className="section-space-sm-y px-4 px-md-9 rounded-4 bg-neutral-4 position-relative z-1 overflow-hidden">
								<div className="row g-4 justify-content-center align-items-center">
									<div className="col-lg-6">
										<h2 className="mb-9 clr-white fw-extrabold hero-2__title">
											<span className="d-block animate-line-3d">
												AI-Powered Idea Presentation Of The Future
											</span>
										</h2>
										<p className="mb-9 max-text-40 clr-white fw-semibold animate-text-from-right">
											Finances built for the future. Meet the fastest, most secure, and compliant
											platform
										</p>
										<div className="fadein_bottom_17s fadeIn_bottom">
											<Link
												to="/login"
												className="gradient-btn-2 position-relative z-1 link d-inline-flex justify-content-center align-items-center gap-2 px-6 py-4 rounded-pill fw-bold text-center"
											>
												<span className="d-inline-block"> Join Community </span>
												<span className="d-inline-block">
													<BsArrowRight />
												</span>
											</Link>
										</div>
									</div>
									<div className="col-lg-6">
										<swiper-container
											thumbs-swiper=".my-thumbs"
											slides-per-view="1"
											speed="500"
											loop="true"
											effect="fade"
											spaceBetween={16}
											autoplay={true}
										>
											<swiper-slide>
												<img src={heroImg1} alt="image" className="img-fluid" />
											</swiper-slide>
											<swiper-slide>
												<img src={heroImg2} alt="image" className="img-fluid" />
											</swiper-slide>
										</swiper-container>
									</div>
									<div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
										<swiper-container
											class="my-thumbs hero-2-slider-thumb"
											slides-per-view="2"
											spaceBetween={8}
										>
											<swiper-slide>
												<div className="hero-2-slider-thumb__img">
													<img
														src={heroThumb1}
														alt="image"
														className="img-fluid flex-shrink-0"
													/>
												</div>
											</swiper-slide>
											<swiper-slide>
												<div className="hero-2-slider-thumb__img">
													<img
														src={heroThumb2}
														alt="image"
														className="img-fluid flex-shrink-0"
													/>
												</div>
											</swiper-slide>
										</swiper-container>
									</div>
								</div>
								<img
									src={heroShape}
									alt="image"
									className="img-fluid position-absolute top-0 start-0 bottom-0 h-100 object-fit-cover z-n1"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default HeroTwo;
