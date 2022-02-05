import ToolCard from "./ToolCard";

const AvailableTools = () => {
    const toolcardinfo = {
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
            <h1>Available Tools</h1>
            <div className="tool-cards">
                <ToolCard title={toolcardinfo.quote.title} body={toolcardinfo.quote.body} />
                <ToolCard title={toolcardinfo.image.title} body={toolcardinfo.image.body} />
                <ToolCard title={toolcardinfo.video.title} body={toolcardinfo.video.body} />
                <ToolCard title={toolcardinfo.reel.title} body={toolcardinfo.reel.body} />
            </div>
        </div>
    );
};

export default AvailableTools;
