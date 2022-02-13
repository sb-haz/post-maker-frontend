import { useState } from "react";
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://127.0.0.1:5000/'
})

const FormCard = ({ type, useEmail, setCaption }) => {
    const [tweetUrl, setTweetUrl] = useState('');
    const [watermark, setWatermark] = useState('');
    const [email, setEmail] = useState('');
    const [quoteSource, setQuoteSource] = useState('twitter');
    const [videoSource, setVideoSource] = useState('twitter');
    const [isPending, setIsPending] = useState(false);

    const toggleQuoteSource = (e) => {
        e.preventDefault();
        if (quoteSource === 'twitter') setQuoteSource('text')
        if (quoteSource === 'text') setQuoteSource('twitter')
    }

    const toggleVideoSource = (e) => {
        e.preventDefault();
        if (videoSource === 'twitter') setVideoSource('tiktok')
        if (videoSource === 'tiktok') setVideoSource('twitter')
    }

    const createQuote = async () => {
        try {
            let res = await api.post('/tool/quote', { tweet_url: tweetUrl, watermark: watermark })
            // Update caption on render card
            setCaption(res.data['caption'])
            // Toggle pending btn text
            setIsPending(false)
            // Reset watermark field
            setTweetUrl('')
        } catch (err) {
            console.log(err);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // If input is provided
        if (tweetUrl | watermark !== '') {
            // Show 'creating' text
            setIsPending(true)
            // Make POST request
            createQuote()
        }

        // Using fetch instead of axios
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
            <div className="form-card-title">
                <p className="coloured-tag blue">Input</p>

                {type === 'quote' ?
                    (<div className="form-card-accordian">
                        <a href=""
                            className={quoteSource === 'twitter' ? 'accordian-active' : ''}
                            onClick={(e) => {
                                toggleQuoteSource(e)
                            }}
                        >Twitter</a>
                        <a href=""
                            className={quoteSource === 'text' ? 'accordian-active' : ''}
                            onClick={(e) => {
                                toggleQuoteSource(e)
                            }}
                        >Text</a>
                    </div>) : ''}

                {type !== 'quote' ?
                    (<div className="form-card-accordian">
                        <a href=""
                            className={videoSource === 'twitter' ? 'accordian-active' : ''}
                            onClick={(e) => {
                                toggleVideoSource(e)
                            }}
                        >Twitter</a>
                        <a href=""
                            className={videoSource === 'tiktok' ? 'accordian-active' : ''}
                            onClick={(e) => {
                                toggleVideoSource(e)
                            }}
                        >Tiktok</a>
                    </div>) : ''}

            </div>



            <form className="form" onSubmit={handleSubmit}>



                {type === 'quote' ?
                    <>
                        <label>{quoteSource === 'twitter' ? 'Twitter URL' : 'Text'}</label>
                        <input type="text"
                            id={`${quoteSource}-icon`}
                            name="tweet_url"
                            value={tweetUrl}
                            onChange={(e) => setTweetUrl(e.target.value)} />
                    </>
                    : ''}


                {type !== 'quote' ?
                    <>
                        <label>{videoSource === 'twitter' ? 'Twitter' : 'TikTok'}</label>
                        <input type="text"
                            id={`${videoSource}-icon`}
                            name="tweet_url"
                            value={tweetUrl}
                            onChange={(e) => setTweetUrl(e.target.value)} />
                    </>
                    : ''}


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
