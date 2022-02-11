import { Link } from "react-router-dom";
import DemoVideo from "./DemoVideo";

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-info">
                <h1 className="hero-title">
                    <span>Create </span>
                    <span className="insta-colour-gradient">
                        Instagram
                    </span>
                    <span>-ready</span>
                    <br />
                    <span>content from </span>
                    <span className="twitter-colour-gradient">Tweets</span>
                    <span>Tweets</span>
                    <span> & </span>
                    <span className="tiktok-colour-gradient" >Tiktoks</span>
                    <span>Tiktoks</span>
                    <span>.</span>
                </h1>
                <p>Say good-bye to screenshotting, editing apps & downloading videos.
                    <br />
                    <span>Let us handle the heavy work so you can focus on growing your page.</span>
                </p>
                <div>
                    <a href="#link-available-tools" className="gradient-btn">Start</a>
                    <Link to="/guide" className="simple-btn">Guide</Link>
                </div>
            </div>
            <DemoVideo />
        </div>
    );
};

export default HeroSection;
