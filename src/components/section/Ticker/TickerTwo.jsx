import iconStarOutline from "/img/icon-star-outline.png";
import iconStarGradient from "/img/icon-star-gradient.png";
const TickerTwo = () => {
	return (
		<div className="section-space-xsm-y overflow-hidden bg-neutral-10">
			<div className="container-fluid p-0">
				<div className="row g-0">
					<div className="col-12">
						<div className="scroller-x mb-4" data-direction="left" data-speed="slow">
							<ul className="list list-row align-items-center gap-4 scroller-x__list">
								<li>
									<h2 className="mb-0 clr-neutral-90">Take Your Visuals to the</h2>
								</li>
								<li>
									<img src={iconStarOutline} alt="image" className="img-fluid" />
								</li>
								<li>
									<h2 className="mb-0 text-outline">Next Level</h2>
								</li>
								<li>
									<img src={iconStarGradient} alt="image" className="img-fluid" />
								</li>
								<li>
									<h2 className="mb-0 clr-neutral-90">AI Image Generator</h2>
								</li>
								<li>
									<img src={iconStarGradient} alt="image" className="img-fluid" />
								</li>
								<li>
									<h2 className="mb-0 clr-neutral-90">Take Your Visuals to the</h2>
								</li>
								<li>
									<img src={iconStarOutline} alt="image" className="img-fluid" />
								</li>
								<li>
									<h2 className="mb-0 text-outline">Next Level</h2>
								</li>
								<li>
									<img src={iconStarGradient} alt="image" className="img-fluid" />
								</li>
								<li>
									<h2 className="mb-0 clr-neutral-90">AI Image Generator</h2>
								</li>
								<li>
									<img src={iconStarGradient} alt="image" className="img-fluid" />
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default TickerTwo;
