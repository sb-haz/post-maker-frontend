const DemoVideo = () => {
    return (
        <div className="hero-video">
            <video width="350" height="350" autoPlay muted playsinline loop >
                <source src="/examples/video_maker.mp4"
                    type="video/mp4" />
            </video>
        </div>

    );
};

export default DemoVideo;
