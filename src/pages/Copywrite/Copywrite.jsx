import Cta from "../../components/common/cta/Cta";
import CopywritingResources from "../../components/copywrite/copywritingResources/CopywritingResources";
import FeatureMadeCopywriting from "../../components/copywrite/featureMadeCopywriting/FeatureMadeCopywriting";
import FeatureUsecase from "../../components/copywrite/featureUsecase/FeatureUsecase";
import WhyJasperforCopywriting from "../../components/copywrite/whyJasperCopywriting/WhyJasperforCopywriting";
import Faq from "../../components/pricing/faq/Faq";
import BreadCrumbe from "../../components/useCases/breadCrumbe/BreadCrumbe";

const Copywrite = () => {
  return (
    <>
    <BreadCrumbe title="Copywriting" subtitle="Supercharge Copywriting with the power of AI"/>
      <FeatureMadeCopywriting/>
      <WhyJasperforCopywriting/>
      <FeatureUsecase/>
      <CopywritingResources/>
      <Faq/>
      <Cta/>
    </>
  )
};

export default Copywrite
