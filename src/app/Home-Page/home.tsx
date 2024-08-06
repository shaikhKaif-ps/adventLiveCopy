import SpotlightSection from '../Components/Home-page-section/HeroFold/SpotlightSection'
import YearSection from '../Components/Home-page-section/YearSection/YearSection';
import AccrodianSollution from '../Components/Home-page-section/AccordianSection/AccrodianSollution';
import PremiumCollSection from '../Components/Home-page-section/premium-collection/premiumCollSection';
import Strategies from '../Components/Home-page-section/ESC-Section/Strategies';
import NewsLetter from '../Components/Home-page-section/News-letter-section/NewsLetter';
import Footer from '../Components/Footer/Footer'

const HomePage = () => {
  return (
    <div>
 
      <SpotlightSection />
      <YearSection />
      <AccrodianSollution />
      <PremiumCollSection />
      <Strategies />
      <NewsLetter />
      <Footer /> 
    </div>
  );
};

export default HomePage;
