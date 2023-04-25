import "./LandPage.scss"



import TecIcon from "./sub/TecIcon";
import Cicon from "./sub/Cicon";

function LandPage() {
    return (
        <div className="LandPage" id="LandPage">
            <div className="LPleft">
                <div className="name">
                    <div className="im">
                        <h2>I'm</h2>
                        <Cicon/>
                    </div>
                    <h1>JOSEPH</h1>
                </div>
            </div>
            <TecIcon/>
        </div>
    )
}

export default LandPage