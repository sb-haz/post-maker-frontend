import { useState } from "react";
import { Link } from "react-router-dom";

const RenderCard = ({ media_src, caption }) => {
    const [showClipboard, setShowClipboard] = useState(true)

    /* temp caption */
    caption = "😂😂😂 (Twitter @ username)"

    return (
        <div className="example-card shadow">
            <h1 className="coloured-tag blue">Render</h1>

            {caption !== '' ?
                (<div className="render-card-text">
                    <p id="render-card-caption">{caption}</p>

                    {showClipboard === true ?
                        (<Link to={{}} onClick={() => {
                            navigator.clipboard.writeText(caption)
                            setShowClipboard(false)
                        }}
                            href="#" className="copy-text">Copy</Link>) : ''}

                </div>) : ''}
            <img src={media_src} alt="" />
        </div>
    );
};

export default RenderCard;
