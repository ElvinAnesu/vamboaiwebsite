import { Link } from "react-router-dom";
import blogSectionOneImg1 from "/img/blog-section-1-img-1.webp";
import blogSectionOneImg2 from "/img/blog-section-1-img-2.webp";
import BlogOneData from "../../../jsonData/BlogOneData.json";
import CtaOne from "../CTA/CtaOne";

const BlogOne = () => {
	console.log('BlogOneData..',BlogOneData)
	return (
		<div className="blog-section-1 section-space-y bg-neutral-4">
			<div className="section-space-sm-bottom">
				<div className="container">
					<div className="row g-4 justify-content-between">
						<div className="col-md-5">
							<div className="d-flex align-items-center gap-4 flex-wrap">
								<div className="w-30 subtitle-flush-x subtitle-flush-x--secondary subtitle_line_7"></div>
								<h6 className="mb-0 fs-18 clr-secondary-key fw-extrabold animate-text-from-right">
									Discover AI-Enhanced Visual Stories
								</h6>
							</div>
						</div>
						<div className="col-md-6 col-xxl-5">
							<h3 className="mb-0 clr-neutral-90 fw-extrabold animate-line-3d">
								The Latest Updates News & Blog
							</h3>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row g-4">
					{BlogOneData.map((blogData) => (
						<div className="col-md-6 col-lg-4" key={blogData.id}>
							<div className="blog-card-1 top-shadow px-6 py-10 position-relative z-1 overflow-hidden rounded-3 bg-neutral-10 bg-opacity-6 fadein_bottom_13">
								<div className="d-flex align-items-center gap-2">
									<div className="w-12 h-2px bg-primary-key"></div>
									<span className="d-block fw-bold clr-primary-key">{blogData.label}</span>
								</div>
								<div className="blog-card-1__img">
									<img
										src={blogData.image}
										alt="image"
										className="img-fluid h-100 object-fit-cover"
									/>
								</div>
								<div className="blog-card-1__body">
									<h6 className="mb-6 fs-24">
										<Link to="blog-details" className="link d-block clr-neutral-90">
											{blogData.title}
										</Link>
									</h6>
									<div className="d-flex align-items-center gap-2">
										<span className="d-inline-block clr-neutral-90 fs-14 fw-semibold">
											{blogData.date}
										</span>
										<span className="d-inline-block w-1 h-1 rounded-circle bg-neutral-90"></span>
										<Link href="" className="link d-inline-block clr-neutral-90 fs-14 fw-semibold">
											{blogData.comment}
										</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<CtaOne />
			<img
				src={blogSectionOneImg1}
				alt="image"
				className="img-fluid blog-section-1__img blog-section-1__img--1"
			/>
			<img
				src={blogSectionOneImg2}
				alt="image"
				className="img-fluid blog-section-1__img blog-section-1__img--2"
			/>
		</div>
	);
};
export default BlogOne;
