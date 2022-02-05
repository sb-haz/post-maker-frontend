const FeatureCard = ({ title, body }) => {
    return (
        <div className="feature-card">
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default FeatureCard;
