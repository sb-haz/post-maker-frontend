const RenderCard = ({ media_src }) => {
    return (
        <div className="example-card shadow">
            <h1 className="coloured-tag blue">Render</h1>
            <img src={media_src} alt="" />
        </div>
    );
};

export default RenderCard;
