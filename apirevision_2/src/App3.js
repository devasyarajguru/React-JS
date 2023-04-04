import React from 'react';
import './external.css'

function App3(props) {

    const[data,setdata] = React.useState([]);

    React.useEffect(()=>
    {
        fetch('https://fakestoreapi.com/products')
        .then(response=> response.json())
        .then(data => setdata(data));
    })

    return (
            <table border={2}>
    
                <tr id='headline'>
                    <td><b>Items-ID</b></td>
                    <td><b>Title</b></td>
                    <td><b>Price</b></td>
                    <td><b>Image</b></td>
                </tr>
                
            {data.map((value)=>
            (   
                <tr id='content'>
                    <td>{value.id}</td>
                    <td>{value.title}</td>
                    <td>{value.price}</td>
                    <td><img src ={value.image} style={{height:'250px'}}></img></td>
                </tr>
            ))}
            </table>

    );
}

export default App3;