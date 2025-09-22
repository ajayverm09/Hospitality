import HealthcareSection from "../Components/HomeAbout";
import AdvantagesSection from "../Components/HomeAdvantages";
import ExpertDoctorsSection from "../Components/HomeDoctor";
import CentersOfExcellence from "../Components/HomeExcellence";
import HealthExcellence from "../Components/HomeHealth";
import HeroSection from "../Components/HomeHero";
import InfoCards from "../Components/HomeInfo";
import TestimonialSection from "../Components/HomeTestimonial";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />

      <InfoCards />

      <HealthcareSection />

      <CentersOfExcellence />

      <HealthExcellence />

      <AdvantagesSection />

      <ExpertDoctorsSection/>

      <TestimonialSection/>
    </div>
  );
};

export default Home;
