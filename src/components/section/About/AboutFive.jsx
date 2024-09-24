import aboutImage1 from "/img/about-img-8.png";
import aboutImage2 from "/img/icon-star-small.png";
import aboutImage3 from "/img/about-section-3-shape-1.png";
import aboutImage4 from "/img/about-img-9.png";
import aboutImage5 from "/img/about-section-3-shape-2.png";
import aboutImage6 from "/img/about-img-10.png";
import aboutImage7 from "/img/about-section-3-shape-3.png";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
const AboutFive = () => {
	return (
		<div className="section-space-sm-top">
			<div className="section-space-sm-y position-relative z-1">
				<div className="container">
					<div className="row g-4 align-items-center">
						<div className="col-lg-6">
							<div className="text-center fadeIn_bottom">
								<img src={aboutImage1} alt="image" className="img-fluid" />
							</div>
						</div>
						<div className="col-lg-6">
							<h3 className="mb-6 fw-extrabold clr-primary-10 animate-line-3d">
								Public Roadmap To Show You are <span className="clr-grad-4">Working On</span>
							</h3>
							<p className="mb-8 animate-text-from-right">
								Easily communicate your latest product updates with customers right in the app, using
								rich visual notifications and popup widgets.
							</p>
							<ul className="list gap-3 mb-10">
								<li className="fadeIn_bottom">
									<div className="d-flex gap-4">
										<div className="flex-shrink-0">
											<img src={aboutImage2} alt="image" className="img-fluid" />
										</div>
										<p className="mb-0 clr-primary-10 fw-medium">
											Increase feature adoption and engagement
										</p>
									</div>
								</li>
								<li className="fadeIn_bottom">
									<div className="d-flex gap-4">
										<div className="flex-shrink-0">
											<img src={aboutImage2} alt="image" className="img-fluid" />
										</div>
										<p className="mb-0 clr-primary-10 fw-medium">
											Embed your changelog anywhere on your website
										</p>
									</div>
								</li>
							</ul>
							<div className="fadeIn_bottom">
								<Link
									to="/register"
									className="link d-inline-flex justify-content-center align-items-center gap-2 py-2 px-4 border border-primary-key :border-primary-30 bg-primary-key :bg-primary-30 rounded-1 fs-14 fw-bold text-center clr-white btn-outlined"
								>
									<span className="d-block"> Get started for free </span>
									<span className="d-block fs-10">
										<BsArrowUpRight />
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<img
					src={aboutImage3}
					alt="image"
					className="img-fluid position-absolute z-n1 position-center-y start-0"
				/>
			</div>
			<div className="section-space-sm-y">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="position-relative z-1">
								<div className="row g-4 align-items-center">
									<div className="col-lg-6">
										<h3 className="mb-6 fw-extrabold clr-primary-10 animate-line-3d">
											Seamlessly Integrate With <span className="clr-grad-4">All Your Tools</span>
										</h3>
										<p className="mb-8 animate-text-from-right">
											WriteBot AI is a versatile product demo software crafted to fuel the success
											of innovative and progressive sales, product, and growth teams.
										</p>
										<ul className="list gap-3 mb-10">
											<li className="fadeIn_bottom">
												<div className="d-flex gap-4">
													<div className="flex-shrink-0">
														<img src={aboutImage2} alt="image" className="img-fluid" />
													</div>
													<p className="mb-0 clr-primary-10 fw-medium">
														Industry-Leading Support & Success
													</p>
												</div>
											</li>
											<li className="fadeIn_bottom">
												<div className="d-flex gap-4">
													<div className="flex-shrink-0">
														<img src={aboutImage2} alt="image" className="img-fluid" />
													</div>
													<p className="mb-0 clr-primary-10 fw-medium">
														Scalable Solutions for your Growth
													</p>
												</div>
											</li>
											<li className="fadeIn_bottom">
												<div className="d-flex gap-4">
													<div className="flex-shrink-0">
														<img src={aboutImage2} alt="image" className="img-fluid" />
													</div>
													<p className="mb-0 clr-primary-10 fw-medium">
														Unlock Possibilities with Advanced Analytics
													</p>
												</div>
											</li>
										</ul>
										<div className="fadeIn_bottom">
											<Link
												to="/register"
												className="link d-inline-flex justify-content-center align-items-center gap-2 py-2 px-4 border border-primary-key :border-primary-30 bg-primary-key :bg-primary-30 rounded-1 fs-14 fw-bold text-center clr-white btn-outlined"
											>
												<span className="d-block"> Get started for free </span>
												<span className="d-block fs-10">
													<BsArrowUpRight />
												</span>
											</Link>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="text-center fadeIn_bottom">
											<img src={aboutImage4} alt="image" className="img-fluid" />
										</div>
									</div>
								</div>
								<img
									src={aboutImage5}
									alt="image"
									className="img-fluid position-absolute z-n1 position-center-y end-0"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section-space-sm-y position-relative z-1">
				<div className="container">
					<div className="row g-4 align-items-center">
						<div className="col-lg-6">
							<div className="text-center fadeIn_bottom">
								<img src={aboutImage6} alt="image" className="img-fluid" />
							</div>
						</div>
						<div className="col-lg-6">
							<h3 className="mb-6 fw-extrabold clr-primary-10 animate-line-3d">
								Leading With Innovative Solution <span className="clr-grad-4">Chatbot AI</span>
							</h3>
							<p className="mb-8 animate-text-from-right">
								WriteBot AI is a versatile product demo software crafted to fuel the success of
								innovative and progressive sales, product, and growth teams.
							</p>
							<ul className="list gap-3 mb-10">
								<li className="fadeIn_bottom">
									<div className="d-flex gap-4">
										<div className="flex-shrink-0">
											<img src={aboutImage2} alt="image" className="img-fluid" />
										</div>
										<p className="mb-0 clr-primary-10 fw-medium">
											Industry-Leading Support & Success
										</p>
									</div>
								</li>
								<li className="fadeIn_bottom">
									<div className="d-flex gap-4">
										<div className="flex-shrink-0">
											<img src={aboutImage2} alt="image" className="img-fluid" />
										</div>
										<p className="mb-0 clr-primary-10 fw-medium">
											Scalable Solutions for your Growth
										</p>
									</div>
								</li>
								<li className="fadeIn_bottom">
									<div className="d-flex gap-4">
										<div className="flex-shrink-0">
											<img src={aboutImage2} alt="image" className="img-fluid" />
										</div>
										<p className="mb-0 clr-primary-10 fw-medium">
											Unlock Possibilities with Advanced Analytics
										</p>
									</div>
								</li>
							</ul>
							<div className="fadeIn_bottom">
								<Link
									to="/register"
									className="link d-inline-flex justify-content-center align-items-center gap-2 py-2 px-4 border border-primary-key :border-primary-30 bg-primary-key :bg-primary-30 rounded-1 fs-14 fw-bold text-center clr-white btn-outlined"
								>
									<span className="d-block"> Get started for free </span>
									<span className="d-block fs-10">
										<BsArrowUpRight />
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<img
					src={aboutImage7}
					alt="image"
					className="img-fluid position-absolute z-n1 position-center-y start-0"
				/>
			</div>
		</div>
	);
};
export default AboutFive;
