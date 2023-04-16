import './App.scss'

import Loading from './components/Loading'
import NavBar from './components/NavBar'
import LandPage from './components/LandPage'
import Work from './components/Work'

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
