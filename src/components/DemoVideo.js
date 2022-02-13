const DemoVideo = () => {
    return (
        <div className="hero-video">
            <video width="350" height="350" playsinline webkit-playsinline autoPlay muted loop >
                <source src="/examples/video_maker.mp4"
                    type="video/mp4" />
            </video>
        </div>

    );
};

export default DemoVideo;
