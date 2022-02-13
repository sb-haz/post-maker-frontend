const ExampleCard = ({ media_src }) => {
    return (
        <div className="example-card shadow">
            <h1 className="coloured-tag blue">Example</h1>
            <img src={media_src} alt="" />
        </div>
    );
};

export default ExampleCard;
