import heroImage from "/img/hero-3-img.png";
import heroShape1 from "/img/hero-3-shape-1.png";
import heroShape2 from "/img/hero-3-shape-2.png";
const HeroThree = () => {
	return (
		<div className="hero-3 section-space-bottom">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="mb-11 text-center animate-line-3d">
							<h2 className="mb-1 d-inline-block clr-grad-4 fw-extrabold">The ChatBot</h2>
							<h2 className="mb-0 clr-primary-10 fw-extrabold">AI The Future Is Here</h2>
						</div>
						<div className="text-center fadeIn_bottom">
							<img src={heroImage} alt="image" className="img-fluid" />
						</div>
					</div>
				</div>
			</div>
			<img src={heroShape1} alt="image" className="img-fluid hero-3__shape hero-3__shape-1" />
			<img src={heroShape2} alt="image" className="img-fluid hero-3__shape hero-3__shape-2" />
		</div>
	);
};
export default HeroThree;
