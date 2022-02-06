import HeroSection from './components/HeroSection';
import AvailableTools from './components/AvailableTools';
import Features from './components/Features';

const Home = () => {
    return (
        <>
            <div className="content">
                <HeroSection />
            </div>
            <div className="spacer waves-top full-width"></div>

            <div className="post-spacer full-width"><AvailableTools /></div>

            <div className="spacer waves-bottom full-width"></div>

            <div className="content">
                <Features />
            </div>
        </>

    );
};

export default Home;
