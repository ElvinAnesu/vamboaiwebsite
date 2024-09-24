import { Link } from "react-router-dom";
import { BsArrowRightShort, BsCheck2 } from "react-icons/bs";
import pricingImage1 from "/img/av-1.png";
import pricingImage2 from "/img/av-2.png";
import pricingImage3 from "/img/av-3.png";
import pricingImage4 from "/img/gradient-bottom-half-border-lg.png";
import pricingImage5 from "/img/gradient-top-half-border-lg.png";
import pricingImage6 from "/img/gradient-bottom-half-border-lg.png";
import pricingImage7 from "/img/pricing-section-3-shape-1.png";

const PricingFour = () => {
	return (
		<div className="pricing-section-3 section-space-sm-y">
			<div className="section-space-xsm-bottom">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="pricing-section-3__avatar-group">
								<ul className="list list-row align-items-center avatar--group">
									<li className="fadein_bottom_27">
										<div className="avatar w-10 ratio ratio-1x1 rounded-circle">
											<img
												src={pricingImage1}
												alt="image"
												className="img-fluid object-fit-cover rounded-circle"
											/>
										</div>
									</li>
									<li className="fadein_bottom_27">
										<div className="avatar w-10 ratio ratio-1x1 rounded-circle">
											<img
												src={pricingImage2}
												alt="image"
												className="img-fluid object-fit-cover rounded-circle"
											/>
										</div>
									</li>
									<li className="fadein_bottom_27">
										<div className="avatar w-10 ratio ratio-1x1 rounded-circle">
											<img
												src={pricingImage3}
												alt="image"
												className="img-fluid object-fit-cover rounded-circle"
											/>
										</div>
									</li>
									<li className="fadein_bottom_27">
										<div className="avatar w-10 ratio ratio-1x1 rounded-circle">
											<img
												src={pricingImage2}
												alt="image"
												className="img-fluid object-fit-cover rounded-circle"
											/>
										</div>
									</li>
									<li className="fadein_bottom_27">
										<div className="avatar w-10 ratio ratio-1x1 primary-container on-primary-container fs-18 lh-1 text-center fw-semibold rounded-circle">
											+5
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="pricing-section-3__title section-space-sm-bottom">
				<div className="container">
					<div className="row">
						<div className="col-xl-7">
							<h3 className="mb-0 clr-neutral-90 fw-extrabold animate-line-3d">
								The right plans for the powerful tool for
								<span className="d-inline-block gradient-flow gradient-flow--start">right price</span>
							</h3>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row g-4">
					<div className="col-md-4 featured-lists fadeIn_bottom">
						<div className="p-4 bg-black rounded-5 border border-dashed border-neutral-80 border-opacity-4 position-relative z-1">
							<div className="top-shadow bg-neutral-6 p-4 p-lg-6 p-xl-10 rounded-4">
								<div className="mb-10 text-center">
									<h6 className="mb-3 fs-18 clr-neutral-90">Free Plan</h6>
									<span className="d-block mb-3 fs-14 clr-neutral-80">
										Start with 3,000 word limit
									</span>
									<h4 className="mb-10 clr-neutral-90">$0/mo</h4>
									<Link
										to="/login"
										className="link d-inline-flex gap-1 align-items-center py-2 px-4 rounded-1 clr-white bg-neutral-variant-30 :bg-primary-key"
									>
										<span className="d-inline-block fs-14 fw-semibold ">Try For Free</span>
										<span className="d-inline-block">
											<BsArrowRightShort />
										</span>
									</Link>
								</div>
								<ul className="list gap-5">
									<li>
										<div className="d-flex gap-3">
											<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-solid border-neutral-variant-30 bg-neutral-variant-30 bg-opacity-1 clr-neutral-variant-30">
												<BsCheck2 />
											</span>
											<span className="d-block clr-neutral-80 fs-14">
												Suitable for blog posts, simple articles
											</span>
										</div>
									</li>
									<li>
										<div className="d-flex gap-3">
											<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-solid border-neutral-variant-30 bg-neutral-variant-30 bg-opacity-1 clr-neutral-variant-30">
												<BsCheck2 />
											</span>
											<span className="d-block clr-neutral-80 fs-14">
												Standard grammar and spelling checks
											</span>
										</div>
									</li>
									<li>
										<div className="d-flex gap-3">
											<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-solid border-neutral-variant-30 bg-neutral-variant-30 bg-opacity-1 clr-neutral-variant-30">
												<BsCheck2 />
											</span>
											<span className="d-block clr-neutral-80 fs-14"> Basic Models </span>
										</div>
									</li>
									<li>
										<div className="d-flex gap-3">
											<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-solid border-neutral-variant-30 bg-neutral-variant-30 bg-opacity-1 clr-neutral-variant-30">
												<BsCheck2 />
											</span>
											<span className="d-block clr-neutral-80 fs-14">100 Captured Contacts </span>
										</div>
									</li>
									<li>
										<div className="d-flex gap-3">
											<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-solid border-neutral-variant-30 bg-neutral-variant-30 bg-opacity-1 clr-neutral-variant-30">
												<BsCheck2 />
											</span>
											<span className="d-block clr-neutral-80 fs-14"> Basic Support </span>
										</div>
									</li>
								</ul>
							</div>
							<img
								src={pricingImage4}
								alt="image"
								className="img-fluid w-100 position-absolute start-0 end-0 bottom-0 z-n1"
							/>
						</div>
					</div>
					<div className="col-md-4 featured-lists fadeIn_bottom">
						<div className="p-4 bg-black rounded-5 border border-dashed border-neutral-80 border-opacity-4 position-relative z-1">
							<div className="top-shadow bg-neutral-6 p-4 p-lg-6 p-xl-10 rounded-4">
								<div className="mb-10 text-center">
									<h6 className="mb-3 fs-18 clr-neutral-90">Standard Plan</h6>
									<span className="d-block mb-3 fs-14 clr-neutral-80">
										Start with 3,000 word limit
									</span>
									<h4 className="mb-10 clr-neutral-90">$12/mo</h4>
									<Link
										to="/login"
										className="gradient-btn-3 position-relative z-1 link d-inline-flex gap-2 align-items-center justify-content-center px-6 py-2 rounded-1 fw-bold text-center"
									>
										<span className="d-inline-block flex-shrink-0"> Try For Free </span>
										<span className="d-inline-block">
											<BsArrowRightShort />
										</span>
									</Link>
								</div>
								<ul className="list gap-5">
									<li>
										<div className="d-flex gap-3">
											<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-solid border-neutral-variant-30 bg-neutral-variant-30 bg-opacity-1 clr-neutral-variant-30">
												<BsCheck2 />
											</span>
											<span className="d-block clr-neutral-80 fs-14">
												Suitable for blog posts, simple articles
											</span>
										</div>
									</li>
									<li>
										<div className="d-flex gap-3">
											<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-solid border-neutral-variant-30 bg-neutral-variant-30 bg-opacity-1 clr-neutral-variant-30">
												<BsCheck2 />
											</span>
											<span className="d-block clr-neutral-80 fs-14">
												Standard grammar and spelling checks
											</span>
										</div>
									</li>
									<li>
										<div className="d-flex gap-3">
											<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-solid border-neutral-variant-30 bg-neutral-variant-30 bg-opacity-1 clr-neutral-variant-30">
												<BsCheck2 />
											</span>
											<span className="d-block clr-neutral-80 fs-14"> Basic Models </span>
										</div>
									</li>
									<li>
										<div className="d-flex gap-3">
											<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-solid border-neutral-variant-30 bg-neutral-variant-30 bg-opacity-1 clr-neutral-variant-30">
												<BsCheck2 />
											</span>
											<span className="d-block clr-neutral-80 fs-14">100 Captured Contacts</span>
										</div>
									</li>
									<li>
										<div className="d-flex gap-3">
											<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-solid border-neutral-variant-30 bg-neutral-variant-30 bg-opacity-1 clr-neutral-variant-30">
												<BsCheck2 />
											</span>
											<span className="d-block clr-neutral-80 fs-14"> Basic Support </span>
										</div>
									</li>
								</ul>
							</div>
							<img
								src={pricingImage5}
								alt="image"
								className="img-fluid w-100 position-absolute start-0 end-0 top-0 z-n1"
							/>
						</div>
					</div>
					<div className="col-md-4 featured-lists fadeIn_bottom">
						<div className="p-4 bg-black rounded-5 border border-dashed border-neutral-80 border-opacity-4 position-relative z-1">
							<div className="top-shadow bg-neutral-6 p-4 p-lg-6 p-xl-10 rounded-4">
								<div className="mb-10 text-center">
									<h6 className="mb-3 fs-18 clr-neutral-90">Premium Plan</h6>
									<span className="d-block mb-3 fs-14 clr-neutral-80">
										Start with 3,000 word limit
									</span>
									<h4 className="mb-10 clr-neutral-90">$18/mo</h4>
									<Link
										to="/login"
										className="link d-inline-flex gap-1 align-items-center py-2 px-4 rounded-1 clr-white bg-neutral-variant-30 :bg-primary-key"
									>
										<span className="d-inline-block fs-14 fw-semibold ">Try For Free</span>
										<span className="d-inline-block">
											<BsArrowRightShort />
										</span>
									</Link>
								</div>
								<ul className="list gap-5">
									<li>
										<div className="d-flex gap-3">
											<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-solid border-neutral-variant-30 bg-neutral-variant-30 bg-opacity-1 clr-neutral-variant-30">
												<BsCheck2 />
											</span>
											<span className="d-block clr-neutral-80 fs-14">
												Suitable for blog posts, simple articles
											</span>
										</div>
									</li>
									<li>
										<div className="d-flex gap-3">
											<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-solid border-neutral-variant-30 bg-neutral-variant-30 bg-opacity-1 clr-neutral-variant-30">
												<BsCheck2 />
											</span>
											<span className="d-block clr-neutral-80 fs-14">
												Standard grammar and spelling checks
											</span>
										</div>
									</li>
									<li>
										<div className="d-flex gap-3">
											<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-solid border-neutral-variant-30 bg-neutral-variant-30 bg-opacity-1 clr-neutral-variant-30">
												<BsCheck2 />
											</span>
											<span className="d-block clr-neutral-80 fs-14"> Basic Models </span>
										</div>
									</li>
									<li>
										<div className="d-flex gap-3">
											<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-solid border-neutral-variant-30 bg-neutral-variant-30 bg-opacity-1 clr-neutral-variant-30">
												<BsCheck2 />
											</span>
											<span className="d-block clr-neutral-80 fs-14">100 Captured Contacts</span>
										</div>
									</li>
									<li>
										<div className="d-flex gap-3">
											<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-solid border-neutral-variant-30 bg-neutral-variant-30 bg-opacity-1 clr-neutral-variant-30">
												<BsCheck2 />
											</span>
											<span className="d-block clr-neutral-80 fs-14"> Basic Support </span>
										</div>
									</li>
								</ul>
							</div>
							<img
								src={pricingImage6}
								alt="image"
								className="img-fluid w-100 position-absolute start-0 end-0 bottom-0 z-n1"
							/>
						</div>
					</div>
				</div>
			</div>
			<img
				src={pricingImage7}
				alt="image"
				className="img-fluid d-none d-xl-block position-absolute top-0 start-0 pointer-none z-n1"
			/>
		</div>
	);
};
export default PricingFour;
