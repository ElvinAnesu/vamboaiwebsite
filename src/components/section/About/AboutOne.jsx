import AboutOneList from "../../../jsonData/AboutOneList.json";
import CircleText from "../../common/CircleText/CircleText";
import { BsCheck2 } from "react-icons/bs";
import welcomeImage from "/img/welcome-img.png";
import longArrowDown from "/img/long-arrow-down.png";
import welcomeSectionShape from "/img/welcome-section-shape.webp";
import { Link } from "react-router-dom";

const AboutOne = () => {
	return (
		<div className="position-relative section-space-sm-top section-space-bottom">
			<div className="container">
				<div className="row g-4">
					<div className="col-lg-6">
						<div className="text-xl-end pe-xl-6">
							<div className="d-inline-block position-relative">
								<img src={welcomeImage} alt="image" className="w-100 parallax-image" />

								<Link to="#" className="circle-btn welcome-img-btn">
									<CircleText text="more about service exlpore" />
									<img src={longArrowDown} alt="image" className="img-fluid mb-4 z-1" />
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="d-flex align-items-center flex-wrap gap-4 mb-4">
							<div className="w-30 border-bottom border-2x border-neutral-100 welcome-dash"></div>
							<h6 className="mb-0 clr-neutral-90 animate-text-from-right">Welcome</h6>
						</div>
						<h2 className="d4 clr-neutral-90 mb-6 fw-extrabold animate-line-3d">
							Powerful AI Features Built for <span className="clr-grad-1">Marketing</span>
						</h2>
						<div className="pt-4 ps-4 pt-md-8 ps-md-16 border-start border-neutral-90 border-opacity-1">
							<p className="mb-6 clr-neutral-80 animate-text-from-right">
								We are passionate about empowering creatives with the tools they need to bring their
								vision to life that is why we have developed.
							</p>
							<p className="mb-10 clr-neutral-80 animate-text-from-right">
								Working globally with largest brands, We believe that safe. We combine ideas and
								behaviours, and insights with that customers love our services.
							</p>
							<ul className="list gap-6">
								{AboutOneList.map((list) => (
									<li className="welcome-list-1" key={list.id}>
										<div className="d-flex gap-3">
											<span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
												<BsCheck2 />
											</span>
											<span className="d-block clr-neutral-80">{list.text}</span>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<img
				src={welcomeSectionShape}
				alt="image"
				className="img-fluid position-absolute pointer-none start-0 top-0 z-n1"
			/>
		</div>
	);
};
export default AboutOne;
