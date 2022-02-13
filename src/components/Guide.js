import { Link, useNavigate } from "react-router-dom";

const Guide = () => {
    const navigate = useNavigate();

    const steps = [
        {
            title: 'Step 1',
            desc: `Find a tweet you'd like to convert to an Instagram post.`
        },
        {
            title: 'Step 2',
            desc: `Click the Share button which is located near the bottom, then 'Copy Link'.`
        },
        {
            title: 'Step 3',
            desc: `Go on the Video Creator and paste the copied link and click Create`
        },
        {
            title: 'Step 4',
            desc: `Receive your generated video by email, along with a pre-made caption.`
        }]

    return (
        <div className="content guide">
            <h1>So, how do I use this?</h1>

            <div className="steps">
                {steps.map(({ title, desc }) =>
                    <div className="step shadow-light">
                        <img src="https://via.placeholder.com/200" alt="" className="unselectable" />
                        <div className="step-text">
                            <h4>{title}</h4>
                            <p>{desc}</p>
                        </div>
                    </div>)}
            </div>
            <Link to="/" onClick={() => navigate(-1)} className="simple-btn">Back to Home</Link>
        </div>
    )
}

export default Guide