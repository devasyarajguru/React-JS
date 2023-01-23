import Home from "./home";
import About from "./about";
import Contact from "./contact";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";

function App()
{
  return(
    <Router>
      <Link to="/home">Home</Link> |
      <Link to="/about">About</Link>|
      <Link to="/contact">Contact</Link>|
      <Routes>
        <Route path="/home" element={<Home/>}/> 
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;