import ctaImage1 from "/img/cta-2-log.png";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
const CtaThree = () => {
	return (
		<div className="cta-section-2 section-space-y">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-8">
						<div className="text-center">
							<div className="mb-8 fadeIn_bottom">
								<img src={ctaImage1} alt="image" className="img-fluid" />
							</div>
							<h3 className="mb-6 clr-neutral-90 fw-extrabold animate-line-3d">
								Think better with
								<span className="d-inline-block gradient-flow gradient-flow--start">WirteBot AI</span>
							</h3>
							<p className="mb-8 clr-neutral-80 fw-bold animate-text-from-bottom">
								The delightfully smart collaboration platform. Get started - for free.
							</p>
							<div className="fadeIn_bottom">
								<Link
									to="/register"
									className="gradient-btn-3 position-relative z-1 link d-inline-flex gap-2 align-items-center justify-content-center px-6 py-3 rounded-1 fw-bold text-center"
								>
									<span className="d-inline-block flex-shrink-0"> Generate Now </span>
									<span className="d-inline-block">
										<BsArrowRightShort />
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CtaThree;
