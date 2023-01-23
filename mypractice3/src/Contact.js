import {useNavigate} from 'react-router-dom';
import './external.css';
function Error()
{
    let navigate = useNavigate();

    return(
        <>
            <h1>This is Contact Page</h1>
        {/* <button onClick={()=> navigate('/Home')}>Home</button> */}
        <button onClick={()=> navigate(-1)} className='conbutton'>Back</button>

        </>
    );
}

export default Error;