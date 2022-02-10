const FeatureCard = ({ title, icon, body, example }) => {
    return (
        <div className="feature-card shadow-light">
            <div className="feature-card-title">
                <img className="unselectable" src={icon} alt="" />
                <h2>{title}</h2>
            </div>
            <p>{body}</p>
            <img src={example} alt="" />
        </div>
    );
};

export default FeatureCard;
