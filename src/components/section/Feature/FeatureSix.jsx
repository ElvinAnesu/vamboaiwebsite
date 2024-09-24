import { BsLightningFill, BsGearFill, BsChatDotsFill, BsFlagFill } from "react-icons/bs";
import featImage1 from "/img/logo-circular-text.png";
import featImage2 from "/img/circular-text-shape-start.png";
import featImage3 from "/img/circular-text-shape-end.png";
import featImage4 from "/img/icon-feature-1.png";
import featImage5 from "/img/gradient-bottom-half-border.png";
import featImage6 from "/img/icon-feature-2.png";
import featImage7 from "/img/gradient-top-half-border.png";
import featImage8 from "/img/icon-feature-3.png";
import featImage9 from "/img/gradient-bottom-half-border.png";
import featImage10 from "/img/icon-feature-4.png";
import featImage11 from "/img/gradient-top-half-border.png";
import featImage12 from "/img/fb-img-1.png";
import featImage13 from "/img/fb-img-2.png";
import featImage14 from "/img/fb-img-3.png";
import featImage15 from "/img/fb-img-4.png";
import featImage16 from "/img/fb-img-5.png";
import featImage17 from "/img/fb-card-blurr-shape.png";
import featImage18 from "/img/fb-img-6.png";
import featImage19 from "/img/fb-img-7.png";
import featImage20 from "/img/fb-img-8.png";
import featImage21 from "/img/fb-img-9.png";
import { Link } from "react-router-dom";
const FeatureSix = () => {
	return (
		<div className="section-space-sm-y">
			<div className="section-space-sm-y">
				<div className="ai-featured-section section-space-sm-y">
					<div className="ai-featured-section__top section-space-xsm-bottom">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="d-inline-block position-relative z-1">
										<img src={featImage1} alt="image" className="img-fluid fadeIn_bottom" />
										<img
											src={featImage2}
											alt="image"
											className="ai-featured-section__top-shape-1"
										/>
										<img
											src={featImage3}
											alt="image"
											className="ai-featured-section__top-shape-2"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="ai-featured-section__title section-space-sm-bottom">
						<div className="container">
							<div className="row">
								<div className="col-md-10 col-xl-8">
									<h3 className="mb-0 max-text-24 clr-neutral-90 fw-extrabold animate-line-3d">
										AI has the potential to be a powerful tool for
										<span className="d-inline-block gradient-flow gradient-flow--start">
											content writing
										</span>
									</h3>
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="row g-4">
							<div className="col-md-6 col-lg-4 col-xl-3 featured-lists fadein_bottom_23">
								<div className="p-3 position-relative z-1 bg-black rounded-3 border border-dashed border-neutral-80 border-opacity-4 h-100">
									<div className="d-flex flex-column justify-content-center px-4 py-12 rounded-3 bg-neutral-10 text-center h-100">
										<div className="mb-6 d-inline-block mx-auto">
											<img src={featImage4} alt="image" className="img-fluid" />
										</div>
										<h6 className="clr-neutral-90 fw-extrabold">Generating Content</h6>
										<p className="mb-0 clr-neutral-80">
											AI can generate written content, including articles blog posts descriptions
										</p>
									</div>
									<img
										src={featImage5}
										alt="image"
										className="img-fluid w-100 position-absolute start-0 end-0 bottom-0 z-n1"
									/>
								</div>
							</div>
							<div className="col-md-6 col-lg-4 col-xl-3 featured-lists fadein_bottom_23">
								<div className="p-3 position-relative z-1 bg-black rounded-3 border border-dashed border-neutral-80 border-opacity-4 h-100">
									<div className="d-flex flex-column justify-content-center px-4 py-12 rounded-3 bg-neutral-10 text-center h-100">
										<div className="mb-6 d-inline-block mx-auto">
											<img src={featImage6} alt="image" className="img-fluid" />
										</div>
										<h6 className="clr-neutral-90 fw-extrabold">Personalization</h6>
										<p className="mb-0 clr-neutral-80">
											AI can help create personalized content for different audiences
										</p>
									</div>
									<img
										src={featImage7}
										alt="image"
										className="img-fluid w-100 position-absolute start-0 end-0 top-0 z-n1"
									/>
								</div>
							</div>
							<div className="col-md-6 col-lg-4 col-xl-3 featured-lists fadein_bottom_23">
								<div className="p-3 position-relative z-1 bg-black rounded-3 border border-dashed border-neutral-80 border-opacity-4 h-100">
									<div className="d-flex flex-column justify-content-center px-4 py-12 rounded-3 bg-neutral-10 text-center h-100">
										<div className="mb-6 d-inline-block mx-auto">
											<img src={featImage8} alt="image" className="img-fluid" />
										</div>
										<h6 className="clr-neutral-90 fw-extrabold">Easy Translation</h6>
										<p className="mb-0 clr-neutral-80">
											AI-powered translation tools can quickly translate content into multiple
											languages
										</p>
									</div>
									<img
										src={featImage9}
										alt="image"
										className="img-fluid w-100 position-absolute start-0 end-0 bottom-0 z-n1"
									/>
								</div>
							</div>
							<div className="col-md-6 col-lg-4 col-xl-3 featured-lists fadein_bottom_23">
								<div className="p-3 position-relative z-1 bg-black rounded-3 border border-dashed border-neutral-80 border-opacity-4 h-100">
									<div className="d-flex flex-column justify-content-center px-4 py-12 rounded-3 bg-neutral-10 text-center h-100">
										<div className="mb-6 d-inline-block mx-auto">
											<img src={featImage10} alt="image" className="img-fluid" />
										</div>
										<h6 className="clr-neutral-90 fw-extrabold">Content Curation</h6>
										<p className="mb-0 clr-neutral-80">
											AI can help create personalized content for different audiences
										</p>
									</div>
									<img
										src={featImage11}
										alt="image"
										className="img-fluid w-100 position-absolute start-0 end-0 top-0 z-n1"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section-space-sm-y">
				<div className="section-space-sm-bottom">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-10 col-xl-8">
								<h3 className="mb-0 text-center clr-neutral-90 fw-extrabold animate-line-3d">
									Quickly produce
									<span className="d-inline-block gradient-flow gradient-flow--start">
										factual articles
									</span>
									that are on-brand and rank
								</h3>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row g-4">
						<div className="col-md-6 col-lg-4 fb-card-lists fadein_bottom_24">
							<div className="fb-card p-4 p-xl-8 rounded-4 bg-neutral-6 overflow-hidden h-100">
								<div className="d-flex flex-wrap justify-content-between align-items-center mb-5">
									<span className="d-block fw-bold fs-18 clr-neutral-90">Keywords</span>
									<span className="d-inline-block flex-shrink-0 py-1 px-2 bg-info-50 bg-opacity-2 clr-info-50 lh-1 fs-14">
										Step 01
									</span>
								</div>
								<div className="row g-4">
									<div className="col-sm-6">
										<div className="p-4 p-md-6 rounded-4 bg-neutral-10 bg-opacity-5 shadow text-center">
											<div className="w-8 h-8 mx-auto mb-4 d-grid place-content-center rounded-circle bg-info-50 bg-opacity-5 clr-info-50">
												<BsLightningFill />
											</div>
											<span className="d-block clr-neutral-80 fs-12 fw-bold">
												Trending Keywords
											</span>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="p-4 p-md-6 rounded-4 bg-neutral-10 bg-opacity-5 shadow text-center">
											<div className="w-8 h-8 mx-auto mb-4 d-grid place-content-center rounded-circle bg-warning-50 bg-opacity-5 clr-warning-50">
												<BsGearFill />
											</div>
											<span className="d-block clr-neutral-80 fs-12 fw-bold">Keywords Topic</span>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="p-4 p-md-6 rounded-4 bg-neutral-10 bg-opacity-5 shadow text-center">
											<div className="w-8 h-8 mx-auto mb-4 d-grid place-content-center rounded-circle bg-success-50 bg-opacity-5 clr-success-50">
												<BsChatDotsFill />
											</div>
											<span className="d-block clr-neutral-80 fs-12 fw-bold">
												Number Keywords
											</span>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="p-4 p-md-6 rounded-4 bg-neutral-10 bg-opacity-5 shadow text-center">
											<div className="w-8 h-8 mx-auto mb-4 d-grid place-content-center rounded-circle bg-primary-50 bg-opacity-5 clr-primary-50">
												<BsFlagFill />
											</div>
											<span className="d-block clr-neutral-80 fs-12 fw-bold">
												Choose language
											</span>
										</div>
									</div>
									<div className="col-12">
										<Link
											to="/"
											className="link d-block w-100 max-text-32 mx-auto border border-dashed border-success-50 border-opacity-5 py-3 px-6 rounded ff-1 fs-12 fw-bold clr-white text-center"
										>
											Other Input
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 fb-card-lists fadein_bottom_24">
							<div className="fb-card p-4 p-xl-8 rounded-4 bg-neutral-6 overflow-hidden h-100">
								<div className="d-flex flex-wrap justify-content-between align-items-center mb-5">
									<span className="d-block fw-bold fs-18 clr-neutral-90">Generated Titles</span>
									<span className="d-inline-block flex-shrink-0 py-1 px-2 bg-primary-50 bg-opacity-2 clr-primary-50 lh-1 fs-14">
										Step 02
									</span>
								</div>
								<ul className="list gap-6">
									<li>
										<img src={featImage12} alt="image" className="img-fluid w-100" />
									</li>
									<li>
										<img src={featImage13} alt="image" className="img-fluid w-100" />
									</li>
									<li>
										<img src={featImage14} alt="image" className="img-fluid w-100" />
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 fb-card-lists fadein_bottom_24">
							<div className="fb-card p-4 p-xl-8 rounded-4 bg-neutral-6 overflow-hidden h-100">
								<div className="d-flex flex-wrap justify-content-between align-items-center mb-5">
									<span className="d-block fw-bold fs-18 clr-neutral-90">Final Output</span>
									<span className="d-inline-block flex-shrink-0 py-1 px-2 bg-primary-50 bg-opacity-2 clr-primary-50 lh-1 fs-14">
										Step 03
									</span>
								</div>
								<img src={featImage15} alt="image" className="img-fluid" />
							</div>
						</div>
						<div className="col-md-6 fadein_bottom_25">
							<div className="p-4 p-md-6 px-xl-9 py-xl-12 rounded-4 h-100 blurred-post">
								<div className="mb-6 text-center position-relative z-1 fadeIn_bottom">
									<img src={featImage16} alt="image" className="img-fluid" />
									<img
										src={featImage17}
										alt="image"
										className="w-100 h-100 object-fit-contain position-absolute inset-0 z-n1 pointer-none"
									/>
								</div>
								<h6 className="clr-neutral-90 fs-18 reveal-text">
									Stability AI Image Easy to customize hard to get wrong
								</h6>
								<p className="mb-0 clr-neutral-80 animate-text-from-right">
									WriteBot AI is a versatile product demo software crafted to fuel the success of
									innovative and progressive
								</p>
							</div>
						</div>
						<div className="col-md-6 fadein_bottom_25">
							<div className="p-4 p-md-6 px-xl-9 py-xl-12 bg-neutral-6 rounded-4 post-2-bg h-100">
								<div className="mb-6 text-center fadeIn_bottom">
									<img src={featImage18} alt="image" className="img-fluid" />
								</div>
								<h6 className="clr-neutral-90 fs-18 reveal-text">
									Stability AI Image Easy to customize hard to get wrong
								</h6>
								<p className="mb-0 clr-neutral-80 animate-text-from-right">
									WriteBot AI is a versatile product demo software crafted to fuel the success of
									innovative and progressive
								</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 fadein_bottom_26">
							<div className="p-4 p-xl-8 rounded-4 bg-neutral-6 post-3-bg h-100">
								<div className="mb-6 fadeIn_bottom">
									<img src={featImage19} alt="image" className="img-fluid" />
								</div>
								<h6 className="fs-18 clr-neutral-90 reveal-text">Actual Current Content</h6>
								<p className="mb-0 clr-neutral-80 animate-text-from-right">
									AI can generate written content, including articles blog posts descriptions
								</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 fadein_bottom_26">
							<div className="p-4 p-xl-8 rounded-4 bg-neutral-6 post-3-bg h-100">
								<div className="mb-6 fadeIn_bottom">
									<img src={featImage20} alt="image" className="img-fluid" />
								</div>
								<h6 className="fs-18 clr-neutral-90 reveal-text">Adding Knowledge Dashboard</h6>
								<p className="mb-0 clr-neutral-80 animate-text-from-right">
									AI can generate written content, including articles blog posts descriptions
								</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 fadein_bottom_26">
							<div className="p-4 p-xl-8 rounded-4 bg-neutral-6 post-3-bg h-100">
								<div className="mb-6 fadeIn_bottom">
									<img src={featImage21} alt="image" className="img-fluid" />
								</div>
								<h6 className="fs-18 clr-neutral-90 reveal-text">Easy to Share Content any platform</h6>
								<p className="mb-0 clr-neutral-80 animate-text-from-right">
									AI can generate written content, including articles blog posts descriptions
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default FeatureSix;
