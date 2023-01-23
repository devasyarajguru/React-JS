import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import {BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';

function App()
{
  return(
    <Router>
      <Link to='/Home'>Home|</Link>
      <Link to='/Header'>Header|</Link>
      <Link to='/Footer'>Footer|</Link>
      <Link to='/About'>About|</Link>
      <Routes>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/Header" element={<Header></Header>}/>
        <Route path='/Footer' element={<Footer/>}></Route>
        <Route path='/About' element={<About/>}></Route>
       </Routes>
    </Router>
  );
}

export default App;