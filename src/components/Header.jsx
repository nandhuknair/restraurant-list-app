import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header =()=> {
    return (
        <div className="header">
            <div className="logo-container">
            <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items">
            <ul>
                <li><Link to ="/">HOME</Link></li>
                <li><Link to ="/about">About</Link></li>
                <li><Link to ="/contact">Contact</Link></li>
                <li>CART</li>
            </ul>
            </div>
        </div>
    )
}

export default Header;
