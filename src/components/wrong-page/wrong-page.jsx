import "./wrong-page.scss";
import { Link } from "react-router-dom";

const WrongPage = () => {

    return(
        <>
            <Link className="wrong-link" to="/" >
                <div className="wrong-page">
                    <img src={require("../../img/wrong-page.png")} alt="wrong page" />
                    <p>Wrong page, sorry nothing here...</p>
                    <p>click anywhare for return to main page</p>
                </div>
            </Link>
        </>
    )
}

export default WrongPage; 