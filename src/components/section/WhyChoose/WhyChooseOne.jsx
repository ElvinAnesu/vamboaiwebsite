import { BsPlayFill } from "react-icons/bs";
import chooseImage1 from "/img/choose-section-1-img-2.png";
import chooseImage2 from "/img/choose-section-1-shape-2.png";
import chooseImage3 from "/img/choose-section-1-shape-3.png";
import chooseImage4 from "/img/choose-section-1-shape-4.png";
import chooseImage5 from "/img/choose-section-1-img-1.png";
import chooseImage6 from "/img/choose-section-1-img-3.png";
import chooseImage7 from "/img/choose-section-1-shape-1.png";
import chooseImage8 from "/img/icon-hourglass.png";
import chooseImage9 from "/img/icon-pen-ruler.png";
import chooseImage10 from "/img/icon-comment-dots.png";
const WhyChooseOne = () => {
	return (
		<div className="why-choose-ai-section section-space-sm-y">
			<div className="section-space-sm-bottom">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-10 col-xl-6">
							<h3 className="mb-0 text-center fw-extrabold clr-neutral-90 animate-line-3d">
								Why Choose Using AI
							</h3>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row g-4">
					<div className="col-12">
						<div className="choose-section-1">
							<div className="row g-4 justify-content-center">
								<div className="col-lg-4 d-xl-none">
									<div className="d-none d-lg-inline-block">
										<img src={chooseImage1} alt="image" className="img-fluid" />
									</div>
								</div>
								<div className="col-lg-4">
									<div className="d-inline-block position-relative z-1 text-center">
										<img
											src={chooseImage2}
											alt="image"
											className="img-fluid choose-section-1__shape choose-section-1__shape--2 fadeIn_bottom"
										/>
										<img
											src={chooseImage3}
											alt="image"
											className="img-fluid choose-section-1__shape choose-section-1__shape--3 fadeIn_bottom"
										/>
										<img
											src={chooseImage4}
											alt="image"
											className="img-fluid choose-section-1__shape choose-section-1__shape--4 fadeIn_bottom"
										/>
										<img
											src={chooseImage1}
											alt="image"
											className="img-fluid choose-section-1__img choose-section-1__img--1 d-none d-xl-block fadeIn_bottom"
										/>
										<img src={chooseImage5} alt="image" className="img-fluid fadeIn_bottom" />
										<img
											src={chooseImage6}
											alt="image"
											className="img-fluid choose-section-1__img choose-section-1__img--2 d-none d-xl-block fadeIn_bottom"
										/>
									</div>
								</div>
								<div className="col-lg-4 d-xl-none">
									<div className="d-none d-lg-inline-block">
										<img src={chooseImage6} alt="image" className="img-fluid" />
									</div>
								</div>
							</div>
							<h5 className="choose-section-1__title clr-neutral-80 mb-0 animate-text-from-left">
								More efficient and <br />
								more effective.
							</h5>
							<button className="choose-section-1__play-btn fadeIn_bottom">
								<BsPlayFill />
							</button>
							<img
								src={chooseImage7}
								alt="image"
								className="img-fluid choose-section-1__shape choose-section-1__shape--1"
							/>
						</div>
					</div>
					<div className="col-md-4 col-xl-3">
						<div className="px-lg-6 py-lg-8 rounded-3 fadeIn_bottom">
							<div className="d-grid place-content-center w-14 h-14 bg-neutral-variant-30 bg-opacity-5 rounded mb-6">
								<img src={chooseImage8} alt="image" className="img-fluid" />
							</div>
							<h6 className="clr-neutral-90 mb-2 reveal-text">Time reduced on first</h6>
							<p className="mb-0 clr-neutral-80 fs-14 fw-medium animate-text-from-right">
								Create your projects and start tracking time immediately according
							</p>
						</div>
					</div>
					<div className="col-md-4 col-xl-6">
						<div className="px-lg-6 py-lg-8 rounded-3 choose-section-1__card fadeIn_bottom">
							<div className="d-grid place-content-center w-14 h-14 bg-neutral-variant-30 bg-opacity-5 rounded mb-6">
								<img src={chooseImage9} alt="image" className="img-fluid" />
							</div>
							<h6 className="clr-neutral-90 mb-2 reveal-text">Ai content writing easy to use</h6>
							<p className="mb-0 clr-neutral-80 fs-14 fw-medium animate-text-from-right">
								Whether you work with 1 team member or 1,000, you can bring the whole team together, and
								simplify your HR stack with Remote.
							</p>
						</div>
					</div>
					<div className="col-md-4 col-xl-3">
						<div className="px-lg-6 py-lg-8 rounded-3 fadeIn_bottom">
							<div className="d-grid place-content-center w-14 h-14 bg-neutral-variant-30 bg-opacity-5 rounded mb-6">
								<img src={chooseImage10} alt="image" className="img-fluid" />
							</div>
							<h6 className="clr-neutral-90 mb-2 reveal-text">Ai ChatBot generator</h6>
							<p className="mb-0 clr-neutral-80 fs-14 fw-medium animate-text-from-right">
								Create your projects and start tracking time immediately according
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default WhyChooseOne;
