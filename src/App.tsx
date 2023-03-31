import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'

import { NavBarMenu } from './components/NavBarMenu'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { StateExemple } from './pages/StateExemple'
import { Contacts } from './pages/Contacts'
import { GalleryPage } from './pages/GalleryPage'



function App() {
  return (
    <>
      <div id="App">
        <BrowserRouter>
          <NavBarMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/Gallery' element={<GalleryPage />} />
            <Route path='/Contacts' element={<Contacts />} />
            <Route path='/StateExemple' element={<StateExemple />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
