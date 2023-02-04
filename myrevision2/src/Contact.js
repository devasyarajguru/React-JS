import './style.css';
import {useNavigate} from 'react-router-dom';

function Contact()
{
    var mycolor = {
        backgroundColor:'orange',
        color:'black'
    };

    let navigate = useNavigate();

    // function demo1()
    // {
    //     navigate('/Home');
    // }
    
    return(
        <>
            <h1 style={mycolor}>This is Contact Page</h1>
            <button onClick={()=>navigate(-1)} className='homebtn'>Backward</button>&nbsp;&nbsp;
            <button onClick={()=>navigate(1)} className='homebtn'>Forward</button>
        </>
    );
}

export default Contact;