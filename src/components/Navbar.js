const Navbar = () => {
    return (
        <navbar className="navbar">
            <a href="/"><h1 className="insta-colour-gradient">Post Maker</h1></a>
            <div className="links">
                <a href="/quotes">Quotes</a>
                <a href="/images">Images</a>
                <a href="/videos">Videos</a>
                <a href="/reels">Reels</a>
            </div>
        </navbar>
    );
};

export default Navbar;
