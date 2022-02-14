const ExampleCard = ({ media_src }) => {
    return (
        <div className="example-card shadow">
            <h1 className="coloured-tag blue">Example</h1>
            <div>
                <img src={media_src} key={media_src} alt="" />
            </div>
        </div>
    );
};

export default ExampleCard;
