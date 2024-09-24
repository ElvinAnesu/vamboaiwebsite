import BrandTwo from "../../components/section/Brand/BrandTwo";
import CtaThree from "../../components/section/CTA/CtaThree";
import FaqThree from "../../components/section/FAQ/FaqThree";
import FeatureSix from "../../components/section/Feature/FeatureSix";
import FeedbackThree from "../../components/section/Feedback/FeedbackThree";
import HeroFour from "../../components/section/Hero/HeroFour";
import PricingFour from "../../components/section/Pricing/PricingFour";

const HomeContentCreator = () => {
	return (
		<>
			<HeroFour />
			<BrandTwo />
			<FeatureSix />
			<PricingFour />
			<FeedbackThree />
			<FaqThree />
			<CtaThree />
		</>
	);
};
export default HomeContentCreator;
