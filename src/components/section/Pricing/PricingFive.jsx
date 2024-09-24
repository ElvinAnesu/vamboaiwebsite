import { Link } from "react-router-dom";
import { BsArrowRight, BsCheck2 } from "react-icons/bs";
import pricingImage1 from "/img/vambologo.png";
import pricingImage2 from "/img/home-5-pricing-bottom.webp";
import pricingImage3 from "/img/list-star.png";
import pricingImage4 from "/img/home-5-pricing-top.png";
import pricingImage5 from "/img/home-5-left-shape.png";
import pricingImage6 from "/img/home-5-right-shape.png";
const PricingFive = () => {
	return (
		<section className="breadcrumb-section">
			<div className="container">
				<div className="pricing-section-4-wrapper rounded-4 surface-bright section-space-top section-space-bottom position-relative overflow-hidden px-5 px-lg-10 px-xxl-20">
					<div className="row gy-4 align-items-center justify-content-between">
						<div className="col-lg-6">
							<h3 className="fw-extrabold mb-0 animate-line-3d">
								Pick a Plan Start{" "}
								<span style={{ color: "#AB1515" }}>Creating Price Table</span>
							</h3>
						</div>
					</div>

					<div className="mt-10">
						<div className="row justify-content-center">
							<div className="col-xxl-11">
								<div className="row gy-4">
									<div className="col-lg-4">
										<div className="bg-white rounded-5 p-4 p-md-10 fadein_bottom_31">
											<h6 className="mb-3"> Free Plan </h6>

											<h4
												className="monthly-price mb-10 clr-primary-10 fw-extrabold"
												style={{ color: "#AB1515" }}
											>
												{" "}
												$0/mo{" "}
											</h4>
											<Link
												to="/login"
												className="link d-inline-flex justify-content-center align-items-center gap-2 mb-10 py-2 px-4 border rounded-3 fs-14 fw-bold text-center clr-white :border-opacity-0"
												style={{ backgroundColor: "#AB1515" }}
											>
												<span className="d-block"> Try For Free </span>
												<span className="d-block fs-10">
													<BsArrowRight />
												</span>
											</Link>
											<ul className="list gap-4">
												<li>
													<div className="d-flex gap-3">
														<span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-10">
															<BsCheck2 />
														</span>
														<span className="d-block fs-14 clr-primary-10 fw-medium">
															Language translation
														</span>
													</div>
												</li>
												<li>
													<div className="d-flex gap-3">
														<span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-10">
															<BsCheck2 />
														</span>
														<span className="d-block fs-14 clr-primary-10 fw-medium">
															Language detection
														</span>
													</div>
												</li>
												<li>
													<div className="d-flex gap-3">
														<span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-10">
															<BsCheck2 />
														</span>
														<span className="d-block fs-14 clr-primary-10 fw-medium">
															Unlimited conversations
														</span>
													</div>
												</li>
											</ul>
										</div>
									</div>
									<div className="col-lg-4">
										<div className="bg-white rounded-5 p-4 p-md-10 fadein_bottom_31 position-relative z-1 overflow-hidden">
											<span className="pricing-label bg-secondary-40">
												{" "}
												Popular Plan{" "}
											</span>
											<h6 className="mb-3">Popular Plan</h6>

											<h4
												className="monthly-price mb-10 clr-primary-10 fw-extrabold"
												style={{ color: "#AB1515" }}
											>
												{" "}
												$10/mo{" "}
											</h4>
											<Link
												to="/login"
												className="link d-inline-flex justify-content-center align-items-center gap-2 mb-10 py-2 px-4 border rounded-3 fs-14 fw-bold text-center clr-white :border-opacity-0"
												style={{ backgroundColor: "#AB1515" }}
											>
												<span className="d-block"> Try For Free </span>
												<span className="d-block fs-10">
													<BsArrowRight />
												</span>
											</Link>
											<ul className="list gap-4">
												<li>
													<div className="d-flex gap-3">
														<span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-10">
															<BsCheck2 />
														</span>
														<span className="d-block fs-14 clr-primary-10 fw-medium">
															Language translation
														</span>
													</div>
												</li>
												<li>
													<div className="d-flex gap-3">
														<span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-10">
															<BsCheck2 />
														</span>
														<span className="d-block fs-14 clr-primary-10 fw-medium">
															Language detection
														</span>
													</div>
												</li>
												<li>
													<div className="d-flex gap-3">
														<span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-10">
															<BsCheck2 />
														</span>
														<span className="d-block fs-14 clr-primary-10 fw-medium">
															Unlimited conversations
														</span>
													</div>
												</li>
												<li>
													<div className="d-flex gap-3">
														<span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-10">
															<BsCheck2 />
														</span>
														<span className="d-block fs-14 clr-primary-10 fw-medium">
															API Access
														</span>
													</div>
												</li>
											</ul>
										</div>
									</div>
									
								</div>

								
							</div>
						</div>
					</div>

					<img
						src={pricingImage4}
						alt="image"
						className="img-fluid pricing-section-4-top-img position-absolute"
					/>
				</div>
			</div>

			<img
				src={pricingImage5}
				alt="image"
				className="img-fluid pricing-section-shape pricing-section-shape-left"
			/>

			<img
				src={pricingImage6}
				alt="image"
				className="img-fluid pricing-section-shape pricing-section-shape-right"
			/>
		</section>
	);
};
export default PricingFive;
