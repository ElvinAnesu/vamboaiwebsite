import { Link } from "react-router-dom";
import logo from "/img/logo.png";
const FooterThree = () => {
	return (
		<footer className="footer-3">
			<div className="section-space-top section-space-sm-bottom">
				<div className="container">
					<div className="row g-4">
						<div className="col-md-4 col-xl-3">
							<Link to="/" className="logo link d-inline-flex align-items-center flex-shrink-0 mb-8 ">
								<img src={logo} alt="logo" className="img-fluid object-fit-contain" />
							</Link>
							<p className="fs-14">Create stunning, professional-quality websites in with our powerful</p>
							<ul className="list list-row gap-4 flex-wrap">
								<li>
									<Link
										to="/"
										className="link w-10 h-10 d-grid place-content-center bg-primary-100 :bg-primary-40 :clr-white clr-primary-10 rounded-4"
									>
										<i className="bi bi-twitter"></i>
									</Link>
								</li>
								<li>
									<Link
										to="/"
										className="link w-10 h-10 d-grid place-content-center bg-primary-100 :bg-primary-40 :clr-white clr-primary-10 rounded-4"
									>
										<i className="bi bi-behance"></i>
									</Link>
								</li>
								<li>
									<Link
										to="/"
										className="link w-10 h-10 d-grid place-content-center bg-primary-100 :bg-primary-40 :clr-white clr-primary-10 rounded-4"
									>
										<i className="bi bi-dribbble"></i>
									</Link>
								</li>
								<li>
									<Link
										to="/"
										className="link w-10 h-10 d-grid place-content-center bg-primary-100 :bg-primary-40 :clr-white clr-primary-10 rounded-4"
									>
										<i className="bi bi-facebook"></i>
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-xl-9">
							<div className="row g-4">
								<div className="col-md-3">
									<h6 className="mb-6 clr-primary-10 fs-18">Resources</h6>
									<ul className="list gap-4">
										<li>
											<Link
												to="/blog-1"
												className="link d-inline-block clr-neutral-10 :clr-primary-key"
											>
												Blog
											</Link>
										</li>
										<li>
											<Link
												to="/about"
												className="link d-inline-block clr-neutral-10 :clr-primary-key"
											>
												About
											</Link>
										</li>
										<li>
											<Link
												to="/copywrite"
												className="link d-inline-block clr-neutral-10 :clr-primary-key"
											>
												Request API Access
											</Link>
										</li>
										<li>
											<Link
												to="/faq"
												className="link d-inline-block clr-neutral-10 :clr-primary-key"
											>
												FAQ
											</Link>
										</li>
									</ul>
								</div>
								<div className="col-md-3">
									<h6 className="mb-6 clr-primary-10 fs-18">Quick Menu</h6>
									<ul className="list gap-4">
										<li>
											<Link
												to="/featured"
												className="link d-inline-block clr-neutral-10 :clr-primary-key"
											>
												Features
											</Link>
										</li>
										<li>
											<Link
												to="/login"
												className="link d-inline-block clr-neutral-10 :clr-primary-key"
											>
												Login
											</Link>
										</li>
										<li>
											<Link
												to="/pricing"
												className="link d-inline-block clr-neutral-10 :clr-primary-key"
											>
												Pricing
											</Link>
										</li>
										<li>
											<Link
												to="/register"
												className="link d-inline-block clr-neutral-10 :clr-primary-key"
											>
												Register
											</Link>
										</li>
									</ul>
								</div>
								<div className="col-md-3">
									<h6 className="mb-6 clr-primary-10 fs-18">Tools</h6>
									<ul className="list gap-4">
										<li>
											<Link
												to="/use-cases"
												className="link d-inline-block clr-neutral-10 :clr-primary-key"
											>
												Use Cases
											</Link>
										</li>
										<li>
											<Link
												to="/privacy-policy"
												className="link d-inline-block clr-neutral-10 :clr-primary-key"
											>
												Privacy & Policy
											</Link>
										</li>
										<li>
											<Link
												to="/terms-service"
												className="link d-inline-block clr-neutral-10 :clr-primary-key"
											>
												Terms & Condition
											</Link>
										</li>
										<li>
											<Link
												to="/featured"
												className="link d-inline-block clr-neutral-10 :clr-primary-key"
											>
												Features
											</Link>
										</li>
									</ul>
								</div>
								<div className="col-md-3">
									<h6 className="mb-6 clr-primary-10 fs-18">Policies</h6>
									<ul className="list gap-3">
										<li>
											<Link
												to="/privacy-policy"
												className="link d-inline-block clr-neutral-10 :clr-primary-key"
											>
												Privacy Policy
											</Link>
										</li>
										<li>
											<Link
												to="/terms-service"
												className="link d-inline-block clr-neutral-10 :clr-primary-key"
											>
												Terms of Service
											</Link>
										</li>
										<li>
											<Link
												to="/copywrite"
												className="link d-inline-block clr-neutral-10 :clr-primary-key"
											>
												All Legal
											</Link>
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
					<div className="col-md-6">
						<div className="input-group input--group input--group-surface-bright surface-bright py-2 px-3 rounded-3 ">
							<input
								type="text"
								className="form-control form--control"
								placeholder="Join the community"
							/>
							<span className="input-group-text">
								<i className="bi bi-telegram"></i>
							</span>
						</div>
					</div>
					<div className="col-md-6">
						<div className="input-group input--group input--group-surface-bright surface-bright py-2 px-3 rounded-3 ">
							<input
								type="text"
								className="form-control form--control"
								placeholder="Join the community"
							/>
							<span className="input-group-text">
								<i className="bi bi-envelope-at-fill"></i>
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="section-space-xsm-y">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<p className="text-center mb-0 fs-14 fw-semibold clr-primary-10">
								Copyright &copy;2024 All Rights Reserved by
								<Link to="/" className="link d-inline-block clr-grad-4">
									WriteBot
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default FooterThree;
