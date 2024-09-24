import BrandOneData from "../../../jsonData/BrandOne.json";
import ScrollerX from "../../common/Scroller/ScrollerX";

const BrandOne = () => {
	return (
		<div className="section-space-sm-y">
			<div className="section-space-sm-bottom">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-8 col-xl-6">
							<h6 className="mb-0 clr-neutral-90 text-center fw-extrabold animate-line-3d">
								We Worked With Global Largest <span className="clr-grad-1">25,000+ BRANDS</span>
							</h6>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid p-0">
				<div className="row g-0">
					<div className="col-12">
						<div className="mb-4">
							<ScrollerX items={BrandOneData} direction="right" speed="fast" />
						</div>
						<ScrollerX items={BrandOneData} direction="left" speed="fast" />
					</div>
				</div>
			</div>
		</div>
	);
};
export default BrandOne;
