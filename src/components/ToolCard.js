const ToolCard = ({ title, body }) => {
    return (
        <div className="tool-card">
            <img src="https://via.placeholder.com/200" alt="" />
            <p>NEW</p>
            <h2>{title}</h2>
            <p>{body}</p>
            <a href="#" className="gradient-btn">Use</a>
        </div>
    );
};

export default ToolCard;
