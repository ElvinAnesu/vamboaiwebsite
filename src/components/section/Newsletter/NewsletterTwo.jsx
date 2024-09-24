import { BsArrowUpRight } from "react-icons/bs";
const NewsletterTwo = () => {
	return (
		<section className="newletter-section-2 section-space-sm-top section-space-sm-bottom">
			<div className="container">
				<div className="newsletter-wrappper rounded-4 overflow-hidden section-space-top section-space-sm-bottom px-xl-10 px-6 fadeIn_bottom">
					<div className="row justify-content-center">
						<div className="col-xxl-6 col-xl-8 col-lg-10">
							<h3 className="fw-extrabold text-center clr-white mb-0 animate-line-3d">
								Get <span className="clr-grad-7">Started Now</span>
							</h3>
							<p className="clr-neutral-90 text-center mt-6 mb-7 animate-text-from-bottom">
								Automate campaign management. Automate growth.
							</p>

							<form className="d-flex flex-sm-row flex-column gap-sm-0 gap-3 p-3 bg-primary-10 rounded-3 fadeIn_bottom newsletter-1--alt border border-primary-20">
								<input
									type="email"
									className="form-control newsletter-1__input bg-transparent text-sm-start text-center clr-neutral-90"
									placeholder="join the community"
								/>
								<button
									type="button"
									className="newsletter-1__btn d-inline-flex justify-content-center gap-2 py-3 px-5 rounded-3 fw-bold clr-white bg-grad-4"
								>
									Subscribe <BsArrowUpRight />
								</button>
							</form>

							<p className="text-center clr-primary-90 fs-14 mt-7 animate-text-from-bottom">
								✓ 14-day free trial ✓ No credit card required ✓ Cancel anytime
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default NewsletterTwo;
