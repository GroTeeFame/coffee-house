import { Link } from 'react-router-dom';
import "./nav-header.scss";

const NavHeader = () => {

    return (
        <>
            <nav className='nav-container'>
                <div className='nav-container-link'>
                    <Link to="/">
                        <img src={require("../../img/logo.png")} />
                        Coffee house
                    </Link>
                </div>
                <div className='nav-container-link'>
                    <Link to="/our-coffee">
                        Our coffee
                    </Link>
                </div>
                <div className='nav-container-link'>
                    <Link to="/for-your-pleasure">
                        For your pleasure
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default NavHeader;