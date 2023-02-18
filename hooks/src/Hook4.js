import React from 'react';

function Hook4(props) {

    const[name,setname] = React.useState('Devil');

    React.useEffect(()=>
    {
        console.log("Component Mounted");
    },[]);

    return (
        <div>
            <h1>Hooks Demo</h1>
            <h2>Value is {name}</h2>
            <button onClick={()=>setname("Devasya")}>Click</button>
        
        </div>
    );
}

export default Hook4;