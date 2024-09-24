import { useEffect } from "react";
import AboutOne from "../../components/section/About/AboutOne";
import BlogOne from "../../components/section/Blog/BlogOne";
import BrandOne from "../../components/section/Brand/BrandOne";
import FaqOne from "../../components/section/FAQ/FaqOne";
import FeatureOne from "../../components/section/Feature/FeatureOne";
import FeedbackOne from "../../components/section/Feedback/FeedbackOne";
import HeroOne from "../../components/section/Hero/HeroOne";
import NewsletterOne from "../../components/section/Newsletter/NewsletterOne";
import PricingOne from "../../components/section/Pricing/PricingOne";
import TickerOne from "../../components/section/Ticker/TickerOne";
import TickerTwo from "../../components/section/Ticker/TickerTwo";
import TodoOne from "../../components/section/Todo/TodoOne";

const Home = () => {

	return (
		<>
			<HeroOne />
			<BrandOne />
			<AboutOne />
			<TickerOne />
			<TodoOne />
			<FeatureOne />
			<TickerTwo />
			<FeedbackOne />
			<div className="overflow-hidden">
				<PricingOne />
				<FaqOne />
			</div>
			<NewsletterOne />
			<BlogOne />
		</>
	);
};
export default Home;
