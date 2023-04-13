import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'; 
import Home from './Home';
import About from './About';
import Error from './Error';

function App(props) {
  return (
    <>
      <Router>
        <Link to='/Home'>Home</Link>|
        <Link to='/About'>About</Link>|

        <Routes>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;