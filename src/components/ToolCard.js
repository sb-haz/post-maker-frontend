import { Link } from "react-router-dom";

const ToolCard = ({ src, availableNow, title, body, link }) => {
    return (
        <div className="tool-card shadow">
            <div>
                <img src={src} className="unselectable" />
            </div>
            {availableNow
                ? <p className="coloured-tag green">NEW</p>
                : <p className="coloured-tag red">COMING SOON</p>}
            <h2>{title}</h2>
            <p>{body}</p>
            <Link to={link} className="gradient-btn">Use</Link>
        </div>
    );
};

export default ToolCard;
