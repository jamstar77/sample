import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Donate from "./pages/Donate"
import Where from "./pages/Where"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/where" element={<Where />} />
      </Routes>
    </div>
  )
}

export default App
