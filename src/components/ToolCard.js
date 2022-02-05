const ToolCard = ({ title, body }) => {
    return (
        <div className="tool-card">
            <h2>{title}</h2>
            <p>{body}</p>
            <button>Use</button>
        </div>
    );
};

export default ToolCard;
