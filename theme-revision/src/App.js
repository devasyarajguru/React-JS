import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import About from './About';
import {BrowserRouter as Router,Route,Routes,} from 'react-router-dom' 


function App() {
  return (
    <React.Fragment>
        
    <Router>
    <Header/>
        <Routes>
          <Route path='/Main' element={<Main/>}></Route>{/*Main path*/}
          <Route path='/About' element={<About/>}></Route>
        </Routes>
    </Router>
      

    </React.Fragment>
  );
}

export default App;
