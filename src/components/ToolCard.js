const ToolCard = ({ src, availableNow, title, body }) => {
    return (
        <div className="tool-card">
            <img src={src} alt="image" />
            {availableNow
                ? <p className="tool-status">NEW</p>
                : <p className="tool-status tool-coming-soon">COMING SOON</p>}
            <h2>{title}</h2>
            <p>{body}</p>
            <a href="#" className="gradient-btn">Use</a>
        </div>
    );
};
//<p className="tool-coming-soon">COMING SOON</p>
export default ToolCard;
