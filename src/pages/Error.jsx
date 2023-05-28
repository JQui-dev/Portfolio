import "./style/Error.scss"

import { Link } from "react-router-dom"

import { HiHome } from "react-icons/hi"

function Error() {
  return (
    <div className="Error">
      <h1>
        Ups! Nothing here...
      </h1>

      <Link to="/">
        <HiHome/>
      </Link>
    </div>
  )
}

export default Error