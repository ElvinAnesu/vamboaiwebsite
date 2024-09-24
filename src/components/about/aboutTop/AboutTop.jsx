import { Link } from "react-router-dom";
import HowWorkOne from "../../section/HowWork/HowWorkOne";

const AboutTop = () => {
	return (
		<>
			<section className="about-section-4">
				<div className="container">
					<HowWorkOne />
					
				</div>
				<img
					src="/img/about-section-4-shape-top.png"
					alt="image"
					className="img-fluid about-section-4-shape about-section-4-shape-top"
				/>
				<img
					src="/img/about-section-4-shape-left.png"
					alt="image"
					className="img-fluid about-section-4-shape about-section-4-shape-left"
				/>
				<img
					src="/img/about-section-4-shape-right.png"
					alt="image"
					className="img-fluid about-section-4-shape about-section-4-shape-right"
				/>
				<img
					src="/img/about-section-4-shape-line-left.png"
					alt="image"
					className="img-fluid about-section-4-shape about-section-4-shape-line-left"
				/>
				<img
					src="/img/about-section-4-shape-line-right.png"
					alt="image"
					className="img-fluid about-section-4-shape about-section-4-shape-line-right"
				/>
			</section>
		</>
	);
};

export default AboutTop;
