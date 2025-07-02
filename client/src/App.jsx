import { Routes, Route } from 'react-router'
import { Home } from "./pages/Home"
import { ContactUs } from './pages/ContactUs'
import { Mandir } from './pages/Mandir'
import { Shoerack } from './pages/Shoerack'
import { AcrylicBase } from './pages/AcrylicBase'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/mandir" element={<Mandir />}></Route>
        <Route path="/shoerack" element={<Shoerack />}></Route>
        <Route path="/acrylic-base" element={<AcrylicBase />}></Route>
      </Routes>
    </>
  )
}

export default App
