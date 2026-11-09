import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Donate from "./pages/Donate"
import Where from "./pages/Where"
import Navbar from "./components/Navbar"
import Foot from "./components/Foot"

const App = () => {
  return (
    <div id="main">
      <Navbar />


      <div id="page">
        <div id="content">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/where" element={<Where />} />
          </Routes>
        </div>
      <div id="foot"><Foot /></div>
      </div>
    </div>
  )
}

export default App
