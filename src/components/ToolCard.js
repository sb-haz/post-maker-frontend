const ToolCard = ({ title, body }) => {
    return (
        <div className="tool-card">
            <img src="https://via.placeholder.com/200" alt="" />
            <h2>{title}</h2>
            <p>{body}</p>
            <button>Use</button>
        </div>
    );
};

export default ToolCard;
