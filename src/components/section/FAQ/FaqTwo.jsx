import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
const FaqTwo = () => {
	return (
		<div className="faq-3 section-space-sm-y">
			<div className="container">
				<div className="row g-4">
					<div className="col-lg-5">
						<h3 className="clr-neutral-90 fw-extrabold animate-line-3d">Frequently Asked Questions 👍</h3>
						<p className="mb-6 fw-semibold clr-neutral-80 max-text-32 animate-text-from-right">
							Have a question that is not answered? You can contact us at
						</p>
						<Link
							to="/"
							className="link d-inline-block py-3 px-6 rounded-pill bg-neutral-10 :bg-primary-key clr-white fs-14 fw-semibold fadeIn_bottom"
						>
							Have a question? Submit a Ticket
						</Link>
					</div>
					<div className="col-lg-7">
						<Accordion
							defaultActiveKey="0"
							className="accordion custom-accordion custom-accordion--faq mb-8 fadeIn_bottom"
						>
							<Accordion.Item
								eventKey="0"
								className="accordion-item top-shadow rounded-2 gradient-card mb-4"
							>
								<Accordion.Header>
									<span className="fs-20 fw-bold rounded-2">
										How does the Type tone AI app work / Where do I start?
									</span>
								</Accordion.Header>
								<Accordion.Body>
									<ol className="add-0 d-flex flex-column gap-4 mb-8">
										<li className="clr-neutral-80">
											Create an account and write completely free, forever! If you want more
											features
										</li>
										<li className="clr-neutral-80">
											Log in to the app and choose a template, such as Article Writing.
										</li>
										<li className="clr-neutral-80">
											Fill in the required fields and click Generate the more context output.
										</li>
									</ol>
									<p className="mb-0 clr-neutral-80">
										Have questions about how the app works? Ask your question to our live chat or
										send an email and we will help you further.
									</p>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item
								eventKey="1"
								className="accordion-item top-shadow rounded-2 gradient-card mb-4"
							>
								<Accordion.Header>
									<span className="fs-20 fw-bold rounded-2">
										Do you have languages other than English and Dutch?
									</span>
								</Accordion.Header>
								<Accordion.Body>
									<ol className="add-0 d-flex flex-column gap-4 mb-8">
										<li className="clr-neutral-80">
											Create an account and write completely free, forever! If you want more
											features
										</li>
										<li className="clr-neutral-80">
											Log in to the app and choose a template, such as Article Writing.
										</li>
										<li className="clr-neutral-80">
											Fill in the required fields and click Generate the more context output.
										</li>
									</ol>
									<p className="mb-0 clr-neutral-80">
										Have questions about how the app works? Ask your question to our live chat or
										send an email and we will help you further.
									</p>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item
								eventKey="2"
								className="accordion-item top-shadow rounded-2 gradient-card mb-4"
							>
								<Accordion.Header>
									<span className="fs-20 fw-bold rounded-2">
										What paid subscription would you recommend to me?
									</span>
								</Accordion.Header>
								<Accordion.Body>
									<ol className="add-0 d-flex flex-column gap-4 mb-8">
										<li className="clr-neutral-80">
											Create an account and write completely free, forever! If you want more
											features
										</li>
										<li className="clr-neutral-80">
											Log in to the app and choose a template, such as Article Writing.
										</li>
										<li className="clr-neutral-80">
											Fill in the required fields and click Generate the more context output.
										</li>
									</ol>
									<p className="mb-0 clr-neutral-80">
										Have questions about how the app works? Ask your question to our live chat or
										send an email and we will help you further.
									</p>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item
								eventKey="3"
								className="accordion-item top-shadow rounded-2 gradient-card mb-4"
							>
								<Accordion.Header>
									<span className="fs-20 fw-bold rounded-2">
										How exactly does this AI work and how can it write texts so well?
									</span>
								</Accordion.Header>
								<Accordion.Body>
									<ol className="add-0 d-flex flex-column gap-4 mb-8">
										<li className="clr-neutral-80">
											Create an account and write completely free, forever! If you want more
											features
										</li>
										<li className="clr-neutral-80">
											Log in to the app and choose a template, such as Article Writing.
										</li>
										<li className="clr-neutral-80">
											Fill in the required fields and click Generate the more context output.
										</li>
									</ol>
									<p className="mb-0 clr-neutral-80">
										Have questions about how the app works? Ask your question to our live chat or
										send an email and we will help you further.
									</p>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item
								eventKey="4"
								className="accordion-item top-shadow rounded-2 gradient-card mb-4"
							>
								<Accordion.Header>
									<span className="fs-20 fw-bold rounded-2">
										How exactly does this AI work and how can it write texts so well?
									</span>
								</Accordion.Header>
								<Accordion.Body>
									<ol className="add-0 d-flex flex-column gap-4 mb-8">
										<li className="clr-neutral-80">
											Create an account and write completely free, forever! If you want more
											features
										</li>
										<li className="clr-neutral-80">
											Log in to the app and choose a template, such as Article Writing.
										</li>
										<li className="clr-neutral-80">
											Fill in the required fields and click Generate the more context output.
										</li>
									</ol>
									<p className="mb-0 clr-neutral-80">
										Have questions about how the app works? Ask your question to our live chat or
										send an email and we will help you further.
									</p>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
				</div>
			</div>
		</div>
	);
};
export default FaqTwo;
