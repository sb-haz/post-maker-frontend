import DemoVideo from "./DemoVideo";

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-info">
                <h1>Create <span className="insta-colour-gradient">Instagram</span>-ready<br />videos from <span className="twitter-colour-gradient">tweets</span>.</h1>
                <p>Make watermarked quotes & videos that are ready to upload to Instagram.
                    Just copy & paste the tweet share link, and we'll email you the video.</p>
                <a href="#">Start</a>
            </div>
            <div className="hero-video">
                <DemoVideo />
            </div>
        </div>
    );
};

export default HeroSection;
