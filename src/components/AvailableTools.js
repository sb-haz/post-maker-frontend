import ToolCard from "./ToolCard";

const AvailableTools = () => {
    const toolCardInfo = {
        quote: {
            title: 'Quote Maker',
            body: 'Creates a watermarked image of a tweet, with a resolution of 1080 by 1080 pixels.'
        },
        image: {
            title: 'Image Maker',
            body: 'Creates a watermarked image of a tweet w/ an image, with a resolution of 1080 by 1080 pixels.'
        },
        video: {
            title: 'Video Maker',
            body: 'Creates a watermarked video of a tweet containing a video, with a resolution of 1080 by 1080 pixels.'
        },
        reel: {
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
                <ToolCard title={toolCardInfo.quote.title} body={toolCardInfo.quote.body} />
                <ToolCard title={toolCardInfo.image.title} body={toolCardInfo.image.body} />
                <ToolCard title={toolCardInfo.video.title} body={toolCardInfo.video.body} />
                <ToolCard title={toolCardInfo.reel.title} body={toolCardInfo.reel.body} />
            </div>
        </div>
    );
};

export default AvailableTools;
