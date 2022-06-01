import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import About from "./components/About.js";
import Team from "./components/Team";
import Datagrid from "./components/Research.js";
import ScrollToTop from "react-scroll-to-top";
import Contact from "./components/Contact";
import Appbar from "./components/Appbar.js";

function App() {
  return (
    <div className="App">
      <Appbar />
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
      <br></br>
      <Contact />
    </div>
  );
}

export default App;
