import "./TecIcon.scss"

import { FaReact, FaNodeJs, FaHtml5, FaSass } from "react-icons/fa";
import { RiCss3Line } from "react-icons/ri";

function TecIcon({}) {
    return (
        <div className="TecIcon">
                <FaHtml5 className="icon" size={100} color="ff6a00"/>
                <RiCss3Line className="icon" size={100} color="#ff6a00"/>
                <FaNodeJs className="icon" size={100} color="ff6a00"/>
                <FaSass className="icon" size={100} color="ff6a00"/>
                <FaReact className="icon" size={100} color="ff6a00"/>
        </div>
    )
}

export default TecIcon