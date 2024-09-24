import paymentImage1 from "/img/payment-img-1.png";
import paymentImage2 from "/img/payment-img-2.png";
import paymentImage3 from "/img/payment-img-3.png";
import paymentImage4 from "/img/payment-img-4.png";
import paymentImage5 from "/img/payment-section-shape-1.png";
import paymentImage6 from "/img/payment-section-shape-2.png";
const AboutFour = () => {
	return (
		<div className="section-space-sm-y position-relative z-1">
			<div className="section-space-sm-bottom">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-10 col-xl-8">
							<h3 className="mb-0 clr-neutral-90 text-center animate-line-3d">
								Payments For Every Use Case
							</h3>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row g-4 justify-content-center">
					<div className="col-md-6 col-lg-3">
						<div className="gradient-card top-shadow px-6 py-10 rounded-3 d-flex gap-5 flex-column justify-content-between h-100 fadein_bottom_20">
							<img src={paymentImage1} alt="image" className="img-fluid" />
							<div className="d-flex flex-column gap-3 text-center">
								<h6 className="mb-0 clr-neutral-90 fs-18 reveal-text">Wires & ACH</h6>
								<p className="mb-0 clr-neutral-80 fs-14 reveal-text">Same-next day transfer to bank</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-3">
						<div className="gradient-card top-shadow px-6 py-10 rounded-3 d-flex gap-5 flex-column justify-content-between h-100 fadein_bottom_20">
							<img src={paymentImage2} alt="image" className="img-fluid" />
							<div className="d-flex flex-column gap-3 text-center">
								<h6 className="mb-0 clr-neutral-90 fs-18 reveal-text">Checks</h6>
								<p className="mb-0 clr-neutral-80 fs-14 reveal-text">Same-next day transfer to bank</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-3">
						<div className="gradient-card top-shadow px-6 py-10 rounded-3 d-flex gap-5 flex-column justify-content-between h-100 fadein_bottom_20">
							<img src={paymentImage3} alt="image" className="img-fluid" />
							<div className="d-flex flex-column gap-3 text-center">
								<h6 className="mb-0 clr-neutral-90 fs-18 reveal-text">Online Card</h6>
								<p className="mb-0 clr-neutral-80 fs-14 reveal-text">Same-next day transfer to bank</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-3">
						<div className="gradient-card top-shadow px-6 py-10 rounded-3 d-flex gap-5 flex-column justify-content-between h-100 fadein_bottom_20">
							<img src={paymentImage4} alt="image" className="img-fluid" />
							<div className="d-flex flex-column gap-3 text-center">
								<h6 className="mb-0 clr-neutral-90 fs-18 reveal-text">Support Payment</h6>
								<p className="mb-0 clr-neutral-80 fs-14 reveal-text">Same-next day transfer to bank</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<img src={paymentImage5} alt="image" className="img-fluid position-absolute pointer-none position-center" />
			<img src={paymentImage6} alt="image" className="img-fluid position-absolute z-n1 top-0 end-0" />
		</div>
	);
};
export default AboutFour;
