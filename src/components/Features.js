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
            title: 'Free Updates Forever',
            icon: '/icons/wrench-solid.svg',
            body: `New features are added regularly. Look out for watermark & caption customisation.`
        },
        {
            title: 'Hassle-free Billing',
            icon: '/icons/wrench-solid.svg',
            body: `We utilise PayPal and Stripe payments which gives you the flexibility of paying how you want.`
        },
        {
            title: '24/7 Support',
            icon: '/icons/wrench-solid.svg',
            body: `Got questions, concerns or suggestions? Contact us and we'll get back to you within 24 hours.`
        }]

    return (
        <div className="features">
            <h1>Feature Packed</h1>
            <div className="features-cards">
                <FeatureCard title={info[0].title} icon={info[0].icon} body={info[0].body} />
                <FeatureCard title={info[1].title} icon={info[1].icon} body={info[1].body} />
                <FeatureCard title={info[2].title} icon={info[2].icon} body={info[2].body} />
                <FeatureCard title={info[3].title} icon={info[3].icon} body={info[3].body} />
                <FeatureCard title={info[4].title} icon={info[4].icon} body={info[4].body} />
                <FeatureCard title={info[5].title} icon={info[5].icon} body={info[5].body} />
            </div>
        </div>
    );
};

export default Features;
