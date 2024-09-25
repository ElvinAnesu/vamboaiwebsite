import heroImage1 from "/img/hero-5-title-top.webp";
import heroImage2 from "/img/hero-5-title-el.webp";
import heroImage3 from "/img/hero-5-right-3.webp";
import heroImage4 from "/img/hero-5-right-4.webp";
import heroImage5 from "/img/hero-5-right-1.webp";
import heroImage6 from "/img/hero-5-right-2.webp";
import heroImage7 from "/img/hero-5-right-arrow1.webp";
import heroImage8 from "/img/hero-5-right-arrow2.webp";
import heroImage9 from "/img/hero-5-shade-top.webp";
import heroImage10 from "/img/hero-5-shade-left.webp";
import heroImage11 from "/img/hero-5-shade-left-2.webp";
import heroImage12 from "/img/hero-5-shade-circle.webp";
import heroImage13 from "/img/hero-5-shade-right.webp";
import heroImage14 from "/img/hero-5-top-digit.png";
import { Link } from "react-router-dom";
import wall1 from "/img/wall1.jpg"
import wall2 from "/img/wall2.jpg"
import wall3 from "/img/wall3.jpg"
const HeroFive = () => {
	return (
		<div className="hero-5 section-space-sm-bottom">
			<div className="container">
				<div className="row gy-4 align-items-center justify-content-center">
					<div className="col-lg-7 text-lg-start text-center">
						<h2
							className="hero-5-title mb-0 clr-primary-10 fw-extrabold mt-2 animate-text-from-right"
							style={{ color: "#000000" }}
						>
							Unlock oportunities with{" "}
							<span style={{ color: "#AB1515" }}>multilingual</span>{" "}
							capabilities
						</h2>
						<p
							className="clr-primary-10 fw-bold mt-4 ff-1 max-text-50 animate-text-from-right"
							style={{ color: "#737373" }}
						>
							Your One-Stop Solution for indigenous language translation,
							transcription, search, content creation & API access
						</p>

						<div className="d-flex flex-wrap align-items-center gap-6 mt-xl-10 mt-lg-8 mt-6 justify-content-lg-start justify-content-center fadeIn_bottom">
							<Link
								to="https://app.vambo.ai"
								target="_blank"
								className="link d-inline-block py-3 px-7  rounded-1 fs-14 fw-bold text-center clr-white ff-1"
								style={{ backgroundColor: "#AB1515" }}
							>
								Try for Free
							</Link>

							<Link
								to="https://app.vambo.ai"
								target="_blank"
								className="link d-inline-block py-2 px-7 rounded-1 fs-14 fw-bold text-center clr-primary-10 :clr-neutral-100 :bg-primary-10 ff-1"
								style={{ color: "#AB1515", border: "solid #AB1515" }}
							>
								Access API
							</Link>
						</div>
					</div>

					<div className="col-md-10 col-lg-5">
						<div className="position-relative">
							<div className="row">
								<div className="col-6"></div>
								<div className="col-6"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="row gy-4 section-space-top">
					<div className="col-sm-6 col-lg-4">
						<div className="p-5 p-sm-6 bg-white rounded-3 fadein_bottom_30">
							<div className="d-flex flex-wrap align-items-center gap-4">
								<h6 className="fs-18 mb-0">For Businesses</h6>
							</div>
							<p className="mb-0 mt-0 mt-lg-3 mt-xxl-4">
								Enhance your customer experience with AI chatbots, localized
								websites, and multilingual support. Our solutions help you reach
								new markets and audiences, particularly in Africa, where
								language diversity is vastt
							</p>
						</div>
					</div>

					<div className="col-sm-6 col-lg-4">
						<div className="p-5 p-sm-6 bg-white rounded-3 fadein_bottom_30">
							<div className="d-flex flex-wrap align-items-center gap-4">
								<h6 className="fs-18 mb-0">For Developers</h6>
							</div>

							<p className="mb-0 mt-0 mt-lg-3 mt-xxl-4">
								Build cutting-edge applications that support multilingual input
								and output with ease. Our Vambo Studio API gives you access to a
								range of tools, from translation and transcription to text
								generation, all within a developer-friendly environment
							</p>
						</div>
					</div>

					<div className="col-sm-6 col-lg-4">
						<div className="p-5 p-sm-6 bg-white rounded-3 fadein_bottom_30">
							<div className="d-flex flex-wrap align-items-center gap-4">
								<h6 className="fs-18 mb-0">For Educators</h6>
							</div>
							<p className="mb-0 mt-0 mt-lg-3 mt-xxl-4">
								Empower students and teachers with digital tools to learn and
								preserve African languages. With our language resources and AI
								solutions, you can provide engaging, culturally relevant content
								to learners everywhere.
							</p>
						</div>
					</div>
				</div>
			</div>

			<img
				src={heroImage9}
				alt="image"
				className="img-fluid hero-5__shape hero-5__shape-top"
			/>

			<img
				src={heroImage10}
				alt="image"
				className="img-fluid hero-5__shape hero-5__shape-left"
			/>

			<img
				src={heroImage11}
				alt="image"
				className="img-fluid hero-5__shape hero-5__shape-left-2"
			/>

			<img
				src={heroImage12}
				alt="image"
				className="img-fluid hero-5__shape hero-5__shape-circle"
			/>

			<img
				src={heroImage13}
				alt="image"
				className="img-fluid hero-5__shape hero-5__shape-right"
			/>

			<img
				src={heroImage14}
				alt="image"
				className="img-fluid hero-5__shape hero-5__shape-digit"
			/>
		</div>
	);
};
export default HeroFive;
