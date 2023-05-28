import './style/WorkPage.scss';

import Work from "../components/Work"

function WorkPage() {
  return (
    <div className='WorkPage'>
      <div className="wTitle">
        <h1>WORK</h1>
        <h3>Here are some projects I've worked in:</h3>
      </div>
      <Work/>
    </div>
  )
}

export default WorkPage