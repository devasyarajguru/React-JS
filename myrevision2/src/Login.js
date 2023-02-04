import {useNavigate} from 'react-router-dom';

function Login()
{
    let navigate = useNavigate();

    // function mydemo()
    // {
    //     navigate('')
    // }
    return(
        <>
            <h1 style={{backgroundColor:'yellow',color:'black'}}>This is Login Page</h1>
            <button onClick={()=>navigate(-1)} className='homebtn'>Backward</button>&nbsp;&nbsp;
            <button onClick={()=>navigate(1)} className='homebtn'>Forward</button>
        </>
    );
}

export default Login;