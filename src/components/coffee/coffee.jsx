import { useParams, Navigate } from "react-router-dom";
import { getDataById } from "../data/data";

import Header from "../header/header";
import Footer from "../footer/footer";
import Subheader from "../subheader/subheader";

import "./coffee.scss";

const Coffee = () => {
    const id = useParams().Id;
    const item = getDataById(id);
 
    if (!item){
        return (
            <Navigate 
                to="/wrong-page"
            />
        )
    } else {
        const {name, country, price, picture, description} = getDataById(id);
        return (
            <>
                <Header 
                        title={'Our Coffee'}
                        bgName={'our_coffee_bg.png'}        
                />
                <Subheader 
                    picName={picture}
                    title={name}
                    data={{
                        country: country,
                        description: description,
                        price: price
                    }}
                />
                <div>
                    <Footer/>
                </div>
            </>
        )
    }
}

export default Coffee;