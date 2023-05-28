import './App.scss'

import NavBar from './components/NavBar'

import Main from './pages/Main';
import Error from './pages/Error';

import Contact from './pages/Contact';
import Who from './pages/Who';
import WorkPage from './pages/WorkPage';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='*' element={<Error/>}></Route>

          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/whoami' element={<Who/>}></Route>
          <Route path='/work' element={<WorkPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
