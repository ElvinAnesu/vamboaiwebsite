import chooseImage1 from "/img/why-choose-top-digit.png";
import chooseImage2 from "/img/why-choose-right-top.webp";
import chooseImage3 from "/img/why-choose-right-bottom.webp";
import chooseImage4 from "/img/why-choose-sound-icon.png";
import chooseImage5 from "/img/list-star.png";
import chooseImage6 from "/img/why-choose-av-1.webp";
import chooseImage7 from "/img/why-choose-av-3.png";
import wall4 from "/img/wall4.jpg"
import wall1 from "/img/wall1.jpg"
import wall2 from "/img/wall2.jpg"
import { BsArrowUpRight, BsPerson, BsCloudUpload, BsGear, BsFolderCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ListGroup, Tab } from "react-bootstrap";
const WhyChooseTwo = () => {
	return (
		<section className="section-space-sm-top section-space-sm-bottom">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div
							className="why-choose-wrapper  section-space-top section-space-bottom rounded-5 position-relative overflow-hidden fadeIn_bottom"
							style={{ backgroundColor: "#737373" }}
						>
							<img
								src={chooseImage1}
								alt="image"
								className="img-fluid why-choose-wrapper-el why-choose-wrapper-el-digit"
							/>
							<img
								src={chooseImage3}
								alt="image"
								className="img-fluid why-choose-wrapper-el why-choose-wrapper-el-bottom"
							/>

							<div className="section-space-xsm-bottom">
								<h3
									className="fw-extrabold max-text-24 animate-text-from-right"
									style={{ color: "#AB1515" }}
								>
									Why Vambo AI?
								</h3>
							</div>
							<Tab.Container defaultActiveKey="#link1">
								<ListGroup
									className="nav bg-neutral-key pill-tabs pill-tabs-style-two rounded-3 justify-content-between py-1 px-2 d-inline-flex gap-3 gap-lg-4 gap-xl-5 gap-xxl-7 fadeIn_bottom"
									horizontal={true}
								>
									<ListGroup.Item
										className="nav-item w-auto nav-link rounded-3 py-3 px-7 fw-medium fs-14"
										action
										href="#link1"
										style={{ color: "#AB1515" }}
									>
										Multilingual Solutions for All
									</ListGroup.Item>
									<ListGroup.Item
										className="nav-item w-auto nav-link rounded-3 py-3 px-7 fw-medium fs-14"
										action
										href="#link2"
										style={{ color: "#AB1515" }}
									>
										Seamless Integration
									</ListGroup.Item>
									<ListGroup.Item
										className="nav-item w-auto nav-link rounded-3 py-3 px-7 fw-medium fs-14"
										action
										href="#link3"
										style={{ color: "#AB1515" }}
									>
										Solutions for Business and Education
									</ListGroup.Item>
								</ListGroup>

								<Tab.Content
									className="tab-content section-space-sm-top"
									id="pills-choose-tabContent"
								>
									<Tab.Pane eventKey="#link1">
										<div className="row gy-4 justify-content-between align-items-center">
											<div className="col-lg-5">
												<h4
													className="clr-white h5 max-text-20 animate-line-3d"
													style={{ color: "#AB1515" }}
												>
													Over 44 African Languages Supported
												</h4>
												<p className="clr-neutral-80 my-6 animate-text-from-right">
													Our platform supports 44 African languages and 20
													global languages, enabling businesses and individuals
													to communicate and innovate without language barriers.
													Whether you&apos;re building applications, websites or
													educational platforms, Vambo AI offers the tools to
													reach wider, more diverse audiences
												</p>
												<div className="fadeIn_bottom">
													<Link
														to="/about"
														target="_blank"
														className="link d-inline-flex gap-2 mt-12 py-3 px-7  rounded-1 fs-14 fw-bold text-center clr-white ff-1"
														style={{ backgroundColor: "#AB1515" }}
													>
														Get started for free
														<BsArrowUpRight />
													</Link>
												</div>
											</div>
											<div className="col-lg-6">
												<img
													src={wall4}
													alt="image"
													className="img-fluid fadeIn_bottom"
												/>
											</div>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="#link2">
										<div className="row gy-4 justify-content-between align-items-center">
											<div className="col-lg-5">
												<h4
													className="clr-white h5 max-text-20"
													style={{ color: "#AB1515" }}
												>
													Build your own solutions with our API
												</h4>
												<p className="clr-neutral-80 my-6">
													With our Vambo Studio API, developers can easily
													integrate language features such as translation,
													transcription, and content generation into their
													applications. Our simple-to-use API and cutting-edge
													NLP technology make Vambo AI the go-to platform for
													multilingual solutions.
												</p>
												<div className="fadeIn_bottom">
													<Link
														to="/login"
														className="link d-inline-flex gap-2 mt-12 py-3 px-7  rounded-1 fs-14 fw-bold text-center clr-white ff-1"
														style={{ backgroundColor: "#AB1515" }}
													>
														Vambo Studio <BsArrowUpRight />
													</Link>
												</div>
											</div>
											<div className="col-lg-6">
												<img
													src={wall2}
													alt="image"
													className="img-fluid"
												/>
											</div>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="#link3">
										<div className="row gy-4 justify-content-between align-items-center">
											<div className="col-lg-5">
												<h4
													className="clr-white h5 max-text-20"
													style={{ color: "#AB1515" }}
												>
													Business and Education solutions
												</h4>
												<p className="clr-neutral-80 my-6">
													From AI-powered customer service bots to language
													learning apps, our solutions cater to diverse
													industries, including EdTech, HealthTech, and FinTech.
													With Vambo AI, businesses can provide localized
													services, while educational institutions can offer
													language support and preservation to students across
													Africa.
												</p>
												<Link
													to="/login"
													className="link d-inline-flex gap-2 mt-12 py-3 px-7 rounded-1 fs-14 fw-bold text-center clr-white ff-1"
													style={{ backgroundColor: "#AB1515" }}
												>
													VamboAI B2C <BsArrowUpRight />
												</Link>
											</div>
											<div className="col-lg-6">
												<img
													src={wall1}
													alt="image"
													className="img-fluid"
												/>
											</div>
										</div>
									</Tab.Pane>
									
								</Tab.Content>
							</Tab.Container>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default WhyChooseTwo;
