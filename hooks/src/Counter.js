import React from 'react';

function Counter(props) {

    const[count,setcount] = React.useState(0);
    // const[count2,setcount2] = React.useState(0);

    return (
        <>
        <h1><div style={{fontSize:'80px',textAlign:'center'}}>{count}</div></h1>

        <div style={{justifyContent:'center',display:'flex'}}>
           
            <button onClick={()=>setcount(count + 1)} style={{width:'140px', height:'50px',fontSize:'20px',margin:'10px',marginLeft:'auto',marginRight:'auto', display:'flex',fontSize:'1.5em',textAlign:'center',padding:'10px'}}>Increment</button>

            {/* <h1>{count2}</h1> */}
            <button onClick={()=>setcount(count - 1)} style={{width:'150px', height:'50px',fontSize:'20px',margin:'10px',marginLeft:'auto',marginRight:'auto', display:'flex',fontSize:'1.5em',textAlign:'center',padding:'10px'}}>Decrement</button>
        </div>
        </>
    );
}

export default Counter;