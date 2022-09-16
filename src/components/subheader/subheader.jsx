import "./subheader.scss";

const setDesctiption = ({country, description, price}) => {
    return (
        <div className="product-coffee-description">
            <p>
                <strong>Country: </strong> 
                {country}
            </p>
            <p>
                <strong>Description: </strong>
                {description}
            </p>
            <p>
                <strong>Price:  </strong>
                <span> {price}</span>
            </p>
        </div>
    )
}

const basicDescription = () => {
    return (
        <p className="basic-description">
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            <br />
            <br />
            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. 
            <br />
            As greatly removed calling pleased improve an. 
            <br />
            Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.
        </p>
    )
}

const Subheader = (props) => {

    const image = props.picName;
    const title = props.title;
    const renderDesctiption = props.data ? setDesctiption(props.data) : basicDescription();

    return(
        <>
            <div className="subheader-wraper">
                <div className="subheader-image-wraper">
                    <img src={require(`../../img/${image}`)} alt="" />
                </div>
                <div className="subheader-info-wraper">
                    <div className="subheader-info-header">
                        <h2>{title}</h2>
                        <img src={require("../../img/beans_logo_black.png")} alt="beans-logo" />
                    </div>
                    <div className="subheader-description">
                        {renderDesctiption}
                    </div>
                </div>
            </div>
            <div className="line">
                <img src={require("../../img/line.png")} alt="" />
            </div>
        </>
    )
}

export default Subheader;