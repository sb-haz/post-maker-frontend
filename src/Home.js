import HeroSection from './components/HeroSection';
import AvailableTools from './components/AvailableTools';
import Features from './components/Features';

const Home = () => {
    return (
        <>
            <div className="content">
                <HeroSection />
            </div>

            <div className="spacer divider-animated-waves"></div>

            <AvailableTools />

            <div className="spacer divider-tilted-triange  "></div>

            <div className="content">
                <Features />
            </div>
        </>

    );
};

export default Home;
