import Accordion from "react-bootstrap/Accordion";
const FaqThree = () => {
	return (
		<div className="faq-section-4 section-space-sm-y">
			<div className="faq-section-4__title section-space-sm-bottom">
				<div className="container">
					<div className="row">
						<div className="col-xl-7">
							<div className="faq-section-4__title-is">
								<h3 className="mb-0 clr-neutral-90 fw-extrabold animate-line-3d">
									Question! we have answers for your value{" "}
									<span className="d-inline-block gradient-flow gradient-flow--start">question</span>
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="p-4 p-md-9 rounded-4 bg-black top-shadow fadeIn_bottom">
							<Accordion className="custom-accordion custom-accordion--faq" defaultActiveKey="0">
								<Accordion.Item className="border-bottom-0 border-start-0 border-end-0" eventKey="0">
									<Accordion.Header>
										<span className="d-inline-block fs-20 fw-bold">
											How does the Type tone AI app work / Where do I start?
										</span>
									</Accordion.Header>
									<Accordion.Body>
										<ul className="list gap-4 mb-8">
											<li>
												1. Create an account and write completely free, forever! If you want
												more features and Tone
											</li>
											<li>
												2. Log in to the app and choose a template, such as Article Writing.
											</li>
											<li>
												3. Fill in the required fields and click Generate the more context
												output.
											</li>
										</ul>
										<p className="mb-0">
											Have questions about how the app works? Ask your question to our live chat
											or send an email and we will help you further.
										</p>
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item className="border-bottom-0 border-start-0 border-end-0" eventKey="1">
									<Accordion.Header>
										<span className="d-inline-block fs-20 fw-bold">
											Do you have languages other than English and Dutch?
										</span>
									</Accordion.Header>
									<Accordion.Body>
										<ul className="list gap-4 mb-8">
											<li>
												1. Create an account and write completely free, forever! If you want
												more features and Tone
											</li>
											<li>
												2. Log in to the app and choose a template, such as Article Writing.
											</li>
											<li>
												3. Fill in the required fields and click Generate the more context
												output.
											</li>
										</ul>
										<p className="mb-0">
											Have questions about how the app works? Ask your question to our live chat
											or send an email and we will help you further.
										</p>
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item className="border-bottom-0 border-start-0 border-end-0" eventKey="2">
									<Accordion.Header>
										<span className="d-inline-block fs-20 fw-bold">
											What paid subscription would you recommend to me?
										</span>
									</Accordion.Header>
									<Accordion.Body>
										<ul className="list gap-4 mb-8">
											<li>
												1. Create an account and write completely free, forever! If you want
												more features and Tone
											</li>
											<li>
												2. Log in to the app and choose a template, such as Article Writing.
											</li>
											<li>
												3. Fill in the required fields and click Generate the more context
												output.
											</li>
										</ul>
										<p className="mb-0">
											Have questions about how the app works? Ask your question to our live chat
											or send an email and we will help you further.
										</p>
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item className="border-bottom-0 border-start-0 border-end-0" eventKey="3">
									<Accordion.Header>
										<span className="d-inline-block fs-20 fw-bold">
											How exactly does this AI work and how can it write texts so well?
										</span>
									</Accordion.Header>
									<Accordion.Body>
										<ul className="list gap-4 mb-8">
											<li>
												1. Create an account and write completely free, forever! If you want
												more features and Tone
											</li>
											<li>
												2. Log in to the app and choose a template, such as Article Writing.
											</li>
											<li>
												3. Fill in the required fields and click Generate the more context
												output.
											</li>
										</ul>
										<p className="mb-0">
											Have questions about how the app works? Ask your question to our live chat
											or send an email and we will help you further.
										</p>
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item className="border-bottom-0 border-start-0 border-end-0" eventKey="4">
									<Accordion.Header>
										<span className="d-inline-block fs-20 fw-bold">
											How exactly does this AI work and how can it write texts so well?
										</span>
									</Accordion.Header>
									<Accordion.Body>
										<ul className="list gap-4 mb-8">
											<li>
												1. Create an account and write completely free, forever! If you want
												more features and Tone
											</li>
											<li>
												2. Log in to the app and choose a template, such as Article Writing.
											</li>
											<li>
												3. Fill in the required fields and click Generate the more context
												output.
											</li>
										</ul>
										<p className="mb-0">
											Have questions about how the app works? Ask your question to our live chat
											or send an email and we will help you further.
										</p>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default FaqThree;
