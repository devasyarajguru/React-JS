import React from 'react';
import './external.css';

function App2(props) {

    const[data,setdata] = React.useState([]);

    React.useEffect(()=>
    {
        fetch('https://dummyjson.com/quotes')
        .then(response => response.json())
        .then(data => setdata(data['quotes']));
        console.log(data);
    })

    return (
        <div id='li'>

                <h1>Quotes List</h1>
            {data.map((value)=>
            (
                <li>{value.quote}</li>
            ))}
            
        </div>
    );
}

export default App2;