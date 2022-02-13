const DemoVideo = () => {
    return (
        <div className="hero-video">
            <video src="/examples/tool_video_maker.mp4" width="350" height="350"
            playsinline loop muted autoPlay></video>

            {/* <video width="350" height="350" autoPlay loop muted playsinline>
                <source src="/examples/video_maker.mp4"
                    type="video/mp4" />
            </video> */}
        </div>

    );
};

export default DemoVideo;
