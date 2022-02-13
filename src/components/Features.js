import { Link } from "react-router-dom";
import FeatureCard from "./FeatureCard";

const Features = () => {

    const featuresInfo = [
        {
            title: 'Custom Watermarks',
            icon: '/icons/signature-solid.svg',
            body: 'Your watermark will be automatically added to all images and videos you create.',
            example: '/examples/feature-email.png'
        },
        {
            title: 'Copy & Paste Captions',
            icon: '/icons/twitter-brands.svg',
            body: `Caption crediting the Tweet or Tiktok author will be provided so you may credit them on your post.`,
            example: '/examples/feature-email.png'
        },
        {
            title: 'Emailed Directly To You',
            icon: '/icons/paper-plane-solid.svg',
            body: 'Videos you create will be sent to your email address. Download and post at your own pace.',
            example: '/examples/feature-email.png'
        },
        {
            title: 'Free Updates Forever',
            icon: '/icons/wrench-solid.svg',
            body: `New features are added regularly. Look out for watermark & caption customisation.`,
            example: '/examples/feature-email.png'
        }]

    return (
        <div className="features">
            <h1>Feature Packed</h1>
            <p>How does it work? <Link to="/guide" className="simple-btn">Learn more</Link></p>

            <div className="features-cards">
                {featuresInfo.map(
                    ({ title, icon, body, exmaple }) =>
                        <FeatureCard title={title} icon={icon} body={body} />)}
            </div>
        </div>
    );
};

export default Features;
