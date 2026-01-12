import Hero from '../components/home/Hero';
import MarketWidget from '../components/home/MarketWidget';
import GlobalReach from '../components/home/GlobalReach';
import SteelJourney from '../components/home/SteelJourney';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
    return (
        <main>
            <Hero />
            <GlobalReach />
            <MarketWidget />
            <SteelJourney />
            <Testimonials />
        </main>
    );
};

export default Home;
