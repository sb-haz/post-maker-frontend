const Navbar = () => {
    return (
        <navbar className="navbar">
            <a href="/"><h1 className="logo insta-colour-gradient">Post Maker</h1></a>
            <div className="links">
                <a href="/quote">Quotes</a>
                <a href="/image">Images</a>
                <a href="/video">Videos</a>
                <a href="/reel">Reels</a>
            </div>
        </navbar>
    );
};

export default Navbar;
