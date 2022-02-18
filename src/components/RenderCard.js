import { useState } from "react";
import { Link } from "react-router-dom";

const RenderCard = ({ media_src, caption }) => {
    const [showClipboard, setShowClipboard] = useState(true)

    const copyToClipboard = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(caption)
        setShowClipboard(false)
    }
    /* temp caption */
    // caption = "😂😂😂 (Twitter @ username)"

    return (
        <div className="example-card shadow">
            <h1 className="coloured-tag blue">Render</h1>

            {caption !== '' ?
                (<div className="render-card-text">
                    <p id="render-card-caption">{caption}</p>

                    {showClipboard === true ?
                        (<Link to="#" onClick={(e) => {
                            copyToClipboard(e)
                        }}
                            href="" className="copy-text">Copy</Link>) : ''}

                </div>) : ''}
            <div>
                <img src={media_src} alt="" />
            </div>
        </div>
    );
};

export default RenderCard;
