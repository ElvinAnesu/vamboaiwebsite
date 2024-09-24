import { BsArrowUpRightCircle, BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import footerShape1 from "/img/footer-1-shape.webp";
import { Link } from "react-router-dom";
const FooterOne = () => {
	return (
		<footer className="footer-1 position-relative z-1 overflow-hidden">
			<div className="footer-1__top section-space-y border border-start-0 border-end-0 border-neutral-10 position-relative z-1 overflow-hidden">
				<div className="container">
					<div className="row g-4 gy-5">
						<div className="col-md-9 col-lg-8 col-xl-6">
							<div className="pe-xl-15">
								<h3 className="mb-10 clr-neutral-90 fw-extrabold animate-line-3d">
									Insider AI art Advice from top -<span className="clr-grad-1">Notch Neural</span>
									Network Artists ✍
								</h3>
								<div className="fadein_bottom_15">
									<Link
										to="/register"
										className="gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 px-6 py-3 rounded fw-bold text-center"
									>
										<span className="d-inline-block"> Request Demo </span>
										<span className="d-inline-block">
											<BsArrowUpRightCircle />
										</span>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-xl-6">
							<div className="ps-xl-10">
								<div className="row g-4 gy-5">
									<div className="col-md-3 col-xl-6">
										<h6 className="mb-6 fs-18 clr-neutral-90 animate-text-from-bottom">
											Resources
										</h6>
										<ul className="list gap-1">
											<li>
												<Link
													to="/blog-1"
													className="link d-inline-block clr-neutral-80 :clr-secondary-key animate-text-from-bottom"
												>
													Blog
												</Link>
											</li>
											<li>
												<Link
													to="/about"
													className="link d-inline-block clr-neutral-80 :clr-secondary-key animate-text-from-bottom"
												>
													About Us
												</Link>
											</li>
											<li>
												<Link
													to="/register"
													className="link d-inline-block clr-neutral-80 :clr-secondary-key animate-text-from-bottom"
												>
													Request API Access
												</Link>
											</li>
											<li>
												<Link
													to="/faq"
													className="link d-inline-block clr-neutral-80 :clr-secondary-key animate-text-from-bottom"
												>
													FAQ
												</Link>
											</li>
										</ul>
									</div>
									<div className="col-md-3 col-xl-6">
										<h6 className="mb-6 fs-18 clr-neutral-90 animate-text-from-bottom">
											Quick Menu
										</h6>
										<ul className="list gap-1">
											<li>
												<Link
													to="/blog-details"
													className="link d-inline-block clr-neutral-80 :clr-secondary-key animate-text-from-bottom"
												>
													Blog Details
												</Link>
											</li>
											<li>
												<Link
													to="/about"
													className="link d-inline-block clr-neutral-80 :clr-secondary-key animate-text-from-bottom"
												>
													About Us
												</Link>
											</li>
											<li>
												<Link
													to="/register"
													className="link d-inline-block clr-neutral-80 :clr-secondary-key animate-text-from-bottom"
												>
													Register
												</Link>
											</li>
											<li>
												<Link
													to="/pricing"
													className="link d-inline-block clr-neutral-80 :clr-secondary-key animate-text-from-bottom"
												>
													Pricing
												</Link>
											</li>
										</ul>
									</div>
									<div className="col-md-3 col-xl-6">
										<h6 className="mb-6 fs-18 clr-neutral-90 animate-text-from-bottom">
											Socials links
										</h6>
										<ul className="list gap-1">
											<li>
													<a target="blank"
										href="https://www.facebook.com/"
													className="link d-inline-block clr-neutral-80 :clr-secondary-key animate-text-from-bottom"
												>
													Facebook
												</a>
											</li>
											<li>
												<a target="blank"
										href="https://www.linkedin.com/feed/"
													className="link d-inline-block clr-neutral-80 :clr-secondary-key animate-text-from-bottom"
												>
													Linkedin
												</a>
											</li>
											<li>
												<a target="blank"
										href="https://www.instagram.com/"
													className="link d-inline-block clr-neutral-80 :clr-secondary-key animate-text-from-bottom"
												>
													Instagram
												</a>
											</li>
											<li>
												<a target="blank"
													href="https://www.tiktok.com/"
													className="link d-inline-block clr-neutral-80 :clr-secondary-key animate-text-from-bottom"
												>
													TikTok
												</a>
											</li>
											<li>
												<a target="blank"
													href="https://discord.com/"
													className="link d-inline-block clr-neutral-80 :clr-secondary-key animate-text-from-bottom"
												>
													Discord
												</a>
											</li>
										</ul>
									</div>
									<div className="col-md-3 col-xl-6">
										<h6 className="mb-6 fs-18 clr-neutral-90 animate-text-from-bottom">Tools</h6>
										<ul className="list gap-1">
											<li>
												<Link
													to="/privacy-policy"
													className="link d-inline-block clr-neutral-80 :clr-secondary-key animate-text-from-bottom"
												>
													Privacy & Policy
												</Link>
											</li>
											<li>
												<Link
													to="/terms-service"
													className="link d-inline-block clr-neutral-80 :clr-secondary-key animate-text-from-bottom"
												>
													Terms & Condition
												</Link>
											</li>
											<li>
												<Link
													to="/featured"
													className="link d-inline-block clr-neutral-80 :clr-secondary-key animate-text-from-bottom"
												>
													Features
												</Link>
											</li>
											<li>
												<Link
													to="/use-cases"
													className="link d-inline-block clr-neutral-80 :clr-secondary-key animate-text-from-bottom"
												>
													Use Cases
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-1__bottom section-space-xsm-y">
				<div className="container">
					<div className="row g-4">
						<div className="col-md-5 col-lg-6">
							<p className="mb-0 clr-neutral-80 fs-14 fw-semibold">
								Copyright &copy; 2024 All Rights Reserved by
								<Link to="/" className="link d-inline-block clr-secondary-key">
									WriteBot
								</Link>
							</p>
						</div>
						<div className="col-md-7 col-lg-6">
							<ul className="list list-row flex-wrap gap-3 justify-content-md-end">
								<li>
									<a target="blank"
										href="https://www.facebook.com/"
										className="link d-inline-flex align-items-center gap-2 fs-14 clr-neutral-80 :clr-fb fw-medium"
									>
										<span className="d-block flex-shrink-0">
											<BsFacebook />
										</span>
										<span className="d-block flex-grow-1">Facebook</span>
									</a>
								</li>
								<li>
									<a target="blank"
										href="https://www.instagram.com/"
										className="link d-inline-flex align-items-center gap-2 fs-14 clr-neutral-80 :clr-ins fw-medium"
									>
										<span className="d-block flex-shrink-0">
											<BsInstagram />
										</span>
										<span className="d-block flex-grow-1">Instagram</span>
									</a>
								</li>
								<li>
									<a target="blank"
										href="https://x.com/"
										className="link d-inline-flex align-items-center gap-2 fs-14 clr-neutral-80 :clr-tw fw-medium"
									>
										<span className="d-block flex-shrink-0">
											<BsTwitter />
										</span>
										<span className="d-block flex-grow-1">Twitter</span>
									</a>
								</li>
								<li>
									<a target="blank"
										href="https://www.linkedin.com/feed/"
										className="link d-inline-flex align-items-center gap-2 fs-14 clr-neutral-80 :clr-in fw-medium"
									>
										<span className="d-block flex-shrink-0">
											<BsLinkedin />
										</span>
										<span className="d-block flex-grow-1">Linkedin</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<img src={footerShape1} alt="image" className="img-fluid footer-1__shape" />
		</footer>
	);
};
export default FooterOne;
