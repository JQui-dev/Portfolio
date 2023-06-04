import "./style/Main.scss"

import LandPage from "../components/LandPage"
import Work from "../components/Work"
import ContactForm from "../components/ContactForm"

function Main() {
  return (
    <div className="Main">
        <LandPage/>
        <Work/>
        <ContactForm/>
    </div>
  )
}

export default Main