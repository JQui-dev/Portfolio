import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa"
import "./style/Work.scss"

function Work() {

    const [ work, setWork ] = useState([])

    useEffect(()=>{
        fetchInfo();
    }, []);

    const fetchInfo = async () => {
        const data = await fetch("/info.json");
        const jsonData = await data.json();
        setWork(jsonData[0].work)
    }

  return (
    <div className="Work">
        {
            work.map(({id, name, desc, link, imgUrl, ghLink})=>(
                <Link to={link} className="card" key={id} target="_BLANK">
                    <img src={imgUrl} alt={`${name} img`}/>
                    <div className="info">
                        <div className="name">
                            <h2>{name}</h2>
                            <p>{desc}</p>
                        </div>
                        <Link to={ghLink} className="bottom" target="_BLANK">
                            <FaGithub/>
                        </Link>
                    </div>
                </Link>
            ))
        }
    </div>
  )
}

export default Work