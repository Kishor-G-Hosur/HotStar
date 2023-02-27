import '../Styles/navbar.css'
// import Logo from './download.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                {/* <img height="40px" width="80px" src={Logo} alt="" /> */}
                <img width="120px" height="60px" src="images/download.png" alt="" />
            </div>
            <div className="nav_links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/movies">favourites</Link></li>
                    <li><Link to="/add-favourties">Add To Favourites</Link></li>
                    <li><Link to="">log-Out</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;