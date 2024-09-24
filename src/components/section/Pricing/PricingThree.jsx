import { useState } from "react";
import { BsCheck2, BsArrowUpRight } from "react-icons/bs";
import pricingImage1 from "/img/spotify.png";
import pricingImage2 from "/img/brand-icon-1.png";
import pricingImage3 from "/img/brand-icon-2.png";
import pricingImage4 from "/img/brand-icon-3.png";
import pricingImage5 from "/img/brand-icon-4.png";
import pricingImage6 from "/img/brand-icon-5.png";
import pricingImage7 from "/img/brand-icon-6.png";
import pricingImage8 from "/img/brand-icon-7.png";
import pricingImage9 from "/img/brand-icon-8.png";
import pricingImage10 from "/img/brand-icon-9.png";
import pricingImage11 from "/img/brand-icon-10.png";
import pricingImage12 from "/img/brand-icon-11.png";
import pricingImage13 from "/img/brand-icon-12.png";
import { Link } from "react-router-dom";

const PricingThree = () => {
	const [pricing, setPricing] = useState(true);
	const priceToggle = () => {
		setPricing((prevPricing) => !prevPricing);
	};
	return (
		<div className="pricing-section-2 section-space-top">
			<div className="section-space-sm-bottom">
				<div className="container">
					<div className="row g-4 justify-content-between align-items-center">
						<div className="col-md-7 col-lg-6">
							<h3 className="mb-0 fw-extrabold clr-primary-10 animate-line-3d">
								The Right Plans For The
								<span className="clr-grad-4">Right Price Table</span>
							</h3>
						</div>
						<div className="col-md-5">
							<div className="text-md-end fadeIn_bottom">
								<div className="d-inline-flex align-items-center py-2 px-3 rounded-1 bg-white">
									<button
										type="button"
										className={`pricing-btn pricing-btn-1 flex-shrink-0 d-inline-block border-0 fs-12 clr-primary-10 fw-bold py-2 px-3 rounded ${
											pricing ? "active" : null
										}`}
										onClick={priceToggle}
									>
										Monthly
									</button>
									<button
										type="button"
										className={`pricing-btn pricing-btn-1 flex-shrink-0 d-inline-block border-0 fs-12 clr-primary-10 fw-bold py-2 px-3 rounded ${
											pricing ? null : "active"
										}`}
										onClick={priceToggle}
									>
										Yearly <span className="clr-grad-4">20% Off</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row g-4">
					<div className="col-md-6 col-lg-4">
						<div className="bg-white rounded-4 p-4 p-md-10 fadein_bottom_22">
							<h6 className="mb-3">Free Plan</h6>
							<span className="d-block mb-3 clr-neutral-variant-50 fs-14">
								Start with 3,000 word limit
							</span>
							{pricing ? (
								<h4 className="monthly-price mb-10 clr-primary-10 fw-extrabold">$0/mo</h4>
							) : (
								<h4 className="yearly-price mb-10 clr-primary-10 fw-extrabold">$0/y</h4>
							)}

							<Link
								to="/login"
								className="link d-inline-flex justify-content-center align-items-center gap-2 mb-10 py-2 px-4 border border-primary-10 :border-primary-40 :bg-primary-40 bg-primary-10 rounded-2 fs-14 fw-bold text-center clr-white"
							>
								<span className="d-block"> Try For Free </span>
								<span className="d-block fs-10">
									<BsArrowUpRight />
								</span>
							</Link>
							<ul className="list gap-4">
								<li>
									<div className="d-flex gap-3">
										<span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-10">
											<BsCheck2 />
										</span>
										<span className="d-block fs-14 clr-primary-10 fw-medium">25 Free Messages</span>
									</div>
								</li>
								<li>
									<div className="d-flex gap-3">
										<span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-10">
											<BsCheck2 />
										</span>
										<span className="d-block fs-14 clr-primary-10 fw-medium">1 Chatbot</span>
									</div>
								</li>
								<li>
									<div className="d-flex gap-3">
										<span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-10">
											<BsCheck2 />
										</span>
										<span className="d-block fs-14 clr-primary-10 fw-medium">Basic Models</span>
									</div>
								</li>
								<li>
									<div className="d-flex gap-3">
										<span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-10">
											<BsCheck2 />
										</span>
										<span className="d-block fs-14 clr-primary-10 fw-medium">
											100 Captured Contacts
										</span>
									</div>
								</li>
								<li>
									<div className="d-flex gap-3">
										<span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-10">
											<BsCheck2 />
										</span>
										<span className="d-block fs-14 clr-primary-10 fw-medium">Basic Support</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-6 col-lg-4">
						<div className="bg-white rounded-4 p-4 p-md-10 fadein_bottom_22 position-relative z-1 overflow-hidden">
							<span className="pricing-label bg-secondary-40"> Popular Plan </span>
							<h6 className="mb-3">Standard Plan</h6>
							<span className="d-block mb-3 clr-neutral-variant-50 fs-14">
								Start with 3,000 word limit
							</span>
							{pricing ? (
								<h4 className="monthly-price mb-10 clr-primary-10 fw-extrabold">$10/mo</h4>
							) : (
								<h4 className="yearly-price mb-10 clr-primary-10 fw-extrabold">$120/y</h4>
							)}
							<Link
								to="/login"
								className="link d-inline-flex justify-content-center align-items-center gap-2 mb-10 py-2 px-4 border border-primary-40 :border-primary-10 :bg-primary-10 bg-primary-40 rounded-2 fs-14 fw-bold text-center clr-white"
							>
								<span className="d-block"> Try For Free </span>
								<span className="d-block fs-10">
									<BsArrowUpRight />
								</span>
							</Link>
							<ul className="list gap-4">
								<li>
									<div className="d-flex gap-3">
										<span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-10">
											<BsCheck2 />
										</span>
										<span className="d-block fs-14 clr-primary-10 fw-medium">
											1,500 Messages included
										</span>
									</div>
								</li>
								<li>
									<div className="d-flex gap-3">
										<span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-10">
											<BsCheck2 />
										</span>
										<span className="d-block fs-14 clr-primary-10 fw-medium">2 Chatbots</span>
									</div>
								</li>
								<li>
									<div className="d-flex gap-3">
										<span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-10">
											<BsCheck2 />
										</span>
										<span className="d-block fs-14 clr-primary-10 fw-medium">
											Advanced Model (GPT-4)
										</span>
									</div>
								</li>
								<li>
									<div className="d-flex gap-3">
										<span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-10">
											<BsCheck2 />
										</span>
										<span className="d-block fs-14 clr-primary-10 fw-medium">
											200 Files and Webpages
										</span>
									</div>
								</li>
								<li>
									<div className="d-flex gap-3">
										<span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-10">
											<BsCheck2 />
										</span>
										<span className="d-block fs-14 clr-primary-10 fw-medium">
											1,000 Captured Contacts
										</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-6 col-lg-4">
						<div className="bg-white rounded-4 p-4 p-md-10 fadein_bottom_22">
							<h6 className="mb-3">Premium Plan</h6>
							<span className="d-block mb-3 clr-neutral-variant-50 fs-14">
								Start with 3,000 word limit
							</span>
							{pricing ? (
								<h4 className="monthly-price mb-10 clr-primary-10 fw-extrabold">$20/mo</h4>
							) : (
								<h4 className="yearly-price mb-10 clr-primary-10 fw-extrabold">$240/y</h4>
							)}
							<Link
								to="/login"
								className="link d-inline-flex justify-content-center align-items-center gap-2 mb-10 py-2 px-4 border border-primary-10 :border-primary-40 :bg-primary-40 bg-primary-10 rounded-2 fs-14 fw-bold text-center clr-white"
							>
								<span className="d-block"> Try For Free </span>
								<span className="d-block fs-10">
									<BsArrowUpRight />
								</span>
							</Link>
							<ul className="list gap-4">
								<li>
									<div className="d-flex gap-3">
										<span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-10">
											<BsCheck2 />
										</span>
										<span className="d-block fs-14 clr-primary-10 fw-medium">
											5,000 Messages included
										</span>
									</div>
								</li>
								<li>
									<div className="d-flex gap-3">
										<span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-10">
											<BsCheck2 />
										</span>
										<span className="d-block fs-14 clr-primary-10 fw-medium">10 Chatbots</span>
									</div>
								</li>
								<li>
									<div className="d-flex gap-3">
										<span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-10">
											<BsCheck2 />
										</span>
										<span className="d-block fs-14 clr-primary-10 fw-medium">
											Advanced Model (GPT-4)
										</span>
									</div>
								</li>
								<li>
									<div className="d-flex gap-3">
										<span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-10">
											<BsCheck2 />
										</span>
										<span className="d-block fs-14 clr-primary-10 fw-medium">
											500 Files and Webpages
										</span>
									</div>
								</li>
								<li>
									<div className="d-flex gap-3">
										<span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-10">
											<BsCheck2 />
										</span>
										<span className="d-block fs-14 clr-primary-10 fw-medium">
											Unlimited Captured..
										</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="section-space-y">
				<div className="section-space-sm-bottom">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-xl-8">
								<h5 className="mb-0 text-center clr-primary-10 animate-line-3d">
									Trusted by beloved Partners and Customers
								</h5>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid p-0">
					<div className="row g-0">
						<div className="col-12">
							<div className="scroller-x mb-4" data-direction="right" data-speed="slow">
								<ul className="list list-row gap-4 scroller-x__list">
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage1} alt="image" className="img-fluid" />
										</div>
									</li>
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage2} alt="image" className="img-fluid" />
										</div>
									</li>
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage3} alt="image" className="img-fluid" />
										</div>
									</li>
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage4} alt="image" className="img-fluid" />
										</div>
									</li>
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage5} alt="image" className="img-fluid" />
										</div>
									</li>
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage6} alt="image" className="img-fluid" />
										</div>
									</li>
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage7} alt="image" className="img-fluid" />
										</div>
									</li>
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage8} alt="image" className="img-fluid" />
										</div>
									</li>
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage9} alt="image" className="img-fluid" />
										</div>
									</li>
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage10} alt="image" className="img-fluid" />
										</div>
									</li>
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage11} alt="image" className="img-fluid" />
										</div>
									</li>
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage12} alt="image" className="img-fluid" />
										</div>
									</li>
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage13} alt="image" className="img-fluid" />
										</div>
									</li>
								</ul>
							</div>
							<div className="scroller-x" data-direction="left" data-speed="slow">
								<ul className="list list-row gap-4 scroller-x__list">
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage1} alt="image" className="img-fluid" />
										</div>
									</li>
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage2} alt="image" className="img-fluid" />
										</div>
									</li>
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage3} alt="image" className="img-fluid" />
										</div>
									</li>
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage4} alt="image" className="img-fluid" />
										</div>
									</li>
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage5} alt="image" className="img-fluid" />
										</div>
									</li>
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage6} alt="image" className="img-fluid" />
										</div>
									</li>
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage7} alt="image" className="img-fluid" />
										</div>
									</li>
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage8} alt="image" className="img-fluid" />
										</div>
									</li>
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage9} alt="image" className="img-fluid" />
										</div>
									</li>
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage10} alt="image" className="img-fluid" />
										</div>
									</li>
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage11} alt="image" className="img-fluid" />
										</div>
									</li>
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage12} alt="image" className="img-fluid" />
										</div>
									</li>
									<li>
										<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-white">
											<img src={pricingImage13} alt="image" className="img-fluid" />
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default PricingThree;
