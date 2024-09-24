import {
	BsGlobe,
	BsNewspaper,
	BsImages,
	BsLayersFill,
	BsCodeSquare,
	BsPieChartFill,
	BsChatSquareDots,
	BsCreditCard2Back,
} from "react-icons/bs";
import FeatureImage1 from "/img/icon-writebot.png";
import FeatureImage2 from "/img/wb-path.png";
const FeatureTwo = () => {
	return (
		<div className="feature-section-1 section-space-sm-y">
			<div className="section-space-sm-bottom">
				<div className="container">
					<div className="row g-4 align-items-center">
						<div className="col-md-8 col-xl-9">
							<h3 className="mb-0 clr-neutral-90 fw-extrabold reveal-text">
								Tone of voice defines the conversation about your brand. Whether you speak boldly,
								cheekily, formally, or only in internet speak (👋u do u).
							</h3>
						</div>
						<div className="col-md-4 col-xl-3">
							<div className="d-inline-block text-center text-md-end rounded-circle feature-section-1__logo">
								<img src={FeatureImage1} alt="image" className="img-fluid" />
								<img src={FeatureImage2} alt="image" className="feature-section-1__logo-path" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section-space-sm-top border-bottom border-neutral-80 border-opacity-1">
				<div className="container">
					<div className="row g-4">
						<div className="col-md-6 col-lg-3">
							<div className="gradient-card d-flex flex-column justify-content-center p-6 py-lg-12 h-100 text-center rounded-3 fadein_bottom_18">
								<span className="d-inline-block mb-4 clr-neutral-90 fs-48 lh-1">
									<BsGlobe />
								</span>
								<h6 className="mb-0 clr-neutral-80">Multi-Language Support</h6>
							</div>
						</div>
						<div className="col-md-6 col-lg-2">
							<div className="row g-4">
								<div className="col-12">
									<div className="gradient-card d-flex flex-column justify-content-center p-6 py-lg-12 h-100 text-center rounded-3 fadein_bottom_18">
										<span className="d-inline-block mb-4 clr-neutral-90 fs-24 lh-1">
											<BsNewspaper />
										</span>
										<span className="d-block fw-semibold clr-neutral-80">AI News</span>
									</div>
								</div>
								<div className="col-12">
									<div className="gradient-card d-flex flex-column justify-content-center p-6 py-lg-12 h-100 text-center rounded-3 fadein_bottom_18">
										<span className="d-inline-block mb-4 clr-neutral-90 fs-24 lh-1">
											<BsImages />
										</span>
										<span className="d-block fw-semibold clr-neutral-80">Image Generate</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-3">
							<div className="gradient-card d-flex flex-column justify-content-center p-6 py-lg-12 h-100 text-center rounded-3 fadein_bottom_18">
								<span className="d-inline-block mb-4 clr-neutral-90 fs-48 lh-1">
									<BsLayersFill />
								</span>
								<h6 className="mb-0 clr-neutral-80">Unique Dashboard Design</h6>
							</div>
						</div>
						<div className="col-md-6 col-lg-2">
							<div className="row g-4">
								<div className="col-12">
									<div className="gradient-card d-flex flex-column justify-content-center p-6 py-lg-12 h-100 text-center rounded-3 fadein_bottom_18">
										<span className="d-inline-block mb-4 clr-neutral-90 fs-24 lh-1">
											<BsCodeSquare />
										</span>
										<span className="d-block fw-semibold clr-neutral-80">AI Coding</span>
									</div>
								</div>
								<div className="col-12">
									<div className="gradient-card d-flex flex-column justify-content-center p-6 py-lg-12 h-100 text-center rounded-3 fadein_bottom_18">
										<span className="d-inline-block mb-4 clr-neutral-90 fs-24 lh-1">
											<BsPieChartFill />
										</span>
										<span className="d-block fw-semibold clr-neutral-80">Affiliate System</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-2">
							<div className="row g-4">
								<div className="col-md-6 col-lg-12">
									<div className="gradient-card d-flex flex-column justify-content-center p-6 py-lg-12 h-100 text-center rounded-3 fadein_bottom_18">
										<span className="d-inline-block mb-4 clr-neutral-90 fs-24 lh-1">
											<BsChatSquareDots />
										</span>
										<span className="d-block fw-semibold clr-neutral-80">GPT, Ada.</span>
									</div>
								</div>
								<div className="col-md-6 col-lg-12">
									<div className="gradient-card d-flex flex-column justify-content-center p-6 py-lg-12 h-100 text-center rounded-3 fadein_bottom_18">
										<span className="d-inline-block mb-4 clr-neutral-90 fs-24 lh-1">
											<BsCreditCard2Back />
										</span>
										<span className="d-block fw-semibold clr-neutral-80">Payment Gateway</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default FeatureTwo;
