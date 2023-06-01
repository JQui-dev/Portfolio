import "./style/Main.scss"

import LandPage from "../components/LandPage"
import Work from "../components/Work"
import ConForm from "../components/ConForm"

function Main() {
  return (
    <div className="Main">
        <LandPage/>
        <Work/>
        <ConForm/>
    </div>
  )
}

export default Main