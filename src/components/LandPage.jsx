import "./style/LandPage.scss"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { FaGithub, FaInstagram, FaBookmark } from "react-icons/fa"
import { FaReact, FaSass, FaJsSquare } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";


function LandPage() {

    const [ me, setMe ] = useState([])

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const data = await fetch("/info.json");
            const jsonData = await data.json();
            setMe(jsonData.me)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="LandPage">
            <div className="left">
                <div className="name">
                    <div className="top">
                        <h2>I'm</h2>
                        <div className="icons">
                            <Link to={me.ghUrl} target="_BLANK"><FaGithub/></Link>
                            <Link to={me.igUrl} target="_BLANK"><FaInstagram/></Link>
                            <Link to="/contact"><FaBookmark/></Link>
                        </div>
                    </div>
                    <div className="bottom">
                        <h2>JOSEPH</h2>
                    </div>
                </div>
            </div>



            <div className="right">
                <div className="icons">
                    <FaReact/>
                    <FaSass/>
                    <FaJsSquare/>
                </div>
            </div>


            <div className="down">
                <FaChevronDown/>
            </div>
        </div>
    )
}

export default LandPage