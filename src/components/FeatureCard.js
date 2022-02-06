const FeatureCard = ({ title, icon, body }) => {
    return (
        <div className="feature-card">
            <div className="feature-card-title">
                <img src={icon} alt="" />
                <h2>{title}</h2>
            </div>
            <p>{body}</p>
        </div>
    );
};

export default FeatureCard;
