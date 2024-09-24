import { Link } from "react-router-dom";
import logoLight from "/img/logo-light.png";
const FooterFour = () => {
	return (
		<div className="footer-4">
			<div className="section-space-sm-y">
				<div className="container">
					<div className="row g-4">
						<div className="col-md-4 col-xl-3">
							<div className="d-flex flex-column justify-content-between h-100">
								<Link
									to="/"
									className="logo link d-inline-flex align-items-center flex-shrink-0 mb-8 fadeIn_bottom"
								>
									<img src={logoLight} alt="logo" className="img-fluid object-fit-contain" />
								</Link>
								<ul className="list list-row gap-4 flex-wrap">
									<li className="fadein_bottom_28">
										<Link
											to="/"
											className="link w-10 h-10 d-grid place-content-center :gradient-btn-3 position-relative z-1 rounded-3"
										>
											<i className="bi bi-twitter"></i>
										</Link>
									</li>
									<li className="fadein_bottom_28">
										<Link
											to="/"
											className="link w-10 h-10 d-grid place-content-center :gradient-btn-3 position-relative z-1 rounded-3"
										>
											<i className="bi bi-behance"></i>
										</Link>
									</li>
									<li className="fadein_bottom_28">
										<Link
											to="/"
											className="link w-10 h-10 d-grid place-content-center :gradient-btn-3 position-relative z-1 rounded-3"
										>
											<i className="bi bi-dribbble"></i>
										</Link>
									</li>
									<li className="fadein_bottom_28">
										<Link
											to="/"
											className="link w-10 h-10 d-grid place-content-center :gradient-btn-3 position-relative z-1 rounded-3"
										>
											<i className="bi bi-facebook"></i>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-9">
							<div className="row g-4">
								<div className="col-md-3">
									<h6 className="mb-6 clr-neutral-80 fs-18 fadeIn_bottom">Resources</h6>
									<ul className="list gap-4">
										<li>
											<Link
												to="/blog-1"
												className="link d-inline-block clr-neutral-80 :clr-primary-key"
											>
												Hoyo
											</Link>
										</li>
										<li>
											<Link
												to="/about"
												className="link d-inline-block clr-neutral-80 :clr-primary-key"
											>
												About
											</Link>
										</li>
										<li>
											<Link
												to="/copywrite"
												className="link d-inline-block clr-neutral-80 :clr-primary-key"
											>
												Request API Access
											</Link>
										</li>
										<li>
											<Link
												to="/faq"
												className="link d-inline-block clr-neutral-80 :clr-primary-key"
											>
												FAQ
											</Link>
										</li>
									</ul>
								</div>
								<div className="col-md-3">
									<h6 className="mb-6 clr-neutral-80 fs-18 fadeIn_bottom">Quick Menu</h6>
									<ul className="list gap-4">
										<li>
											<Link
												to="/featured"
												className="link d-inline-block clr-neutral-80 :clr-primary-key"
											>
												Features
											</Link>
										</li>
										<li>
											<Link
												to="/login"
												className="link d-inline-block clr-neutral-80 :clr-primary-key"
											>
												Login
											</Link>
										</li>
										<li>
											<Link
												to="/pricing"
												className="link d-inline-block clr-neutral-80 :clr-primary-key"
											>
												Pricing
											</Link>
										</li>
										<li>
											<Link
												to="/register"
												className="link d-inline-block clr-neutral-80 :clr-primary-key"
											>
												Register
											</Link>
										</li>
									</ul>
								</div>
								<div className="col-md-3">
									<h6 className="mb-6 clr-neutral-80 fs-18 fadeIn_bottom">Tools</h6>
									<ul className="list gap-4">
										<li>
											<Link
												to="/use-cases"
												className="link d-inline-block clr-neutral-80 :clr-primary-key"
											>
												Use Cases
											</Link>
										</li>
										<li>
											<Link
												to="/privacy-policy"
												className="link d-inline-block clr-neutral-80 :clr-primary-key"
											>
												Privacy & Policy
											</Link>
										</li>
										<li>
											<Link
												to="/terms-service"
												className="link d-inline-block clr-neutral-80 :clr-primary-key"
											>
												Terms & Condition
											</Link>
										</li>
										<li>
											<Link
												to="/featured"
												className="link d-inline-block clr-neutral-80 :clr-primary-key"
											>
												Features
											</Link>
										</li>
									</ul>
								</div>
								<div className="col-md-3">
									<h6 className="mb-6 clr-neutral-80 fs-18 fadeIn_bottom">Policies</h6>
									<ul className="list gap-4">
										<li>
											<a target="blank"
												href="https://x.com/"
												className="link d-inline-block clr-neutral-80 :clr-primary-key"
											>
												Facebook
											</a>
										</li>
										<li>
											<a target="blank"
												href="https://x.com/"
												className="link d-inline-block clr-neutral-80 :clr-primary-key"
											>
												Twitter
											</a>
										</li>
										<li>
											<a target="blank"
												href="https://www.instagram.com/"
												className="link d-inline-block clr-neutral-80 :clr-primary-key"
											>
												Instagram
											</a>
										</li>
										<li>
											<a target="blank"
												a="https://discord.com/"
												className="link d-inline-block clr-neutral-80 :clr-primary-key"
											>
												Discord
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row g-4">
					<div className="col-12">
						<div className="section-space-xsm-y px-4 px-md-8 px-xl-12 rounded-4 border border-neutral-10">
							<div className="row g-4">
								<div className="col-md-6">
									<h5 className="mb-2 clr-white animate-line-3d">
										Join our
										<span className="d-inline-block gradient-flow gradient-flow--start">
											Newsletter
										</span>
									</h5>
									<p className="mb-0 fs-14 clr-neutral-80 animate-text-from-right">
										Keep up to date with everything Reflect
									</p>
								</div>
								<div className="col-md-6">
									<div className="d-flex border border-neutral-10 rounded-3 py-3 px-4 bg-black max-text-40 ms-auto">
										<input
											type="text"
											className="form-control bg-transparent border-0 clr-neutral-80 newsletter-1__input"
											placeholder="Enter Email"
										/>
										<button
											type="button"
											className="gradient-btn-3 position-relative z-1 link d-inline-flex gap-2 align-items-center justify-content-center px-5 py-2 rounded-1 fw-bold text-center border-0 bg-transparent fs-14 flex-shrink-0"
										>
											<span className="d-inline-block flex-shrink-0"> Subscribe </span>
											<span className="d-inline-block">
												<i className="bi bi-arrow-right-short"></i>
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section-space-xsm-y">
				<div className="container">
					<div className="row g-4">
						<div className="col-md-5 col-lg-6">
							<ul className="list list-row flex-wrap gap-4">
								<li>
									<Link
										to="/privacy-policy"
										className="link d-inline-block fs-14 clr-neutral-80 :clr-primary-key fw-medium"
									>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link
										to="/terms-service"
										className="link d-inline-block fs-14 clr-neutral-80 :clr-primary-key fw-medium"
									>
										Terms of Conditions
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-md-7 col-lg-6">
							<p className="mb-0 fs-14 clr-neutral-80 fw-medium text-md-end">
								Copyright &copy;2024 All Rights Reserved by{" "}
								<Link to="/" className="link d-inline-block clr-primary-key">
									WriteBot
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default FooterFour;
