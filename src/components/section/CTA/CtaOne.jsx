import { Link } from "react-router-dom";
import newsletterImg1 from "/img/nl-img-1.webp";
import newsletterImg2 from "/img/nl-img-2.webp";
import newsletterImg3 from "/img/nl-img-3.webp";
import newsletterImg4 from "/img/nl-img-4.webp";
import newsletterImg5 from "/img/nl-img-5.webp";
const CtaOne = () => {
	return (
		<div className="section-space-sm-top">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="section-space-y px-4 top-shadow position-relative z-1 overflow-hidden rounded-3 bg-neutral-key bg-opacity-6">
							<div className="row justify-content-center">
								<div className="col-md-10 col-xl-8 col-xxl-6">
									<h4 className="mb-14 text-center clr-neutral-90 animate-line-3d">
										Having Come this Distance, Why not Formalize your
										<span className="clr-grad-1">Achievement?</span>
									</h4>
									<div className="d-flex align-items-center justify-content-center gap-6 flex-wrap fadein_bottom_14">
										<Link
											href="/login"
											className="gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 px-6 py-3 rounded fw-bold text-center"
										>
											<span className="d-inline-block"> Try WriteBot Free </span>
											<span className="d-inline-block">
												<i className="bi bi-arrow-right"></i>
											</span>
										</Link>
										<Link
											href="/register"
											className="link d-inline-flex justify-content-center align-items-center gap-3 rounded bg-neutral-10 :bg-primary-key clr-white px-6 py-3 text-center rounded top-shadow"
										>
											<span className="d-inline-block fw-extrabold ">Request Demo</span>
											<span className="d-inline-block">
												<i className="bi bi-arrow-right"></i>
											</span>
										</Link>
									</div>
								</div>
							</div>
							<img
								src={newsletterImg1}
								alt="image"
								className="img-fluid newsletter-1-img newsletter-1-img--1 fadein_2"
							/>
							<img
								src={newsletterImg2}
								alt="image"
								className="img-fluid newsletter-1-img newsletter-1-img--2 fadein_3"
							/>
							<img
								src={newsletterImg3}
								alt="image"
								className="img-fluid newsletter-1-img newsletter-1-img--3 fadein_4"
							/>
							<img
								src={newsletterImg4}
								alt="image"
								className="img-fluid newsletter-1-img newsletter-1-img--4 fadein_5"
							/>
							<img
								src={newsletterImg5}
								alt="image"
								className="img-fluid newsletter-1-img newsletter-1-img--5 fadein_6"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CtaOne;
