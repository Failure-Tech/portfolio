import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Work from "./components/Work";
import Home from "./components/Home";
import Play from "./components/Play";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/play" element={<Play />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App;