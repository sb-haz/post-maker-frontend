import ToolCard from "./ToolCard";

const AvailableTools = () => {
    const info = {
        quote: {
            img: '/examples/quote_maker.png',
            availableNow: true,
            title: 'Quote Maker',
            body: 'Creates a watermarked image of a tweet, with a resolution of 1080 by 1080 pixels.',
            link: '/quote'
        },
        image: {
            img: '/examples/image_maker.png',
            availableNow: false,
            title: 'Image Maker',
            body: 'Creates a watermarked image of a tweet w/ an image, with a resolution of 1080 by 1080 pixels.',
            link: '/image'
        },
        video: {
            img: '/examples/video_maker.png',
            availableNow: true,
            title: 'Video Maker',
            body: 'Creates a watermarked video of a tweet containing a video, with a resolution of 1080 by 1080 pixels.',
            link: '/video'
        },
        reel: {
            img: '/examples/reel_maker.png',
            availableNow: true,
            title: 'Reel Maker',
            body: 'Creates a watermarked video of a tweet containing a video, with a resolution of 1920 by 1080 pixels.',
            link: '/reel'
        },
    }

    return (
        <div className="available-tools" id='link-available-tools'>
            <div className="content">
                <div className="available-tools-text">
                    <h1>Available <span>Tools</span></h1>
                    <p>Say bye to screenshotting, editing apps, downloading videos. Let us handle the hard work.</p>
                </div>
                <div className="tool-cards">
                    <ToolCard
                        src={info.quote.img}
                        availableNow={info.quote.availableNow}
                        title={info.quote.title}
                        body={info.quote.body}
                        link={info.quote.link} />
                    <ToolCard
                        src={info.image.img}
                        availableNow={info.image.availableNow}
                        title={info.image.title}
                        body={info.image.body}
                        link={info.image.link} />
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
