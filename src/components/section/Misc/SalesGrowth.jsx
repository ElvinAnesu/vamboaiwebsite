import salesImage1 from "/img/icon-bot.png";
import salesImage2 from "/img/dash-img-2.png";
import salesImage3 from "/img/dash-shape-2.png";
import salesImage4 from "/img/dash-shape-3.png";
import salesImage5 from "/img/dash-img-2.png";
import { BsStopwatchFill, BsGearFill, BsChatDotsFill } from "react-icons/bs";
const SalesGrowth = () => {
	return (
		<div className="sales-growth-section section-space-y bg-primary-90">
			<div className="section-space-xsm-bottom">
				<div className="container">
					<div className="row g-4">
						<div className="col-lg-6">
							<h3 className="mb-10 clr-priamry-10 fw-extrabold animate-line-3d">
								Built For Growth Sales & <span className="clr-grad-4">Product For AI</span>
							</h3>
							<p className="mb-0 fw-medium animate-text-from-right">
								WriteBot AI is a versatile product demo software crafted to fuel the success of
								innovative and progressive sales, product, and growth teams.
							</p>
							<div className="my-6 h-2px border-dashed-x"></div>
							<div className="d-flex flex-column flex-sm-row gap-4 align-sm-items-center bg-primary-99 rounded-1 py-3 px-4 fadeIn_bottom">
								<div className="w-11 h-11 d-grid place-content-center rounded-1 bg-primary-90 flex-shrink-0">
									<img src={salesImage1} alt="image" className="img-fluid" />
								</div>
								<div className="flex-grow-1">
									<p className="mb-0 clr-primary-10">
										<span className="fw-semibold">Documentation and Support:</span> Provide
										comprehensive documentation and customer support to assist users in implementing
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="ps-xl-12 text-center position-relative z-1 fadeIn_bottom">
								<img src={salesImage5} alt="image" className="img-fluid" />
								<img
									src={salesImage2}
									alt="image"
									className="img-fluid d-none d-xl-block position-absolute sales-growth-section__shape-1"
								/>
								<img
									src={salesImage3}
									alt="image"
									className="img-fluid d-none d-xl-block position-absolute sales-growth-section__shape-2"
								/>
								<img
									src={salesImage4}
									alt="image"
									className="img-fluid d-none d-xl-block position-absolute sales-growth-section__shape-3"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row g-4">
					<div className="col-md-6 col-lg-4 selected-product">
						<div className="mb-4 mb-md-0 w-12 h-12 d-grid place-content-center rounded-1 bg-white clr-primary-key fs-24 lh-1">
							<BsStopwatchFill />
						</div>
						<div className="selected-product__card ms-md-10 px-6 py-8 position-relative rounded-1 bg-white max-text-32">
							<h6 className="clr-primary-10 fs-18">Generating a Response</h6>
							<p className="selected-product__para mb-0 fs-14">
								Adopt an agile development methodology to quickly adapt to changing customer
							</p>
						</div>
					</div>
					<div className="col-md-6 col-lg-4 selected-product active">
						<div className="mb-4 mb-md-0 w-12 h-12 d-grid place-content-center rounded-1 bg-white clr-primary-key fs-24 lh-1">
							<BsGearFill />
						</div>
						<div className="selected-product__card ms-md-10 px-6 py-8 position-relative rounded-1 bg-white max-text-32">
							<h6 className="clr-primary-10 fs-18">Generating a Response</h6>
							<p className="selected-product__para mb-0 fs-14">
								Adopt an agile development methodology to quickly adapt to changing customer
							</p>
						</div>
					</div>
					<div className="col-md-6 col-lg-4 selected-product">
						<div className="mb-4 mb-md-0 w-12 h-12 d-grid place-content-center rounded-1 bg-white clr-primary-key fs-24 lh-1">
							<BsChatDotsFill />
						</div>
						<div className="selected-product__card ms-md-10 px-6 py-8 position-relative rounded-1 bg-white max-text-32">
							<h6 className="clr-primary-10 fs-18">Generating a Response</h6>
							<p className="selected-product__para mb-0 fs-14">
								Adopt an agile development methodology to quickly adapt to changing customer
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default SalesGrowth;
