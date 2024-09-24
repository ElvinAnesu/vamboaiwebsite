import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import feedbackImage1 from "/img/thumbs.png";
import feedbackImage2 from "/img/testimonial-2-avatar-3.webp";
import feedbackImage3 from "/img/testimonial-2-avatar-1.webp";
import feedbackImage4 from "/img/testimonial-2-avatar-2.webp";
import feedbackImage5 from "/img/testimonial-2-shade.png";
import feedbackImage6 from "/img/testimonial-2-el-1.webp";
import feedbackImage7 from "/img/testimonial-2-el-2.webp";
import feedbackImage8 from "/img/testimonial-2-el-3.webp";
const FeedbackFour = () => {
	return (
		<section className="testimonial-section-2 section-space-sm-top section-space-sm-bottom overflow-hidden">
			<div className="container">
				<div className="testimonial-section-2-wrapper">
					<div className="row gy-4">
						<div className="col-xl-5">
							<div className="row gy-5 justify-content-end">
								<div className="col-lg-6 col-xl-12">
									<h3 className="fw-extrabold max-text-24 animate-text-from-right">
										Our Trust
										<img
											src={feedbackImage1}
											alt="image"
											className="img-fluid fadeIn_bottom"
										/>
										<span
											className="d-block animate-text-from-right"
											style={{ color: "#AB1515" }}
										>
											Customer Stories
										</span>
									</h3>
								</div>
								<div className="col-lg-6 col-xl-9">
									<div className="bg-white py-8 py-lg-12 py-xl-15 px-6 px-lg-8 px-xl-10 rounded-3">
										<div className="d-flex flex-wrap align-items-center gap-4">
											<div>
												<h5
													className="fs-24 fw-bold mb-1 clr-primary-10 animate-text-from-right"
													style={{ color: "#AB1515" }}
												>
													John O.
												</h5>
												<p className="mb-0 fw-medium animate-text-from-right">
													CEO, AfricanEdTech Solutions
												</p>
											</div>
										</div>

										<h5
											className="h6 fw-bold mt-6 mt-lg-8 mt-xl-10 mb-4 mb-lg-6 clr-primary-10 animate-text-from-right"
											style={{ color: "#AB1515" }}
										>
											We have a great tool!
										</h5>
										<p className="mb-0 animate-text-from-right">
											Vambo AI has been a game-changer for us. Integrating their
											multilingual API into our learning platform allowed us to
											scale language support quickly and improve engagement with
											our users. It's one of the best tools we've ever used for
											our African language curriculum.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-7">
							<div className="row gy-4 justify-content-end">
								<div className="col-xl-10 col-lg-6">
									<div className="bg-white py-8 py-lg-12 py-xl-15 px-6 px-lg-8 px-xl-10 rounded-3">
										<div className="d-flex flex-wrap align-items-center gap-4">
											<div>
												<h5
													className="fs-24 fw-bold mb-1 clr-primary-10 animate-text-from-right"
													style={{ color: "#AB1515" }}
												>
													Amina K.
												</h5>
												<p className="mb-0 fw-medium animate-text-from-right">
													Product Manager, HealthFirst App
												</p>
											</div>
										</div>

										<h5
											className="h6 fw-bold mt-6 mt-lg-8 mt-xl-10 mb-4 mb-lg-6 clr-primary-10 reveal-text"
											style={{ color: "#AB1515" }}
										>
											Awesome Service in native languages
										</h5>
										<p className="mb-0 animate-text-from-right">
											Our users needed healthcare information in their native
											languages, and Vambo AI's translation tools provided
											exactly that. Their solution enabled us to translate vital
											health content into several African languages, drastically
											improving our reach and user satisfaction.
										</p>
									</div>
								</div>
								<div className="col-xl-12 col-lg-6">
									<div className="bg-white py-8 py-lg-12 py-xl-15 px-6 px-lg-8 px-xl-10 rounded-3">
										<div className="d-flex flex-wrap align-items-center gap-4">
											<div>
												<h5
													className="fs-24 fw-bold mb-1 clr-primary-10 animate-text-from-right"
													style={{ color: "#AB1515" }}
												>
													David M.
												</h5>
												<p className="mb-0 fw-medium animate-text-from-right">
													CTO, TechVillage Africa
												</p>
											</div>
										</div>

										<h5
											className="h6 fw-bold mt-6 mt-lg-8 mt-xl-10 mb-4 mb-lg-6 clr-primary-10 reveal-text"
											style={{ color: "#AB1515" }}
										>
											Robust NLP models for africa
										</h5>
										<p className="mb-0 animate-text-from-right">
											@As a tech-driven platform, it's crucial that we provide
											localized content for our diverse users. Vambo AI's robust
											NLP and language models helped us integrate powerful
											language solutions quickly and efficiently, allowing us to
											reach more people across the continent
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default FeedbackFour;
