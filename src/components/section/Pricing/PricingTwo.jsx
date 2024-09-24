import { Link } from "react-router-dom";
import { BsArrowRight, BsCheck2 } from "react-icons/bs";
import pricingImage1 from "/img/icon-star-gradient-sm.png";
import pricingImage2 from "/img/pricing-section-shape-2.png";
import { useState } from "react";
const PricingTwo = () => {
	const [pricing, setPricing] = useState(false);
	const priceToggle = () => {
		setPricing((prevPricing) => !prevPricing);
	};
	return (
		<div className="section-space-sm-y position-relative z-1">
			<div className="section-space-sm-bottom">
				<div className="container">
					<div className="row g-4 align-items-center justify-content-between">
						<div className="col-md-4">
							<h3 className="mb-0 clr-neutral-90 animate-line-3d">Flexible Pricing</h3>
						</div>
						<div className="col-md-4">
							<div className="d-flex justify-content-center align-items-center gap-6 fadeIn_bottom">
								<button
									type="button"
									className={`flexible-pricing-btn pricing-btn position-relative z-1 link d-inline-flex justify-content-center align-items-center gap-2 px-5 py-2 rounded-pill fw-bold text-center ${
										pricing ? "" : "active"
									}`}
									onClick={priceToggle}
								>
									Monthly
								</button>
								<button
									type="button"
									className={`flexible-pricing-btn pricing-btn position-relative z-1 link d-inline-flex justify-content-center align-items-center gap-2 px-5 py-2 rounded-pill fw-bold text-center ${
										pricing ? "active" : ""
									}`}
									onClick={priceToggle}
								>
									Yearly
								</button>
							</div>
						</div>
						<div className="col-md-4 col-xxl-3">
							<div className="overflow-hidden bg-neutral-10 rounded-2 py-4 fadeIn_bottom">
								<div className="scroller-x" data-direction="left" data-speed="fast">
									<ul className="list list-row align-items-center gap-4 scroller-x__list">
										<li>
											<p className="mb-0 clr-neutral-90">Take Your Visuals to the</p>
										</li>
										<li>
											<img src={pricingImage1} alt="image" className="img-fluid" />
										</li>
										<li>
											<p className="mb-0 clr-neutral-90">Next Level</p>
										</li>
										<li>
											<img src={pricingImage1} alt="image" className="img-fluid" />
										</li>
										<li>
											<p className="mb-0 clr-neutral-90">AI Image Generator</p>
										</li>
										<li>
											<img src={pricingImage1} alt="image" className="img-fluid" />
										</li>
										<li>
											<p className="mb-0 clr-neutral-90">AI Image Generator</p>
										</li>
										<li>
											<img src={pricingImage1} alt="image" className="img-fluid" />
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="p-4 p-md-6 p-xl-10 rounded-4 bg-black border border-neutral-10 fadeIn_bottom">
							<div className="p-4 p-md-8 p-xl-10 py-xl-12 rounded-4 bg-neutral-4 border border-neutral-variant-20">
								<div className="row g-4">
									<div className="col-md-4 fadein_bottom_21">
										<span className="d-block mb-3 fs-18 fw-bold clr-neutral-90">Free Plan</span>
										<span className="d-block mb-10 fs-14 clr-neutral-80">
											Start with 3,000 word limit
										</span>
										{pricing ? (
											<h4 className="mb-10 clr-neutral-90 yearly-price">$0/y</h4>
										) : (
											<h4 className="mb-10 clr-neutral-90 monthly-price">$0/mo</h4>
										)}

										<ul className="list gap-4 mb-10">
											<li>
												<div className="d-flex gap-3">
													<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
														<BsCheck2 />
													</span>
													<span className="d-block clr-neutral-80">3,000 Words / Month</span>
												</div>
											</li>
											<li>
												<div className="d-flex gap-3">
													<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
														<BsCheck2 />
													</span>
													<span className="d-block clr-neutral-80">Limited Use per user</span>
												</div>
											</li>
											<li>
												<div className="d-flex gap-3">
													<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
														<BsCheck2 />
													</span>
													<span className="d-block clr-neutral-80"> Unlimited Projects </span>
												</div>
											</li>
											<li>
												<div className="d-flex gap-3">
													<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
														<BsCheck2 />
													</span>
													<span className="d-block clr-neutral-80">Volume Based Pricing</span>
												</div>
											</li>
										</ul>
										<Link
											to="/"
											className="link d-inline-block px-6 py-2 rounded-pill fw-bold text-center bg-neutral-10 :bg-primary-key clr-white"
										>
											<span className="d-inline-block"> Join this Plan </span>
											<span className="d-inline-block">
												<BsArrowRight />
											</span>
										</Link>
									</div>
									<div className="col-md-4 flexible-pricing-card fadein_bottom_21">
										<div className="d-flex align-items-center flex-wrap gap-4 mb-10">
											<div className="flex-shrink-0">
												<span className="d-block mb-3 fs-18 fw-bold clr-neutral-90">
													Standard Plan
												</span>
												<span className="d-block fs-14 clr-neutral-80">
													Start with 3,000 word limit
												</span>
											</div>
											<Link
												to="/"
												className="gradient-btn-2 position-relative z-1 link d-inline-block px-4 py-1 rounded-pill fs-12 text-center"
											>
												Most Popular
											</Link>
										</div>
										{pricing ? (
											<h4 className="mb-10 clr-neutral-90 yearly-price">$588/y</h4>
										) : (
											<h4 className="mb-10 clr-neutral-90 monthly-price">$49/mo</h4>
										)}
										<ul className="list gap-4 mb-10">
											<li>
												<div className="d-flex gap-3">
													<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
														<BsCheck2 />
													</span>
													<span className="d-block clr-neutral-80">3,000 Words / Month</span>
												</div>
											</li>
											<li>
												<div className="d-flex gap-3">
													<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
														<BsCheck2 />
													</span>
													<span className="d-block clr-neutral-80">Limited Use per user</span>
												</div>
											</li>
											<li>
												<div className="d-flex gap-3">
													<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
														<BsCheck2 />
													</span>
													<span className="d-block clr-neutral-80">Unlimited Projects</span>
												</div>
											</li>
											<li>
												<div className="d-flex gap-3">
													<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
														<BsCheck2 />
													</span>
													<span className="d-block clr-neutral-80">Volume Based Pricing</span>
												</div>
											</li>
										</ul>
										<Link
											to="/"
											className="link d-inline-block px-6 py-2 rounded-pill fw-bold text-center bg-neutral-10 :bg-primary-key clr-white"
										>
											<span className="d-inline-block"> Join this Plan </span>
											<span className="d-inline-block">
												<BsArrowRight />
											</span>
										</Link>
									</div>
									<div className="col-md-4 fadein_bottom_21">
										<span className="d-block mb-3 fs-18 fw-bold clr-neutral-90">
											Enterprise plan
										</span>
										<span className="d-block mb-10 fs-14 clr-neutral-80">
											Start with 3,000 word limit
										</span>
										{pricing ? (
											<h4 className="mb-10 clr-neutral-90 yearly-price">$888/y</h4>
										) : (
											<h4 className="mb-10 clr-neutral-90 monthly-price">$56/mo</h4>
										)}
										<ul className="list gap-4 mb-10">
											<li>
												<div className="d-flex gap-3">
													<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
														<BsCheck2 />
													</span>
													<span className="d-block clr-neutral-80">3,000 Words / Month</span>
												</div>
											</li>
											<li>
												<div className="d-flex gap-3">
													<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
														<BsCheck2 />
													</span>
													<span className="d-block clr-neutral-80">Limited Use per user</span>
												</div>
											</li>
											<li>
												<div className="d-flex gap-3">
													<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
														<BsCheck2 />
													</span>
													<span className="d-block clr-neutral-80">Unlimited Projects</span>
												</div>
											</li>
											<li>
												<div className="d-flex gap-3">
													<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
														<BsCheck2 />
													</span>
													<span className="d-block clr-neutral-80">Volume Based Pricing</span>
												</div>
											</li>
										</ul>
										<Link
											to="/"
											className="link d-inline-block px-6 py-2 rounded-pill fw-bold text-center bg-neutral-10 :bg-primary-key clr-white"
										>
											<span className="d-inline-block"> Join this Plan </span>
											<span className="d-inline-block">
												<BsArrowRight />
											</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<img src={pricingImage2} alt="image" className="img-fluid position-absolute position-center pointer-none" />
		</div>
	);
};
export default PricingTwo;
