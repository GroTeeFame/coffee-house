import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
    return(
        <div className="footer-conteiner">
            <div>
                <nav className='nav-footer-container'>
                    <div className="nav-footer-link">
                        <Link to="/">
                            <img src={require("../../img/logo-black.png")} />
                            Coffee house
                        </Link>
                    </div>
                    <div className="nav-footer-link">
                        <Link to="/our-coffee">
                            Our coffee
                        </Link>
                    </div>
                    <div className="nav-footer-link">
                        <Link to="/for-your-pleasure">
                            For your pleasure
                        </Link>
                    </div>
                </nav>
            </div>
            <div className="footer-beans-logo">
                <img style={{margin: "auto"}} src={require("../../img/beans_logo_black.png")} alt="beans logo" />
            </div>
        </div>
    )
}

export default Footer;
