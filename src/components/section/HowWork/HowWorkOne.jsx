import knowHowImage1 from "/img/home-5-music-note.webp";
import knowHowImage2 from "/img/how-work-1.webp";
import knowHowImage3 from "/img/how-work-music-wave.webp";
import knowHowImage4 from "/img/list-star.png";
import knowHowImage5 from "/img/how-work-2.webp";
import knowHowImage6 from "/img/home-5-header-top-el-2.png";
import knowHowImage7 from "/img/home-5-left-shape.png";
import knowHowImage8 from "/img/home-5-right-shape.png";
import wall5 from "/img/wall5.jpg";
import wall6 from "/img/wall6.jpg";
import wall7 from "/img/wall7.jpg";
const HowWorkOne = () => {
	return (
		<section className="how-work-section section-space-sm-top section-space-sm-bottom position-relative">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-9">
						<div className="position-relative text-center">
							<h3 className="fw-extrabold animate-line-3d">About Vambo AI</h3>
							<p className="max-text-60 mx-auto animate-text-from-bottom">
								Vambo AI is a technology company dedicated to bridging the
								language divide. We provide innovative AI-powered solutions to
								support multilingualism across various indigenous languages and
								those spoken in the global community. Our platform combines NLP
								and machine learning technologies with a mission to preserve and
								promote indigenous languages in the digital space. With a strong
								focus on education, culture and business, Vambo AI empowers
								organizations and individuals with the tools to communicate,
								collaborate, and create content in their native languages.
							</p>
							<img
								src={knowHowImage1}
								alt="image"
								className="img-fluid section-title-obj-img fadeIn_bottom"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="section-space-sm-top">
				<div className="container">
					<div className="how-work-wrapper">
						<div className="how-work-single-row">
							<div className="thumb fadeIn_bottom">
								<img src={wall6} alt="image" className="img-fluid" />
							</div>
							<div className="content">
								<h4 className="animate-line-3d">Our Mission</h4>
								<p className="my-6 animate-text-from-right">
									To digitally preserve African languages, bridge communication
									gaps, and drive cultural inclusion by providing scalable
									AI-driven language solutions.
								</p>
							</div>
						</div>
						<div className="how-work-single-row">
							<div className="thumb fadeIn_bottom">
								<img src={wall7} alt="image" className="img-fluid" />
							</div>
							<div className="content">
								<h4 className="animate-line-3d">Our Vision</h4>
								<p className="my-6 animate-text-from-right">
									A world where African languages are fully integrated into
									global digital platforms, ensuring cultural preservation and
									inclusivity for future generations.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default HowWorkOne;
