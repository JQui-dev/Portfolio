import "./style/Main.scss"

import LandPage from "../components/LandPage"
import Work from "../components/Work"
import CForm from "../components/CForm"

function Main() {
  return (
    <div className="Main">
        <LandPage/>
        <Work/>
        <CForm/>
    </div>
  )
}

export default Main