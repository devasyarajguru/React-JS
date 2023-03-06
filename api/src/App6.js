import React from 'react';

function App6(props) {

    const[data,setdata] = React.useState([]);

    React.useEffect(
        ()=>
        {
            fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setdata(data));
    }
    );

    return (
        <>
     
            {data.map((value)=>
                (
                    <table border={2}>
                        
                        <tr>
                            <td>{value.rating.rate}</td>
                            <td>{value.rating.count}</td>
                        </tr>
                    </table>
                ))}
        </>
    );
}

export default App6;