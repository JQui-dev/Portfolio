import './App.scss'

import NavBar from './components/NavBar'

import Main from './pages/Main';
import Error from './pages/Error';

import WorkPage from './pages/WorkPage';
import Contact from './pages/Contact';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='*' element={<Error/>}></Route>

          <Route path='/work' element={<WorkPage/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
