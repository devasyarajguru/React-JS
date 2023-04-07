import logo from './logo.svg';
import './App.css';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App6 from './App6';
import App5 from './App5';
import Task from './Task';

import './external.css';

import {BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom';


function App() {
  return (
    <>
        <Router>
          <div className='topnav'>
          <Link to='/Product-C'>Product-C</Link>
          <Link to='/Category-C'>Category-C</Link>
          <Link to='/SubCategory-C'>SubCategory-C</Link>
          <Link to='/Product-F'>Product-F</Link>
          <Link to='/Category-F'>Category-F</Link>
          <Link to='/SubCategory-F'>SubCategory-F</Link>
          <Link to='/Task'>Task</Link>
          </div>
          <h1 id='head'>API Task using Get method</h1>
          <Routes>
            <Route path='/Product-C' element={<App1/>}></Route>
            <Route path='/Category-C' element={<App3/>}></Route>
            <Route path='/SubCategory-C' element={<App2/>}></Route>
            <Route path='/Product-F' element={<App4/>}></Route>
            <Route path='/Category-F' element={<App6/>}></Route>
            <Route path='/SubCategory-F' element={<App5/>}></Route>
            <Route path='/Task' element={<Task/>}></Route>



          </Routes>
        </Router>
        
      
    </>
  );
}

export default App;
