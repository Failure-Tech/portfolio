import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Work from "./components/Work";
import Home from "./components/Home";
import Play from "./components/Play";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/play" element={<Play />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App;