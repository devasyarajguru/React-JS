import React from 'react';

function Hook3(props) {

    const[color,setColor] = React.useState('red');
    const[no,setNo] = React.useState(100);

    React.useEffect(
        ()=>
        {
            setColor('Yellow');
            setColor('Green'); // Considers this one due to []
            setNo(45);
        },[]
    );

    return (
        <div>
            <h1>Color is {color}</h1>
            <button onClick={()=>setColor('Aqua')} style={{width:'100px', height:'50px',fontSize:'20px',margin:'10px'}}>Click Me</button>
            <h1>Number is {no}</h1>
            <button onClick={()=>setNo(69)} style={{width:'100px', height:'50px',fontSize:'20px',margin:'10px'}}>Click Me</button>
        </div>
    );
}

export default Hook3;