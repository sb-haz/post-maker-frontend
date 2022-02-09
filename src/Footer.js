const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-text">
                <h1 className="logo footer-logo unselectable">Post Maker</h1>
                <p>
                    <span className="unselectable">© 2022 Post Maker</span>
                    <span className="unselectable"> — </span>
                    <span>enquiries@post-maker.com</span>
                </p>
            </div>
            <a href="https://twitter.com/PostMakerApp" target="_blank" rel="noopener noreferrer">
                <img src="/icons/twitter-brands.svg" alt="" />
            </a>
        </div>
    );
};

export default Footer;