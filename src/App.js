import Navbar from "./components/NavBar.js";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About.js";
import Team from "./components/Team";
import Datagrid from "./components/Research.js";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br></br>
      <Home />
      <br></br>
      <ScrollToTop smooth />
      <br></br>
      <About />
      <br></br>
      <Team />
      <br></br>
      <Datagrid />
      <br></br>
    </div>
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
