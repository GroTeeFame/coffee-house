import { Link } from "react-router-dom";
import "./products-place.scss";


const ProductsPlace = (props) => {
    
    if(props.data.length == 0) {
        return (
            <div className="nothing-found">
                <p>Oh no, nothing found...</p>
            </div>
        )
    }

    const coffeeData = props.data.map(item => {
        const { id, name, country, price, picture } = item;
        let shortName = name.length > 18 ? name.substring(0, 16) + '...' : name;

        return (
            <div className="product" key={id}>
                <Link
                    to={'/our-coffee/coffee-' + id }
                >
                    <div className="img-wraper">
                        <img src={require(`../../img/${picture}` )} alt="coffee beans" />
                    </div>
                    <div className="product-prop">
                        <p className="product-name">{shortName}</p>
                        <p>{country}</p>
                        <p className="product-price">{price}</p>
                    </div>
                </Link>
            </div>
        )
    })

    return(
        <div className="products-place">
            {coffeeData}
        </div>
    )
}

export default ProductsPlace;
