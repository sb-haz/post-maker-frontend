import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="spacer divider-animated-waves-footer"></div>
            <div className="footer-wrapper">
                <div className="content">
                    <div className="footer">
                        <div className="footer-text">
                            <h1 className="logo footer-logo unselectable">Post Maker</h1>
                            <p>
                                <span className="unselectable">© 2022 Post Maker</span>
                                <span className="unselectable"> — </span>
                                {/* <span>enquiries@post-maker.io</span> */}
                                <span><a target="_blank" href="https://www.instagram.com/finesstv/">Instagram @FinessTV</a></span>
                            </p>
                        </div>
                        <a href="https://twitter.com/PostMakerApp" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/twitter-brands.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;