import MyHome from './MyHome';
import Contact from './Contact';
import './style.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

function App()
{
  return(
    <>
      <Router>
        <div className='mycss'>
        <Link to='/MyHome'><button id='btn'>Home</button></Link>&nbsp;&nbsp;&nbsp;
        <Link to='/Contact'><button id='btn'>Contact</button></Link>
        </div>
        <Routes>
          <Route path='/MyHome' element={<MyHome/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
