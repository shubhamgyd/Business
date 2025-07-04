import { Routes, Route } from 'react-router'
import { Home } from "./pages/Home"
import { ContactUs } from './pages/ContactUs'
import { Mandir } from './pages/Mandir'
import { Shoerack } from './pages/Shoerack'
import { AcrylicBase } from './pages/AcrylicBase'
import { DobuleTopBase } from './pages/DoubleTop'
import { DoubleDoorDressing } from './pages/DoubleDoorDressing'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/mandir" element={<Mandir />}></Route>
        <Route path="/shoerack" element={<Shoerack />}></Route>
        <Route path="/acrylic-base" element={<AcrylicBase />}></Route>
        <Route path="/doubleTop-base" element={<DobuleTopBase />}></Route>
        <Route path="/doubleDoor-dressing" element={<DoubleDoorDressing />}></Route>
      </Routes>
    </>
  )
}

export default App
