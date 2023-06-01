import { useState } from "react"
import "./style/ConForm.scss"

function ConForm() {

  const [ name, setName ] = useState("");
  const [ mail, setMail ] = useState("");
  const [ text, setText ] = useState("");

  return (
    <div className="ConForm">
        
        <form action="submit">
          <div className="info">
            <div className="side">
              <input onChange={(e)=>setName(e.target.value)} placeholder="name" type="text"/>
              <input onChange={(e)=>setMail(e.target.value)} placeholder="mail" type="email"/>
            </div>
            <textarea onChange={(e)=>setText(e.target.value)} className="msg" placeholder="message" type="text"/>
          </div>
          <button className="send" onClick={(e)=>{e.preventDefault(); console.log(name, mail, text)}}>
              SEND
          </button>
        </form>


        <div className="draw">
          <img src="/send.svg" alt=""/>
        </div>

    </div>
  )
}

export default ConForm