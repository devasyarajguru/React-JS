import React from 'react';
import { useNavigate } from 'react-router-dom';

function About(props) {

        let navigate = useNavigate();
    
    return (
        <div>
            <h1>This is About Page</h1>
            <button name='home' onClick={()=>navigate('/Home')}>Home</button>
            
        </div>
    );
}

export default About;