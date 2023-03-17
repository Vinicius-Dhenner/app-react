import "./App.css"
import { Home } from "./pages/Home"
import { NavBarMenu } from "./components/NavBarMenu"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Gallery } from "./components/Gallery"
import { Contacts } from "./pages/Contacts"

function App() {
    return (
        <div id="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Gallery" element={<Gallery/>} />
                    <Route path="/Contacts" element={<Contacts/>}></Route>
                </Routes>
                <NavBarMenu />
            </BrowserRouter>
        </div>
    )
}

export default App