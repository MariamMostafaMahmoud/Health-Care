import React from "react";
import { Link } from "react-router-dom";
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
// css
import './_bannar.scss';
// imgae
import bottombg from '../../assets/photoBannar.png';
import About from "../About/About";

const Bannar = (props) => {
    return (
        <><div className="bg-banner">
            <div className="container">
                <div className="text-center about-top">
                    <h1>{props.title}</h1>
                    <ul>
                        <li>
                            <Link to="/Home" className="back">
                                <FontAwesomeIcon icon={faHouse} className="faHouse"/>Home
                            </Link>
                            / {props.title}
                        </li>
                    </ul>
                </div>
            </div>
            <img src={bottombg}/>
        </div>

        </>
    )
}
export default Bannar;