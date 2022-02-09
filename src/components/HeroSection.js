import { Link } from "react-router-dom";
import DemoVideo from "./DemoVideo";

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-info">
                <h1 id="hero-title">Create <span id="hero-title" className="insta-colour-gradient">Instagram</span>-ready<br />videos from <span id="hero-title" className="twitter-colour-gradient">tweets</span>.</h1>
                <p>Say good-bye to screenshotting, editing apps & downloading videos.
                    <br />
                    <span id="hero-text-second-line">Let us handle the heavy work so you can focus on growing your page.</span>
                </p>
                <a href="#link-available-tools" className="gradient-btn">Start</a>
            </div>
            <DemoVideo />
        </div>
    );
};

export default HeroSection;
