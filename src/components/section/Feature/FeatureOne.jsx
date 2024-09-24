import featuredCardInfo from "../../../jsonData/FeatureOneCard.json";
const FeatureOne = () => {
	return (
		<div className="section-space-sm-top">
			<div className="section-space-sm-bottom">
				<div className="container">
					<div className="row g-4 justify-content-between">
						<div className="col-md-6 col-lg-7 col-xxl-6">
							<h3 className="mb-0 clr-neutral-90 animate-line-3d">
								Supercharge your Creative Shapes as well
							</h3>
						</div>
						<div className="col-md-6 col-lg-5 col-xl-4">
							<div className="d-flex align-items-center gap-4 flex-wrap mb-4">
								<div className="w-30 subtitle-flush-x subtitle-flush-x--secondary subtitle_line_2"></div>
								<h6 className="mb-0 clr-secondary-key fs-18 animate-text-from-right">
									Creative Approach
								</h6>
							</div>
							<p className="mb-0 clr-neutral-80 animate-text-from-right">
								We are passionate about empowering creatives with the tools they need to bring their
								vision to life that why we have developed.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="creative-approach-section position-relative overflow-hidden">
				<div className="container">
					<div className="row g-4 g-xl-0">
						{featuredCardInfo.map((cardInfo) => (
							<div className="col-md-6 col-xl-3 creative-approach-section__item" key={cardInfo.id}>
								<div className="p-6 py-xl-18 fadein_bottom_8">
									<div className="d-inline-block mb-10">
										<img src={cardInfo.iconSrc} alt="image" className="img-fluid" />
									</div>
									<h6 className="mb-6 clr-neutral-90">{cardInfo.title}</h6>
									<p className="mb-0 clr-neutral-80">{cardInfo.details}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
export default FeatureOne;
