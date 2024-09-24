import blogImage1 from "/img/blog-img-9.png";
import blogImage2 from "/img/avatar-1.png";
import blogImage3 from "/img/blog-card-bg-1.png";
import blogImage4 from "/img/flag-1.png";
import blogImage5 from "/img/flag-2.png";
import blogImage6 from "/img/flag-3.png";
import blogImage7 from "/img/flag-4.png";
import blogImage8 from "/img/flag-5.png";
import blogImage9 from "/img/flag-6.png";
import blogImage10 from "/img/flag-7.png";
import blogImage11 from "/img/flag-8.png";
import blogImage12 from "/img/flag-9.png";
import blogImage13 from "/img/flag-10.png";
import blogImage14 from "/img/flag-11.png";
import blogImage15 from "/img/flag-12.png";
import blogImage16 from "/img/flag-13.png";
import blogImage17 from "/img/bg-1.png";
import blogImage18 from "/img/user.jpg";
import blogImage19 from "/img/user-1.png";
import blogImage20 from "/img/bg-2.png";
import { BsHandThumbsUpFill, BsCalendarRange } from "react-icons/bs";
import { Link } from "react-router-dom";
const BlogThree = () => {
	return (
		<div className="section-space-y">
			<div className="container">
				<div className="row g-4">
					<div className="col-lg-5 col-xxl-6">
						<div className="p-4 px-md-8 py-md-10 rounded-4 bg-white position-relative z-1 overflow-hidden">
							<div className="text-center mb-10 fadeIn_bottom">
								<img src={blogImage1} alt="image" className="img-fluid" />
							</div>
							<ul className="list list-row align-items-center flex-wrap gap-6 mb-3">
								<li className="fadeIn_bottom">
									<div className="d-flex align-items-center gap-3">
										<div className="w-8 h-8 rounded-circle overflow-hidden flex-shrink-0">
											<img
												src={blogImage2}
												alt="image"
												className="w-100 h-100 object-fit-cover"
											/>
										</div>
										<p className="mb-0 fw-medium clr-neutral-variant-50">Peter Parker</p>
									</div>
								</li>
								<li className="fadeIn_bottom">
									<div className="d-flex align-items-center gap-3">
										<div className="flex-shrink-0">
											<BsCalendarRange />
										</div>
										<p className="mb-0 fw-medium clr-neutral-variant-50">01 October 2023</p>
									</div>
								</li>
							</ul>
							<h4>
								<Link
									to="/blog-details"
									className="link d-block clr-primary-10 :clr-primary-key animate-line-3d"
								>
									Intelligent Writing Assistant
								</Link>
							</h4>
							<p className="mb-0 clr-neutral-variant-50 animate-text-from-right">
								It takes less than 20 minutes to go through our onboarding forms. If your information
								matches our records, you will be pushed through immediately by our automated system.
							</p>
							<div className="position-absolute inset-0 z-n1">
								<img src={blogImage3} alt="image" className="w-100 h-100 object-fit-contain" />
							</div>
						</div>
					</div>
					<div className="col-lg-7 col-xxl-6">
						<div className="row g-4">
							<div className="col-12">
								<div className="overflow-hidden rounded-4 bg-primary-90">
									<div className="p-4 px-md-8 py-md-10">
										<h4>
											<Link
												href="/blog-details"
												className="link d-block clr-primary-10 :clr-primary-key animate-line-3d"
											>
												Multilingual Support
											</Link>
										</h4>
										<p className="mb-0 clr-primary-10 fw-medium max-text-40 animate-text-from-right">
											WriteBot to understand and generate content in different languages
										</p>
									</div>
									<div className="scroller-x mb-3" data-direction="left" data-speed="slow">
										<ul className="list list-row align-items-center gap-4 scroller-x__list">
											<li>
												<div className="d-inline-flex align-items-center gap-4 py-2 px-4 rounded-pill bg-white">
													<div className="flex-shrink-0 d-grid place-content-center w-9 h-9 overflow-hidden">
														<img
															src={blogImage4}
															alt="image"
															className="w-100 h-100 object-fit-contain"
														/>
													</div>
													<span className="d-block fw-bold clr-primary-10 fs-18">Brazil</span>
												</div>
											</li>
											<li>
												<div className="d-inline-flex align-items-center gap-4 py-2 px-4 rounded-pill bg-white">
													<div className="flex-shrink-0 d-grid place-content-center w-9 h-9 overflow-hidden">
														<img
															src={blogImage5}
															alt="image"
															className="w-100 h-100 object-fit-contain"
														/>
													</div>
													<span className="d-block fw-bold clr-primary-10 fs-18">Korea</span>
												</div>
											</li>
											<li>
												<div className="d-inline-flex align-items-center gap-4 py-2 px-4 rounded-pill bg-white">
													<div className="flex-shrink-0 d-grid place-content-center w-9 h-9 overflow-hidden">
														<img
															src={blogImage6}
															alt="image"
															className="w-100 h-100 object-fit-contain"
														/>
													</div>
													<span className="d-block fw-bold clr-primary-10 fs-18">
														Austria
													</span>
												</div>
											</li>
											<li>
												<div className="d-inline-flex align-items-center gap-4 py-2 px-4 rounded-pill bg-white">
													<div className="flex-shrink-0 d-grid place-content-center w-9 h-9 overflow-hidden">
														<img
															src={blogImage7}
															alt="image"
															className="w-100 h-100 object-fit-contain"
														/>
													</div>
													<span className="d-block fw-bold clr-primary-10 fs-18">
														Argentina
													</span>
												</div>
											</li>
											<li>
												<div className="d-inline-flex align-items-center gap-4 py-2 px-4 rounded-pill bg-white">
													<div className="flex-shrink-0 d-grid place-content-center w-9 h-9 overflow-hidden">
														<img
															src={blogImage8}
															alt="image"
															className="w-100 h-100 object-fit-contain"
														/>
													</div>
													<span className="d-block fw-bold clr-primary-10 fs-18">
														England
													</span>
												</div>
											</li>
										</ul>
									</div>
									<div className="scroller-x mb-3" data-direction="right" data-speed="slow">
										<ul className="list list-row align-items-center gap-4 scroller-x__list">
											<li>
												<div className="d-inline-flex align-items-center gap-4 py-2 px-4 rounded-pill bg-white">
													<div className="flex-shrink-0 d-grid place-content-center w-9 h-9 overflow-hidden">
														<img
															src={blogImage9}
															alt="image"
															className="w-100 h-100 object-fit-contain"
														/>
													</div>
													<span className="d-block fw-bold clr-primary-10 fs-18">
														English
													</span>
												</div>
											</li>
											<li>
												<div className="d-inline-flex align-items-center gap-4 py-2 px-4 rounded-pill bg-white">
													<div className="flex-shrink-0 d-grid place-content-center w-9 h-9 overflow-hidden">
														<img
															src={blogImage10}
															alt="image"
															className="w-100 h-100 object-fit-contain"
														/>
													</div>
													<span className="d-block fw-bold clr-primary-10 fs-18">German</span>
												</div>
											</li>
											<li>
												<div className="d-inline-flex align-items-center gap-4 py-2 px-4 rounded-pill bg-white">
													<div className="flex-shrink-0 d-grid place-content-center w-9 h-9 overflow-hidden">
														<img
															src={blogImage11}
															alt="image"
															className="w-100 h-100 object-fit-contain"
														/>
													</div>
													<span className="d-block fw-bold clr-primary-10 fs-18">Czech</span>
												</div>
											</li>
											<li>
												<div className="d-inline-flex align-items-center gap-4 py-2 px-4 rounded-pill bg-white">
													<div className="flex-shrink-0 d-grid place-content-center w-9 h-9 overflow-hidden">
														<img
															src={blogImage12}
															alt="image"
															className="w-100 h-100 object-fit-contain"
														/>
													</div>
													<span className="d-block fw-bold clr-primary-10 fs-18">Canada</span>
												</div>
											</li>
											<li>
												<div className="d-inline-flex align-items-center gap-4 py-2 px-4 rounded-pill bg-white">
													<div className="flex-shrink-0 d-grid place-content-center w-9 h-9 overflow-hidden">
														<img
															src={blogImage13}
															alt="image"
															className="w-100 h-100 object-fit-contain"
														/>
													</div>
													<span className="d-block fw-bold clr-primary-10 fs-18">
														England
													</span>
												</div>
											</li>
										</ul>
									</div>
									<div className="scroller-x mb-3" data-direction="left" data-speed="slow">
										<ul className="list list-row align-items-center gap-4 scroller-x__list">
											<li>
												<div className="d-inline-flex align-items-center gap-4 py-2 px-4 rounded-pill bg-white">
													<div className="flex-shrink-0 d-grid place-content-center w-9 h-9 overflow-hidden">
														<img
															src={blogImage13}
															alt="image"
															className="w-100 h-100 object-fit-contain"
														/>
													</div>
													<span className="d-block fw-bold clr-primary-10 fs-18">Polan</span>
												</div>
											</li>
											<li>
												<div className="d-inline-flex align-items-center gap-4 py-2 px-4 rounded-pill bg-white">
													<div className="flex-shrink-0 d-grid place-content-center w-9 h-9 overflow-hidden">
														<img
															src={blogImage14}
															alt="image"
															className="w-100 h-100 object-fit-contain"
														/>
													</div>
													<span className="d-block fw-bold clr-primary-10 fs-18">Sweden</span>
												</div>
											</li>
											<li>
												<div className="d-inline-flex align-items-center gap-4 py-2 px-4 rounded-pill bg-white">
													<div className="flex-shrink-0 d-grid place-content-center w-9 h-9 overflow-hidden">
														<img
															src={blogImage15}
															alt="image"
															className="w-100 h-100 object-fit-contain"
														/>
													</div>
													<span className="d-block fw-bold clr-primary-10 fs-18">Europe</span>
												</div>
											</li>
											<li>
												<div className="d-inline-flex align-items-center gap-4 py-2 px-4 rounded-pill bg-white">
													<div className="flex-shrink-0 d-grid place-content-center w-9 h-9 overflow-hidden">
														<img
															src={blogImage16}
															alt="image"
															className="w-100 h-100 object-fit-contain"
														/>
													</div>
													<span className="d-block fw-bold clr-primary-10 fs-18">Turkey</span>
												</div>
											</li>
											<li>
												<div className="d-inline-flex align-items-center gap-4 py-2 px-4 rounded-pill bg-white">
													<div className="flex-shrink-0 d-grid place-content-center w-9 h-9 overflow-hidden">
														<img
															src={blogImage8}
															alt="image"
															className="w-100 h-100 object-fit-contain"
														/>
													</div>
													<span className="d-block fw-bold clr-primary-10 fs-18">
														England
													</span>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-md-6 fadeIn_bottom">
								<div className="p-4 py-md-11 px-md-9 px-lg-4 px-xl-9 rounded-4 overflow-hidden position-relative z-1 bg-white">
									<div className="d-grid place-content-center w-14 h-14 rounded-circle bg-primary-90 clr-primary-key fs-24 mb-6">
										<BsHandThumbsUpFill />
									</div>
									<h3 className="mb-2 fw-extrabold clr-primary-10">80%</h3>
									<h5 className="mb-0">Positive Review</h5>
									<img
										src={blogImage17}
										alt="image"
										className="w-100 h-100 object-fit-cover position-absolute inset-0 z-n1 pointer-none"
									/>
								</div>
							</div>
							<div className="col-md-6 fadeIn_bottom">
								<div className="p-4 py-md-11 px-md-9 px-lg-4 px-xl-9 rounded-4 overflow-hidden position-relative z-1 bg-white">
									<ul className="list list-row align-items-center avatar--group mb-7">
										<li>
											<div className="avatar w-13 ratio ratio-1x1 rounded-circle">
												<img
													src={blogImage18}
													alt="image"
													className="img-fluid object-fit-cover rounded-circle"
												/>
											</div>
										</li>
										<li>
											<div className="avatar w-13 ratio ratio-1x1 rounded-circle">
												<img
													src={blogImage19}
													alt="image"
													className="img-fluid object-fit-cover rounded-circle"
												/>
											</div>
										</li>
										<li>
											<div className="avatar w-13 ratio ratio-1x1 rounded-circle">
												<img
													src={blogImage18}
													alt="image"
													className="img-fluid object-fit-cover rounded-circle"
												/>
											</div>
										</li>
										<li>
											<div className="avatar w-13 ratio ratio-1x1 rounded-circle">
												<img
													src={blogImage19}
													alt="image"
													className="img-fluid object-fit-cover rounded-circle"
												/>
											</div>
										</li>
										<li>
											<div className="avatar w-13 ratio ratio-1x1 primary-container on-primary-container fs-18 lh-1 text-center fw-semibold rounded-circle">
												+5
											</div>
										</li>
									</ul>
									<h3 className="mb-2 fw-extrabold clr-primary-10">12M+</h3>
									<h5 className="mb-0">Worldwide User</h5>
									<img
										src={blogImage20}
										alt="image"
										className="w-100 h-100 object-fit-cover position-absolute inset-0 z-n1 pointer-none"
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
export default BlogThree;
