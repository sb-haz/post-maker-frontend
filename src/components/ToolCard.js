import { Link } from "react-router-dom";

const ToolCard = ({ src, availableNow, title, body, link }) => {
    return (
        <div className="tool-card">
            <img src={src} />
            {availableNow
                ? <p className="coloured-tag green">NEW</p>
                : <p className="coloured-tag red">COMING SOON</p>}
            <h2>{title}</h2>
            <p>{body}</p>
            <Link to={link} className="gradient-btn">Use</Link>
        </div>
    );
};
//<p className="tool-coming-soon">COMING SOON</p>
export default ToolCard;
