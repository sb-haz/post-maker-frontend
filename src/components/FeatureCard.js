const FeatureCard = ({ title, icon, body }) => {
    return (
        <div className="feature-card shadow-light">
            <div className="feature-card-title">
                <img className="unselectable" src={icon} alt="" />
                <h2>{title}</h2>
            </div>
            <p>{body}</p>
        </div>
    );
};

export default FeatureCard;
