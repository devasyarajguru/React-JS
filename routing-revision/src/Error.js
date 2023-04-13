import React from 'react';
import { useNavigate } from 'react-router-dom';


function Error(props) {

    let navigatehome = useNavigate();
    let navigateabout = useNavigate();

    return (
        <div>
            <h1>Error 404 Not Found</h1>
            <button name='home' onClick={()=>navigatehome('/Home')}>Home</button>&nbsp;&nbsp;&nbsp;
            <button name='home' onClick={()=>navigateabout('/About')}>About</button>
            
        </div>
    );
}

export default Error;