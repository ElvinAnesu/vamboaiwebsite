import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import aboutImage1 from "/img/about-img-3.png";
import aboutImage2 from "/img/about-img-4.png";
import aboutImage3 from "/img/about-img-5.png";
import aboutImage4 from "/img/about-img-6.png";
import aboutImage5 from "/img/about-img-7.png";
const AboutThree = () => {
	return (
		<div className="about-section-2 section-space-sm-y position-relative z-1">
			<div className="container">
				<div className="row g-4 align-items-center">
					<div className="col-lg-6">
						<div className="pe-xxl-15">
							<h3 className="clr-neutral-90 mb-6 animate-line-3d">
								A Better AI For Business Create Startup Speed of thought.
							</h3>
							<p className="mb-6 clr-neutral-80 animate-text-from-right">
								Brand voice is more than your message. It’s who you are. Train Jasper on your style
								guide, product catalogues, company facts, and brand identity in a matter of moments.
							</p>
							<ul className="list list-disc gap-3 mb-12 clr-neutral-80">
								<li className="fadeIn_bottom clr-neutral-80">Unified custody for both crypto & fiat</li>
								<li className="fadeIn_bottom clr-neutral-80">
									Instant on/off-ramps with automatic gains & losses calculations
								</li>
								<li className="fadeIn_bottom clr-neutral-80">Native Gnosis Safe integration</li>
							</ul>
							<div className="fadeIn_bottom">
								<Link
									to="/about"
									className="gradient-btn-2 position-relative z-1 link d-inline-flex justify-content-center align-items-center gap-2 px-6 py-4 rounded-pill fw-bold text-center"
								>
									<span className="d-inline-block"> More About Us </span>
									<span className="d-inline-block">
										<BsArrowRight />
									</span>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<swiper-container
							className="swiper about-ai-slider pe-6 pe-xxl-20 fadeIn_bottom"
							slidesPerView={1}
							mousewheel={true}
							scrollbar={{
								draggable: true,
								el: ".about-ai-slider .swiper-scrollbar",
								verticalClass: "swiper-scrollbar-vertical",
							}}
						>
							<swiper-slide>
								<div className="p-4 p-md-6 rounded-4 bg-black border border-neutral-10">
									<div className="p-4 p-md-6 rounded-4 gradient-card border border-neutral-variant-10 text-center">
										<img src={aboutImage1} alt="image" className="img-fluid" />
										<div className="pt-6">
											<h5 className="mb-0 clr-neutral-80 text-center">
												Watch Your Tone <br />
												Everywhere 👋
											</h5>
										</div>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div className="p-4 p-md-6 rounded-4 bg-black border border-neutral-10">
									<div className="p-4 p-md-6 rounded-4 gradient-card border border-neutral-variant-10 text-center">
										<img src={aboutImage2} alt="image" className="img-fluid" />
										<div className="pt-6">
											<h5 className="mb-0 clr-neutral-80 text-center">
												Watch Your Tone <br />
												Everywhere 👋
											</h5>
										</div>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div className="p-4 p-md-6 rounded-4 bg-black border border-neutral-10">
									<div className="p-4 p-md-6 rounded-4 gradient-card border border-neutral-variant-10 text-center">
										<img src={aboutImage3} alt="image" className="img-fluid" />
										<div className="pt-6">
											<h5 className="mb-0 clr-neutral-80 text-center">
												Watch Your Tone <br />
												Everywhere 👋
											</h5>
										</div>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div className="p-4 p-md-6 rounded-4 bg-black border border-neutral-10">
									<div className="p-4 p-md-6 rounded-4 gradient-card border border-neutral-variant-10 text-center">
										<img src={aboutImage4} alt="image" className="img-fluid" />
										<div className="pt-6">
											<h5 className="mb-0 clr-neutral-80 text-center">
												Watch Your Tone <br />
												Everywhere 👋
											</h5>
										</div>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div className="p-4 p-md-6 rounded-4 bg-black border border-neutral-10">
									<div className="p-4 p-md-6 rounded-4 gradient-card border border-neutral-variant-10 text-center">
										<img src={aboutImage5} alt="image" className="img-fluid" />
										<div className="pt-6">
											<h5 className="mb-0 clr-neutral-80 text-center">
												Watch Your Tone <br />
												Everywhere 👋
											</h5>
										</div>
									</div>
								</div>
							</swiper-slide>
						</swiper-container>
					</div>
				</div>
			</div>
		</div>
	);
};
export default AboutThree;
