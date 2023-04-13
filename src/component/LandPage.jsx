import "./LandPage.css"

// ICONS
import { FaInstagram, FaGithub, FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { RiCss3Line } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
FiMail

function LandPage() {
    return (
        <div className="LandPage" id="LandPage">
            <div className="LPleft">
                <div className="name">
                    <div className="im">
                        <h2>I'm</h2>

                        <div className="iGroup">
                            <a href="#">
                                <FiMail size={45} color="#ff6a00"/>
                            </a>
                            <a href="https://github.com/Q1one">
                                <FaGithub size={45} color="#ff6a00"/>
                            </a>
                            <a href="https://www.instagram.com/jquiroz___/">
                                <FaInstagram size={45} color="#ff6a00"/>
                            </a>
                        </div>
                    </div>

                    <h1>JOSEPH</h1>
                    

                </div>
                
            </div>
            <div className="LPright">
                <FaHtml5 className="icon" size={150} color="ff6a00"/>
                <RiCss3Line className="icon" size={150} color="#ff6a00"/>
                <FaReact className="icon" size={150} color="ff6a00"/>
                <FaNodeJs className="icon" size={150} color="ff6a00"/>
            </div>
        </div>
    )
}

export default LandPage