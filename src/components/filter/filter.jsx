import { Component } from "react";
import "./filter.scss";

class Filter extends Component {
    constructor (props){
        super(props)
        this.state = {
            active: '',
        }
    }

    toggleClass = (e) => {
        const filter = e.target.id;

        if (filter == this.state.active){
            this.setState({active: ''});
            this.props.changeFilter('');
        } else {
            this.setState({active : filter})
            this.props.changeFilter(filter);
        }

    }

    onUpdateSearch = (e) => {
        this.props.changeSearch(e.target.value);
    }

    render() {
        const buttonsData = [
            { 
                id: '1',
                name: 'Brazil'
            },
            { 
                id: '2',
                name: 'Kenya'
            },        { 
                id: '3',
                name: 'Columbia'
            },
            // {
            //     id: '4',
            //     name: 'Ethiopia'
            // },
        ];
        const buttons = buttonsData.map(item => {
            return(
                <button 
                    key={item.id}
                    id={item.name}
                    className={this.state.active === item.name ? "filter-button active" : "filter-button"} 
                    onClick={(e) => this.toggleClass(e)}
                >{item.name}</button>
            )
        });

        return(
            <div className="filter-search-section-wraper">
                <div className="search-section-wraper">
                    <p>Looking for</p>
                    <input type="text" placeholder="start typing here..." onChange={this.onUpdateSearch}/>
                </div>
                <div className="filter-section-wraper">
                    <p>Or filter</p>
                    <div className="buttons-filters">
                        {buttons}
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter;
