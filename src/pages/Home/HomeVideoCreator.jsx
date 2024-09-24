import HeroSix from "@components/section/Hero/HeroSix";
import FeatureSection from "@components/videoCreator/featureSection/FeatureSection";

import CustomerRating from "@components/videoCreator/customerRating/CustomerRating";
import AiIntegrationSection from "@components/videoCreator/aiIntegrationSection/AiIntegrationSection";
import UseCaseSection from "@components/videoCreator/useCaseSection/UseCaseSection";
import TickerSection from "@components/videoCreator/tickerSection/TickerSection";
import TestimonialSection3 from "@components/videoCreator/testimonialSection/TestimonialSection";
import VideoTemplate from "@components/videoCreator/videoTemplate/VideoTemplate";
import Faq from "@components/videoCreator/faq/Faq";
import CtaSection from "@components/videoCreator/ctaSection/CtaSection";
import BlogSection from "@components/videoCreator/blogSection/BlogSection";
const HomeVideoCreator = () => {
  return (
    <>
     <HeroSix/>
     <CustomerRating/>
     <FeatureSection/>
     <AiIntegrationSection/>
     <UseCaseSection/>
     <TickerSection/>
     <TestimonialSection3/>
     <VideoTemplate/>
     <Faq/>
     <CtaSection/>
     <BlogSection/>
    </>
  )
};

export default HomeVideoCreator
