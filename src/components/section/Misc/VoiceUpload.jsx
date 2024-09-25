import { ListGroup, Tab } from "react-bootstrap";
import voiceImage1 from "/img/home-5-lightning-fill.png";
import voiceImage2 from "/img/voice-upload-tab-bg.webp";
import voiceImage3 from "/img/voice-upload-tab-1.webp";
import voiceImage4 from "/img/music-generator.png";
import voiceImage5 from "/img/video-to-audio.png";
import voiceImage6 from "/img/noise-reducer.png";
import voiceImage7 from "/img/voice-changer.png";
import voiceImage8 from "/img/home-5-header-top-el.webp";
import voiceImage9 from "/img/home-5-right-shape.png";
const VoiceUpload = () => {
	return (
		<section className="section-space-sm-top section-space-sm-bottom voice-upload-section position-relative">
			<div className="section-space-sm-bottom">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="position-relative text-center">
								<h3 className="fw-extrabold animate-line-3d">
									Empowering{" "}
									<span style={{ color: "#AB1515" }}>African Languages</span>{" "}
									with AI
								</h3>
								<p className="animate-text-from-bottom">
									At Vambo AI, we&apos;re bridging the language gap by providing
									advanced AI solutions that empower indigenous languages in the
									digital world. From translation and transcription to language
									generation and natural language processing (NLP), our tools
									make it easy for businesses, educators and developers to
									seamlessly integrate multilingual solutions.
								</p>
								<p className="animate-text-from-bottom">
									Discover how we&apos;re preserving culture and creating a more
									inclusive future by making indigenous languages part of the
									global conversation.
								</p>
								<img
									src={voiceImage1}
									alt="image"
									className="img-fluid section-title-obj-img"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<img
				src={voiceImage8}
				alt="image"
				className="img-fluid section-top-bg-shape"
			/>

			<img
				src={voiceImage9}
				alt="image"
				className="img-fluid section-right-bg-shape"
			/>
		</section>
	);
};
export default VoiceUpload;
