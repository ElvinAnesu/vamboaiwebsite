import logoLight from "/img/logo-light.png";
import footerImage1 from "/img/footer-5-wrapper-digit.png";
import footerImage2 from "/img/footer-5-wrapper-left.png";
import footerImage3 from "/img/footer-5-wrapper-right.png";
import footerImage4 from "/img/footer-5-left.png";
import footerImage5 from "/img/footer-5-right.png";
import vamboLogo from "/img/vambologo.png"
import { Link } from "react-router-dom";
const FooterFive = () => {
	return (
		<footer className="footer-5 section-space-sm-top pb-9">
			<div className="container">
				<div
					className="footer-5-wrapper section-space-top rounded-5 px-5 px-sm-10 px-xl-12 px-xxl-20 pb-8 pb-xl-10 pb-xxl-12"
					style={{ backgroundColor: "#AB1515" }}
				>
					<div className="row gy-5 justify-content-xl-between">
						<div className="col-lg-12 col-xl-4">
							<Link to="/">
								<img src={vamboLogo} alt="logo" className="img-fluid" />
							</Link>
						</div>
						<div className="col-md-4 col-lg-3 col-xl-2">
							<h5 className="inverse-on-surface fs-18 fw-bold mb-7">
								Resources
							</h5>
							<ul className="list gap-4">
								<li>
									<Link
										to="/blog-1"
										className="link d-inline-block clr-neutral-80 :clr-primary-key"
									>
										Vambo Studio
									</Link>
								</li>
								<li>
									<Link
										to="/use-cases"
										className="link d-inline-block clr-neutral-80 :clr-primary-key"
									>
										Use cases
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-md-4 col-lg-3 col-xl-2">
							<h5 className="inverse-on-surface fs-18 fw-bold mb-7">
								Quick Menu
							</h5>
							<ul className="list gap-4">
								<li>
									<Link
										to="/featured"
										className="link d-inline-block clr-neutral-80 :clr-primary-key"
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										to="/login"
										className="link d-inline-block clr-neutral-80 :clr-primary-key"
									>
										Pricing
									</Link>
								</li>
								<li>
									<Link
										to="/pricing"
										className="link d-inline-block clr-neutral-80 :clr-primary-key"
									>
										FAQ
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-md-4 col-lg-3 col-xl-2">
							<h5 className="inverse-on-surface fs-18 fw-bold mb-7">
								Get in touch
							</h5>
							<ul className="list gap-4">
								<li>
									<Link
										to="/privacy-policy"
										className="link d-inline-block clr-neutral-80 :clr-primary-key"
									>
										contact us
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="row gy-4 mt-12 align-items-center">
						<div className="col-lg-8">
							<p className="clr-neutral-80 mb-0 text-lg-start text-center">
								&copy; All rights reserved
								<Link to="/" style={{ color: "#000000" }}>
									VamboAI
								</Link>
							</p>
						</div>
					</div>

					<img
						src={footerImage1}
						alt="image"
						className="img-fluid footer-5-wrapper-shape footer-5-wrapper-shape-digit"
					/>

					<img
						src={footerImage2}
						alt="image"
						className="img-fluid footer-5-wrapper-shape footer-5-wrapper-shape-left"
					/>

					<img
						src={footerImage3}
						alt="image"
						className="img-fluid footer-5-wrapper-shape footer-5-wrapper-shape-right"
					/>
				</div>
			</div>

			<img
				src={footerImage4}
				alt="image"
				className="img-fluid footer-5-shape footer-5-shape-left"
			/>
			<img
				src={footerImage5}
				alt="image"
				className="img-fluid footer-5-shape footer-5-shape-right"
			/>
		</footer>
	);
};
export default FooterFive;
