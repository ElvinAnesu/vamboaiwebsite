import { Link } from "react-router-dom";
import { BsCheck2 } from "react-icons/bs";
import aboutImage1 from "/img/dashboard-img.png";
import aboutImage2 from "/img/about-img-1.png";
import aboutImage3 from "/img/flag-box-1.png";
import aboutImage4 from "/img/flag-box-2.png";
import aboutImage5 from "/img/flag-box-3.png";
import aboutImage6 from "/img/flag-box-4.png";
import aboutImage7 from "/img/flag-box-5.png";
import aboutImage8 from "/img/flag-box-6.png";
import aboutImage9 from "/img/flag-box-7.png";
import aboutImage10 from "/img/flag-box-8.png";
import aboutImage11 from "/img/flag-box-9.png";
import aboutImage12 from "/img/flag-box-10.png";
import aboutImage13 from "/img/flag-box-11.png";
import aboutImage14 from "/img/flag-box-12.png";
import aboutImage15 from "/img/flag-box-13.png";
import aboutImage16 from "/img/about-section-1-shape-1.png";
import aboutImage17 from "/img/about-section-1-shape-2.png";
const AboutTwo = () => {
	return (
		<div className="position-relative z-1 section-space-sm-y">
			<div className="container">
				<div className="row g-4">
					<div className="col-12">
						<div className="p-4 p-md-6 p-xl-10 rounded-4 bg-black border border-neutral-10">
							<div className="p-4 p-md-8 p-xl-10 py-xl-12 rounded-4 bg-neutral-4 border border-neutral-variant-20">
								<div className="row g-4 align-items-center">
									<div className="col-lg-6 col-xxl-7">
										<span className="d-inline-block mb-4 rounded py-1 px-3 bg-primary-key clr-white fs-14 fw-bold text-center fadeIn_bottom">
											Visualize Info
										</span>
										<h3 className="mb-6 clr-neutral-90 fw-extrabold animate-line-3d">
											Track user activity and control access.
										</h3>
										<p className="mb-8 max-text-40 fs-14 fw-medium clr-neutral-80 animate-text-from-right">
											Finances built for the future. Meet the fastest, most secure, and compliant
											platform
										</p>
										<ul className="list list-row flex-wrap gap-4 align-items-center">
											<li className="fadein_bottom_19">
												<div className="d-flex aling-items-center gap-3">
													<div className="d-grid place-content-center w-6 h-6 rounded-circle bg-neutral-variant-30 clr-neutral-80 flex-shrink-0">
														<BsCheck2 />
													</div>
													<span className="d-block fw-semibold clr-neutral-80">
														Popular Templates
													</span>
												</div>
											</li>
											<li className="fadein_bottom_19">
												<div className="d-flex aling-items-center gap-3">
													<div className="d-grid place-content-center w-6 h-6 rounded-circle bg-neutral-variant-30 clr-neutral-80 flex-shrink-0">
														<BsCheck2 />
													</div>
													<span className="d-block fw-semibold clr-neutral-80">
														Popular Templates
													</span>
												</div>
											</li>
											<li className="fadein_bottom_19">
												<div className="d-flex aling-items-center gap-3">
													<div className="d-grid place-content-center w-6 h-6 rounded-circle bg-neutral-variant-30 clr-neutral-80 flex-shrink-0">
														<BsCheck2 />
													</div>
													<span className="d-block fw-semibold clr-neutral-80">
														Popular Templates
													</span>
												</div>
											</li>
										</ul>
									</div>
									<div className="col-lg-6 col-xxl-5">
										<div className="text-lg-center fadeIn_bottom">
											<img src={aboutImage1} alt="image" className="img-fluid" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="border border-neutral-10 bg-black rounded-4 h-100">
							<div className="p-4 p-lg-6 p-xxl-12 text-center fadeIn_bottom">
								<img src={aboutImage2} alt="image" className="img-fluid" />
							</div>
							<div className="px-4 px-lg-6 px-xxl-12 pb-4 pb-lg-4 pb-xxl-12">
								<h5 className="mb-0 fw-extrabold">
									<Link to="/" className="link d-block clr-neutral-90 animate-text-from-right">
										Stability AI Image Easy to customize Hard to get wrong.
									</Link>
								</h5>
							</div>
							<div className="overflow-hidden pb-4 pb-lg-4 pb-xxl-12">
								<div className="scroller-x mb-4" data-direction="left" data-speed="slow">
									<ul className="list list-row align-items-center gap-4 scroller-x__list">
										<li>
											<span className="d-inline-flex align-items-center gap-3 py-3 px-5 bg-neutral-6 rounded-pill">
												<span className="w-6 h-6 d-grid place-content-center rounded-circle bg-neutral-variant-30 clr-neutral-80">
													<BsCheck2 />
												</span>
												<span className="d-block fw-bold clr-neutral-80">Articles</span>
											</span>
										</li>
										<li>
											<span className="d-inline-flex align-items-center gap-3 py-3 px-5 bg-neutral-6 rounded-pill">
												<span className="w-6 h-6 d-grid place-content-center rounded-circle bg-neutral-variant-30 clr-neutral-80">
													<BsCheck2 />
												</span>
												<span className="d-block fw-bold clr-neutral-80">Ecommerce</span>
											</span>
										</li>
										<li>
											<span className="d-inline-flex align-items-center gap-3 py-3 px-5 bg-neutral-6 rounded-pill">
												<span className="w-6 h-6 d-grid place-content-center rounded-circle bg-neutral-variant-30 clr-neutral-80">
													<BsCheck2 />
												</span>
												<span className="d-block fw-bold clr-neutral-80">Social Media</span>
											</span>
										</li>
										<li>
											<span className="d-inline-flex align-items-center gap-3 py-3 px-5 bg-neutral-6 rounded-pill">
												<span className="w-6 h-6 d-grid place-content-center rounded-circle bg-neutral-variant-30 clr-neutral-80">
													<BsCheck2 />
												</span>
												<span className="d-block fw-bold clr-neutral-80">Coding</span>
											</span>
										</li>
										<li>
											<span className="d-inline-flex align-items-center gap-3 py-3 px-5 bg-neutral-6 rounded-pill">
												<span className="w-6 h-6 d-grid place-content-center rounded-circle bg-neutral-variant-30 clr-neutral-80">
													<BsCheck2 />
												</span>
												<span className="d-block fw-bold clr-neutral-80">Blogging</span>
											</span>
										</li>
										<li>
											<span className="d-inline-flex align-items-center gap-3 py-3 px-5 bg-neutral-6 rounded-pill">
												<span className="w-6 h-6 d-grid place-content-center rounded-circle bg-neutral-variant-30 clr-neutral-80">
													<BsCheck2 />
												</span>
												<span className="d-block fw-bold clr-neutral-80">Podcast</span>
											</span>
										</li>
										<li>
											<span className="d-inline-flex align-items-center gap-3 py-3 px-5 bg-neutral-6 rounded-pill">
												<span className="w-6 h-6 d-grid place-content-center rounded-circle bg-neutral-variant-30 clr-neutral-80">
													<BsCheck2 />
												</span>
												<span className="d-block fw-bold clr-neutral-80">SEO</span>
											</span>
										</li>
										<li>
											<span className="d-inline-flex align-items-center gap-3 py-3 px-5 bg-neutral-6 rounded-pill">
												<span className="w-6 h-6 d-grid place-content-center rounded-circle bg-neutral-variant-30 clr-neutral-80">
													<BsCheck2 />
												</span>
												<span className="d-block fw-bold clr-neutral-80">Website</span>
											</span>
										</li>
										<li>
											<span className="d-inline-flex align-items-center gap-3 py-3 px-5 bg-neutral-6 rounded-pill">
												<span className="w-6 h-6 d-grid place-content-center rounded-circle bg-neutral-variant-30 clr-neutral-80">
													<BsCheck2 />
												</span>
												<span className="d-block fw-bold clr-neutral-80">Homework</span>
											</span>
										</li>
										<li>
											<span className="d-inline-flex align-items-center gap-3 py-3 px-5 bg-neutral-6 rounded-pill">
												<span className="w-6 h-6 d-grid place-content-center rounded-circle bg-neutral-variant-30 clr-neutral-80">
													<BsCheck2 />
												</span>
												<span className="d-block fw-bold clr-neutral-80">Education</span>
											</span>
										</li>
										<li>
											<span className="d-inline-flex align-items-center gap-3 py-3 px-5 bg-neutral-6 rounded-pill">
												<span className="w-6 h-6 d-grid place-content-center rounded-circle bg-neutral-variant-30 clr-neutral-80">
													<BsCheck2 />
												</span>
												<span className="d-block fw-bold clr-neutral-80">Tiktok</span>
											</span>
										</li>
									</ul>
								</div>
								<div className="scroller-x" data-direction="right" data-speed="slow">
									<ul className="list list-row align-items-center gap-4 scroller-x__list">
										<li>
											<span className="d-inline-flex align-items-center gap-3 py-3 px-5 bg-neutral-6 rounded-pill">
												<span className="w-6 h-6 d-grid place-content-center rounded-circle bg-neutral-variant-30 clr-neutral-80">
													<BsCheck2 />
												</span>
												<span className="d-block fw-bold clr-neutral-80">Articles</span>
											</span>
										</li>
										<li>
											<span className="d-inline-flex align-items-center gap-3 py-3 px-5 bg-neutral-6 rounded-pill">
												<span className="w-6 h-6 d-grid place-content-center rounded-circle bg-neutral-variant-30 clr-neutral-80">
													<BsCheck2 />
												</span>
												<span className="d-block fw-bold clr-neutral-80">Ecommerce</span>
											</span>
										</li>
										<li>
											<span className="d-inline-flex align-items-center gap-3 py-3 px-5 bg-neutral-6 rounded-pill">
												<span className="w-6 h-6 d-grid place-content-center rounded-circle bg-neutral-variant-30 clr-neutral-80">
													<BsCheck2 />
												</span>
												<span className="d-block fw-bold clr-neutral-80">Social Media</span>
											</span>
										</li>
										<li>
											<span className="d-inline-flex align-items-center gap-3 py-3 px-5 bg-neutral-6 rounded-pill">
												<span className="w-6 h-6 d-grid place-content-center rounded-circle bg-neutral-variant-30 clr-neutral-80">
													<BsCheck2 />
												</span>
												<span className="d-block fw-bold clr-neutral-80">Coding</span>
											</span>
										</li>
										<li>
											<span className="d-inline-flex align-items-center gap-3 py-3 px-5 bg-neutral-6 rounded-pill">
												<span className="w-6 h-6 d-grid place-content-center rounded-circle bg-neutral-variant-30 clr-neutral-80">
													<BsCheck2 />
												</span>
												<span className="d-block fw-bold clr-neutral-80">Blogging</span>
											</span>
										</li>
										<li>
											<span className="d-inline-flex align-items-center gap-3 py-3 px-5 bg-neutral-6 rounded-pill">
												<span className="w-6 h-6 d-grid place-content-center rounded-circle bg-neutral-variant-30 clr-neutral-80">
													<BsCheck2 />
												</span>
												<span className="d-block fw-bold clr-neutral-80">Podcast</span>
											</span>
										</li>
										<li>
											<span className="d-inline-flex align-items-center gap-3 py-3 px-5 bg-neutral-6 rounded-pill">
												<span className="w-6 h-6 d-grid place-content-center rounded-circle bg-neutral-variant-30 clr-neutral-80">
													<BsCheck2 />
												</span>
												<span className="d-block fw-bold clr-neutral-80">SEO</span>
											</span>
										</li>
										<li>
											<span className="d-inline-flex align-items-center gap-3 py-3 px-5 bg-neutral-6 rounded-pill">
												<span className="w-6 h-6 d-grid place-content-center rounded-circle bg-neutral-variant-30 clr-neutral-80">
													<BsCheck2 />
												</span>
												<span className="d-block fw-bold clr-neutral-80">Website</span>
											</span>
										</li>
										<li>
											<span className="d-inline-flex align-items-center gap-3 py-3 px-5 bg-neutral-6 rounded-pill">
												<span className="w-6 h-6 d-grid place-content-center rounded-circle bg-neutral-variant-30 clr-neutral-80">
													<BsCheck2 />
												</span>
												<span className="d-block fw-bold clr-neutral-80">Homework</span>
											</span>
										</li>
										<li>
											<span className="d-inline-flex align-items-center gap-3 py-3 px-5 bg-neutral-6 rounded-pill">
												<span className="w-6 h-6 d-grid place-content-center rounded-circle bg-neutral-variant-30 clr-neutral-80">
													<BsCheck2 />
												</span>
												<span className="d-block fw-bold clr-neutral-80">Education</span>
											</span>
										</li>
										<li>
											<span className="d-inline-flex align-items-center gap-3 py-3 px-5 bg-neutral-6 rounded-pill">
												<span className="w-6 h-6 d-grid place-content-center rounded-circle bg-neutral-variant-30 clr-neutral-80">
													<BsCheck2 />
												</span>
												<span className="d-block fw-bold clr-neutral-80">Tiktok</span>
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="border border-neutral-10 bg-black rounded-4 h-100">
							<div className="pt-4 pt-lg-6 pt-xxl-12 text-center overflow-hidden">
								<div className="scroller-x mb-6" data-direction="left" data-speed="slow">
									<ul className="list list-row align-items-center gap-4 scroller-x__list">
										<li>
											<img src={aboutImage3} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage4} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage5} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage6} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage7} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage8} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage9} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage10} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage11} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage12} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage13} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage14} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage15} alt="image" className="img-fluid" />
										</li>
									</ul>
								</div>
								<div className="scroller-x mb-6" data-direction="right" data-speed="slow">
									<ul className="list list-row align-items-center gap-4 scroller-x__list">
										<li>
											<img src={aboutImage3} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage4} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage5} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage6} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage7} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage8} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage9} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage10} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage11} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage12} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage13} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage14} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage15} alt="image" className="img-fluid" />
										</li>
									</ul>
								</div>
								<div className="scroller-x" data-direction="left" data-speed="slow">
									<ul className="list list-row align-items-center gap-4 scroller-x__list">
										<li>
											<img src={aboutImage3} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage4} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage5} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage6} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage7} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage8} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage9} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage10} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage11} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage12} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage13} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage14} alt="image" className="img-fluid" />
										</li>
										<li>
											<img src={aboutImage15} alt="image" className="img-fluid" />
										</li>
									</ul>
								</div>
							</div>
							<div className="p-4 p-lg-6 p-xxl-12">
								<span className="d-inline-block py-1 px-3 bg-neutral-6 clr-neutral-80 mb-4 rounded fadeIn_bottom">
									<span className="d-inline-block fw-extrabold">Unlimited Language</span>
								</span>
								<h5 className="mb-6 fw-extrabold">
									<Link to="/" className="link d-block clr-neutral-90 animate-text-from-right">
										AI Writebot Trusted by Millions in 40+ Countries.
									</Link>
								</h5>
								<p className="mb-0 fw-medium clr-neutral-80 animate-text-from-right">
									Simply paste a link to any of the hundreds of tools you use and Chronicle will
									seamlessly package your outputs.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<img
				src={aboutImage16}
				alt="image"
				className="img-fluid d-none d-xl-block position-absolute top-0 start-0 z-n1"
			/>
			<img
				src={aboutImage17}
				alt="image"
				className="img-fluid d-none d-xl-block position-absolute top-0 end-0 z-n1"
			/>
		</div>
	);
};
export default AboutTwo;
