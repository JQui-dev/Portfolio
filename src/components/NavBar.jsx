import "./style/NavBar.scss";

import { useState } from "react";
import { GrMenu, GrClose } from "react-icons/gr"
import { HiHome } from "react-icons/hi"
import { NavLink, Link } from "react-router-dom"

function NavBar() {

  const [ nav, setNav ] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className={nav ? "NavBar" : "Lines"} onClick={handleNav}>
        {
            !nav
            ? <GrMenu/>
            : 
            <div className="info">
                <div className="icons">
                  <Link to="/">
                    <HiHome/>
                  </Link>
                  <GrClose/>
                </div>
                <div className="links">
                    <NavLink to="whoAmI">Who Am I?</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                    <NavLink to="work">Work</NavLink>
                </div>
            </div>
        }
    </div>
  )
}

export default NavBar