import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar () {
    return (
        <div className="Navbar">
            <div className="navbar-brand">
                <Link to={"/"} >MovieBox</Link>
            </div>
            <div className="navbar-link">
                <Link to={"/"} className="nav-link">Home</Link>
                <Link to={"/favourites"} className="nav-link">Favourites</Link>
            </div>
        </div>
    )
}

export default Navbar;