import { useState } from "react";

const RenderCard = ({ media_src, caption }) => {
    /* temp caption */
    caption = "😂😂😂 (Twitter @ username)"
    return (
        <div className="example-card shadow">
            <h1 className="coloured-tag blue">Render</h1>

            {caption !== '' ?
                (<div className="render-card-text">
                    <p id="render-card-caption">{caption}</p>
                    <a onClick={() => { navigator.clipboard.writeText(caption) }}
                        href="#" className="copy-text">Copy</a>
                </div>) : ''}

            <img src={media_src} alt="" />
        </div>
    );
};

export default RenderCard;
