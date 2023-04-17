import React from 'react';

function Hook1(props) {

    const[name,myfunc] = React.useState('');

    React.useEffect(()=>
    {
        myfunc('Yellow');
    }
        
    ,[])

    return (
        <>
           <h1> Color is:{name} </h1>
           <br/><input type='button' value='Click' onClick={()=>myfunc('Blue')}></input> 
           
        </>
    );
}

export default Hook1;