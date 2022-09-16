import { Component } from "react";
import { getData } from "../data/data";

import Footer from "../footer/footer";
import Header from "../header/header";
import Filter from "../filter/filter";
import ProductsPlace from "../products-place/products-place";
import Subheader from "../subheader/subheader";


class OurCoffee extends Component {
    constructor(props){
        super(props)
        this.state = {
            search: '',
            filter: '',
        }
    }

    changeSearchState = (term) => {
        this.setState({search : term});
    }

    changeFilterState = (term) => {
        this.setState({filter : term});
    }

    searchItems = (items, term) => {
        if (term.length === 0) return items;

        return items.filter(item => {
            return item.name.toUpperCase().indexOf(term.toUpperCase()) > -1;
        })
    }

    filterItems = (items, filter = '') => {
        if (filter == '') return items;
        
        return items.filter(item => {
            return item.country === filter ? item : false;
        })
    }

    prepareData = (term, filter = '') => {
        const coffeeData = getData();
        const renderData = this.searchItems(this.filterItems(coffeeData, filter), term);
        return renderData;
    }

    render(){
        const { search, filter } = this.state;
        const data = this.prepareData(search, filter);

        return (
            <>
                <Header 
                        title={'Our Coffee'}
                        bgName={'our_coffee_bg.png'}        
                />

                {/* ============================================================== */}
    
                <Subheader
                    picName={'about-our-beans-pic.png'}
                    title={"About our beans"}
                />
    
                <div className="search-filter-section">
                    <Filter
                        changeFilter={this.changeFilterState}
                        changeSearch={this.changeSearchState}
                    />
                </div>
    
                <ProductsPlace
                    data={data}
                />
    
                {/* ============================================================== */}

                <div>
                    <Footer/>
                </div>
            </>
        )
    }
}

export default OurCoffee;