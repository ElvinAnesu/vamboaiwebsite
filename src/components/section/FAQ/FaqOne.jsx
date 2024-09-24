import { Accordion, ListGroup, Tab } from "react-bootstrap";
import faqSectionShape2 from "/img/faq-section-2-shape.webp";
import { Link } from "react-router-dom";
const FaqOne = () => {
	return (
		<div className="faq-section-2 section-space-sm-y">
			<div className="faq-section-2__inner section-space-sm-top">
				<div className="section-space-sm-y">
					<div className="container">
						<div className="row justify-content-lg-end">
							<div className="col-lg-8">
								<div className="d-flex align-items-center gap-4 flex-wrap mb-4">
									<div className="w-30 subtitle-flush-x subtitle-flush-x--secondary subtitle_line_6"></div>
									<h6 className="mb-0 fs-18 clr-secondary-key fw-extrabold animate-text-from-right">
										Creative Approach
									</h6>
								</div>
								<h3 className="mb-0 clr-neutral-90 animate-line-3d">
									Questions? We have <br /> Answers.
								</h3>
							</div>
						</div>
					</div>
				</div>
				<Tab.Container defaultActiveKey="#link1">
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								<nav className="todo-nav">
									<ListGroup className="list gap-3 nav todo-nav__menu">
										<li>
											<ListGroup.Item
												action
												href="#link1"
												className="nav-link link todo-nav__link"
											>
												AI Image Generator
											</ListGroup.Item>
										</li>
										<li>
											<ListGroup.Item
												action
												href="#link2"
												className="nav-link link todo-nav__link"
											>
												Generate Videos
											</ListGroup.Item>
										</li>
										<li>
											<ListGroup.Item
												action
												href="#link3"
												className="nav-link link todo-nav__link"
											>
												Removed any Background
											</ListGroup.Item>
										</li>
										<li>
											<ListGroup.Item
												action
												href="#link4"
												className="nav-link link todo-nav__link"
											>
												Train Custom
											</ListGroup.Item>
										</li>
									</ListGroup>
								</nav>
							</div>
							<div className="col-lg-8">
								<Tab.Content>
									<Tab.Pane eventKey={"#link1"}>
										<Accordion
											defaultActiveKey="0"
											className="custom-accordion custom-accordion--faq mb-8"
										>
											<Accordion.Item
												eventKey="0"
												className="border-bottom-0 border-start-0 border-end-0"
											>
												<Accordion.Header>
													<span className="d-block fs-20 fw-bold">
														How does the Type tone AI app work / Where do I start?
													</span>
												</Accordion.Header>
												<Accordion.Body>
													<ol className="add-0 d-flex flex-column gap-4 mb-8">
														<li>
															Create an account and write completely free, forever! If you
															want more features and Tone
														</li>
														<li>
															Log in to the app and choose a template, such as Article
															Writing.
														</li>
														<li>
															Fill in the required fields and click Generate the more
															context output.
														</li>
													</ol>
													<p className="mb-0">
														Have questions about how the app works? Ask your question to our
														live chat or send an email and we will help you further.
													</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item
												eventKey="1"
												className="border-bottom-0 border-start-0 border-end-0"
											>
												<Accordion.Header>
													<span className="d-block fs-20 fw-bold">
														Do you have languages other than English and Dutch?
													</span>
												</Accordion.Header>
												<Accordion.Body>
													<ol className="add-0 d-flex flex-column gap-4 mb-8">
														<li>
															Create an account and write completely free, forever! If you
															want more features and Tone
														</li>
														<li>
															Log in to the app and choose a template, such as Article
															Writing.
														</li>
														<li>
															Fill in the required fields and click Generate the more
															context output.
														</li>
													</ol>
													<p className="mb-0">
														Have questions about how the app works? Ask your question to our
														live chat or send an email and we will help you further.
													</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item
												eventKey="2"
												className="border-bottom-0 border-start-0 border-end-0"
											>
												<Accordion.Header>
													<span className="d-block fs-20 fw-bold">
														What paid subscription would you recommend to me?
													</span>
												</Accordion.Header>
												<Accordion.Body>
													<ol className="add-0 d-flex flex-column gap-4 mb-8">
														<li>
															Create an account and write completely free, forever! If you
															want more features and Tone
														</li>
														<li>
															Log in to the app and choose a template, such as Article
															Writing.
														</li>
														<li>
															Fill in the required fields and click Generate the more
															context output.
														</li>
													</ol>
													<p className="mb-0">
														Have questions about how the app works? Ask your question to our
														live chat or send an email and we will help you further.
													</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item
												eventKey="3"
												className="border-bottom-0 border-start-0 border-end-0"
											>
												<Accordion.Header>
													<span className="d-block fs-20 fw-bold">
														How exactly does this AI work and how can it write texts so
														well?
													</span>
												</Accordion.Header>
												<Accordion.Body>
													<ol className="add-0 d-flex flex-column gap-4 mb-8">
														<li>
															Create an account and write completely free, forever! If you
															want more features and Tone
														</li>
														<li>
															Log in to the app and choose a template, such as Article
															Writing.
														</li>
														<li>
															Fill in the required fields and click Generate the more
															context output.
														</li>
													</ol>
													<p className="mb-0">
														Have questions about how the app works? Ask your question to our
														live chat or send an email and we will help you further.
													</p>
												</Accordion.Body>
											</Accordion.Item>
										</Accordion>
										<Link
											to="/faq"
											className="gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 px-4 py-3 rounded fw-bold text-center z-1 mb-1"
										>
											<span className="d-inline-block">Show More Faq</span>
											<span className="d-inline-block">
												<i className="bi bi-arrow-up-right"></i>
											</span>
										</Link>
									</Tab.Pane>
									<Tab.Pane eventKey={"#link2"}>
										<Accordion
											defaultActiveKey="0"
											className="custom-accordion custom-accordion--faq mb-8"
										>
											<Accordion.Item
												eventKey="0"
												className="border-bottom-0 border-start-0 border-end-0"
											>
												<Accordion.Header>
													<span className="d-block fs-20 fw-bold">
														How does the Type tone AI app work / Where do I start?
													</span>
												</Accordion.Header>
												<Accordion.Body>
													<ol className="add-0 d-flex flex-column gap-4 mb-8">
														<li>
															Create an account and write completely free, forever! If you
															want more features and Tone
														</li>
														<li>
															Log in to the app and choose a template, such as Article
															Writing.
														</li>
														<li>
															Fill in the required fields and click Generate the more
															context output.
														</li>
													</ol>
													<p className="mb-0">
														Have questions about how the app works? Ask your question to our
														live chat or send an email and we will help you further.
													</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item
												eventKey="1"
												className="border-bottom-0 border-start-0 border-end-0"
											>
												<Accordion.Header>
													<span className="d-block fs-20 fw-bold">
														Do you have languages other than English and Dutch?
													</span>
												</Accordion.Header>
												<Accordion.Body>
													<ol className="add-0 d-flex flex-column gap-4 mb-8">
														<li>
															Create an account and write completely free, forever! If you
															want more features and Tone
														</li>
														<li>
															Log in to the app and choose a template, such as Article
															Writing.
														</li>
														<li>
															Fill in the required fields and click Generate the more
															context output.
														</li>
													</ol>
													<p className="mb-0">
														Have questions about how the app works? Ask your question to our
														live chat or send an email and we will help you further.
													</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item
												eventKey="2"
												className="border-bottom-0 border-start-0 border-end-0"
											>
												<Accordion.Header>
													<span className="d-block fs-20 fw-bold">
														What paid subscription would you recommend to me?
													</span>
												</Accordion.Header>
												<Accordion.Body>
													<ol className="add-0 d-flex flex-column gap-4 mb-8">
														<li>
															Create an account and write completely free, forever! If you
															want more features and Tone
														</li>
														<li>
															Log in to the app and choose a template, such as Article
															Writing.
														</li>
														<li>
															Fill in the required fields and click Generate the more
															context output.
														</li>
													</ol>
													<p className="mb-0">
														Have questions about how the app works? Ask your question to our
														live chat or send an email and we will help you further.
													</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item
												eventKey="3"
												className="border-bottom-0 border-start-0 border-end-0"
											>
												<Accordion.Header>
													<span className="d-block fs-20 fw-bold">
														How exactly does this AI work and how can it write texts so
														well?
													</span>
												</Accordion.Header>
												<Accordion.Body>
													<ol className="add-0 d-flex flex-column gap-4 mb-8">
														<li>
															Create an account and write completely free, forever! If you
															want more features and Tone
														</li>
														<li>
															Log in to the app and choose a template, such as Article
															Writing.
														</li>
														<li>
															Fill in the required fields and click Generate the more
															context output.
														</li>
													</ol>
													<p className="mb-0">
														Have questions about how the app works? Ask your question to our
														live chat or send an email and we will help you further.
													</p>
												</Accordion.Body>
											</Accordion.Item>
										</Accordion>
										<Link
											to="/faq"
											className="gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 px-4 py-3 rounded fw-bold text-center z-1 mb-1"
										>
											<span className="d-inline-block">Show More Faq</span>
											<span className="d-inline-block">
												<i className="bi bi-arrow-up-right"></i>
											</span>
										</Link>
									</Tab.Pane>
									<Tab.Pane eventKey={"#link3"}>
										<Accordion
											defaultActiveKey="0"
											className="custom-accordion custom-accordion--faq mb-8"
										>
											<Accordion.Item
												eventKey="0"
												className="border-bottom-0 border-start-0 border-end-0"
											>
												<Accordion.Header>
													<span className="d-block fs-20 fw-bold">
														How does the Type tone AI app work / Where do I start?
													</span>
												</Accordion.Header>
												<Accordion.Body>
													<ol className="add-0 d-flex flex-column gap-4 mb-8">
														<li>
															Create an account and write completely free, forever! If you
															want more features and Tone
														</li>
														<li>
															Log in to the app and choose a template, such as Article
															Writing.
														</li>
														<li>
															Fill in the required fields and click Generate the more
															context output.
														</li>
													</ol>
													<p className="mb-0">
														Have questions about how the app works? Ask your question to our
														live chat or send an email and we will help you further.
													</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item
												eventKey="1"
												className="border-bottom-0 border-start-0 border-end-0"
											>
												<Accordion.Header>
													<span className="d-block fs-20 fw-bold">
														Do you have languages other than English and Dutch?
													</span>
												</Accordion.Header>
												<Accordion.Body>
													<ol className="add-0 d-flex flex-column gap-4 mb-8">
														<li>
															Create an account and write completely free, forever! If you
															want more features and Tone
														</li>
														<li>
															Log in to the app and choose a template, such as Article
															Writing.
														</li>
														<li>
															Fill in the required fields and click Generate the more
															context output.
														</li>
													</ol>
													<p className="mb-0">
														Have questions about how the app works? Ask your question to our
														live chat or send an email and we will help you further.
													</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item
												eventKey="2"
												className="border-bottom-0 border-start-0 border-end-0"
											>
												<Accordion.Header>
													<span className="d-block fs-20 fw-bold">
														What paid subscription would you recommend to me?
													</span>
												</Accordion.Header>
												<Accordion.Body>
													<ol className="add-0 d-flex flex-column gap-4 mb-8">
														<li>
															Create an account and write completely free, forever! If you
															want more features and Tone
														</li>
														<li>
															Log in to the app and choose a template, such as Article
															Writing.
														</li>
														<li>
															Fill in the required fields and click Generate the more
															context output.
														</li>
													</ol>
													<p className="mb-0">
														Have questions about how the app works? Ask your question to our
														live chat or send an email and we will help you further.
													</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item
												eventKey="3"
												className="border-bottom-0 border-start-0 border-end-0"
											>
												<Accordion.Header>
													<span className="d-block fs-20 fw-bold">
														How exactly does this AI work and how can it write texts so
														well?
													</span>
												</Accordion.Header>
												<Accordion.Body>
													<ol className="add-0 d-flex flex-column gap-4 mb-8">
														<li>
															Create an account and write completely free, forever! If you
															want more features and Tone
														</li>
														<li>
															Log in to the app and choose a template, such as Article
															Writing.
														</li>
														<li>
															Fill in the required fields and click Generate the more
															context output.
														</li>
													</ol>
													<p className="mb-0">
														Have questions about how the app works? Ask your question to our
														live chat or send an email and we will help you further.
													</p>
												</Accordion.Body>
											</Accordion.Item>
										</Accordion>
										<Link
											to="/faq"
											className="gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 px-4 py-3 rounded fw-bold text-center z-1 mb-1"
										>
											<span className="d-inline-block">Show More Faq</span>
											<span className="d-inline-block">
												<i className="bi bi-arrow-up-right"></i>
											</span>
										</Link>
									</Tab.Pane>
									<Tab.Pane eventKey={"#link4"}>
										<Accordion
											defaultActiveKey="0"
											className="custom-accordion custom-accordion--faq mb-8"
										>
											<Accordion.Item
												eventKey="0"
												className="border-bottom-0 border-start-0 border-end-0"
											>
												<Accordion.Header>
													<span className="d-block fs-20 fw-bold">
														How does the Type tone AI app work / Where do I start?
													</span>
												</Accordion.Header>
												<Accordion.Body>
													<ol className="add-0 d-flex flex-column gap-4 mb-8">
														<li>
															Create an account and write completely free, forever! If you
															want more features and Tone
														</li>
														<li>
															Log in to the app and choose a template, such as Article
															Writing.
														</li>
														<li>
															Fill in the required fields and click Generate the more
															context output.
														</li>
													</ol>
													<p className="mb-0">
														Have questions about how the app works? Ask your question to our
														live chat or send an email and we will help you further.
													</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item
												eventKey="1"
												className="border-bottom-0 border-start-0 border-end-0"
											>
												<Accordion.Header>
													<span className="d-block fs-20 fw-bold">
														Do you have languages other than English and Dutch?
													</span>
												</Accordion.Header>
												<Accordion.Body>
													<ol className="add-0 d-flex flex-column gap-4 mb-8">
														<li>
															Create an account and write completely free, forever! If you
															want more features and Tone
														</li>
														<li>
															Log in to the app and choose a template, such as Article
															Writing.
														</li>
														<li>
															Fill in the required fields and click Generate the more
															context output.
														</li>
													</ol>
													<p className="mb-0">
														Have questions about how the app works? Ask your question to our
														live chat or send an email and we will help you further.
													</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item
												eventKey="2"
												className="border-bottom-0 border-start-0 border-end-0"
											>
												<Accordion.Header>
													<span className="d-block fs-20 fw-bold">
														What paid subscription would you recommend to me?
													</span>
												</Accordion.Header>
												<Accordion.Body>
													<ol className="add-0 d-flex flex-column gap-4 mb-8">
														<li>
															Create an account and write completely free, forever! If you
															want more features and Tone
														</li>
														<li>
															Log in to the app and choose a template, such as Article
															Writing.
														</li>
														<li>
															Fill in the required fields and click Generate the more
															context output.
														</li>
													</ol>
													<p className="mb-0">
														Have questions about how the app works? Ask your question to our
														live chat or send an email and we will help you further.
													</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item
												eventKey="3"
												className="border-bottom-0 border-start-0 border-end-0"
											>
												<Accordion.Header>
													<span className="d-block fs-20 fw-bold">
														How exactly does this AI work and how can it write texts so
														well?
													</span>
												</Accordion.Header>
												<Accordion.Body>
													<ol className="add-0 d-flex flex-column gap-4 mb-8">
														<li>
															Create an account and write completely free, forever! If you
															want more features and Tone
														</li>
														<li>
															Log in to the app and choose a template, such as Article
															Writing.
														</li>
														<li>
															Fill in the required fields and click Generate the more
															context output.
														</li>
													</ol>
													<p className="mb-0">
														Have questions about how the app works? Ask your question to our
														live chat or send an email and we will help you further.
													</p>
												</Accordion.Body>
											</Accordion.Item>
										</Accordion>
										<Link
											to="/faq"
											className="gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 px-4 py-3 rounded fw-bold text-center z-1 mb-1"
										>
											<span className="d-inline-block">Show More Faq</span>
											<span className="d-inline-block">
												<i className="bi bi-arrow-up-right"></i>
											</span>
										</Link>
									</Tab.Pane>
								</Tab.Content>
							</div>
						</div>
					</div>
				</Tab.Container>
			</div>
			<img src={faqSectionShape2} alt="image" className="img-fluid faq-section-2__img" />
		</div>
	);
};
export default FaqOne;
