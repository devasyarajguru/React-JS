import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Login from './Login';

function App()
{
  return(
      <>
    <Router>
      <Link to="/Home">Home</Link>|
      <Link to="/Profile">Profile</Link>|
      <Link to="/Login">Login</Link>
      <Routes>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/Profile" element={<Profile></Profile>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;