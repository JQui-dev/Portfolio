import { GrHome } from "react-icons/gr";
import { useState } from 'react'

import './NavBar.css'

import NavBtn from './NavBtn'


function NavBar() {
    const [show, setShow] = useState(false);

    function showOption() {
        setShow(!show);
        console.log(show)
    }

    return (
        <div className={show ? "NavBar" : "noBar"}>
            <button className={"nIcon"} onClick={showOption} >
                <GrHome className="home"/>
            </button>

            <div onClick={showOption} className={show ? "showNav" : "hideNav"}>
                <NavBtn url={"#LandPage"} name="I'm Joseph"/>
                <NavBtn url={"#Work"} name="Works"/>
                <NavBtn url={"#Contact"} name="Contact"/>
            </div>
        </div>
    )
}

export default NavBar