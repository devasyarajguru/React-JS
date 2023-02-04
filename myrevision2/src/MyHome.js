import './style.css';
import {useNavigate} from 'react-router-dom';

function MyHome()
{
        let navigate = useNavigate();

        // function demo()
        // {
        //     navigate('/Contact');
        // }
    return(
        <>
            <h1 style={{backgroundColor:'red',color:'white'}}>This is MyHome Page</h1>
            <button onClick={()=>navigate(-1)} className='homebtn'>Backward</button>&nbsp;&nbsp;
            <button onClick={()=>navigate(1)} className='homebtn'>Forward</button>
        </>
    );
}

export default MyHome;