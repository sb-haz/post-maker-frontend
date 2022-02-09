const ExampleCard = ({ media_src }) => {
    return (
        <div className="example-card shadow">
            <h1 className="coloured-tag blue">Example</h1>
            <video src={media_src} controls playsinline loop >
                <source src={media_src}
                    type="video/mp4" />
            </video>
        </div>
    );
};

export default ExampleCard;
