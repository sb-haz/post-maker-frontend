import ToolCard from "./ToolCard";

const AvailableTools = () => {
    const info = {
        quote: {
            img: '/examples/quote_maker.png',
            title: 'Quote Maker',
            body: 'Creates a watermarked image of a tweet, with a resolution of 1080 by 1080 pixels.'
        },
        image: {
            img: '/examples/image_maker.png',
            title: 'Image Maker',
            body: 'Creates a watermarked image of a tweet w/ an image, with a resolution of 1080 by 1080 pixels.'
        },
        video: {
            img: '/examples/video_maker.png',
            title: 'Video Maker',
            body: 'Creates a watermarked video of a tweet containing a video, with a resolution of 1080 by 1080 pixels.'
        },
        reel: {
            img: '/examples/reel_maker.png',
            title: 'Reel Maker',
            body: 'Creates a watermarked video of a tweet containing a video, with a resolution of 1920 by 1080 pixels.'
        },
    }

    return (
        <div className="available-tools">
            <div className="available-tools-text">
                <h1>Available Tools</h1>
                <p>These tools are free to use as long as you do not abuse them. Make sure you're tweeting with the correct tool. If a tweet does not contain a video, for example, do not use the video creator.</p>
            </div>
            <div className="tool-cards">
                <ToolCard src={info.quote.img} title={info.quote.title} body={info.quote.body} />
                <ToolCard src={info.image.img} title={info.image.title} body={info.image.body} />
                <ToolCard src={info.video.img} title={info.video.title} body={info.video.body} />
                <ToolCard src={info.reel.img} title={info.reel.title} body={info.reel.body} />
            </div>
        </div>
    );
};

export default AvailableTools;
