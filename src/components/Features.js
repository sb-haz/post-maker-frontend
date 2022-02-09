import FeatureCard from "./FeatureCard";

const Features = () => {

    const info = [
        {
            title: 'Automatically Watermarked',
            icon: '/icons/signature-solid.svg',
            body: 'Your watermark will be automatically added to all images and videos you create.'
        },
        {
            title: 'Copy & Paste Captions',
            icon: '/icons/copy-solid.svg',
            body: `Caption crediting the Tweet or Tiktok author will be provided so you may credit them on your post.`
        },
        {
            title: 'Emailed Directly To You',
            icon: '/icons/paper-plane-solid.svg',
            body: 'Videos you create will be sent to your email address. Download and post at your own pace.'
        },
        {
            title: 'Regular Updates',
            icon: '/icons/wrench-solid.svg',
            body: `New features are added regularly. Look out for watermark & caption customisation.`
        }]

    return (
        <div className="features">
            <h1>Features</h1>
            <div className="features-cards">
                <FeatureCard title={info[0].title} icon={info[0].icon} body={info[0].body} />
                <FeatureCard title={info[1].title} icon={info[1].icon} body={info[1].body} />
                <FeatureCard title={info[2].title} icon={info[2].icon} body={info[2].body} />
                <FeatureCard title={info[3].title} icon={info[3].icon} body={info[3].body} />
            </div>
        </div>
    );
};

export default Features;
