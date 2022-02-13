import { useState } from "react";
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://127.0.0.1:5000/'
})

const FormCard = ({ useEmail, setCaption }) => {
    const [tweetUrl, setTweetUrl] = useState('');
    const [watermark, setWatermark] = useState('');
    const [email, setEmail] = useState('');
    const [isPending, setIsPending] = useState(false);

    const createQuote = async () => {
        let res = await api.post('/tool/quote', { tweet_url: tweetUrl, watermark: watermark })
        setCaption(res.data['caption'])
        setIsPending(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { tweetUrl, watermark, email }
        setIsPending(true)

        createQuote()

        // Using fetch
        // fetch('http://127.0.0.1:5000/tool/quote', {
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(data)
        // }).then((res) => {
        //     console.log(res.data);
        //     setIsPending(false)
        // })
    }

    return (
        <div className="form-card shadow">
            <p className="coloured-tag blue">Input</p>
            <form className="form" onSubmit={handleSubmit}>
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
                    value={watermark}
                    onChange={(e) => setWatermark(e.target.value)}
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

                {!isPending && <input type="submit" value="Create" />}
                {isPending && <input type="submit" disabled value="Creating..." />}
            </form>
        </div >
    );
};

export default FormCard;
