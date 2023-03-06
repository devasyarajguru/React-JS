import React, { useEffect, useState } from 'react';

function App5(props) {

    const[data,setData] = React.useState([]);

    useEffect(
        () =>
        {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setData(data));
        }
    );

    return (
            <>
                {data.map(value=>
                    (
                        // <table>
                        //     <tr>
                        //         <td>{value.id}</td>
                        //     </tr>
                        // </table>

                        <ul>
                            <li>{value.id}</li>
                            <li style={{listStyleType:'square'}}><b>{value.name}</b></li>
                            <li>{value.username}</li>

                        </ul>
                    ))}        
            </>
    
    );
}

export default App5;