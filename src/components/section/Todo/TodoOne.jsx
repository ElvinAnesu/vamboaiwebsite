import videoSrc from "/img/todo-video.mp4";
import todoImg from "/img/todo-img.jpg";
import todoImg1 from "/img/todo-img-1.png";
import todoImg2 from "/img/todo-img-2.png";
import todoImg3 from "/img/todo-img-3.jpg";
import todoImg4 from "/img/todo-img-4.png";
import todoImg5 from "/img/todo-img-5.jpg";
import todoImg7 from "/img/todo-img-7.jpg";
import todoImg9 from "/img/todo-img-9.jpg";
import { Link } from "react-router-dom";
const TodoOne = () => {
	return (
		<div className="what-todo-section section-space-sm-y">
			<div className="section-space-sm-bottom">
				<div className="container">
					<div className="row g-4 justify-content-between">
						<div className="col-md-5">
							<div className="d-flex align-items-center gap-4 flex-wrap">
								<div className="w-30 subtitle-flush-x subtitle_line_1"></div>
								<h6 className="mb-0 fs-18 clr-neutral-90 fw-extrabold animate-text-from-right">
									What We Do
								</h6>
							</div>
						</div>
						<div className="col-md-7 col-xl-5">
							<h5 className="mb-0 clr-neutral-90 fw-extrabold animate-line-3d">
								Explore the power of AI <span className="clr-grad-1">Development</span> tools Crafted
								with Brilliance, Style Quality and Creativity.
							</h5>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row g-4">
					<div className="col-md-5 order-xl-2">
						<nav className="todo-nav" id="toDoScrollspy">
							<ul className="list gap-5 todo-nav__menu">
								<li>
									<a href="#imageGenerator" className="nav-link link todo-nav__link">
										AI Image Generator
									</a>
								</li>
								<li>
									<a href="#imageCustomization" className="nav-link link todo-nav__link">
										Customizable Image Styles
									</a>
								</li>
								<li>
									<a href="#generateVideos" className="nav-link link todo-nav__link">
										Generate Videos
									</a>
								</li>
								<li>
									<a href="#removedBg" className="nav-link link todo-nav__link">
										Removed any Background
									</a>
								</li>
								<li>
									<a href="#trainCustom" className="nav-link link todo-nav__link">
										Train Custom
									</a>
								</li>
								<li>
									<a href="#imgCreation" className="nav-link link todo-nav__link">
										Image Clean
									</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className="col-md-7">
						<div data-bs-spy="scroll" data-bs-target="#toDoScrollspy" data-bs-smooth-scroll="true">
							<div className="section-space-bottom" id="imageGenerator">
								<div className="todo-box position-relative z-1 bg-black py-10 pe-10">
									<h4 className="clr-neutral-90 animate-line-3d">Generate Images</h4>
									<p className="mb-6 clr-neutral-80 animate-text-from-right">
										We are constantly rethinking the future by creating the next generation of
										products, brands and services from a hybrid perspective.
									</p>
									<div className="fadein_bottom_2">
										<Link
											to="/login"
											className="gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 p-4 rounded fw-bold text-center z-1"
										>
											<span className="d-inline-block">Try Text to Image</span>
											<span className="d-inline-block">
												<i className="bi bi-arrow-up-right"></i>
											</span>
										</Link>
									</div>
								</div>
								<div className="todo-img">
									<img src={todoImg} alt="image" className="img-fluid rounded-1 parallax-image" />
									<img src={todoImg1} alt="image" className="img-fluid todo-img__1" />
									<img src={todoImg2} alt="image" className="img-fluid todo-img__2" />
								</div>
							</div>
							<div className="section-space-y" id="imageCustomization">
								<div className="todo-box position-relative z-1 bg-black py-10 pe-10">
									<h4 className="clr-neutral-90 animate-line-3d">Reimagine Any Image</h4>
									<p className="mb-6 clr-neutral-80 animate-text-from-right">
										We are constantly rethinking the future by creating the next generation of
										products, brands and services from a hybrid perspective.
									</p>
									<div className="fadein_bottom_3">
										<Link
											to="/login"
											className="gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 p-4 rounded fw-bold text-center z-1"
										>
											<span className="d-inline-block">Try Image to Image</span>
											<span className="d-inline-block">
												<i className="bi bi-arrow-up-right"></i>
											</span>
										</Link>
									</div>
								</div>
								<div className="todo-img">
									<img src={todoImg3} alt="image" className="img-fluid rounded-1 parallax-image" />
									<img src={todoImg1} alt="image" className="img-fluid todo-img__1" />
									<img src={todoImg4} alt="image" className="img-fluid todo-img__2" />
								</div>
							</div>
							<div className="section-space-y" id="generateVideos">
								<div className="todo-box position-relative z-1 bg-black py-10 pe-10">
									<h4 className="clr-neutral-90 animate-line-3d">Generate Videos</h4>
									<p className="mb-6 clr-neutral-80 animate-text-from-right">
										We are constantly rethinking the future by creating the next generation of
										products, brands and services from a hybrid perspective.
									</p>
									<div className="fadein_bottom_4">
										<Link
											to="/login"
											className="gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 p-4 rounded fw-bold text-center z-1"
										>
											<span className="d-inline-block">Try Text to Image</span>
											<span className="d-inline-block">
												<i className="bi bi-arrow-up-right"></i>
											</span>
										</Link>
									</div>
								</div>
								<div className="todo-img">
									<video src={videoSrc} autoPlay loop className="ratio ratio-16x9" type="video/mp4" />
									<img src={todoImg1} alt="image" className="img-fluid todo-img__1" />
									<img src={todoImg2} alt="image" className="img-fluid todo-img__2" />
								</div>
							</div>
							<div className="section-space-y" id="removedBg">
								<div className="todo-box position-relative z-1 bg-black py-10 pe-10">
									<h4 className="clr-neutral-90 animate-line-3d">Remove Image Background</h4>
									<p className="mb-6 clr-neutral-80 animate-text-from-right">
										We are constantly rethinking the future by creating the next generation of
										products, brands and services from a hybrid perspective.
									</p>
									<div className="fadein_bottom_5">
										<Link
											to="/login"
											className="gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 p-4 rounded fw-bold text-center z-1"
										>
											<span className="d-inline-block">Try Text to Image</span>
											<span className="d-inline-block">
												<i className="bi bi-arrow-up-right"></i>
											</span>
										</Link>
									</div>
								</div>
								<div className="todo-img">
									<img src={todoImg5} alt="image" className="img-fluid rounded-1 parallax-image" />
									<img src={todoImg1} alt="image" className="img-fluid todo-img__1" />
									<img src={todoImg2} alt="image" className="img-fluid todo-img__2" />
								</div>
							</div>
							<div className="section-space-y" id="trainCustom">
								<div className="todo-box position-relative z-1 bg-black py-10 pe-10">
									<h4 className="clr-neutral-90 animate-line-3d">Image Cleaning</h4>
									<p className="mb-6 clr-neutral-80 animate-text-from-right">
										We are constantly rethinking the future by creating the next generation of
										products, brands and services from a hybrid perspective.
									</p>
									<div className="fadein_bottom_6">
										<Link
											to="/login"
											className="gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 p-4 rounded fw-bold text-center z-1"
										>
											<span className="d-inline-block">Try Text to Image</span>
											<span className="d-inline-block">
												<i className="bi bi-arrow-up-right"></i>
											</span>
										</Link>
									</div>
								</div>
								<div className="todo-img">
									<img src={todoImg7} alt="image" className="img-fluid rounded-1 parallax-image" />
									<img src={todoImg1} alt="image" className="img-fluid todo-img__1" />
									<img src={todoImg2} alt="image" className="img-fluid todo-img__2" />
								</div>
							</div>
							<div className="section-space-y" id="imgCreation">
								<div className="todo-box position-relative z-1 bg-black py-10 pe-10">
									<h4 className="clr-neutral-90 animate-line-3d">Generate Images</h4>
									<p className="mb-6 clr-neutral-80 animate-text-from-right">
										We are constantly rethinking the future by creating the next generation of
										products, brands and services from a hybrid perspective.
									</p>
									<div className="fadein_bottom_7">
										<Link
											to="/login"
											className="gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 p-4 rounded fw-bold text-center z-1"
										>
											<span className="d-inline-block">Try Text to Image</span>
											<span className="d-inline-block">
												<i className="bi bi-arrow-up-right"></i>
											</span>
										</Link>
									</div>
								</div>
								<div className="todo-img">
									<img src={todoImg9} alt="image" className="img-fluid rounded-1 parallax-image" />
									<img src={todoImg1} alt="image" className="img-fluid todo-img__1" />
									<img src={todoImg2} alt="image" className="img-fluid todo-img__2" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default TodoOne;
