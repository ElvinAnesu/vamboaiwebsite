import { Link } from "react-router-dom";
import newsletterShape1 from "/img/newsletter-1-shape.webp";
import newsletterImg1 from "/img/newsletter-section-1-img-1.jpg";
import newsletterImg2 from "/img/newsletter-section-1-img-2.png";
import newsletterImg3 from "/img/newsletter-section-1-img-3.jpg";
const NewsletterOne = () => {
	return (
		<div className="section-space-sm-top position-relative z-1 overflow-hidden" data-cursor="Subscribe Now">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="newsletter-section-1 section-space-y ps-xl-15">
							<div className="row g-4 justify-content-xxl-between align-items-center">
								<div className="col-lg-6 col-xxl-5">
									<span className="d-block mb-2 fw-extrabold clr-secondary-key reveal-text">
										For Update Newsletter
									</span>
									<h3 className="mb-12 clr-neutral-90 animate-text-from-right">
										Subscribe for the Updates!
									</h3>
									<div className="input-group input--group input--group-underline input--group-inverse-surface mb-6 fadein_bottom_10">
										<input
											type="text"
											className="form-control form--control"
											placeholder="Enter Email Address"
										/>
										<span className="input-group-text">
											<button
												type="button"
												className="newsletter-1__btn d-inline-block py-3 px-4 fw-bold clr-white bg-grad-1 fs-14 "
											>
												Subscribe
											</button>
										</span>
									</div>
									<div className="form-check check-box check-box--dash check-box-neutral-60 gap-2 fadein_bottom_11">
										<input
											className="form-check-input check-box__input clr-white my-auto"
											type="checkbox"
											id="n60dash"
										/>
										<label className="form-check-label clr-neutral-80 fs-14" htmlFor="n60dash">
											I agree to the
											<Link
												to="/privacy-policy"
												className="link d-inline-block clr-primary-60 text-decoration-underline"
											>
												Privacy Policy
											</Link>
										</label>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="text-xl-center fadein_bottom_12">
										<div className="newsletter-section-1__img-container d-inline-flex justify-content-center align-items-center">
											<div className="newsletter-section-1__img newsletter-section-1__img--1 d-none d-xl-inline-block border border-neutral-4 border-8x rounded-3 overflow-hidden">
												<img
													src={newsletterImg1}
													alt="image"
													className="img-fluid rounded-3 object-fit-cover"
												/>
											</div>
											<div className="d-inline-block border border-neutral-4 border-8x rounded-3 overflow-hidden">
												<img
													src={newsletterImg3}
													alt="image"
													className="img-fluid object-fit-cover"
												/>
											</div>
											<div className="newsletter-section-1__img newsletter-section-1__img--2 d-none d-xl-inline-block border border-neutral-4 border-8x rounded-circle overflow-hidden">
												<img
													src={newsletterImg2}
													alt="image"
													className="img-fluid object-fit-cover"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<img src={newsletterShape1} alt="image" className="img-fluid newsletter-section-1__shape" />
		</div>
	);
};
export default NewsletterOne;
