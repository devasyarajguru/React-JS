import MyHome from './MyHome';
import Contact from './Contact';
import Login from './Login';
import './style.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

function App()
{
  return(
    <>
      <Router>
        <div className='mycss'>
        <Link to='/MyHome'><button id='btn'>Home</button></Link>&nbsp;&nbsp;&nbsp;
        <Link to='/Contact'><button id='btn'>Contact</button></Link>&nbsp;&nbsp;&nbsp;
        <Link to='/Login'><button id='btn'>Login</button></Link>
        </div>
        <Routes>
          <Route path='/MyHome' element={<MyHome/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='*' element={<MyHome></MyHome>}/>
        </Routes>
      </Router>

    </>
  );
}

export default App;
