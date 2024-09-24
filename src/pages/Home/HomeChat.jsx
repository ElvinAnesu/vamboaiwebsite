import { useEffect } from "react";
import AboutFive from "../../components/section/About/AboutFive";
import BlogThree from "../../components/section/Blog/BlogThree";
import CtaTwo from "../../components/section/CTA/CtaTwo";
import FeatureFive from "../../components/section/Feature/FeatureFive";
import FeatureFour from "../../components/section/Feature/FeatureFour";
import HeroThree from "../../components/section/Hero/HeroThree";
import Client from "../../components/section/Misc/Client";
import SalesGrowth from "../../components/section/Misc/SalesGrowth";
import PricingThree from "../../components/section/Pricing/PricingThree";

const HomeChat = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	  }, []);
	return (
		<>
			<HeroThree />
			<FeatureFour />
			<FeatureFive />
			<SalesGrowth />
			<AboutFive />
			<Client />
			<PricingThree />
			<BlogThree />
			<CtaTwo />
		</>
	);
};
export default HomeChat;
