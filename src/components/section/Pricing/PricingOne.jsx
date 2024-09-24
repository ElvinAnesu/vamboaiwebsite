import { Link } from "react-router-dom";
import { BsArrowRight, BsCheck2 } from "react-icons/bs";
import pricingSectionShape1 from "/img/pricing-section-shape-1.webp";
import PricingOneData from "../../../jsonData/PricingOneData.json";
import { useState } from "react";
const PricingOne = () => {
	const [isChecked, setIsChecked] = useState(false);
	const handleChecked = (e) => {
		const checkStatus = e.currentTarget.checked;
		if (checkStatus) {
			setIsChecked(true);
		} else {
			setIsChecked(false);
		}
	};
	return (
		<div className="pricing-section-1 section-space-sm-y">
			<div className="section-space-sm-bottom">
				<div className="container">
					<div className="row g-4 justify-content-between">
						<div className="col-md-5">
							<div className="d-flex align-items-center gap-4 flex-wrap">
								<div className="w-30 subtitle-flush-x subtitle-flush-x--secondary subtitle_line_5"></div>
								<h6 className="mb-0 fs-18 clr-secondary-key fw-extrabold animate-text-from-right">
									Simple and Affordable
								</h6>
							</div>
						</div>
						<div className="col-md-7 col-xl-5">
							<h5 className="mb-6 clr-neutral-90 fw-extrabold animate-line-3d">
								Unleash creativity with <span className="clr-grad-1">AI image</span> generation pricing.
								Find the perfect plan for your visual projects.
							</h5>
							<div className="d-flex align-items-center gap-4">
								<label htmlFor="switch2" className="d-block clr-neutral-99 pointer fadein_bottom_9">
									Monthly
								</label>
								<div className="form-check form-switch form--switch form--switch-lg form--switch-primary-40 align-items-center gap-2 flex-shrink-0 fadein_bottom_9">
									<input
										className="form-check-input pricing-toggle"
										type="checkbox"
										role="switch"
										id="switch2"
										value={isChecked}
										onChange={handleChecked}
										checked={isChecked === true}
									/>
								</div>
								<label htmlFor="switch2" className="d-block clr-neutral-99 pointer fadein_bottom_9">
									Yearly
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row g-4">
					{PricingOneData.map((data) => (
						<div className="col-md-6 col-lg-4" key={data.id}>
							<div
								className={`position-relative z-1 overflow-hidden bg-neutral-10 bg-opacity-6 border ${
									data.isPopular ? "border-secondary-40" : "border-neutral-10"
								} p-4 px-xl-8 py-xl-10 rounded-3 pricing-card`}
							>
								{data.isPopular ? <span className="pricing-label bg-secondary-40">Save 40%</span> : ""}
								<h6 className="mb-1 fw-extrabold clr-neutral-80">{data.planTitle}</h6>
								<span className="d-block mb-6 fs-14 clr-neutral-99">{data.planDetails}</span>
								{isChecked ? (
									<h4 className="mb-6 fw-extrabold clr-neutral-99 yearly-price">
										{data.yearlyPricing}
									</h4>
								) : (
									<h4 className="mb-6 fw-extrabold clr-neutral-99 monthly-price">
										{data.monthlyPricing}
									</h4>
								)}

								<Link
									to={data.url}
									className="link d-inline-flex justify-content-center align-items-center gap-3 rounded bg-neutral-10 :bg-primary-40 clr-white px-6 py-3 fs-14 text-center rounded top-shadow mb-12"
								>
									<span className="d-inline-block fw-extrabold ">Join this Plan</span>
									<span className="d-inline-block">
										<BsArrowRight />
									</span>
								</Link>
								<ul className="list gap-4">
									{data.featureList.map((list) => (
										<li key={list.id}>
											<div className="d-flex gap-3">
												<span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
													<BsCheck2 />
												</span>
												<span className="d-block fs-14 clr-neutral-80">{list.list}</span>
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
			<img
				src={pricingSectionShape1}
				alt="image"
				className="img-fluid pricing-section-1__img pricing-section-1__img--1"
			/>
		</div>
	);
};
export default PricingOne;
