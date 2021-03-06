import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <navbar className="content navbar">
            <NavLink to='/'><h1 className="logo insta-colour-gradient">Post Maker</h1></NavLink>
            <div className="links">
                <NavLink className={(navData) => navData.isActive ? 'navbar-active' : 'navbar-link'}
                    to='/quote'>Quote</NavLink>
                <NavLink className={(navData) => navData.isActive ? 'navbar-active' : 'navbar-link'}
                    to='/video'>Video</NavLink>
                <NavLink className={(navData) => navData.isActive ? 'navbar-active' : 'navbar-link'}
                    to='/reel'>Reel</NavLink>
            </div>
        </navbar>
    );
};

export default Navbar;
