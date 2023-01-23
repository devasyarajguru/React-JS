import Home from './Home';
import Profile from './Profile';
import Error from './Error';
import Contact from './Contact';
import './external.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
// import './App.css';

function App()
{
  return( 
    <>
      <Router>
        <button><Link to='/Home'>Home</Link></button>|
        <button><Link to='/Profile'>Profile</Link></button>|   
        <button><Link to='/Contact'>Contact</Link></button>
        <Routes>
         {/* <Route path='/' element={<Home/>}></Route> */}
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='*' element={<Error></Error>}></Route>
          <Route path='/Contact' element={<Contact></Contact>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
