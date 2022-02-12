import { Link, useNavigate } from "react-router-dom";

const Guide = () => {
    const navigate = useNavigate();
    return (
        <div className="content guide">
            <h1>So, how do I use this?</h1>
            <div className="steps">
                <div className="step shadow-light">
                    <img src="https://via.placeholder.com/200" alt="" className="unselectable" />
                    <div className="step-text">
                        <h4>Step 1</h4>
                        <p>Find a tweet you'd like to convert to an Instagram post.</p>
                    </div>
                </div>
                <div className="step shadow-light">
                    <img src="https://via.placeholder.com/200" alt="" className="unselectable" />
                    <div className="step-text">
                        <h4>Step 2</h4>
                        <p>Click the Share button which is located near the bottom, then 'Copy Link'. </p>
                    </div>
                </div>
                <div className="step shadow-light">
                    <img src="https://via.placeholder.com/200" alt="" className="unselectable" />
                    <div className="step-text">
                        <h4>Step 3</h4>
                        <p>Go on the Video Creator and paste the copied link and click Create</p>
                    </div>
                </div>
                <div className="step shadow-light">
                    <img src="https://via.placeholder.com/200" alt="" className="unselectable" />
                    <div className="step-text">
                        <h4>Step 4</h4>
                        <p>Receive your generated video by email, along with a pre-made caption.</p>
                    </div>
                </div>
            </div>
            <Link to="/" onClick={() => navigate(-1)} className="simple-btn">Back to Home</Link>
        </div>
    )
}

export default Guide