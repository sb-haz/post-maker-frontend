const ToolCard = ({ title, body }) => {
    return (
        <div className="tool-card">
            <img src="/examples/quote_maker.png" alt="image" />
            <p className="tool-new">NEW</p>
            <h2>{title}</h2>
            <p>{body}</p>
            <a href="#" className="gradient-btn">Use</a>
        </div>
    );
};
//<p className="tool-coming-soon">COMING SOON</p>
export default ToolCard;
