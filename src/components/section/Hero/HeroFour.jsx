import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import heroImage1 from "/img/hero-4-img.webp";
import heroImage2 from "/img/hero-4-content-shape.webp";

const HeroFour = () => {
	return (
		<div className="hero-4 bg-grad-6">
			<div className="py-3">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12">
							<div className="d-flex align-items-center justify-content-center flex-wrap gap-3">
								<span className="d-inline-block py-1 px-2 rounded bg-white on-secondary-fixed-variant ff-1 fs-12 fw-bold flex-shrink-0">
									New Featured
								</span>
								<span className="d-block text-center text-md-start ff-1 fs-12 fw-semibold clr-white">
									Chat with The Cloud Whitepaper Index - Langchain, Pinecone & ChatGPT powered Q&A
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="hero-4__content bg-black rounded-top-5 section-space-top">
				<div className="section-space-top section-space-sm-bottom">
					<div className="section-space-sm-bottom">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-xl-10">
									<h2 className="mb-6 text-center clr-white fw-extrabold animate-line-3d">
										<span className="d-inline-block gradient-flow gradient-flow--start">
											AI Content
										</span>
										Creation & Customer Experience
										<span className="d-inline-block gradient-flow gradient-flow--end">
											Platform
										</span>
									</h2>
									<p className="mb-0 text-center fw-extrabold ff-1 fs-18 clr-white animate-line-3d">
										<span className="clr-grad-6">Chat, Code, Cloud, Deployments</span> & more Many
										Option
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="row g-4">
							<div className="col-12">
								<div className="top-shadow section-space-sm-y rounded-4 bg-black position-relative z-1 overflow-hidden fadeIn_bottom">
									<div className="row g-4 align-items-center">
										<div className="col-md-6 col-xl-5">
											<div className="px-4 px-lg-6 px-xl-15">
												<h4 className="mb-6 clr-neutral-90">
													Test WriteBot AI Content Generator
												</h4>
												<p className="mb-10 clr-neutral-80 fs-14">
													Finances built for the future. Meet the fastest, most secure, and
													compliant platform
												</p>
												<Link
													to="/register"
													className="gradient-btn-3 position-relative z-1 link d-inline-flex gap-2 align-items-center justify-content-center px-6 py-3 rounded-1 fw-bold text-center"
												>
													<span className="d-inline-block flex-shrink-0">Get Started</span>
													<span className="d-inline-block">
														<BsArrowRightShort />
													</span>
												</Link>
											</div>
										</div>
										<div className="col-md-6 col-xl-7">
											<div className="text-center">
												<img src={heroImage1} alt="image" className="img-fluid" />
											</div>
										</div>
									</div>
									<img
										src={heroImage2}
										alt="image"
										className="w-100 h-100 position-absolute inset-0 z-n1 pointer-none"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default HeroFour;
