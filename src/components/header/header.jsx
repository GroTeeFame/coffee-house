import './header.scss';
import NavHeader from '../nav-header/nav-header';


const Header = (props) => {
    const titel = props.title;
    const bgName = props.bgName;

    return(
        <div 
            className='header-container'
            style={{backgroundImage:  `url(${require('../../img/' +bgName)})`}}
        >
            <NavHeader/>
            <h2>{titel}</h2>
        </div>
    )
}

export default Header;