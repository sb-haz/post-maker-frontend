import FeatureCard from "./FeatureCard";

const Features = () => {

    const info = [
        {
            title: 'Automatically Watermarked',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula eros at ante scelerisque, et rutrum augue tempor.'
        },
        {
            title: 'Emailed Directly',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula eros at ante scelerisque, et rutrum augue tempor.'
        },
        {
            title: 'Quick and Easy',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula eros at ante scelerisque, et rutrum augue tempor.'
        },
        {
            title: 'Copy Paste Caption',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula eros at ante scelerisque, et rutrum augue tempor.'
        }]

    return (
        <div className="features">
            <h1>Features</h1>
            <div className="features-cards">
                <FeatureCard title={info[0].title} body={info[0].body} />
                <FeatureCard title={info[1].title} body={info[1].body} />
                <FeatureCard title={info[2].title} body={info[2].body} />
                <FeatureCard title={info[3].title} body={info[3].body} />
            </div>
        </div>
    );
};

export default Features;
