import HeroSection from './components/HeroSection';
import AvailableTools from './components/AvailableTools';
import Features from './components/Features';
import Pricing from './components/Pricing';

const Home = () => {
    return (
        <>
            <div className="content">
                <HeroSection />
            </div>

            <div className="spacer divider-animated-waves-pink"></div>

            <AvailableTools />

            <div className="spacer divider-tilted-triange"></div>

            <div className="content">
                <Features />
            </div>

            <div className="spacer divider-animated-waves-light-pink"></div>

            <Pricing />
        </>

    );
};

export default Home;
