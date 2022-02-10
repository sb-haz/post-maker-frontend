import { useState } from "react";

const FormCard = ({ useEmail }) => {
    const [tweetUrl, setTweetUrl] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    return (
        <div className="form-card shadow">
            <p className="coloured-tag blue">Input</p>
            <form className="form">
                <label>Tweet URL</label>
                <input
                    id="tweet-icon"
                    type="text"
                    name="tweet_url"
                    value={tweetUrl}
                    onChange={(e) => setTweetUrl(e.target.value)}
                />
                <label>Watermark</label>
                <input
                    id="watermark-icon"
                    type="text"
                    name="watermark"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {useEmail ?
                    <>
                        <label>Email</label>
                        <input
                            id="email-icon"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </> : ''
                }

                <input type="submit" value="Create" />
            </form>
        </div >
    );
};

export default FormCard;
