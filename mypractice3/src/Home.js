import  Laptop from './Laptop.jpg';
import './external.css'
import {useNavigate} from 'react-router-dom';

function Home()
{
    let navigate = useNavigate();

    return(
       <>
       <h1 className='header'>This is Home Page with Laptop Image</h1>
       <div>
        
        <img src={Laptop} alt="Laptopimage" className="myimg"></img>
        <button onClick={()=>navigate('/Contact')} className='homebutton'>Contact</button>

       </div>
       </> 
    );
}

export default Home;