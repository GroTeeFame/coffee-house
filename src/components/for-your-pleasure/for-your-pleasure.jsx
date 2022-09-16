import { getData } from "../data/data";

import Footer from "../footer/footer";
import Header from "../header/header";
import ProductsPlace from "../products-place/products-place";
import Subheader from "../subheader/subheader";


const ForYourPleasure = () => {

    const coffeeData = getData();

    return (
        <>
            <Header 
                title={'For your pleasure'}
                bgName={'for-your-pleasure-bg.png'}        
            />

            <div className="fyp-wraper">
                <Subheader
                    picName={'for-your-pleasure.png'}
                    title={'About our goods'}
                />
                <ProductsPlace
                    data={coffeeData}
                />
            </div>

            <div>
                <Footer/>
            </div>
        </>
    )
}

export default ForYourPleasure;