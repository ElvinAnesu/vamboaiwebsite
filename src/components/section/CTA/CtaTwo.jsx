import ctaImage1 from "/img/cta-img-1.png";
import ctaImage2 from "/img/cta-bg-1.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const CtaTwo = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="section-space-sm-y px-4 px-md-6 px-xl-12 px-xxl-15 rounded-4 bg-white position-relative z-1 overflow-hidden">
						<div className="row g-4 align-items-center">
							<div className="col-lg-5">
								<h4 className="clr-primary-10 animate-line-3d">
									Start Creating Your Demos <span className="clr-grad-4">AI Demo Right Now!</span>
								</h4>
								<p className="mb-9 fs-14 fw-medium max-text-40 animate-text-from-right">
									Create stunning, professional-quality websites in record time with our powerful UI
									kit.
								</p>
								<div className="fadeIn_bottom">
									<Link
										to="/register"
										className="link d-inline-flex justify-content-center align-items-center gap-2 py-2 px-4 border border-primary-key :border-primary-30 :bg-primary-30 bg-primary-key rounded-2 fs-14 fw-bold text-center clr-white"
									>
										<span className="d-block"> Get started Now </span>
										<span className="d-block fs-10">
											<BsArrowRight />
										</span>
									</Link>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="text-center fadeIn_bottom">
									<img src={ctaImage1} alt="image" className="img-fluid" />
								</div>
							</div>
						</div>
						<img
							src={ctaImage2}
							alt="image"
							className="w-100 h-100 object-fit-cover position-absolute inset-0 z-n1"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CtaTwo;
