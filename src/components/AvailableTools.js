import ToolCard from "./ToolCard";

const AvailableTools = () => {
    const info = {
        quote: {
            img: '/examples/quote_maker.png',
            availableNow: true,
            title: 'Quote Maker',
            body: 'Create a watermarked image of a tweet. Resolution of 1080 by 1080 pixels.',
            link: '/tool/quote'
        },
        video: {
            img: '/examples/video_maker.gif',
            availableNow: true,
            title: 'Video Maker',
            body: 'Create a watermarked video of a tweet or tiktok. Resolution of 1080 by 1080 pixels.',
            link: '/tool/video'
        },
        reel: {
            img: '/examples/reel_maker.gif',
            availableNow: true,
            title: 'Reel Maker',
            body: 'Create a watermarked reel of a tweet or tiktok. Resolution of 1920 by 1080 pixels.',
            link: '/tool/reel'
        },
    }

    return (
        <div className="available-tools-wrapper" id='link-available-tools'>
            <div className="content">
                <div className="available-tools-text">
                    <h1>Available <span>Tools</span></h1>
                    <p>Make quotes & videos that are ready to upload to Instagram.<br />Just paste the tweet or tiktok link, and we'll create the content.</p>
                </div>
                <div className="tool-cards">
                    <ToolCard
                        src={info.quote.img}
                        availableNow={info.quote.availableNow}
                        title={info.quote.title}
                        body={info.quote.body}
                        link={info.quote.link} />

                    <ToolCard
                        src={info.video.img}
                        availableNow={info.video.availableNow}
                        title={info.video.title}
                        body={info.video.body}
                        link={info.video.link} />
                    <ToolCard
                        src={info.reel.img}
                        availableNow={info.reel.availableNow}
                        title={info.reel.title}
                        body={info.reel.body}
                        link={info.reel.link} />
                </div>
            </div>
        </div>
    );
};

export default AvailableTools;
