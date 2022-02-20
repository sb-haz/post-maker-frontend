import { useState, Fragment } from "react";
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://144.202.10.59:5000/'
})

const FormCard = ({ type, setCaption, setQuoteImageSrc }) => {
    const baseURL = 'http://144.202.10.59:5000/'

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

    // Create quote POST request
    const createQuote = async () => {
        try {
            let res = await api.post('/tool/quote', { tweet_url: tweetUrl, watermark: watermark })

            // Toggle pending btn text
            setIsPending(false)

            // Update caption on render card
            setCaption(res.data['caption'])

            // Update render img src
            setQuoteImageSrc(baseURL + 'static/quote_render.png')

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
            if (tweetUrl | watermark !== '') {
                setIsPending(true)
                createQuote()
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
                            >Twitter</a>
                            <a href=""
                                className={quoteSource === 'text' ? 'toggle-active' : ''}
                                onClick={(e) => {
                                    toggleQuoteSource(e)
                                }}
                            >Text</a>
                        </Fragment> :
                        <Fragment>
                            <a href=""
                                className={videoSource === 'twitter' ? 'toggle-active' : ''}
                                onClick={(e) => {
                                    toggleVideoSource(e)
                                }}
                            >Twitter</a>
                            <a href=""
                                className={videoSource === 'tiktok' ? 'toggle-active' : ''}
                                onClick={(e) => {
                                    toggleVideoSource(e)
                                }}
                            >Tiktok</a>
                        </Fragment>
                    }
                </div>
            </div>

            <form className="form" onSubmit={handleSubmit}>

                {/* Twitter/text/tiktok input */}
                {type === 'quote' ?
                    <Fragment>
                        <label>{quoteSource === 'twitter' ? 'Twitter URL' : 'Text'}</label>
                        <input type="text"
                            id={`${quoteSource}-icon`}
                            name="tweet_url"
                            value={tweetUrl}
                            onChange={(e) => setTweetUrl(e.target.value)} />
                    </Fragment> :
                    <Fragment>
                        <label>{videoSource === 'twitter' ? 'Twitter' : 'TikTok'}</label>
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
