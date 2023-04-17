import React from 'react';
import './external.css';

function Counter(props) {

    const[value,setcounter] = React.useState(0);
    return (
        <>
        <h1>Counter Example in Hooks</h1>
        <div className='counter'>
            {value}
        </div>

        <div className='main'>
            <button id='btn1' onClick={()=>setcounter(value + 1)}>Increment</button>
            <button id='btn2' onClick={()=>setcounter(value - 1)}>Decrement</button>
        </div>
        </>
    );
}

export default Counter;