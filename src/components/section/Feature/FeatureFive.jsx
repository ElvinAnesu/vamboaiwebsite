import { Link } from "react-router-dom";
import featureImage1 from "/img/solution-img-1.png";
import featureImage2 from "/img/solution-img-2.png";
import featureImage3 from "/img/solution-img-3.png";
import featureImage4 from "/img/solution-img-4.png";
import featureImage5 from "/img/solution-img-5.png";
import featureImage6 from "/img/solution-img-6.png";
import featureImage7 from "/img/powerful-solution-img.png";
const FeatureFive = () => {
	return (
		<div className="ai-solution-section section-space-top section-space-bottom position-relative z-1">
			<div className="section-space-sm-bottom">
				<div className="container">
					<div className="row g-4 justify-content-xl-between">
						<div className="col-lg-6 col-xl-5">
							<h3 className="mb-0 fw-extrabold clr-primary-10 animate-line-3d">
								Our Powerful AI Chatbot <span className="clr-grad-4">Solutions</span>
							</h3>
						</div>
						<div className="col-lg-6 col-xl-5">
							<p className="max-text-40 fw-medium clr-primary-10 animate-text-from-right">
								WriteBot is the all-in-one demo creation tool that can help cover all of your demo
								storytelling needs.
							</p>
							<div className="fadeIn_bottom">
								<Link
									to="/about"
									className="link d-inline-flex justify-content-center align-items-center gap-2 py-2 px-4 border border-primary-key :border-primary-30 bg-primary-key :bg-primary-30 rounded-2 fs-14 fw-bold text-center clr-white"
								>
									<span className="d-block">Take a Tour</span>
									<span className="d-block fs-10">
										<i className="bi bi-arrow-up-right"></i>
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row g-4">
					<div className="col-md-6 col-lg-4 fadeIn_bottom">
						<div className="p-4 p-xl-8 rounded-4 transition :bg-primary-90">
							<div className="d-flex flex-column align-items-start gap-6 rounded-4 bg-white p-6">
								<div className="text-center">
									<img src={featureImage1} alt="image" className="img-fluid" />
								</div>
								<div className="flex-grow-1">
									<h6 className="clr-primary-10">IBM Watson Assistant</h6>
									<p className="mb-0 on-surface-variant">
										IBM Watson Assistant is an AI chatbot platform known for its natural language
										understanding capabilities.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-4 fadeIn_bottom">
						<div className="p-4 p-xl-8 rounded-4 transition :bg-primary-90">
							<div className="d-flex flex-column align-items-start gap-6 rounded-4 bg-white p-6">
								<div className="text-center">
									<img src={featureImage2} alt="image" className="img-fluid" />
								</div>
								<div className="flex-grow-1">
									<h6 className="clr-primary-10">132 Language & Counting</h6>
									<p className="mb-0 on-surface-variant">
										IBM Watson Assistant is an AI chatbot platform known for its natural language
										understanding capabilities.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-4 fadeIn_bottom">
						<div className="p-4 p-xl-8 rounded-4 transition :bg-primary-90">
							<div className="d-flex flex-column align-items-start gap-6 rounded-4 bg-white p-6">
								<div className="text-center">
									<img src={featureImage3} alt="image" className="img-fluid" />
								</div>
								<div className="flex-grow-1">
									<h6 className="clr-primary-10">3 Steps Using Our AI Chat</h6>
									<p className="mb-0 on-surface-variant">
										IBM Watson Assistant is an AI chatbot platform known for its natural language
										understanding capabilities.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-4 fadeIn_bottom">
						<div className="p-4 p-xl-8 rounded-4 transition :bg-primary-90">
							<div className="d-flex flex-column align-items-start gap-6 rounded-4 bg-white p-6">
								<div className="text-center">
									<img src={featureImage4} alt="image" className="img-fluid" />
								</div>
								<div className="flex-grow-1">
									<h6 className="clr-primary-10">Easy To Search User</h6>
									<p className="mb-0 on-surface-variant">
										IBM Watson Assistant is an AI chatbot platform known for its natural language
										understanding capabilities.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-4 fadeIn_bottom">
						<div className="p-4 p-xl-8 rounded-4 transition :bg-primary-90">
							<div className="d-flex flex-column align-items-start gap-6 rounded-4 bg-white p-6">
								<div className="text-center">
									<img src={featureImage5} alt="image" className="img-fluid" />
								</div>
								<div className="flex-grow-1">
									<h6 className="clr-primary-10">Easy Text To Make Audio</h6>
									<p className="mb-0 on-surface-variant">
										IBM Watson Assistant is an AI chatbot platform known for its natural language
										understanding capabilities.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-4 fadeIn_bottom">
						<div className="p-4 p-xl-8 rounded-4 transition :bg-primary-90">
							<div className="d-flex flex-column align-items-start gap-6 rounded-4 bg-white p-6">
								<div className="text-center">
									<img src={featureImage6} alt="image" className="img-fluid" />
								</div>
								<div className="flex-grow-1">
									<h6 className="clr-primary-10">IBM Watson Assistant</h6>
									<p className="mb-0 on-surface-variant">
										IBM Watson Assistant is an AI chatbot platform known for its natural language
										understanding capabilities.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<img src={featureImage7} alt="image" className="img-fluid d-none d-md-block ai-solution-section_shape" />
		</div>
	);
};
export default FeatureFive;
