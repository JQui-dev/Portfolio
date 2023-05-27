import './App.scss'

// import NavBar from './components/NavBar'
import Main from './pages/Main';
import Error from './pages/Error';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar></NavBar> */}
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
