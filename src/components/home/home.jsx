import { Link } from "react-router-dom";
import { getDataById } from "../data/data";

import NavHeader from "../nav-header/nav-header";
import Footer from "../footer/footer";
import ProductsPlace from "../products-place/products-place";

import "./home.scss";

const Home = () => {
    const bestCoffee = [1,2,3];
    const bestData = bestCoffee.map(item => {
        return getDataById(item);
    })

    return(
        <div>
            <div className="bg">
                <NavHeader/>
                <div className="center">
                    <h1 className="main-text">Everything You Love About Coffee</h1>
                    <img src={require("../../img/beans_logo_white.png")} alt="beans logo" />
                    <h2 className="second-text">We makes every day full of energy and taste</h2>
                    <h2 className="second-text">Want to try our beans?</h2>

                    <Link
                        to='/our-coffee'
                    >
                        <button className="button">More</button>
                    </Link>
                </div>
            </div>
            <div className="about-us-wraper">
                <h2 className="about-us">About Us</h2>
                <img src={require("../../img/beans_logo_black.png")} alt="beans logo" />
                <div className="text-container-wraper">
                    <p className="text-container">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                    <p className="text-container">
                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now. 
                    </p>
                </div>
            </div>

            {/* ====================================================== */}

            <div className="our-best">
                <h2>Our best</h2>

                <ProductsPlace
                    data={bestData}
                />
            </div>

            {/* ====================================================== */}
            
            <div>
                <Footer/>
            </div>
        
        </div>
    )
}

export default Home;




