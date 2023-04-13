import './App.css'

import Loading from './component/Loading'
import NavBar from './component/NavBar'
import LandPage from './component/LandPage'
import Work from './component/Work'

function App() {
  return (
    <div className="App">
      <Loading/>

      <NavBar/>
      
      <LandPage/>
      <Work/>
    </div>
  )
}

export default App
