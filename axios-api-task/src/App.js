import logo from './logo.svg';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import Forget from './Forget';
import image from './image.jpg';
// import image2 from './image2';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div className='topnav'>
          <Link to='/Signup'>Signup</Link>
          <Link to='/Login'>Login</Link>
          <Link to='/Forget'>Forget</Link>
        </div>
        {/* <Signup/> */}
        <Routes>
          <Route path='/Signup' element={<Signup/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Forget' element={<Forget/>}></Route>
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
