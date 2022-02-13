import ToolCard from "./ToolCard";

const AvailableTools = () => {

    const availableToolsInfo = [
        {
            title: 'Quote Maker',
            body: 'Create a watermarked image of a tweet. Resolution of 1080 by 1080 pixels.',
            img: '/examples/quote_maker.png',
            link: '/tool/quote',
            availableNow: true,
        },
        {
            title: 'Video Maker',
            body: 'Create a watermarked video of a tweet or tiktok. Resolution of 1080 by 1080 pixels.',
            img: '/examples/video_maker.gif',
            link: '/tool/video',
            availableNow: true,
        },
        {
            title: 'Reel Maker',
            body: 'Create a watermarked reel of a tweet or tiktok. Resolution of 1920 by 1080 pixels.',
            img: '/examples/reel_maker.gif',
            link: '/tool/reel',
            availableNow: true,
        },
    ]

    return (
        <div className="available-tools-wrapper" id='link-available-tools'>
            <div className="content">
                <div className="available-tools-text">
                    <h1>Available <span>Tools</span></h1>
                    <p>Make quotes & videos that are ready to upload to Instagram.<br />Just paste the tweet or tiktok link, and we'll create the content.</p>
                </div>
                <div className="tool-cards">

                    {availableToolsInfo.map(
                        ({ title, body, img, link, availableNow }) =>
                            <ToolCard
                                title={title}
                                body={body}
                                img={img}
                                link={link}
                                availableNow={availableNow} />)}
                </div>
            </div>
        </div>
    );
};

export default AvailableTools;
