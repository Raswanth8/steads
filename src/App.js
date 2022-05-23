import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar.js";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About.js";
import Team from "./components/Team";
import Datagrid from "./components/Research.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br></br>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="about" element={<About />} />
            <Route exact path="team" element={<Team />} />
            <Route exact path="publications" element={<Datagrid />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

{
  /* <Router>
  <div className="App">
    <Navbar />
    <div>
      <br></br>
      <Home />
    </div>
    <br></br>
    <div>
      <About />
    </div>
    <br></br>
    <div>
      <Datagrid />
    </div>
    <br></br>
    <div>
      <Team />
    </div>
  </div>
</Router>; */
}
