const ToolCard = ({ title, body }) => {
    return (
        <div className="tool-card">
            <img src="https://via.placeholder.com/200" alt="" />
            <p className="tool-new">NEW</p>
            <p className="tool-coming-soon">COMING SOON</p>
            <h2><span className="tool-card-title">{title}</span> Maker</h2>
            <p>{body}</p>
            <a href="#" className="gradient-btn">Use</a>
        </div>
    );
};

export default ToolCard;
