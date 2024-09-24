import { useEffect } from "react";
import AboutTop from "../../components/about/aboutTop/AboutTop";
import Benefit from "../../components/about/benefit/Benefit";
import HowWork from "../../components/about/howWork/HowWork";
import KeyFeature from "../../components/about/keyFeature/KeyFeature";
import Mission from "../../components/about/mission/Mission";
import TeamMembers from "../../components/about/teamMembers/TeamMembers";
import Ticker from "../../components/about/ticker/Ticker";
import Cta from "../../components/common/cta/Cta";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <AboutTop/>
    </>
  )
};

export default About
