import heroShapeLeft from "/img/hero-shape-left.webp";
import heroShapeRight from "/img/hero-shape-right.webp";
import heroShapeImageOne from "/img/hero-shape-img-1.webp";
import heroShapeImageTwo from "/img/hero-shape-img-2.webp";
import heroShapeRingOne from "/img/hero-shape-ring-1.png";
import heroShapeRingTwo from "/img/hero-shape-ring-2.png";
import generatedImageOne from "/img/generated-img-1.jpg";
import generatedImageTwo from "/img/generated-img-2.jpg";
import generatedImageThree from "/img/generated-img-3.jpg";
import generatedImageFour from "/img/generated-img-4.jpg";
import { Link } from "react-router-dom";
const HeroOne = () => {
	return (
		<div className="trigger-showcase position-relative z-1">
			<div className="hero-1-shapes">
				<img src={heroShapeLeft} alt="image" className="img-fluid hero-1-shapes__img hero-1-shapes__img--1" />
				<img src={heroShapeRight} alt="image" className="img-fluid hero-1-shapes__img hero-1-shapes__img--2" />
				<img
					src={heroShapeRingOne}
					alt="image"
					className="img-fluid hero-1-shapes__img hero-1-shapes__img--3"
				/>
				<img
					src={heroShapeRingTwo}
					alt="image"
					className="img-fluid hero-1-shapes__img hero-1-shapes__img--4"
				/>
			</div>
			<section className="hero-1">
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="col-md-10 col-lg-9 col-xxl-10 text-center">
							<h1 className="clr-white fw-extrabold mb-6 animate-line-3d">
								Best AI Content Platform <span className="clr-grad-1">Image Generate</span>
							</h1>
							<p className="fs-18 fw-bold clr-neutral-80 max-text-50 mx-auto mb-10 animate-text-from-bottom">
								Your One-Stop Solution for Content Creation,Audio Generation, Image Crafting, & AI
								Chatbot Development.
							</p>
							<form className="newsletter-1 d-inline-block w-100 max-text-60 mx-auto mb-4 position-relative z-1 overflow-hidden rounded fadeIn_bottom">
								<div className="d-flex p-3 bg-neutral-10 rounded ">
									<input
										type="text"
										className="form-control newsletter-1__input bg-transparent clr-neutral-60"
										placeholder="An Astronaut riding a horse on mars, hd"
									/>
									<button
										type="button"
										className="newsletter-1__btn d-inline-block py-3 px-5 rounded fw-bold clr-white bg-grad-1"
									>
										Generate
									</button>
								</div>
							</form>
							<ul className="hero-1__tag-list list list-row align-items-center justify-content-center gap-3 flex-wrap">
								<li className="animate-fadeInBottom">
									<span className="d-block fs-14 clr-white">Popular Tags:</span>
								</li>
								<li className="animate-fadeInBottom">
									<Link
										href="#"
										className="link d-inline-block text-center py-1 px-2 rounded bg-neutral-10 clr-neutral-80 fs-14 fw-medium"
									>
										Creative
									</Link>
								</li>
								<li className="animate-fadeInBottom">
									<Link
										href=""
										className="link d-inline-block text-center py-1 px-2 rounded bg-neutral-10 clr-neutral-80 fs-14 fw-medium"
									>
										Sport
									</Link>
								</li>
								<li className="animate-fadeInBottom">
									<Link
										href=""
										className="link d-inline-block text-center py-1 px-2 rounded bg-neutral-10 clr-neutral-80 fs-14 fw-medium"
									>
										Animation
									</Link>
								</li>
								<li className="animate-fadeInBottom">
									<Link
										href=""
										className="link d-inline-block text-center py-1 px-2 rounded bg-neutral-10 clr-neutral-80 fs-14 fw-medium"
									>
										Fantasy
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<img
					src={heroShapeImageOne}
					alt="image"
					className="img-fluid hero-1-shapes__img hero-1-shapes__img--5"
				/>
				<img
					src={heroShapeImageTwo}
					alt="image"
					className="img-fluid hero-1-shapes__img hero-1-shapes__img--6"
				/>
			</section>
			<div className="container">
				<div className="row g-4">
					<div className="col-md-6">
						<div className="row g-4">
							<div className="col-12">
								<img src={generatedImageOne} alt="image" className="img-fluid rounded-1 img-fadeIn-1" />
							</div>
							<div className="col-12">
								<h6 className="clr-neutral-80 mb-10 animate-line-3d">
									We are passionate about empowering creatives with the tools they need to
									<span className="clr-grad-1">bring their vision to</span> life thats why we have
									developed
								</h6>
								<div className="d-flex flex-wrap align-items-center gap-10 reveal-from-bottom">
									<Link
										to="/register"
										className="gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 px-6 py-4 rounded fw-bold text-center"
									>
										<span className="d-inline-block">Join Community</span>
										<span className="d-inline-block">
											<i className="bi bi-arrow-right"></i>
										</span>
									</Link>
									<div className="d-inline-flex align-items-center gap-2">
										<h4 className="mb-0 fw-extrabold clr-neutral-90">80k+</h4>
										<span className="d-inline-block clr-neutral-90">Happy Customer 😊</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="row g-4">
							<div className="col-md-6">
								<img
									src={generatedImageTwo}
									alt="image"
									className="img-fluid rounded-1 w-100 img-fadeIn-2"
								/>
							</div>
							<div className="col-md-6">
								<img
									src={generatedImageThree}
									alt="image"
									className="img-fluid rounded-1 w-100 img-fadeIn-3"
								/>
							</div>
							<div className="col-12">
								<img
									src={generatedImageFour}
									alt="image"
									className="img-fluid rounded-1 img-fadeIn-4"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default HeroOne;
