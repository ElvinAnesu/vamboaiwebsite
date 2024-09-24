import Hero from "@components/writebot/hero/Hero";
import Feature from "@components/writebot/feature/Feature";
import AiTools from "@components/writebot/aiTools/AiTools";
import AiTemplate from "@components/writebot/aiTemplate/AiTemplate";
import AiImage from "../../components/writebot/aiImage/AiImage";
import Subscription from "../../components/writebot/subscription/Subscription";
import AiApplication from "../../components/writebot/aiApplication/AiApplication";
import Testimonial from "../../components/writebot/testimonial/Testimonial";
import Cta from "../../components/writebot/cta/Cta";

const HomeWritebot = () => {
  return (
    <>
      <Hero/>
      <Feature/>
      <AiTools/>
      <AiTemplate/>
      <AiImage/>
      <Subscription/>
      <AiApplication/>
      <Testimonial/>
      <Cta/>
    </>
  )
};

export default HomeWritebot
