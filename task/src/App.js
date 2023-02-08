//  import Number from "./Number";
 import Year from "./Year";
 import Calculator from "./Calculator";
 import Marksheet from "./Marksheet";
 import Home from './Home';
 import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
 import './main.css';

function App() {
  return (
      <>
      {/* <Year/> */}
        <Router>
          <ul>
          <li><Link to='/Home'>Home</Link>&nbsp;&nbsp;&nbsp;</li>
          <li><Link to='/Year'>Year</Link>&nbsp;&nbsp;&nbsp;</li>
          <li><Link to='/Marksheet'>Marksheet</Link>&nbsp;&nbsp;&nbsp;</li>
          <li><Link to='/Calculator'>Calculator</Link></li>
          </ul>
          <Routes>
            <Route path="/Home" element={<Home></Home>}></Route>
            <Route path="/Year" element={<Year/>}></Route>
            <Route path="/Calculator" element={<Calculator/>}></Route>
            <Route path="/Marksheet" element={<Marksheet/>}></Route>
          </Routes>
        </Router>
      </>    
  );
}

export default App;
