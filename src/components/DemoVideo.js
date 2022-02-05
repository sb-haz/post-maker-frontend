const DemoVideo = () => {
    return (
        <div className="hero-video">
            <video class="shadow-xl" width="350" height="350" playsinline controls autoplay muted loop>
                <source src="/examples/video_maker.mp4"
                    type="video/mp4"/>
            </video>
        </div>
        
    );
};

export default DemoVideo;
