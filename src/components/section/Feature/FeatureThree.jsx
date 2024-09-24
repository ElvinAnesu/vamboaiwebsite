import featureImage1 from "/img/dash-img-1.png";
import featureImage2 from "/img/mobile-screen.png";
import Tab from "react-bootstrap/Tab";
import ListGroup from "react-bootstrap/ListGroup";
import { BsDisplay, BsPhone } from "react-icons/bs";
const FeatureThree = () => {
	return (
		<div className="presentation-section section-space-sm-top section-space-bottom">
			<div className="section-space-sm-bottom">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-10 col-xl-8">
							<h3 className="mb-0 text-center clr-neutral-90 animate-line-3d">
								Present Anywhere Anytime
							</h3>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
							<div className="section-space-xsm-bottom text-center">
								<ListGroup as="ul" className="nav nav-group justify-content-center flex-row">
									<li className="nav-item">
										<ListGroup.Item
											action
											href="#link1"
											className="nav-link d-grid place-content-center w-12 h-12 clr-neutral-80 bg-transparent"
										>
											<BsDisplay />
										</ListGroup.Item>
									</li>

									<li className="nav-item">
										<ListGroup.Item
											action
											href="#link2"
											className="nav-link d-grid place-content-center w-12 h-12 clr-neutral-80 bg-transparent"
										>
											<BsPhone />
										</ListGroup.Item>
									</li>
								</ListGroup>
							</div>
							<Tab.Content>
								<Tab.Pane eventKey="#link1">
									<div className="text-center">
										<img src={featureImage1} alt="image" className="img-fluid" />
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey="#link2">
									<div className="text-center">
										<img src={featureImage2} alt="image" className="img-fluid" />
									</div>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</div>
				</div>
			</div>
		</div>
	);
};
export default FeatureThree;
