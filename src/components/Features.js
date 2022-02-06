import FeatureCard from "./FeatureCard";

const Features = () => {

    const info = [
        {
            title: 'Automatically Watermarked',
            icon: '/icons/signature-solid.svg',
            body: 'A watermark will be applied to all videos and images created. The watermark in videos will be animated, moving from right to left.'
        },
        {
            title: 'Copy & Paste Caption',
            icon: '/icons/copy-solid.svg',
            body: `A caption including the tweet author's username will be provided, so that you can credit them in your Instagram post.`
        },
        {
            title: 'Directly Emailed',
            icon: '/icons/paper-plane-solid.svg',
            body: 'Videos you create will be sent to the email address you provide. This gives you the freedom to post them at your own pace.'
        },
        {
            title: 'Regular Updates',
            icon: '/icons/wrench-solid.svg',
            body: `With user accounts you won't have to enter your email or username every time. Watermarks can also be fully customised.`
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
