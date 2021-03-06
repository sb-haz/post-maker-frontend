import { useState, Fragment } from "react";
import axios from 'axios'

const apiURL = 'https://www.post-maker.xyz/'
// const apiURL = 'http://localhost:5000/'

const api = axios.create({
    baseURL: apiURL
})

const FormCard = ({ type, setCaption, setQuoteImageSrc }) => {
    const baseURL = apiURL;

    const [tweetUrl, setTweetUrl] = useState('');
    const [watermark, setWatermark] = useState('');
    const [email, setEmail] = useState('');
    const [quoteSource, setQuoteSource] = useState('text');
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

    // Create quote POST request
    const createQuote = async () => {
        try {
            let res = await api.post('/tool/quote', {
                tweet_url: tweetUrl,
                watermark: watermark,
                source: quoteSource
            })

            // Toggle pending btn text
            setIsPending(false)

            // Update caption on render card
            // setCaption(res.data['caption_text'])
            setCaption(`😂😂😂 (Credit @hasan)`)

            // Update render img src
            setQuoteImageSrc(baseURL + res.data['quote_filepath'])

            // Reset watermark field
            setTweetUrl('')

        } catch (err) {
            console.log(err);
        }
    }

    // Create video POST request
    const createVideo = async () => {
        try {
            let res = await api.post('/tool/video', { tweet_url: tweetUrl, watermark: watermark, email: email })
            setIsPending(false)
            setTweetUrl('')
        } catch (err) {
            console.log(err);
        }
    }

    // Create reel POST request
    const createReel = async () => {
        try {
            let res = await api.post('/tool/reel', { tweet_url: tweetUrl, watermark: watermark, email: email })
            setIsPending(false)
            setTweetUrl('')
        } catch (err) {
            console.log(err);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (type === 'quote') {
            if (watermark !== '') {
                if (tweetUrl !== '') {
                    setIsPending(true)
                    createQuote()
                }
            }
        } else if (type === 'video') {
            if (tweetUrl | watermark | email !== '') {
                setIsPending(true)
                createVideo()
            }
        } else if (type === 'reel') {
            if (tweetUrl | watermark | email !== '') {
                setIsPending(true)
                createReel()
            }
        }
    }

    return (
        <div className="form-card shadow">
            <div className="form-card-title">
                <p className="coloured-tag blue">Input</p>

                {/* Toggle button */}
                <div className="form-card-toggle">
                    {type === 'quote' ?
                        <Fragment>
                            <a href=""
                                className={quoteSource === 'twitter' ? 'toggle-active' : ''}
                                onClick={(e) => {
                                    toggleQuoteSource(e)
                                }}
                            ><span style={{ color: "#32CD32" }}>•</span> Twitter URL </a>
                            <a href=""
                                className={quoteSource === 'text' ? 'toggle-active' : ''}
                                onClick={(e) => {
                                    toggleQuoteSource(e)
                                }}
                            ><span style={{ color: "#32CD32" }}>•</span> Text</a>
                        </Fragment> :
                        <Fragment>
                            <a href=""
                                className={videoSource === 'twitter' ? 'toggle-active' : ''}
                                onClick={(e) => {
                                    toggleVideoSource(e)
                                }}
                            ><span style={{ color: "#32CD32" }}>•</span> Twitter URL </a>
                            <a href=""
                                className={videoSource === 'tiktok' ? 'toggle-active' : ''}
                                onClick={(e) => {
                                    toggleVideoSource(e)
                                }}
                            ><span style={{ color: "#FF8C00" }}>•</span> Tiktok URL</a>
                        </Fragment>
                    }
                </div>
            </div>

            <form className="form" onSubmit={handleSubmit}>

                {/* Twitter/text/tiktok input */}
                {type === 'quote' ?
                    <Fragment>
                        <label>{quoteSource === 'twitter' ? 'Twitter URL' : 'Type Text'}</label>
                        <input type="text"
                            id={`${quoteSource}-icon`}
                            name="tweet_url"
                            value={tweetUrl}
                            onChange={(e) => setTweetUrl(e.target.value)} />
                    </Fragment> :
                    <Fragment>
                        <label>{videoSource === 'twitter' ? 'Twitter URL' : 'TikTok URL'}</label>
                        <input type="text"
                            id={`${videoSource}-icon`}
                            name="tweet_url"
                            value={tweetUrl}
                            onChange={(e) => setTweetUrl(e.target.value)} />
                    </Fragment>
                }

                {/* Watermark input */}
                <label>Watermark</label>
                <input
                    id="watermark-icon"
                    type="text"
                    name="watermark"
                    value={watermark}
                    onChange={(e) => setWatermark(e.target.value)}
                />

                {/* Email input */}
                {type !== 'quote' ?
                    <Fragment>
                        <label>Email</label>
                        <input
                            id="email-icon"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Fragment> : ''}

                {/* Submit button */}
                {!isPending && <input type="submit" value="Create" />}
                {isPending && <input type="submit" disabled value="Creating..." />}
            </form>
        </div >
    );
};

export default FormCard;
