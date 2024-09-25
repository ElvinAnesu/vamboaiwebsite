import { Link } from "react-router-dom";
import { Accordion, ListGroup, Tab } from "react-bootstrap";

const FaqBody = () => {
	return (
		<>
			<section className="breadcrumb-section">
				<div className="">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-xxl-5 col-xl-8 mb">
								<div className="text-center">
									<h2 className="h3 fw-bold  mt-4">
										Questions? <br />
										We Have Answers.
									</h2>
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
														style={{ color: "#AB1515" }}
													>
														Users
													</ListGroup.Item>
												</li>
												<li>
													<ListGroup.Item
														action
														href="#link2"
														className="nav-link link todo-nav__link"
														style={{ color: "#AB1515" }}
													>
														Developers
													</ListGroup.Item>
												</li>
												<li>
													<ListGroup.Item
														action
														href="#link3"
														className="nav-link link todo-nav__link"
														style={{ color: "#AB1515" }}
													>
														For Businesses
													</ListGroup.Item>
												</li>
												<li>
													<ListGroup.Item
														action
														href="#link4"
														className="nav-link link todo-nav__link"
														style={{ color: "#AB1515" }}
													>
														Schools
													</ListGroup.Item>
												</li>
												<li>
													<ListGroup.Item
														action
														href="#link5"
														className="nav-link link todo-nav__link"
														style={{ color: "#AB1515" }}
													>
														For Academia
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
													style={{ backgroundColor: "#AB1515" }}
												>
													<Accordion.Item
														eventKey="0"
														className="border-bottom-0 border-start-0 border-end-0"
													>
														<Accordion.Header>
															<span className="d-block fs-20 fw-bold">
																How do I start using Vambo AI’s translation
																tools?
															</span>
														</Accordion.Header>
														<Accordion.Body>
															<p className="mb-0">
																Getting started with Vambo AI is easy! Simply
																sign up on our platform, select the language you
																want to translate from and to, and begin using
																our tools for translation, transcription, and
																content creation.
															</p>
														</Accordion.Body>
													</Accordion.Item>
													<Accordion.Item
														eventKey="1"
														className="border-bottom-0 border-start-0 border-end-0"
													>
														<Accordion.Header>
															<span className="d-block fs-20 fw-bold">
																How accurate is Vambo AI for African languages?
															</span>
														</Accordion.Header>
														<Accordion.Body>
															<p className="mb-0">
																We&apos;ve developed specialized models for
																African languages with the help of native
																speakers, ensuring high accuracy. Some languages
																are still being refined, but we&apos;re
																committed to improving accuracy with continuous
																user feedback.
															</p>
														</Accordion.Body>
													</Accordion.Item>
													<Accordion.Item
														eventKey="2"
														className="border-bottom-0 border-start-0 border-end-0"
													>
														<Accordion.Header>
															<span className="d-block fs-20 fw-bold">
																What African languages are supported?
															</span>
														</Accordion.Header>
														<Accordion.Body>
															<p className="mb-0">
																Vambo AI currently supports 44 African
																languages, including Swahili, Yoruba, Igbo, and
																Hausa. We are continuously working to add more
																languages based on user demand.
															</p>
														</Accordion.Body>
													</Accordion.Item>
													<Accordion.Item
														eventKey="3"
														className="border-bottom-0 border-start-0 border-end-0"
													>
														<Accordion.Header>
															<span className="d-block fs-20 fw-bold">
																Can I provide feedback on translations?
															</span>
														</Accordion.Header>
														<Accordion.Body>
															<p className="mb-0">
																Absolutely! User feedback is vital for improving
																the accuracy of our models. If you notice any
																errors or have suggestions, you can submit them
																through our platform, and our team will work on
																refining the translations.
															</p>
														</Accordion.Body>
													</Accordion.Item>
												</Accordion>
												<Link
													to="/faq"
													className="position-relative link d-inline-flex justify-content-center align-items-center gap-2 px-4 py-3 rounded fw-bold text-center z-1 mb-1"
													style={{
														backgroundColor: "#AB1515",
														color: "#ffffff",
													}}
												>
													<span className="d-inline-block">Show More FAQ</span>
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
																How does Vambo AI handle API scaling for high
																traffic?
															</span>
														</Accordion.Header>
														<Accordion.Body>
															<p className="mb-0">
																Our API is built to scale based on your
																application&apos;s traffic needs. Whether
																you&apos;re handling a small user base or a
																large enterprise-scale audience, Vambo AI&apos;s
																infrastructure ensures stable performance
															</p>
														</Accordion.Body>
													</Accordion.Item>
													<Accordion.Item
														eventKey="1"
														className="border-bottom-0 border-start-0 border-end-0"
													>
														<Accordion.Header>
															<span className="d-block fs-20 fw-bold">
																Are there any open-source projects I can
																contribute to?
															</span>
														</Accordion.Header>
														<Accordion.Body>
															<p className="mb-0">
																Yes! We&apos;re launching our open-source
																initiative starting with an East African
																language model. Developers can contribute to the
																growth and accuracy of our models through Vambo
																Studio&apos;s collaborative platform.
															</p>
														</Accordion.Body>
													</Accordion.Item>
													<Accordion.Item
														eventKey="2"
														className="border-bottom-0 border-start-0 border-end-0"
													>
														<Accordion.Header>
															<span className="d-block fs-20 fw-bold">
																How can I test the API before fully integrating
																it into my product?
															</span>
														</Accordion.Header>
														<Accordion.Body>
															<p className="mb-0">
																We offer a free tier where developers can test
																our API with limited requests to see how it fits
																their product before committing to higher usage
																tiers.
															</p>
														</Accordion.Body>
													</Accordion.Item>
												</Accordion>
												<Link
													to="/faq"
													className="position-relative link d-inline-flex justify-content-center align-items-center gap-2 px-4 py-3 rounded fw-bold text-center z-1 mb-1"
													style={{
														backgroundColor: "#AB1515",
														color: "#ffffff",
													}}
												>
													<span className="d-inline-block">Show More FAQ</span>
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
																How can Vambo AI benefit my business?
															</span>
														</Accordion.Header>
														<Accordion.Body>
															<p className="mb-0">
																Vambo AI helps your business break language
																barriers by providing translation and
																multilingual support in over 44 African
																languages. Whether you operate in customer
																service, healthcare, or e-commerce, we enable
																you to expand your market reach and improve
																customer satisfaction.
															</p>
														</Accordion.Body>
													</Accordion.Item>
													<Accordion.Item
														eventKey="1"
														className="border-bottom-0 border-start-0 border-end-0"
													>
														<Accordion.Header>
															<span className="d-block fs-20 fw-bold">
																Can Vambo AI be customized for my business
																needs?
															</span>
														</Accordion.Header>
														<Accordion.Body>
															<p className="mb-0">
																Yes! Vambo AI offers customizable API solutions
																for businesses. We work with companies to tailor
																our services to their specific industry needs,
																whether it’s building multilingual chatbots or
																translating marketing materials.
															</p>
														</Accordion.Body>
													</Accordion.Item>
													<Accordion.Item
														eventKey="2"
														className="border-bottom-0 border-start-0 border-end-0"
													>
														<Accordion.Header>
															<span className="d-block fs-20 fw-bold">
																How does Vambo AI ensure data security for
																business transactions?
															</span>
														</Accordion.Header>
														<Accordion.Body>
															<p className="mb-0">
																Data security is our priority. We use secure
																encryption for all translations and follow
																strict data protection standards to ensure your
																information remains confidential.
															</p>
														</Accordion.Body>
													</Accordion.Item>
													<Accordion.Item
														eventKey="3"
														className="border-bottom-0 border-start-0 border-end-0"
													>
														<Accordion.Header>
															<span className="d-block fs-20 fw-bold">
																What industries are best suited for Vambo AI?
															</span>
														</Accordion.Header>
														<Accordion.Body>
															<p className="mb-0">
																Vambo AI is highly versatile and can be used in
																various industries, including education,
																healthcare, e-commerce, and customer support.
																Any business that needs to communicate with
																diverse audiences will benefit from our
																solutions.
															</p>
														</Accordion.Body>
													</Accordion.Item>
												</Accordion>

												<Link
													to="/faq"
													className=" position-relative link d-inline-flex justify-content-center align-items-center gap-2 px-4 py-3 rounded fw-bold text-center z-1 mb-1"
													style={{
														backgroundColor: "#AB1515",
														color: "#ffffff",
													}}
												>
													<span className="d-inline-block">Show More FAQ</span>
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
																How can Vambo AI help in our school&apos;s
																language programs?
															</span>
														</Accordion.Header>
														<Accordion.Body>
															<p className="mb-0">
																Vambo AI enables schools to offer multilingual
																content and teaching materials in various
																African languages. Teachers can create language
																courses, quizzes, and other resources that cater
																to the specific linguistic needs of their
																students.
															</p>
														</Accordion.Body>
													</Accordion.Item>
													<Accordion.Item
														eventKey="1"
														className="border-bottom-0 border-start-0 border-end-0"
													>
														<Accordion.Header>
															<span className="d-block fs-20 fw-bold">
																Do you offer special pricing for educational
																institutions?
															</span>
														</Accordion.Header>
														<Accordion.Body>
															<p className="mb-0">
																Yes, we offer discounted pricing and custom
																packages for schools and educational
																institutions to make language support accessible
																to all learners.
															</p>
														</Accordion.Body>
													</Accordion.Item>
													<Accordion.Item
														eventKey="2"
														className="border-bottom-0 border-start-0 border-end-0"
													>
														<Accordion.Header>
															<span className="d-block fs-20 fw-bold">
																How can we integrate Vambo AI into our school's
																digital platforms?
															</span>
														</Accordion.Header>
														<Accordion.Body>
															<p className="mb-0">
																Our API can be easily integrated into your
																school&apos;s existing digital platforms,
																learning management systems (LMS), and apps.
																This ensures seamless access to our multilingual
																tools for both teachers and students.
															</p>
														</Accordion.Body>
													</Accordion.Item>
													<Accordion.Item
														eventKey="3"
														className="border-bottom-0 border-start-0 border-end-0"
													>
														<Accordion.Header>
															<span className="d-block fs-20 fw-bold">
																Does Vambo AI support language preservation
																efforts?
															</span>
														</Accordion.Header>
														<Accordion.Body>
															<p className="mb-0">
																Yes! We actively work with educational
																institutions to develop resources that support
																the preservation and promotion of African
																languages, helping students engage with their
																cultural heritage.
															</p>
														</Accordion.Body>
													</Accordion.Item>
												</Accordion>
												<Link
													to="/faq"
													className="position-relative link d-inline-flex justify-content-center align-items-center gap-2 px-4 py-3 rounded fw-bold text-center z-1 mb-1"
													style={{
														backgroundColor: "#AB1515",
														color: "#ffffff",
													}}
												>
													<span className="d-inline-block">Show More FAQ</span>
													<span className="d-inline-block">
														<i className="bi bi-arrow-up-right"></i>
													</span>
												</Link>
											</Tab.Pane>
											<Tab.Pane eventKey={"#link5"}>
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
																How can researchers and academic institutions
																leverage Vambo AI?
															</span>
														</Accordion.Header>
														<Accordion.Body>
															<p className="mb-0">
																Vambo AI provides research institutions with
																tools for translating and analyzing African
																languages, facilitating linguistic research and
																the digitization of traditional knowledge. Our
																platform also supports collaborations to develop
																new language models.
															</p>
														</Accordion.Body>
													</Accordion.Item>
													<Accordion.Item
														eventKey="1"
														className="border-bottom-0 border-start-0 border-end-0"
													>
														<Accordion.Header>
															<span className="d-block fs-20 fw-bold">
																Can Vambo AI assist in preserving endangered
																African languages?
															</span>
														</Accordion.Header>
														<Accordion.Body>
															<p className="mb-0">
																Yes! We work with academic researchers to
																document and digitize endangered African
																languages. By creating accurate language models,
																we contribute to preserving linguistic heritage
																for future generations.
															</p>
														</Accordion.Body>
													</Accordion.Item>
													<Accordion.Item
														eventKey="2"
														className="border-bottom-0 border-start-0 border-end-0"
													>
														<Accordion.Header>
															<span className="d-block fs-20 fw-bold">
																How can academic institutions partner with Vambo
																AI for research?
															</span>
														</Accordion.Header>
														<Accordion.Body>
															<p className="mb-0">
																We offer research partnerships where academic
																institutions can access our language datasets
																and contribute to refining our models. This
																includes developing linguistic resources for
																underrepresented languages.
															</p>
														</Accordion.Body>
													</Accordion.Item>
													<Accordion.Item
														eventKey="3"
														className="border-bottom-0 border-start-0 border-end-0"
													>
														<Accordion.Header>
															<span className="d-block fs-20 fw-bold">
																How is Vambo AI contributing to African language
																studies?
															</span>
														</Accordion.Header>
														<Accordion.Body>
															<p className="mb-0">
																Vambo AI offers advanced NLP tools tailored to
																African languages, enabling deeper linguistic
																analysis and research. This empowers academic
																institutions to expand their studies on language
																diversity in Africa.
															</p>
														</Accordion.Body>
													</Accordion.Item>
												</Accordion>
												<Link
													to="/faq"
													className="position-relative link d-inline-flex justify-content-center align-items-center gap-2 px-4 py-3 rounded fw-bold text-center z-1 mb-1"
													style={{
														backgroundColor: "#AB1515",
														color: "#ffffff",
													}}
												>
													<span className="d-inline-block">Show More FAQ</span>
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
				</div>
				<img
					src="/img/breadcrumb-shape-top.png"
					alt="image"
					className="img-fluid breadcrumb-shape breadcrumb-shape-top"
				/>
				<img
					src="/img/breadcrumb-shape-left.png"
					alt="image"
					className="img-fluid breadcrumb-shape breadcrumb-shape-left"
				/>
				<img
					src="/img/breadcrumb-shape-right.png"
					alt="image"
					className="img-fluid breadcrumb-shape breadcrumb-shape-right"
				/>
				<img
					src="/img/breadcrumb-shape-line-left.png"
					alt="image"
					className="img-fluid breadcrumb-shape breadcrumb-shape-line-left"
				/>
				<img
					src="/img/breadcrumb-shape-line-right.png"
					alt="image"
					className="img-fluid breadcrumb-shape breadcrumb-shape-line-right"
				/>
			</section>
		</>
	);
};

export default FaqBody;
