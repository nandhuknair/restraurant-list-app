import { LOGO_URL } from "../utils/constants";
const Header =()=> {
    return (
        <div className="header">
            <div className="logo-container">
            <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items">
            <ul>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>CONTACT</li>
                <li>CART</li>
            </ul>
            </div>
        </div>
    )
}

export default Header;