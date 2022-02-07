import { Link } from "react-router-dom";
import DemoVideo from "./DemoVideo";

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-info">
                <h1 id="hero-title">Create <span id="hero-title" className="insta-colour-gradient">Instagram</span>-ready<br />videos from <span id="hero-title" className="twitter-colour-gradient">tweets</span>.</h1>
                <p>Make watermarked quotes & videos that are ready to upload to Instagram.
                    <br />
                    <span id="hero-text-second-line">Just copy & paste the tweet share link, and we'll email you the video.</span>
                </p>
                <a href="#link-available-tools" className="gradient-btn">Start</a>
            </div>
            <DemoVideo />
        </div>
    );
};

export default HeroSection;
